import React, { ComponentProps } from "react";

export type ButtonVariant = "primary" | "secondary" | "warning";
export type ButtonSize = "lg" | "md" | "sm" | "xs";

export const buttonBaseStyle = `
  tw:item-center
  tw:hover:cursor-pointer
  tw:aria-disabled:bg-mute
  tw:aria-disabled:pointer-events-none
`;

export const buttonVariantStyle: { [key in ButtonVariant]: string } = {
  primary: `
    tw:border-1 
    tw:border-transplant
    tw:bg-primary
    tw:text-white
    tw:hover:bg-white
    tw:hover:text-primary
    tw:hover:border-primary
  `,
  secondary: `
    tw:border-1 
    tw:border-transplant
    tw:bg-secondary
    tw:text-white
    tw:hover:bg-white
    tw:hover:text-secondary
    tw:hover:border-secondary
  `,
  warning: `
    tw:border-1 
    tw:border-transpalent
    tw:bg-white
    tw:text-warning
    tw:hover:bg-warning
    tw:hover:text-white
    tw:hover:border-white
  `,
};

export const buttonSizeStyle: { [key in ButtonSize]: string } = {
  lg: "tw:min-h-[calc(74/16*1rem)] tw:w-fit tw:p-6 tw:rounded-[calc(8/16*1rem)] tw:text-2xl",
  md: "tw:min-h-12 tw:w-fit tw:p-4 tw:rounded-[calc(8/16*1rem)] tw:text-lg",
  sm: "tw:min-h-12 tw:w-fit tw:p-[calc(12/16*1rem)] tw:rounded-[calc(8/16*1rem)] tw:text-sm",
  xs: "tw:min-h-8 tw:w-fit tw:p-[calc(10/16*1rem)] tw:rounded-[calc(6/16*1rem)] tw:text-xs",
};

export type ButtonProps = {
  className?: string;
  variant?: ButtonVariant;
  size: ButtonSize;
} & ComponentProps<"button">;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, variant = "primary", size, ...rest } = props;

  const classNames = `${buttonBaseStyle} ${buttonSizeStyle[size]} ${
    variant ? buttonVariantStyle[variant] : ""
  } ${className ?? ""}`;

  const handleDisabled = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  return (
    <button
      className={classNames}
      onClick={props["aria-disabled"] ? handleDisabled : props.onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
