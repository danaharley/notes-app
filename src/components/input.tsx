import React from "react";

import { nc } from "../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, ...props }, ref) => {
    return (
      <input
        type={type}
        className={nc(
          "rounded border text-zinc-500 outline-none placeholder:italic placeholder:text-zinc-400/50",
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
