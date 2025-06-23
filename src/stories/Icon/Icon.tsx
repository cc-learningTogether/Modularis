import React, { type SVGProps } from "react";
import type { IconType } from "../../types/icon-type";
import * as Icons from "../Icons";

export type IconProps = SVGProps<SVGSVGElement> & {
  icon: IconType;
  size: string;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  const Component = React.createElement(Icons[icon], props);

  return <span>{Component}</span>;
};
