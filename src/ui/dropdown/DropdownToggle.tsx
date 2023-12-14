"use client";

import { withForwardedRef } from "@/utils/hooks";
import { ReactNode } from "react";

export interface DropdownToggleProps {
  toggle?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  forwardedRef?: React.Ref<HTMLDivElement>;
}

const DropdownToggle = ({
  children,
  onClick,
  forwardedRef,
}: DropdownToggleProps) => {
  return (
    <div role="button" onClick={onClick} ref={forwardedRef}>
      {children}
    </div>
  );
};

DropdownToggle.isDropdownToggle = true;

export default withForwardedRef(DropdownToggle);
