import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const bannerVariants = cva(
  "flex items-center justify-between w-full rounded-[66px] transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-supreme-blue-500 text-white hover:bg-supreme-blue-700",
        primary:
          "bg-supreme-blue-600 text-white hover:bg-supreme-blue-700",
        secondary:
          "bg-supreme-blue-500 text-white hover:bg-supreme-blue-600",
        dark: "bg-supreme-blue-700 text-white hover:bg-supreme-blue-800",
      },
      size: {
        default: "px-8 py-[14px] h-[72px]",
        sm: "px-6 py-3 h-16",
        lg: "px-10 py-6 h-20",
        xl: "px-12 py-8 h-24",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  /**
   * The variant style of the banner.
   * @default "default"
   */
  variant?: "default" | "primary" | "secondary" | "dark"
  /**
   * The size of the banner.
   * @default "default"
   */
  size?: "default" | "sm" | "lg" | "xl"
  title: string;
  ctaText?: string;
  onCtaClick?: () => void;
  showCta?: boolean;
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      className,
      variant,
      size,
      title,
      ctaText = "Create Free Account",
      onCtaClick,
      showCta = true,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(bannerVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div className="flex-1">
          <p className={`text-${size} font-medium leading-relaxed`}>{title}</p>
        </div>

        {showCta && (
          <div className="ml-[10px]">
            <Button
              variant="secondary"
              size="md"
              onClick={onCtaClick}
              className="bg-white text-supreme-blue-700 border-white hover:bg-gray-50 hover:text-supreme-blue-800 transition-all duration-200"
            >
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    );
  }
);
Banner.displayName = "Banner";

export { Banner, bannerVariants };
