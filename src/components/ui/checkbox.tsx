import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    "checked" | "onCheckedChange"
  > & {
    externalState?: "checked" | "unchecked" | "indeterminate";
  }
>(({ className, externalState, ...props }, ref) => {
  const [state, setState] = React.useState<
    "checked" | "unchecked" | "indeterminate"
  >("unchecked");

  React.useEffect(() => {
    if (externalState) {
      setState(externalState);
    }
  }, [externalState]);

  const handleClick = () => {
    const nextState =
      state === "unchecked"
        ? "checked"
        : state === "checked"
        ? "indeterminate"
        : "unchecked";
    setState(nextState);
  };

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      checked={state === "checked"}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border bg-white relative",
        "transition-all duration-200 ease-out",
        // Default state
        "border-neutral-500",
        // Hover state
        "hover:border-[#4136D4] hover:bg-[#EDEBFD]",
        // Focus state
        "focus:outline-none focus:border-[#4136D4] focus:bg-white",
        // Disabled state
        "disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:border-neutral-300 disabled:hover:border-neutral-300 disabled:hover:bg-neutral-100",
        // Checked/Indeterminate states
        (state === "checked" || state === "indeterminate") && "bg-supreme-blue-50 border-[#4136D4]",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {/* Custom indicator that always shows based on our state */}
      <div className="absolute inset-0 flex items-center justify-center p-0.5">
        {state === "checked" && (
          <CheckIcon className="h-3 w-3 text-[#4136D4]" />
        )}
        {state === "indeterminate" && (
          <MinusIcon className="h-3 w-3 text-[#4136D4]" />
        )}
      </div>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
