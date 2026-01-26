import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorClassName?: string;
    showLabel?: boolean;
    labelPosition?: "bottom" | "right";
    title?: string;
    badge?: React.ReactNode;
  }
>(({ className, value, indicatorClassName, showLabel = false, labelPosition = "bottom", title, badge, ...props }, ref) => {
  const displayValue = value || 0;
  const percentValue = `${Math.round(displayValue)}%`;
  
  if (title || badge) {
    // Full progress bar with title and badge
    return (
      <div className={cn("flex gap-2 items-end", className)}>
        <div className="flex flex-1 flex-col gap-1 items-end">
          {(title || badge) && (
            <div className="flex items-center justify-between w-full">
              {title && (
                <p className="text-xs leading-4 text-neutral-900">
                  {title}
                </p>
              )}
              <div className="flex gap-1 items-center">
                {badge}
                {showLabel && (
                  <p className="text-xs leading-4 text-neutral-900">
                    {percentValue}
                  </p>
                )}
              </div>
            </div>
          )}
          <ProgressPrimitive.Root
            ref={ref}
            className={cn(
              "relative h-2 w-full overflow-hidden rounded-full bg-neutral-200"
            )}
            value={value}
          >
            <ProgressPrimitive.Indicator
              className={cn(
                "h-full rounded-full bg-[#4136D4] transition-all duration-500 ease-out",
                indicatorClassName
              )}
              style={{
                width: `${displayValue}%`,
              }}
            />
          </ProgressPrimitive.Root>
        </div>
        {showLabel && labelPosition === "right" && (
          <p className="text-xs leading-4 text-neutral-900">
            {percentValue}
          </p>
        )}
      </div>
    );
  }
  
  // Simple progress bar
  return (
    <div className={cn(
      "flex gap-[10px]",
      labelPosition === "bottom" && "flex-col",
      className
    )}>
      <div className="flex flex-col gap-[7px] pt-1 w-full">
        <ProgressPrimitive.Root
          ref={ref}
          className={cn(
            "relative h-2 w-full overflow-hidden rounded-full bg-neutral-200"
          )}
          value={value}
        >
          <ProgressPrimitive.Indicator
            className={cn(
              "h-full rounded-full bg-[#4136D4] transition-all",
              indicatorClassName
            )}
            style={{
              width: `${displayValue}%`,
            }}
          />
        </ProgressPrimitive.Root>
        {showLabel && labelPosition === "bottom" && (
          <p className="text-xs leading-4 text-neutral-900 text-right w-full">
            {percentValue}
          </p>
        )}
      </div>
      {showLabel && labelPosition === "right" && (
        <p className="text-xs leading-4 text-neutral-900">
          {percentValue}
        </p>
      )}
    </div>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
