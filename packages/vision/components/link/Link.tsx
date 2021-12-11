import React, { forwardRef, Props, useRef } from "react";
import cn from "classnames";
import { useHover } from "@react-aria/interactions";
import { useLink } from "@react-aria/link";
import { mergeProps } from "@react-aria/utils";
import { FocusRing } from "../focus-ring/FocusRing";

export type LinkProps = React.PropsWithChildren<{
  /** An HTML ID attribute that will be attached to the the rendered component. Useful for targeting it from tests */
  id?: string;
  /** The location this Link points to */
  href?: string;
  /** Controls if this link is disabled */
  isDisabled?: boolean;
  /** Controls if this link should open in a new tab */
  openInNewTab?: boolean;
}>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { id, children, href, isDisabled, openInNewTab }: LinkProps,
    forwardedRef
  ) => {
    const _ref = useRef<HTMLAnchorElement>(null);
    const ref = forwardedRef || _ref;
    const { linkProps, isPressed } = useLink(
      { isDisabled },
      ref as React.RefObject<HTMLAnchorElement>
    );
    const { hoverProps, isHovered } = useHover({ isDisabled });

    return (
      <FocusRing within>
        <a
          id={id}
          role="link"
          ref={ref}
          {...mergeProps(linkProps, hoverProps)}
          href={href}
          rel="noopener noreferrer"
          className={cn("vision-mx-1 vision-underline", {
            "vision-flex vision-justify-center vision-items-center vision-space-x-2":
              typeof children !== "string", // If "rich" children are provided, lay them out correctly
            "vision-text-gray-600 dark:vision-text-gray-400":
              !isHovered && !isDisabled,
            "vision-text-gray-700 dark:vision-text-gray-300": isHovered,
            "vision-text-gray-800 dark:vision-text-gray-600": isPressed,
            "vision-text-gray-400 dark:vision-text-gray-700": isDisabled,
            "vision-cursor-not-allowed": isDisabled,
          })}
          target={openInNewTab ? "_blank" : undefined}
        >
          {children}
        </a>
      </FocusRing>
    );
  }
);
