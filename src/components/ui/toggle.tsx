import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative",
  {
    variants: {
      variant: {
        default:
          "bg-white border border-slate-400 focus:ring-4 focus:ring-blue-500/20",
        checked:
          "bg-[#4136d4] border border-[#403A9A] focus:ring-4 focus:ring-blue-500/20",
        disabled:
          "bg-white border border-slate-400 opacity-50 focus:ring-4 focus:ring-blue-500/20",
        disabledChecked:
          "bg-[#4136d4] border border-[#403A9A] opacity-50 focus:ring-4 focus:ring-blue-500/20",
      },
      size: {
        sm: "w-8 h-4 p-0.5",
        md: "w-10 h-5 p-1",
        lg: "w-14 h-7 p-1.5",
      },
    },
    defaultVariants: {
      variant: "checked",
      size: "md",
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(
  (
    {
      className,
      variant,
      size = "md",
      pressed,
      defaultPressed,
      onPressedChange,
      ...props
    },
    ref
  ) => {
    // Use pressed prop or defaultPressed for checked state
    const isChecked = pressed ?? defaultPressed ?? false;

    // Determine the actual variant based on state
    const getVariant = () => {
      if (props.disabled) {
        return isChecked ? "disabledChecked" : "disabled";
      }

      return isChecked ? "checked" : "default";
    };

    // Get thumb color based on state
    const getThumbColor = () => {
      if (props.disabled) {
        return isChecked ? "bg-white" : "bg-slate-400";
      }
      return isChecked ? "bg-slate-200" : "bg-[#4136d4]";
    };

    return (
      <TogglePrimitive.Root
        ref={ref}
        className={cn(
          toggleVariants({ variant: getVariant(), size, className })
        )}
        pressed={pressed}
        defaultPressed={defaultPressed}
        onPressedChange={onPressedChange}
        {...props}
      >
        {/* Thumb */}
        <div
          className={cn(
            "absolute rounded-full transition-all duration-300",
            size === "sm" ? "w-3 h-3" : size === "md" ? "w-4 h-4" : "w-5 h-5",
            getThumbColor(),
            isChecked ? "right-0.5" : "left-0.5"
          )}
        />
      </TogglePrimitive.Root>
    );
  }
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
