"use client";

export interface DropdownItemProps {
  toggle?: boolean;
  children: React.ReactNode;
  onSelect?: () => void;
  closeDropdown?: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  onSelect,
  closeDropdown,
}) => {
  const handleSelect = () => {
    onSelect?.();
    closeDropdown?.();
  };

  return (
    <div
      className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
      onClick={handleSelect}
    >
      {children}
    </div>
  );
};

export default DropdownItem;
