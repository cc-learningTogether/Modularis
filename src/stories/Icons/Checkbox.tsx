import * as React from "react";
import type { SVGProps } from "react";

export const checkboxBaseStyle = `
  tw:hover:cursor-pointer
  tw:aria-disabled:bg-mute
  tw:aria-disabled:pointer-events-none
`;

export type CheckboxProps = {
  size: string;
  className?: string;
} & SVGProps<SVGSVGElement>;

const SvgCheckbox: React.FC<CheckboxProps> = (props) => {
  const { className, size, ...rest } = props;
  const classNames = `${checkboxBaseStyle} ${className ?? ""}`;

  console.log(classNames);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={classNames}
      {...rest}
    >
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z" />
    </svg>
  );
};

export default SvgCheckbox;
