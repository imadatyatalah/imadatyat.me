import React, { forwardRef } from "react";
import { useRouter } from "next/router";

import { RoughNotation } from "react-rough-notation";

// eslint-disable-next-line react/display-name
const NavLink = forwardRef(
  (
    { children, href, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ref: any
  ) => {
    const { asPath } = useRouter();

    const isCurrentRoute = asPath === href;

    return (
      <a ref={ref} href={href} {...rest}>
        <RoughNotation
          animationDuration={500}
          type="underline"
          iterations={1}
          strokeWidth={2}
          color="red"
          show={isCurrentRoute}
        >
          {children}
        </RoughNotation>
      </a>
    );
  }
);

export default NavLink;
