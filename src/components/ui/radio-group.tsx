import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border bg-white relative",
        "transition-all duration-200 ease-out",
        // Default state
        "border-neutral-500",
        // Hover state
        "hover:border-[#4136D4] hover:bg-[#EDEBFD]",
        // Focus state
        "focus:outline-none focus:border-[#4136D4] focus:bg-white",
        // Disabled state
        "disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:border-neutral-300 disabled:hover:border-neutral-300 disabled:hover:bg-neutral-100",
        // Checked state
        "data-[state=checked]:bg-supreme-blue-50 data-[state=checked]:border-[#4136D4]",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-[#4136D4]" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };

