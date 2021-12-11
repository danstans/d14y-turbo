import React, { ReactElement } from "react";
import {
  FocusRing as AriaFocusRing,
  FocusRingProps as AriaFocusRingProps,
} from "@react-aria/focus";

export type FocusRingProps = AriaFocusRingProps & {
  /** Element to draw the FocusRing around */
  children: ReactElement<any>;
};

export function FocusRing({ children, ...props }: FocusRingProps) {
  return (
    <AriaFocusRing
      {...props}
      focusRingClass="vision-ring-2 vision-ring-offset-2 vision-rounded-md vision-ring-offset-white dark:vision-ring-offset-gray-900 vision-ring-blue-400"
    >
      {children}
    </AriaFocusRing>
  );
}
