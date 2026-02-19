import * as React from "react";

import { cn } from "@/lib/utils";

const ContentBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
ContentBox.displayName = "ContentBox";

const ContentBoxHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-3 md:p-6", className)}
    {...props}
  />
));
ContentBoxHeader.displayName = "ContentBoxHeader";

const ContentBoxTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg md:text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
ContentBoxTitle.displayName = "ContentBoxTitle";

const ContentBoxDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
ContentBoxDescription.displayName = "ContentBoxDescription";

const ContentBoxContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-3 pt-0 md:p-6 md:pt-0", className)} {...props} />
));
ContentBoxContent.displayName = "ContentBoxContent";

const ContentBoxFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
ContentBoxFooter.displayName = "ContentBoxFooter";

export {
  ContentBox,
  ContentBoxHeader,
  ContentBoxFooter,
  ContentBoxTitle,
  ContentBoxDescription,
  ContentBoxContent,
};
