import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  state?: "default" | "active" | "error" | "disabled";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      required = false,
      hint,
      leftIcon,
      rightIcon,
      error,
      state,
      disabled,
      ...props
    },
    ref
  ) => {
    const isError = state === "error" || Boolean(error);
    const isActive = state === "active";
    const isDisabled = state === "disabled" || disabled;

    return (
      <div className="flex flex-col gap-2 items-start w-full">
        <div className="relative w-full">
          {label && (
            <label
              className={cn(
                "absolute -top-3 left-[10px] z-10 px-1 py-[1px] text-xs font-normal leading-4",
                isError && "text-destructive bg-background",
                isActive && "text-supreme-blue-800 bg-background",
                !isError && !isActive && "text-neutral-500 bg-background",
                isDisabled && "bg-neutral-200 text-neutral-500"
              )}
            >
              {label}
              {required && <span className="ml-0.5">*</span>}
            </label>
          )}

          <div
            className={cn(
              "relative flex items-center gap-2 rounded-md bg-white border",
              isError
                ? "border-destructive focus-within:ring-0"
                : isActive
                ? "border-supreme-blue-800 focus-within:ring-0"
                : isDisabled
                ? "border-neutral-300 bg-neutral-200"
                : "border-neutral-300 focus-within:ring-2 focus-within:ring-supreme-blue-500"
            )}
          >
            {leftIcon && (
              <div className="flex items-center ml-3 justify-center shrink-0 w-5 h-5">
                {React.isValidElement(leftIcon) &&
                  React.cloneElement(leftIcon as React.ReactElement<any>, {
                    className: cn(
                      "w-[20px] h-[20px]",
                      isError && "text-destructive",
                      !isError && "text-neutral-500",
                      (leftIcon as any).props?.className
                    ),
                  })}
                {!React.isValidElement(leftIcon) && leftIcon}
              </div>
            )}

            <input
              type={type}
              className={cn(
                "flex-1 text-sm min-w-0 p-3 h-auto rounded-lg bg-transparent border-0 text-sm leading-5 placeholder:text-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                className,
                leftIcon && "px-0",
                rightIcon && "px-0"
              )}
              ref={ref}
              disabled={isDisabled}
              {...props}
            />

            {rightIcon && (
              <div className="flex mr-3 items-center justify-center shrink-0 w-5 h-5">
                {React.isValidElement(rightIcon) &&
                  React.cloneElement(rightIcon as React.ReactElement<any>, {
                    className: cn(
                      "w-[20px] h-[20px]",
                      isError && "text-destructive",
                      !isError && "text-neutral-500",
                      (rightIcon as any).props?.className
                    ),
                  })}
                {!React.isValidElement(rightIcon) && rightIcon}
              </div>
            )}
          </div>
        </div>

        {hint && !isError && (
          <p className="text-xs leading-3 text-neutral-500">{hint}</p>
        )}

        {isError && (
          <p className="text-xs leading-3 text-destructive">
            {error || hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
