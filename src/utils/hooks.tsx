import React, { forwardRef } from "react";

export const withForwardedRef = <P extends object>(Component: React.ComponentType<P>) => {
  type RefType = P extends { forwardedRef?: infer R } ? R : never;
  return forwardRef<RefType, P>((props, ref) => <Component {...(props as P)} forwardedRef={ref} />);
};
