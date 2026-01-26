import * as React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export type StepperStepState = "active" | "default" | "done";

export type StepperStep = {
  title: React.ReactNode;
  step: StepperStepState;
  href?: string;
  onClick?: () => void;
};

export interface StepperProps
  extends Omit<React.ComponentPropsWithoutRef<"nav">, "children"> {
  steps: StepperStep[];
  /**
   * Shows the horizontal divider line under the stepper.
   * @default true
   */
  showDivider?: boolean;
  /**
   * Custom separator between steps.
   * Defaults to a chevron icon.
   */
  separator?: React.ReactNode;
}

const Stepper = React.forwardRef<React.ElementRef<"nav">, StepperProps>(
  ({ className, steps, showDivider = true, separator, ...props }, ref) => {
    const renderedSeparator =
      separator ?? (
        <ChevronRightIcon
          className="h-4 w-4 text-neutral-400"
          aria-hidden="true"
        />
      );

    return (
      <nav
        ref={ref}
        aria-label="Progress"
        className={cn("w-full", className)}
        {...props}
      >
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {steps.map((step, index) => {
            const isActive = step.step === "active";
            const isDone = step.step === "done";
            const isUpcoming = step.step === "default";

            const baseClasses =
              "inline-flex items-center rounded-md px-1 py-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-200";

            const stepClasses = cn(
              baseClasses,
              isActive && "text-supreme-blue-600 font-medium",
              isDone && "text-neutral-600 hover:text-supreme-blue-600",
              isUpcoming && "text-neutral-400"
            );

            const content = (
              <span className="min-w-0 truncate">{step.title}</span>
            );

            const node = step.href ? (
              <a
                href={step.href}
                className={stepClasses}
                aria-current={isActive ? "step" : undefined}
              >
                {content}
              </a>
            ) : step.onClick ? (
              <button
                type="button"
                className={cn(stepClasses, isUpcoming && "pointer-events-none")}
                onClick={isUpcoming ? undefined : step.onClick}
                aria-current={isActive ? "step" : undefined}
                aria-disabled={isUpcoming ? true : undefined}
              >
                {content}
              </button>
            ) : (
              <span
                className={stepClasses}
                aria-current={isActive ? "step" : undefined}
              >
                {content}
              </span>
            );

            return (
              <li key={index} className="flex min-w-0 items-center gap-2">
                {node}
                {index < steps.length - 1 && (
                  <span aria-hidden="true" className="shrink-0">
                    {renderedSeparator}
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        {showDivider && <div className="mt-4 h-px w-full bg-neutral-200" />}
      </nav>
    );
  }
);
Stepper.displayName = "Stepper";

export { Stepper };

