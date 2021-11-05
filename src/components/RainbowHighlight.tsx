// Source: https://github.com/delbaoliveira/website/blob/main/ui/RainbowHighlight.tsx

import React from "react";

import { RoughNotation } from "react-rough-notation";

export const COLORS = ["#c9184a", "#5a189a", "#005f73"];

type Props = {
  color: string;
  children: string;
};

const RainbowHighlight = ({ color, children }: Props) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};

export default RainbowHighlight;
