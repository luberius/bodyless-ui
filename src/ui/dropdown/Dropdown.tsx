"use client";

import React, {
  useState,
  cloneElement,
  ReactElement,
  useRef,
  useEffect,
  Children,
  isValidElement,
} from "react";
import { DropdownItemProps } from "./DropdownItem";
import { DropdownToggleProps } from "./DropdownToggle";

interface DropdownProps {
  children:
    | ReactElement<DropdownItemProps | DropdownToggleProps>
    | ReactElement<DropdownItemProps | DropdownToggleProps>[];
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({});
  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (!isOpen) {
      const buttonRect = buttonRef.current?.getBoundingClientRect();
      if (buttonRect) {
        const rightSpace = window.innerWidth - buttonRect.right;
        const menuShouldBeRightAligned = rightSpace < 200; // Adjust 200 based on your dropdown width
        setMenuPosition({
          right: menuShouldBeRightAligned ? 0 : undefined,
          left: menuShouldBeRightAligned ? undefined : 0,
        });
      }
    }

    setIsOpen(!isOpen);
  };

  const closeDropdown = () => setIsOpen(false);

  const renderToggle = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.props.toggle) {
        return React.cloneElement<any>(child, {
          onClick: toggleDropdown,
          forwardedRef: buttonRef,
        });
      }
      return null;
    });
  };

  const renderDropdownItems = () => {
    return Children.map(children, (child) => {
      if (isValidElement(child) && !child.props.toggle) {
        return cloneElement(child, { closeDropdown });
      }
      return null;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapePress);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {renderToggle()}
      {isOpen && (
        <div
          className="absolute mt-1 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800 shadow"
          style={{ ...menuPosition }}
        >
          {renderDropdownItems()}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
