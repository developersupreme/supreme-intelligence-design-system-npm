import * as React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export interface FavouriteProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  size?: "sm" | "md" | "lg";
}

const Favourite = React.forwardRef<HTMLButtonElement, FavouriteProps>(
  ({ className, active = false, size = "md", ...props }, ref) => {
    const iconSize = size === "sm" ? "w-4 h-4" : size === "md" ? "w-4 h-4" : "w-6 h-6";
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-center p-2 rounded-full border transition-all duration-200",
          active
            ? "bg-[#4136D4] border-[#4136D4]"
            : "bg-white border-neutral-300 hover:bg-supreme-blue-50 hover:border-supreme-blue-200",
          className
        )}
        {...props}
      >
        <div className={cn("flex items-center justify-center size-full", iconSize)}>
          {active ? (
            <HeartSolidIcon className={cn(iconSize, "text-white")} />
          ) : (
            <HeartIcon className={cn(iconSize, "text-neutral-500")} />
          )}
        </div>
      </button>
    );
  }
);
Favourite.displayName = "Favourite";

export { Favourite };

