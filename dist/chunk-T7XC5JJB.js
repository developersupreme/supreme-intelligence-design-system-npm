"use client";
import {
  Button,
  buttonVariants
} from "./chunk-NP4KP3QH.js";
import {
  AIIcon,
  PersonaIcon,
  cn
} from "./chunk-WJVRHA4Y.js";

// src/components/ui/accordion.tsx
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { jsx, jsxs } from "react/jsx-runtime";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border border-neutral-200 bg-slate-100 rounded-lg", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between p-4 text-lg font-normal text-neutral-950 opacity-80 transition-all [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDownIcon, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-neutral-600 px-4 text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/ui/badge.tsx
import * as React2 from "react";
import { cva } from "class-variance-authority";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-normal transition-colors",
  {
    variants: {
      variant: {
        foundation: "bg-gray-100 text-gray-800",
        default: "bg-gray-100 text-gray-800",
        slate: "bg-slate-100 text-slate-800",
        zinc: "bg-zinc-100 text-zinc-800",
        gray: "bg-gray-100 text-gray-800",
        red: "bg-red-100 text-red-800",
        orange: "bg-orange-100 text-orange-800",
        amber: "bg-amber-100 text-amber-800",
        yellow: "bg-yellow-100 text-yellow-800",
        lime: "bg-lime-100 text-lime-800",
        green: "bg-green-100 text-green-800",
        cyan: "bg-cyan-100 text-cyan-800",
        sky: "bg-sky-100 text-sky-800",
        blue: "bg-blue-100 text-blue-800",
        indigo: "bg-indigo-100 text-indigo-800",
        violet: "bg-violet-100 text-violet-800",
        purple: "bg-purple-100 text-purple-800",
        pink: "bg-pink-100 text-pink-800"
      }
    }
  }
);
var Badge = React2.forwardRef(
  ({
    className,
    variant,
    showDot,
    showRemove,
    onRemove,
    // Legacy props for backward compatibility
    dismissible,
    onDismiss,
    dot,
    children,
    size = "sm",
    ...props
  }, ref) => {
    const shouldShowDot = showDot ?? dot ?? false;
    const shouldShowRemove = showRemove ?? dismissible ?? false;
    const handleRemove = onRemove ?? onDismiss;
    return /* @__PURE__ */ jsxs2(
      "div",
      {
        ref,
        className: cn(badgeVariants({ variant }), className),
        ...props,
        children: [
          shouldShowDot && /* @__PURE__ */ jsx2("div", { className: cn(
            "rounded-full bg-current",
            size === "sm" && "w-1.5 h-1.5",
            size === "md" && "w-2 h-2",
            size === "lg" && "w-2.5 h-2.5"
          ) }),
          /* @__PURE__ */ jsx2("span", { children }),
          shouldShowRemove && /* @__PURE__ */ jsx2(
            "button",
            {
              type: "button",
              onClick: handleRemove,
              className: cn(
                "rounded-full border flex items-center justify-center hover:bg-current/10 transition-colors",
                size === "sm" && "w-3.5 h-3.5 ml-0.5",
                size === "md" && "w-4 h-4 ml-0.5",
                size === "lg" && "w-5 h-5 ml-1",
                variant === "slate" && "border-slate-300",
                variant === "zinc" && "border-zinc-300",
                variant === "gray" && "border-gray-300",
                variant === "red" && "border-red-300",
                variant === "orange" && "border-orange-300",
                variant === "amber" && "border-amber-300",
                variant === "yellow" && "border-yellow-300",
                variant === "lime" && "border-lime-300",
                variant === "green" && "border-green-300",
                variant === "cyan" && "border-cyan-300",
                variant === "sky" && "border-sky-300",
                variant === "blue" && "border-blue-300",
                variant === "indigo" && "border-indigo-300",
                variant === "violet" && "border-violet-300",
                variant === "purple" && "border-purple-300",
                variant === "pink" && "border-pink-300",
                (!variant || variant === "foundation" || variant === "default") && "border-gray-300"
              ),
              children: /* @__PURE__ */ jsx2(XMarkIcon, { className: cn(
                size === "sm" && "w-2.5 h-2.5",
                size === "md" && "w-3 h-3",
                size === "lg" && "w-4 h-4"
              ) })
            }
          )
        ]
      }
    );
  }
);
Badge.displayName = "Badge";

// src/components/ui/banner.tsx
import * as React3 from "react";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var bannerVariants = cva2(
  "flex items-center justify-between w-full rounded-[66px] transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-supreme-blue-500 text-white hover:bg-supreme-blue-700",
        primary: "bg-supreme-blue-600 text-white hover:bg-supreme-blue-700",
        secondary: "bg-supreme-blue-500 text-white hover:bg-supreme-blue-600",
        dark: "bg-supreme-blue-700 text-white hover:bg-supreme-blue-800"
      },
      size: {
        default: "px-8 py-[14px] h-[72px]",
        sm: "px-6 py-3 h-16",
        lg: "px-10 py-6 h-20",
        xl: "px-12 py-8 h-24"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Banner = React3.forwardRef(
  ({
    className,
    variant,
    size,
    title,
    ctaText = "Create Free Account",
    onCtaClick,
    showCta = true,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs3(
      "div",
      {
        className: cn(bannerVariants({ variant, size, className })),
        ref,
        ...props,
        children: [
          /* @__PURE__ */ jsx3("div", { className: "flex-1", children: /* @__PURE__ */ jsx3("p", { className: `text-${size} font-medium leading-relaxed`, children: title }) }),
          showCta && /* @__PURE__ */ jsx3("div", { className: "ml-[10px]", children: /* @__PURE__ */ jsx3(
            Button,
            {
              variant: "secondary",
              size: "md",
              onClick: onCtaClick,
              className: "bg-white text-supreme-blue-700 border-white hover:bg-gray-50 hover:text-supreme-blue-800 transition-all duration-200",
              children: ctaText
            }
          ) })
        ]
      }
    );
  }
);
Banner.displayName = "Banner";

// src/components/ui/breadcrumb.tsx
import * as React4 from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  ChevronRightIcon,
  EllipsisHorizontalIcon
} from "@heroicons/react/24/outline";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var Breadcrumb = React4.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx4("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  "ol",
  {
    ref,
    className: cn(
      "flex flex-wrap items-center gap-2 break-words text-xs text-neutral-600 opacity-80 sm:gap-2.5",
      className
    ),
    ...props
  }
));
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  "li",
  {
    ref,
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React4.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx4(
    Comp,
    {
      ref,
      className: cn(
        "transition-colors hover:text-foreground text-xs leading-4 font-normal text-neutral-600 opacity-80",
        className
      ),
      ...props
    }
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  "span",
  {
    ref,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: cn(
      "text-xs leading-4 font-normal text-neutral-600 opacity-80",
      className
    ),
    ...props
  }
));
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ jsx4(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:size-2 text-neutral-400", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsx4(ChevronRightIcon, { className: "w-2 h-2" })
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs4(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx4(EllipsisHorizontalIcon, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx4("span", { className: "sr-only", children: "More" })
    ]
  }
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

// src/components/ui/progress.tsx
import * as React5 from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var Progress = React5.forwardRef(({ className, value, indicatorClassName, showLabel = false, labelPosition = "bottom", title, badge, ...props }, ref) => {
  const displayValue = value || 0;
  const percentValue = `${Math.round(displayValue)}%`;
  if (title || badge) {
    return /* @__PURE__ */ jsxs5("div", { className: cn("flex gap-2 items-end", className), children: [
      /* @__PURE__ */ jsxs5("div", { className: "flex flex-1 flex-col gap-1 items-end", children: [
        (title || badge) && /* @__PURE__ */ jsxs5("div", { className: "flex items-center justify-between w-full", children: [
          title && /* @__PURE__ */ jsx5("p", { className: "text-xs leading-4 text-neutral-900", children: title }),
          /* @__PURE__ */ jsxs5("div", { className: "flex gap-1 items-center", children: [
            badge,
            showLabel && /* @__PURE__ */ jsx5("p", { className: "text-xs leading-4 text-neutral-900", children: percentValue })
          ] })
        ] }),
        /* @__PURE__ */ jsx5(
          ProgressPrimitive.Root,
          {
            ref,
            className: cn(
              "relative h-2 w-full overflow-hidden rounded-full bg-neutral-200"
            ),
            value,
            children: /* @__PURE__ */ jsx5(
              ProgressPrimitive.Indicator,
              {
                className: cn(
                  "h-full rounded-full bg-[#4136D4] transition-all duration-500 ease-out",
                  indicatorClassName
                ),
                style: {
                  width: `${displayValue}%`
                }
              }
            )
          }
        )
      ] }),
      showLabel && labelPosition === "right" && /* @__PURE__ */ jsx5("p", { className: "text-xs leading-4 text-neutral-900", children: percentValue })
    ] });
  }
  return /* @__PURE__ */ jsxs5("div", { className: cn(
    "flex gap-[10px]",
    labelPosition === "bottom" && "flex-col",
    className
  ), children: [
    /* @__PURE__ */ jsxs5("div", { className: "flex flex-col gap-[7px] pt-1 w-full", children: [
      /* @__PURE__ */ jsx5(
        ProgressPrimitive.Root,
        {
          ref,
          className: cn(
            "relative h-2 w-full overflow-hidden rounded-full bg-neutral-200"
          ),
          value,
          children: /* @__PURE__ */ jsx5(
            ProgressPrimitive.Indicator,
            {
              className: cn(
                "h-full rounded-full bg-[#4136D4] transition-all",
                indicatorClassName
              ),
              style: {
                width: `${displayValue}%`
              }
            }
          )
        }
      ),
      showLabel && labelPosition === "bottom" && /* @__PURE__ */ jsx5("p", { className: "text-xs leading-4 text-neutral-900 text-right w-full", children: percentValue })
    ] }),
    showLabel && labelPosition === "right" && /* @__PURE__ */ jsx5("p", { className: "text-xs leading-4 text-neutral-900", children: percentValue })
  ] });
});
Progress.displayName = ProgressPrimitive.Root.displayName;

// src/components/ui/card.tsx
import * as React6 from "react";
import {
  ArrowTrendingUpIcon,
  DocumentIcon,
  PencilSquareIcon,
  SparklesIcon,
  UsersIcon
} from "@heroicons/react/24/outline";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var AnnouncementCard = React6.forwardRef(({ className, title, author, date, content, badgeText, ...props }, ref) => {
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      ref,
      className: cn(
        "bg-white rounded-xl border border-slate-300 p-6 w-[504px] relative hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      ),
      tabIndex: 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxs6("div", { className: "flex flex-col gap-2.5 items-start", children: [
          /* @__PURE__ */ jsx6("h3", { className: cn("text-lg font-semibold text-black leading-7 whitespace-pre-wrap", props.titleClassName), children: title }),
          (author || date) && /* @__PURE__ */ jsxs6("div", { className: "flex gap-2.5 items-center", children: [
            author && /* @__PURE__ */ jsx6("span", { className: cn("text-xs font-normal text-neutral-500 leading-4", props.authorClassName), children: author }),
            author && date && /* @__PURE__ */ jsx6("span", { className: "text-xs text-neutral-500", children: "|" }),
            date && /* @__PURE__ */ jsx6("span", { className: cn("text-xs font-normal text-neutral-500 leading-4", props.dateClassName), children: date })
          ] }),
          /* @__PURE__ */ jsx6("p", { className: cn("text-base font-normal text-neutral-800 leading-6 w-full whitespace-pre-wrap", props.contentClassName), children: content })
        ] }),
        badgeText && /* @__PURE__ */ jsx6("div", { className: "absolute top-7 right-5", children: /* @__PURE__ */ jsx6(Badge, { variant: "default", className: cn("text-gray-600 text-xs", props.badgeClassName), children: badgeText }) })
      ]
    }
  );
});
AnnouncementCard.displayName = "AnnouncementCard";
var InfoCard = React6.forwardRef(({ className, showIcon = true, ...props }, ref) => {
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      ref,
      className: cn(
        "bg-white rounded-xl max-w-[337px] border border-neutral-300 p-6 relative transition-all duration-200 hover:shadow-lg focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      ),
      tabIndex: 0,
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx6("div", { className: "absolute top-6 right-6", children: props.icon || /* @__PURE__ */ jsx6(SparklesIcon, { className: "w-[18px] h-[18px]" }) }),
        /* @__PURE__ */ jsxs6("div", { className: cn(showIcon && "pr-8"), children: [
          props.subtitle && /* @__PURE__ */ jsx6("p", { className: cn("text-lg font-normal text-neutral-700 mb-2", props.subtitleClassName), children: props.subtitle }),
          props.title && /* @__PURE__ */ jsx6("h3", { className: cn("text-2xl font-semibold text-neutral-800 mb-1", props.titleClassName), children: props.title }),
          props.description && /* @__PURE__ */ jsx6("p", { className: cn("text-base font-normal text-neutral-600 leading-6", props.descriptionClassName), children: props.description })
        ] })
      ]
    }
  );
});
InfoCard.displayName = "InfoCard";
var IconCard = React6.forwardRef(({ className, title, value, showLeftIcon = true, showRightIcon = true, leftIcon, rightIcon, ...props }, ref) => {
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      ref,
      className: cn(
        "flex items-center justify-between bg-white rounded-xl border border-slate-300 p-6 w-[379px] hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      ),
      tabIndex: 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxs6("div", { className: "flex gap-3 items-center", children: [
          showLeftIcon && /* @__PURE__ */ jsx6("div", { className: "flex-shrink-0", children: leftIcon || /* @__PURE__ */ jsx6(ArrowTrendingUpIcon, { className: "w-[25px] h-[25px] text-neutral-800" }) }),
          /* @__PURE__ */ jsxs6("div", { className: "flex flex-col gap-1 items-start whitespace-nowrap", children: [
            title && /* @__PURE__ */ jsx6("h3", { className: cn("text-base font-normal text-neutral-600 leading-6", props.titleClassName), children: title }),
            value && /* @__PURE__ */ jsx6("div", { className: "text-2xl font-semibold text-neutral-800 leading-8", children: value })
          ] })
        ] }),
        showRightIcon && /* @__PURE__ */ jsx6("div", { className: "flex-shrink-0", children: rightIcon || /* @__PURE__ */ jsx6(UsersIcon, { className: "w-[35px] h-[35px] text-supreme-blue-700" }) })
      ]
    }
  );
});
IconCard.displayName = "IconCard";
var MessageAngle = React6.forwardRef(({ className, title, description, children, ...props }, ref) => /* @__PURE__ */ jsxs6(
  "div",
  {
    ref,
    className: cn(
      "bg-white rounded-md p-4 text-black max-w-[232px]",
      className
    ),
    ...props,
    children: [
      title && /* @__PURE__ */ jsx6("h3", { className: cn("text-base font-normal mb-3 text-neutral-600", props.titleClassName), children: title }),
      description && /* @__PURE__ */ jsx6("p", { className: cn("text-xs text-neutral-600 leading-relaxed", props.descriptionClassName), children: description }),
      children
    ]
  }
));
MessageAngle.displayName = "MessageAngle";
var MessageCard = React6.forwardRef(
  ({
    className,
    headerTitle,
    mainContent,
    nestedTitle,
    nestedContent,
    showIcon = true,
    ...props
  }, ref) => /* @__PURE__ */ jsxs6(
    "div",
    {
      ref,
      className: cn(
        "bg-white rounded-xl border border-neutral-300 p-6 hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none relative",
        className
      ),
      tabIndex: 0,
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx6("div", { className: "absolute top-6 right-6", children: props.icon || /* @__PURE__ */ jsx6(PencilSquareIcon, { className: "w-[18px] h-[18px] text-neutral-600" }) }),
        /* @__PURE__ */ jsxs6("div", { className: "flex flex-col gap-2.5 items-start", children: [
          /* @__PURE__ */ jsxs6("div", { className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ jsx6("div", { className: "w-2.5 h-2.5 bg-supreme-blue-300 rounded-full" }),
            /* @__PURE__ */ jsx6("h3", { className: cn("text-lg font-semibold text-supreme-blue-800 leading-7 whitespace-nowrap", props.headerTitleClassName), children: headerTitle })
          ] }),
          /* @__PURE__ */ jsx6("p", { className: cn("text-xs font-normal text-neutral-600 leading-4 w-full whitespace-pre-wrap", props.mainTitleClassName), children: mainContent }),
          /* @__PURE__ */ jsx6(MessageAngle, { title: nestedTitle, description: nestedContent, titleClassName: props.nestedTitleClassName, descriptionClassName: props.nestedContentClassName })
        ] })
      ]
    }
  )
);
MessageCard.displayName = "MessageCard";
var HighlightCard = React6.forwardRef(({ className, value, title, subtitle, showIcon = true, ...props }, ref) => /* @__PURE__ */ jsxs6(
  "div",
  {
    ref,
    className: cn(
      "flex gap-3.5 items-start bg-white rounded-xl border border-slate-300 p-6 hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
      className
    ),
    tabIndex: 0,
    ...props,
    children: [
      showIcon && /* @__PURE__ */ jsx6("div", { className: "bg-supreme-blue-50 flex items-center justify-center p-2.5 rounded-full flex-shrink-0", children: props.icon || /* @__PURE__ */ jsx6(ArrowTrendingUpIcon, { className: "w-[25px] h-[25px] text-neutral-800" }) }),
      /* @__PURE__ */ jsxs6("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxs6("div", { className: cn("text-3xl font-semibold text-neutral-800 leading-9 whitespace-nowrap", props.valueClassName), children: [
          value,
          "%"
        ] }),
        /* @__PURE__ */ jsx6("h3", { className: cn("text-base font-semibold text-neutral-600 leading-6", props.titleClassName), children: title }),
        subtitle && /* @__PURE__ */ jsx6("p", { className: cn("text-base font-normal text-neutral-600 leading-6", props.subtitleClassName), children: subtitle })
      ] })
    ]
  }
));
HighlightCard.displayName = "HighlightCard";
var HighlightCTACard = React6.forwardRef(({ className, title, value, description, icon, ctaText, onCtaClick, showIcon = true, showDescription = true, showAction = false, ...props }, ref) => /* @__PURE__ */ jsxs6(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl p-6 flex flex-col gap-3.5 items-start justify-center hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
      className
    ),
    ...props,
    tabIndex: 0,
    children: [
      /* @__PURE__ */ jsxs6("div", { className: "flex gap-3 items-center", children: [
        showIcon && icon ? /* @__PURE__ */ jsx6("div", { className: "text-supreme-blue-900 w-6 h-6 flex items-center justify-center", children: icon }) : /* @__PURE__ */ jsx6("div", { className: "bg-white flex items-center justify-center p-2.5 rounded-full flex-shrink-0", children: /* @__PURE__ */ jsx6(ArrowTrendingUpIcon, { className: "w-[25px] h-[25px] text-supreme-blue-900" }) }),
        title && /* @__PURE__ */ jsx6("h3", { className: cn("text-2xl font-semibold text-supreme-blue-900 leading-8 whitespace-pre-wrap", props.titleClassName), children: title })
      ] }),
      value && /* @__PURE__ */ jsx6("div", { className: cn("text-4xl font-bold text-supreme-blue-900 leading-10 whitespace-nowrap", props.valueClassName), children: value }),
      showDescription && /* @__PURE__ */ jsx6("p", { className: cn("text-base font-normal text-neutral-600 leading-6 w-full whitespace-pre-wrap", props.descriptionClassName), children: description }),
      showAction && /* @__PURE__ */ jsx6(
        "button",
        {
          onClick: onCtaClick,
          className: "text-supreme-blue-900 font-medium text-sm hover:underline cursor-pointer",
          children: ctaText || "See More Details"
        }
      )
    ]
  }
));
HighlightCTACard.displayName = "HighlightCTACard";
var HowItWorksCard = React6.forwardRef(({ className, stepNumber, title, description, type = "numbers", icon, ...props }, ref) => /* @__PURE__ */ jsxs6(
  "div",
  {
    ref,
    className: cn(
      "flex flex-col gap-2.5 items-center w-[233px] border border-neutral-300 p-6 rounded-xl hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxs6("div", { className: "flex flex-col gap-3.5 items-center justify-center shrink-0 w-full", children: [
        /* @__PURE__ */ jsx6("div", { className: "bg-supreme-blue-50 flex items-center justify-center p-2.5 rounded-full shrink-0 size-[41px]", children: type === "icons" && icon ? /* @__PURE__ */ jsx6("div", { className: "size-6 flex items-center justify-center", children: icon }) : /* @__PURE__ */ jsx6("span", { className: "text-[#4136d4] text-lg font-bold leading-7 text-center w-full", children: stepNumber || 1 }) }),
        /* @__PURE__ */ jsx6("h3", { className: cn("text-xl font-normal text-black text-center leading-7", props.titleClassName), children: title })
      ] }),
      /* @__PURE__ */ jsx6("p", { className: cn("text-base font-normal text-neutral-600 text-center leading-6 w-full whitespace-pre-wrap", props.descriptionClassName), children: description })
    ]
  }
));
HowItWorksCard.displayName = "HowItWorksCard";
var SingleIconCard = React6.forwardRef(({ className, title, description, titleClassName, descriptionClassName, icon, ...props }, ref) => /* @__PURE__ */ jsxs6(
  "div",
  {
    ref,
    className: cn(
      "bg-white rounded-2xl p-5 flex flex-col items-center gap-5 hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
      className
    ),
    tabIndex: 0,
    ...props,
    children: [
      icon || /* @__PURE__ */ jsx6(UsersIcon, { className: "w-[60px] h-[60px] text-neutral-900" }),
      /* @__PURE__ */ jsxs6("div", { className: "flex flex-col gap-1.5 items-start text-center w-full", children: [
        /* @__PURE__ */ jsx6("h3", { className: cn("text-lg font-semibold text-neutral-900 w-full leading-7", titleClassName), children: title }),
        description && /* @__PURE__ */ jsx6("p", { className: cn("text-base font-normal text-neutral-600 w-full leading-6", descriptionClassName), children: description })
      ] })
    ]
  }
));
SingleIconCard.displayName = "SingleIconCard";
var ContentTypeCard = React6.forwardRef(({ className, title, description, icon, variant = "default", ...props }, ref) => {
  const baseClasses = "flex flex-col gap-2.5 items-start rounded-lg";
  const variantClasses = {
    default: "bg-white border border-neutral-300 p-4",
    selected: "bg-supreme-blue-50 border-2 border-supreme-blue-300 p-4",
    hover: "bg-white border border-neutral-400 p-4",
    ghost: "gap-2.5"
  };
  return /* @__PURE__ */ jsx6(
    "div",
    {
      ref,
      className: cn(
        baseClasses,
        variantClasses[variant],
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxs6("div", { className: "flex gap-2.5 items-start relative shrink-0 w-full", children: [
        /* @__PURE__ */ jsx6("div", { className: "size-[35px] flex items-center justify-center shrink-0", children: icon || /* @__PURE__ */ jsx6(DocumentIcon, { className: "w-[35px] h-[35px] text-supreme-blue-700" }) }),
        /* @__PURE__ */ jsxs6("div", { className: "flex flex-1 flex-col gap-1 items-start leading-6 min-w-0 whitespace-pre-wrap", children: [
          /* @__PURE__ */ jsx6("p", { className: cn("text-lg font-semibold text-neutral-900 w-full", props.titleClassName), children: title }),
          /* @__PURE__ */ jsx6("p", { className: cn("text-base font-normal text-neutral-600 w-full", props.descriptionClassName), children: description })
        ] })
      ] })
    }
  );
});
ContentTypeCard.displayName = "ContentTypeCard";
var CardWithProgress = React6.forwardRef(({ className, title, description, progressItems, ...props }, ref) => /* @__PURE__ */ jsxs6(
  "div",
  {
    ref,
    className: cn(
      "bg-white border border-slate-300 rounded-xl p-6 w-[481px] flex flex-col gap-2.5 items-start",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxs6("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ jsx6(ArrowTrendingUpIcon, { className: "w-[25px] h-[25px] text-neutral-800" }),
        /* @__PURE__ */ jsx6("h3", { className: cn("text-xl font-bold text-supreme-blue-900 leading-7 whitespace-pre-wrap w-[258px]", props.titleClassName), children: title })
      ] }),
      /* @__PURE__ */ jsx6("p", { className: cn("text-base font-normal text-neutral-600 leading-6 w-full whitespace-pre-wrap", props.descriptionClassName), children: description }),
      /* @__PURE__ */ jsx6("div", { className: "flex flex-col gap-2.5 w-full", children: progressItems.map((item, index) => /* @__PURE__ */ jsxs6("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxs6("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx6("span", { className: "text-xs font-normal text-neutral-600", children: item.label }),
          item.badge && /* @__PURE__ */ jsx6(Badge, { variant: "default", className: "text-gray-600 text-xs", children: item.badge })
        ] }),
        /* @__PURE__ */ jsx6(Progress, { value: item.value, className: "h-2", indicatorClassName: "bg-supreme-blue-600" })
      ] }, index)) })
    ]
  }
));
CardWithProgress.displayName = "CardWithProgress";
var CommonCard = React6.forwardRef(({
  className,
  title,
  description,
  icon,
  footerText,
  footerAction,
  headerClassName,
  titleClassName,
  descriptionClassName,
  footerClassName,
  footerTextClassName,
  badge,
  disabled,
  ...props
}, ref) => /* @__PURE__ */ jsxs6(
  "div",
  {
    ref,
    className: cn(
      "bg-white rounded-xl border border-neutral-300 p-6 hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-default outline-none flex flex-col",
      disabled && "opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxs6("div", { className: cn("flex items-center gap-3", headerClassName), children: [
        icon && /* @__PURE__ */ jsx6("div", { className: "flex-shrink-0", children: icon }),
        /* @__PURE__ */ jsx6("h3", { className: cn("text-2xl font-semibold text-neutral-800", titleClassName), children: title }),
        badge && /* @__PURE__ */ jsx6(Badge, { variant: "default", className: "text-gray-600 text-xs text-center", children: badge })
      ] }),
      /* @__PURE__ */ jsx6("div", { className: cn("flex-1"), children: /* @__PURE__ */ jsx6("p", { className: cn("text-base font-normal text-neutral-600 leading-6", descriptionClassName), children: description }) }),
      (footerText || footerAction) && /* @__PURE__ */ jsxs6("div", { className: cn("flex items-center gap-2", footerClassName), children: [
        footerAction,
        footerText && /* @__PURE__ */ jsx6("span", { className: cn("text-base font-normal text-neutral-600", footerTextClassName), children: footerText })
      ] })
    ]
  }
));
CommonCard.displayName = "CommonCard";

// src/components/ui/checkbox.tsx
import * as React7 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var Checkbox = React7.forwardRef(({ className, externalState, ...props }, ref) => {
  const [state, setState] = React7.useState("unchecked");
  React7.useEffect(() => {
    if (externalState) {
      setState(externalState);
    }
  }, [externalState]);
  const handleClick = () => {
    const nextState = state === "unchecked" ? "checked" : state === "checked" ? "indeterminate" : "unchecked";
    setState(nextState);
  };
  return /* @__PURE__ */ jsx7(
    CheckboxPrimitive.Root,
    {
      ref,
      checked: state === "checked",
      className: cn(
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
      ),
      onClick: handleClick,
      ...props,
      children: /* @__PURE__ */ jsxs7("div", { className: "absolute inset-0 flex items-center justify-center p-0.5", children: [
        state === "checked" && /* @__PURE__ */ jsx7(CheckIcon, { className: "h-3 w-3 text-[#4136D4]" }),
        state === "indeterminate" && /* @__PURE__ */ jsx7(MinusIcon, { className: "h-3 w-3 text-[#4136D4]" })
      ] })
    }
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/ui/contentbox.tsx
import * as React8 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var ContentBox = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
ContentBox.displayName = "ContentBox";
var ContentBoxHeader = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-3 md:p-6", className),
    ...props
  }
));
ContentBoxHeader.displayName = "ContentBoxHeader";
var ContentBoxTitle = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  "h3",
  {
    ref,
    className: cn(
      "text-lg md:text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
ContentBoxTitle.displayName = "ContentBoxTitle";
var ContentBoxDescription = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
ContentBoxDescription.displayName = "ContentBoxDescription";
var ContentBoxContent = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8("div", { ref, className: cn("p-3 pt-0 md:p-6 md:pt-0", className), ...props }));
ContentBoxContent.displayName = "ContentBoxContent";
var ContentBoxFooter = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
ContentBoxFooter.displayName = "ContentBoxFooter";

// src/components/ui/input.tsx
import * as React9 from "react";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var Input = React9.forwardRef(
  ({
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
  }, ref) => {
    const isError = state === "error" || Boolean(error);
    const isActive = state === "active";
    const isDisabled = state === "disabled" || disabled;
    return /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-2 items-start w-full", children: [
      /* @__PURE__ */ jsxs8("div", { className: "relative w-full", children: [
        label && /* @__PURE__ */ jsxs8(
          "label",
          {
            className: cn(
              "absolute -top-3 left-[10px] z-10 px-1 py-[1px] text-xs font-normal leading-4",
              isError && "text-destructive bg-background",
              isActive && "text-supreme-blue-800 bg-background",
              !isError && !isActive && "text-neutral-500 bg-background",
              isDisabled && "bg-neutral-200 text-neutral-500"
            ),
            children: [
              label,
              required && /* @__PURE__ */ jsx9("span", { className: "ml-0.5", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs8(
          "div",
          {
            className: cn(
              "relative flex items-center gap-2 rounded-md bg-white border",
              isError ? "border-destructive focus-within:ring-0" : isActive ? "border-supreme-blue-800 focus-within:ring-0" : isDisabled ? "border-neutral-300 bg-neutral-200" : "border-neutral-300 focus-within:ring-2 focus-within:ring-supreme-blue-500"
            ),
            children: [
              leftIcon && /* @__PURE__ */ jsxs8("div", { className: "flex items-center ml-3 justify-center shrink-0 w-5 h-5", children: [
                React9.isValidElement(leftIcon) && React9.cloneElement(leftIcon, {
                  className: cn(
                    "w-[20px] h-[20px]",
                    isError && "text-destructive",
                    !isError && "text-neutral-500",
                    leftIcon.props?.className
                  )
                }),
                !React9.isValidElement(leftIcon) && leftIcon
              ] }),
              /* @__PURE__ */ jsx9(
                "input",
                {
                  type,
                  className: cn(
                    "flex-1 text-sm min-w-0 p-3 h-auto rounded-lg bg-transparent border-0 text-sm leading-5 placeholder:text-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                    className,
                    leftIcon && "px-0",
                    rightIcon && "px-0"
                  ),
                  ref,
                  disabled: isDisabled,
                  ...props
                }
              ),
              rightIcon && /* @__PURE__ */ jsxs8("div", { className: "flex mr-3 items-center justify-center shrink-0 w-5 h-5", children: [
                React9.isValidElement(rightIcon) && React9.cloneElement(rightIcon, {
                  className: cn(
                    "w-[20px] h-[20px]",
                    isError && "text-destructive",
                    !isError && "text-neutral-500",
                    rightIcon.props?.className
                  )
                }),
                !React9.isValidElement(rightIcon) && rightIcon
              ] })
            ]
          }
        )
      ] }),
      hint && !isError && /* @__PURE__ */ jsx9("p", { className: "text-xs leading-3 text-neutral-500", children: hint }),
      isError && /* @__PURE__ */ jsx9("p", { className: "text-xs leading-3 text-destructive", children: error || hint })
    ] });
  }
);
Input.displayName = "Input";

// src/components/ui/logo.tsx
import * as React10 from "react";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var CurieAiOriginalIcon = React10.forwardRef(({ className, viewpoint, ...props }, ref) => /* @__PURE__ */ jsxs9(
  "svg",
  {
    ref,
    width: "95",
    height: "95",
    viewBox: viewpoint || "0 0 95 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx10("g", { filter: "url(#filter0_d_1846_3041)", children: /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M18.3716 50.8564C20.0112 50.8564 21.3404 52.1855 21.3404 53.8251V58.2782H25.7935L25.9468 58.2821C27.5153 58.3619 28.7623 59.6587 28.7623 61.247C28.7622 62.8352 27.5152 64.1321 25.9468 64.2118L25.7935 64.2157H21.3404V68.6689C21.3404 70.3084 20.0112 71.6376 18.3716 71.6376C16.7321 71.6375 15.4029 70.3084 15.4029 68.6689V64.2157H10.9498C9.3102 64.2157 7.9811 62.8865 7.98102 61.247C7.98102 59.6074 9.31015 58.2782 10.9498 58.2782H15.4029V53.8251C15.4029 52.1855 16.7321 50.8564 18.3716 50.8564ZM43.607 9.29288C44.8352 9.29311 45.9366 10.0498 46.3775 11.1962L51.5259 24.5819C52.4177 26.9006 52.6983 27.5692 53.0816 28.1083C53.4661 28.6489 53.9385 29.1213 54.4791 29.5058C55.0182 29.8891 55.6869 30.1697 58.0054 31.0614L71.3912 36.2099C72.5375 36.6508 73.2943 37.7522 73.2945 38.9804C73.2945 40.2088 72.5377 41.3109 71.3912 41.7519L58.0054 46.9003C55.6869 47.7921 55.0182 48.0727 54.4791 48.456C53.9385 48.8404 53.4661 49.3128 53.0816 49.8534C52.6983 50.3925 52.4177 51.0611 51.5259 53.3798L46.3775 66.7655C45.9366 67.9119 44.8352 68.6686 43.607 68.6689C42.3786 68.6689 41.2765 67.912 40.8355 66.7655L35.6871 53.3798C34.7953 51.0612 34.5147 50.3925 34.1314 49.8534C33.7469 49.3128 33.2745 48.8404 32.7339 48.456C32.1949 48.0726 31.5262 47.7921 29.2076 46.9003L15.8218 41.7519C14.6753 41.3109 13.9185 40.2088 13.9185 38.9804C13.9187 37.7522 14.6755 36.6508 15.8218 36.2099L29.2076 31.0614C31.5262 30.1696 32.1949 29.8891 32.7339 29.5058C33.2745 29.1213 33.7469 28.6489 34.1314 28.1083C34.5147 27.5692 34.7953 26.9005 35.6871 24.5819L40.8355 11.1962L40.9263 10.9853C41.4153 9.95772 42.4556 9.29288 43.607 9.29288ZM18.3716 6.32413C20.0112 6.32418 21.3404 7.65329 21.3404 9.29288V13.746H25.7935C27.4331 13.7461 28.7622 15.0752 28.7623 16.7148C28.7623 18.3543 27.4331 19.6834 25.7935 19.6835H21.3404V24.1366C21.3404 25.7762 20.0112 27.1053 18.3716 27.1054C16.7321 27.1053 15.4029 25.7762 15.4029 24.1366V19.6835H10.9498C9.31015 19.6835 7.98102 18.3544 7.98102 16.7148C7.98108 15.0752 9.31019 13.746 10.9498 13.746H15.4029V9.29288C15.4029 7.6533 16.7321 6.32419 18.3716 6.32413Z",
          fill: "url(#paint0_linear_1846_3041)"
        }
      ) }),
      /* @__PURE__ */ jsxs9("defs", { children: [
        /* @__PURE__ */ jsxs9(
          "filter",
          {
            id: "filter0_d_1846_3041",
            x: "7.98102",
            y: "6.32413",
            width: "65.3135",
            height: "70.747",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ jsx10("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ jsx10(
                "feColorMatrix",
                {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }
              ),
              /* @__PURE__ */ jsx10("feOffset", { dy: "5.43351" }),
              /* @__PURE__ */ jsx10("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ jsx10(
                "feColorMatrix",
                {
                  type: "matrix",
                  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                }
              ),
              /* @__PURE__ */ jsx10(
                "feBlend",
                {
                  mode: "normal",
                  in2: "BackgroundImageFix",
                  result: "effect1_dropShadow_1846_3041"
                }
              ),
              /* @__PURE__ */ jsx10(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_dropShadow_1846_3041",
                  result: "shape"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs9(
          "linearGradient",
          {
            id: "paint0_linear_1846_3041",
            x1: "40.6377",
            y1: "6.32413",
            x2: "40.6377",
            y2: "71.6374",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx10("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ jsx10("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        )
      ] })
    ]
  }
));
CurieAiOriginalIcon.displayName = "CurieAiOriginalIcon";
var CurieAiOriginalText = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs9(
  "svg",
  {
    ref,
    width: "319",
    height: "95",
    viewBox: "0 0 319 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsxs9("g", { filter: "url(#filter0_d_1846_3015)", children: [
        /* @__PURE__ */ jsx10(
          "path",
          {
            d: "M308.563 18.6961V64.4241H301.664V18.6961H308.563Z",
            fill: "url(#paint0_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ jsx10(
          "path",
          {
            d: "M261.501 64.4241H254.177L270.633 18.6961H278.604L295.06 64.4241H287.736L274.809 27.0022H274.451L261.501 64.4241ZM262.729 46.5169H286.486V52.3222H262.729V46.5169Z",
            fill: "url(#paint1_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ jsx10(
          "path",
          {
            d: "M218.341 65.1162C214.962 65.1162 212.052 64.3943 209.61 62.9504C207.184 61.4916 205.309 59.4449 203.984 56.8102C202.674 54.1606 202.019 51.057 202.019 47.4994C202.019 43.9864 202.674 40.8902 203.984 38.2109C205.309 35.5315 207.154 33.4401 209.521 31.9367C211.903 30.4333 214.686 29.6815 217.872 29.6815C219.807 29.6815 221.683 30.0016 223.499 30.6416C225.315 31.2817 226.945 32.2865 228.388 33.6559C229.832 35.0254 230.971 36.8042 231.805 38.9924C232.638 41.1656 233.055 43.8078 233.055 46.9188V49.2856H205.792V44.2841H226.513C226.513 42.5276 226.156 40.9721 225.441 39.6175C224.727 38.2481 223.722 37.1689 222.427 36.38C221.147 35.591 219.643 35.1966 217.917 35.1966C216.041 35.1966 214.404 35.658 213.004 36.5809C211.62 37.4889 210.548 38.6798 209.789 40.1534C209.045 41.6122 208.673 43.1975 208.673 44.9093V48.8167C208.673 51.1091 209.075 53.0591 209.878 54.6667C210.697 56.2743 211.836 57.5024 213.295 58.3508C214.753 59.1844 216.458 59.6012 218.408 59.6012C219.673 59.6012 220.827 59.4226 221.869 59.0653C222.911 58.6932 223.811 58.1424 224.57 57.413C225.329 56.6837 225.91 55.7831 226.312 54.7113L232.631 55.8501C232.125 57.7108 231.217 59.3407 229.907 60.7399C228.612 62.1243 226.982 63.2035 225.017 63.9775C223.067 64.7367 220.842 65.1162 218.341 65.1162Z",
            fill: "url(#paint2_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ jsx10(
          "path",
          {
            d: "M187.902 64.4241V30.1281H194.578V64.4241H187.902ZM191.274 24.8363C190.112 24.8363 189.115 24.4493 188.282 23.6753C187.463 22.8864 187.054 21.9486 187.054 20.8619C187.054 19.7604 187.463 18.8226 188.282 18.0486C189.115 17.2597 190.112 16.8652 191.274 16.8652C192.435 16.8652 193.424 17.2597 194.243 18.0486C195.077 18.8226 195.494 19.7604 195.494 20.8619C195.494 21.9486 195.077 22.8864 194.243 23.6753C193.424 24.4493 192.435 24.8363 191.274 24.8363Z",
            fill: "url(#paint3_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ jsx10(
          "path",
          {
            d: "M163.771 64.4241V30.1281H170.224V35.5762H170.581C171.206 33.7304 172.308 32.279 173.886 31.2222C175.478 30.1504 177.279 29.6146 179.289 29.6146C179.706 29.6146 180.197 29.6294 180.763 29.6592C181.343 29.689 181.797 29.7262 182.125 29.7709V36.1567C181.857 36.0823 181.38 36.0004 180.696 35.9111C180.011 35.8069 179.326 35.7548 178.641 35.7548C177.064 35.7548 175.657 36.0897 174.421 36.7595C173.201 37.4145 172.233 38.33 171.519 39.5059C170.804 40.667 170.447 41.9918 170.447 43.4803V64.4241H163.771Z",
            fill: "url(#paint4_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ jsx10(
          "path",
          {
            d: "M148.102 50.2011V30.1281H154.801V64.4241H148.236V58.4848H147.879C147.09 60.3157 145.825 61.8414 144.083 63.062C142.356 64.2678 140.205 64.8706 137.63 64.8706C135.427 64.8706 133.477 64.3869 131.78 63.4193C130.098 62.4369 128.773 60.9855 127.806 59.0653C126.853 57.1451 126.377 54.7709 126.377 51.9427V30.1281H133.053V51.1388C133.053 53.4758 133.701 55.3365 134.996 56.7209C136.291 58.1052 137.973 58.7974 140.042 58.7974C141.292 58.7974 142.535 58.4848 143.77 57.8596C145.021 57.2344 146.055 56.2892 146.874 55.0239C147.708 53.7587 148.117 52.151 148.102 50.2011Z",
            fill: "url(#paint5_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ jsx10(
          "path",
          {
            d: "M118.657 33.5666H111.691C111.423 32.0781 110.924 30.7682 110.195 29.6369C109.465 28.5056 108.572 27.5455 107.515 26.7566C106.458 25.9676 105.275 25.3722 103.965 24.9703C102.67 24.5684 101.293 24.3674 99.8344 24.3674C97.1997 24.3674 94.8403 25.0298 92.7564 26.3547C90.6873 27.6795 89.0499 29.622 87.8442 32.1823C86.6534 34.7426 86.0579 37.8685 86.0579 41.5601C86.0579 45.2814 86.6534 48.4223 87.8442 50.9825C89.0499 53.5428 90.6947 55.4779 92.7787 56.7878C94.8627 58.0978 97.2071 58.7527 99.8121 58.7527C101.256 58.7527 102.625 58.5592 103.92 58.1722C105.23 57.7703 106.414 57.1823 107.471 56.4083C108.527 55.6342 109.421 54.689 110.15 53.5726C110.894 52.4413 111.408 51.1463 111.691 49.6875L118.657 49.7098C118.285 51.9575 117.563 54.0266 116.491 55.9171C115.434 57.7926 114.072 59.4151 112.405 60.7846C110.753 62.1392 108.862 63.1886 106.734 63.9328C104.605 64.6771 102.283 65.0492 99.7674 65.0492C95.8079 65.0492 92.28 64.1115 89.1839 62.2359C86.0877 60.3455 83.6465 57.6438 81.8603 54.1308C80.0889 50.6179 79.2032 46.4276 79.2032 41.5601C79.2032 36.6777 80.0963 32.4874 81.8826 28.9894C83.6688 25.4764 86.11 22.7822 89.2062 20.9066C92.3024 19.0161 95.8228 18.0709 99.7674 18.0709C102.194 18.0709 104.456 18.4207 106.555 19.1203C108.669 19.8051 110.567 20.8173 112.249 22.157C113.931 23.4818 115.323 25.1043 116.424 27.0245C117.526 28.9298 118.27 31.1105 118.657 33.5666Z",
            fill: "url(#paint6_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ jsx10(
          "path",
          {
            d: "M18.4296 40.3421C19.615 40.3424 20.5759 41.3031 20.5761 42.4886V45.7093H23.7968C24.9824 45.7095 25.9442 46.6711 25.9442 47.8567C25.9441 48.9683 25.0991 49.8825 24.0165 49.9925L23.7968 50.0042H20.5761V53.2249C20.5758 54.4103 19.615 55.372 18.4296 55.3724C17.2439 55.3724 16.2824 54.4105 16.2821 53.2249V50.0042H13.0614C11.8757 50.0042 10.9142 49.0424 10.914 47.8567C10.914 46.6709 11.8756 45.7093 13.0614 45.7093H16.2821V42.4886C16.2823 41.3029 17.2439 40.3421 18.4296 40.3421ZM36.6806 10.2815C37.5686 10.2818 38.3656 10.8287 38.6845 11.6575L42.4081 21.3392C43.0529 23.0156 43.2559 23.4991 43.5331 23.889C43.8112 24.28 44.1528 24.6226 44.5439 24.9007C44.9337 25.1778 45.4182 25.3809 47.0946 26.0257L56.7753 29.7493C57.6043 30.0683 58.1523 30.8649 58.1523 31.7532C58.1521 32.6414 57.6043 33.4382 56.7753 33.7571L47.0946 37.4808C45.4177 38.1257 44.9338 38.3285 44.5439 38.6058C44.1528 38.8838 43.8112 39.2255 43.5331 39.6165C43.2559 40.0064 43.0531 40.4903 42.4081 42.1673L38.6845 51.8479C38.3656 52.6768 37.5687 53.2246 36.6806 53.2249C35.7923 53.2249 34.9947 52.6769 34.6757 51.8479L30.953 42.1673C30.3082 40.4908 30.1051 40.0063 29.828 39.6165C29.5499 39.2254 29.2073 38.8839 28.8163 38.6058C28.4265 38.3286 27.943 38.1255 26.2665 37.4808L16.5849 33.7571C15.7558 33.4382 15.2091 32.6415 15.2089 31.7532C15.2089 30.8648 15.7557 30.0683 16.5849 29.7493L26.2665 26.0257C27.9431 25.3808 28.4265 25.1779 28.8163 24.9007C29.2075 24.6225 29.5499 24.2801 29.828 23.889C30.1051 23.4991 30.3083 23.0154 30.953 21.3392L34.6757 11.6575C34.9947 10.8284 35.7922 10.2815 36.6806 10.2815ZM18.4296 8.13408C19.6152 8.1344 20.5761 9.09589 20.5761 10.2815V13.5022H23.7968C24.9825 13.5024 25.9442 14.464 25.9442 15.6497C25.9439 16.8352 24.9823 17.796 23.7968 17.7962H20.5761V21.0169C20.5759 22.2024 19.6151 23.164 18.4296 23.1644C17.2439 23.1644 16.2823 22.2026 16.2821 21.0169V17.7962H13.0614C11.8758 17.7962 10.9143 16.8353 10.914 15.6497C10.914 14.4639 11.8756 13.5022 13.0614 13.5022H16.2821V10.2815C16.2821 9.0957 17.2438 8.13408 18.4296 8.13408Z",
            fill: "url(#paint7_linear_1846_3015)"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs9("defs", { children: [
        /* @__PURE__ */ jsxs9(
          "filter",
          {
            id: "filter0_d_1846_3015",
            x: "10.914",
            y: "8.13408",
            width: "297.649",
            height: "60.9119",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ jsx10("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ jsx10(
                "feColorMatrix",
                {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }
              ),
              /* @__PURE__ */ jsx10("feOffset", { dy: "3.92975" }),
              /* @__PURE__ */ jsx10("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ jsx10(
                "feColorMatrix",
                {
                  type: "matrix",
                  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                }
              ),
              /* @__PURE__ */ jsx10(
                "feBlend",
                {
                  mode: "normal",
                  in2: "BackgroundImageFix",
                  result: "effect1_dropShadow_1846_3015"
                }
              ),
              /* @__PURE__ */ jsx10(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_dropShadow_1846_3015",
                  result: "shape"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs9(
          "linearGradient",
          {
            id: "paint0_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57594",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx10("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ jsx10("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs9(
          "linearGradient",
          {
            id: "paint1_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57594",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx10("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ jsx10("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs9(
          "linearGradient",
          {
            id: "paint2_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57594",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx10("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ jsx10("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs9(
          "linearGradient",
          {
            id: "paint3_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57593",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx10("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ jsx10("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs9(
          "linearGradient",
          {
            id: "paint4_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57593",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx10("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ jsx10("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs9(
          "linearGradient",
          {
            id: "paint5_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57594",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx10("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ jsx10("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs9(
          "linearGradient",
          {
            id: "paint6_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57594",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx10("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ jsx10("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs9(
          "linearGradient",
          {
            id: "paint7_linear_1846_3015",
            x1: "34.5331",
            y1: "8.13408",
            x2: "34.5331",
            y2: "55.3724",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx10("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ jsx10("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        )
      ] })
    ]
  }
));
CurieAiOriginalText.displayName = "CurieAiOriginalText";
var CurieAiBlackIcon = React10.forwardRef(({ className, viewpoint, ...props }, ref) => /* @__PURE__ */ jsx10(
  "svg",
  {
    ref,
    width: "95",
    height: "95",
    viewBox: viewpoint || "0 0 95 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M18.3716 50.8564C20.0112 50.8564 21.3404 52.1855 21.3404 53.8251V58.2782H25.7935L25.9468 58.2821C27.5153 58.3619 28.7623 59.6587 28.7623 61.247C28.7622 62.8352 27.5152 64.1321 25.9468 64.2118L25.7935 64.2157H21.3404V68.6689C21.3404 70.3084 20.0112 71.6376 18.3716 71.6376C16.7321 71.6375 15.4029 70.3084 15.4029 68.6689V64.2157H10.9498C9.3102 64.2157 7.9811 62.8865 7.98102 61.247C7.98102 59.6074 9.31015 58.2782 10.9498 58.2782H15.4029V53.8251C15.4029 52.1855 16.7321 50.8564 18.3716 50.8564ZM43.607 9.29288C44.8352 9.29311 45.9366 10.0498 46.3775 11.1962L51.5259 24.5819C52.4177 26.9006 52.6983 27.5692 53.0816 28.1083C53.4661 28.6489 53.9385 29.1213 54.4791 29.5058C55.0182 29.8891 55.6869 30.1697 58.0054 31.0614L71.3912 36.2099C72.5375 36.6508 73.2943 37.7522 73.2945 38.9804C73.2945 40.2088 72.5377 41.3109 71.3912 41.7519L58.0054 46.9003C55.6869 47.7921 55.0182 48.0727 54.4791 48.456C53.9385 48.8404 53.4661 49.3128 53.0816 49.8534C52.6983 50.3925 52.4177 51.0611 51.5259 53.3798L46.3775 66.7655C45.9366 67.9119 44.8352 68.6686 43.607 68.6689C42.3786 68.6689 41.2765 67.912 40.8355 66.7655L35.6871 53.3798C34.7953 51.0612 34.5147 50.3925 34.1314 49.8534C33.7469 49.3128 33.2745 48.8404 32.7339 48.456C32.1949 48.0726 31.5262 47.7921 29.2076 46.9003L15.8218 41.7519C14.6753 41.3109 13.9185 40.2088 13.9185 38.9804C13.9187 37.7522 14.6755 36.6508 15.8218 36.2099L29.2076 31.0614C31.5262 30.1696 32.1949 29.8891 32.7339 29.5058C33.2745 29.1213 33.7469 28.6489 34.1314 28.1083C34.5147 27.5692 34.7953 26.9005 35.6871 24.5819L40.8355 11.1962L40.9263 10.9853C41.4153 9.95772 42.4556 9.29288 43.607 9.29288ZM18.3716 6.32413C20.0112 6.32418 21.3404 7.65329 21.3404 9.29288V13.746H25.7935C27.4331 13.7461 28.7622 15.0752 28.7623 16.7148C28.7623 18.3543 27.4331 19.6834 25.7935 19.6835H21.3404V24.1366C21.3404 25.7762 20.0112 27.1053 18.3716 27.1054C16.7321 27.1053 15.4029 25.7762 15.4029 24.1366V19.6835H10.9498C9.31015 19.6835 7.98102 18.3544 7.98102 16.7148C7.98108 15.0752 9.31019 13.746 10.9498 13.746H15.4029V9.29288C15.4029 7.6533 16.7321 6.32419 18.3716 6.32413Z",
        fill: "black"
      }
    )
  }
));
CurieAiBlackIcon.displayName = "CurieAiBlackIcon";
var CurieAiBlackText = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs9(
  "svg",
  {
    ref,
    width: "319",
    height: "95",
    viewBox: "0 0 319 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx10("path", { d: "M308.563 18.6961V64.4241H301.664V18.6961H308.563Z", fill: "black" }),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M261.501 64.4241H254.177L270.633 18.6961H278.604L295.06 64.4241H287.736L274.809 27.0022H274.451L261.501 64.4241ZM262.729 46.5169H286.486V52.3223H262.729V46.5169Z",
          fill: "black"
        }
      ),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M218.341 65.1163C214.962 65.1163 212.052 64.3943 209.61 62.9504C207.184 61.4917 205.309 59.4449 203.984 56.8102C202.674 54.1606 202.019 51.057 202.019 47.4994C202.019 43.9864 202.674 40.8903 203.984 38.2109C205.309 35.5315 207.154 33.4401 209.521 31.9367C211.903 30.4333 214.686 29.6816 217.872 29.6816C219.807 29.6816 221.683 30.0016 223.499 30.6417C225.315 31.2818 226.945 32.2865 228.388 33.656C229.832 35.0254 230.971 36.8042 231.805 38.9924C232.638 41.1657 233.055 43.8078 233.055 46.9189V49.2857H205.792V44.2842H226.513C226.513 42.5277 226.156 40.9722 225.441 39.6176C224.727 38.2481 223.722 37.1689 222.427 36.38C221.147 35.5911 219.643 35.1966 217.917 35.1966C216.041 35.1966 214.404 35.6581 213.004 36.581C211.62 37.489 210.548 38.6798 209.789 40.1535C209.045 41.6122 208.673 43.1975 208.673 44.9093V48.8168C208.673 51.1091 209.075 53.0591 209.878 54.6667C210.697 56.2743 211.836 57.5024 213.295 58.3509C214.753 59.1844 216.458 59.6012 218.408 59.6012C219.673 59.6012 220.827 59.4226 221.869 59.0654C222.911 58.6932 223.811 58.1425 224.57 57.4131C225.329 56.6837 225.91 55.7831 226.312 54.7114L232.631 55.8501C232.125 57.7108 231.217 59.3407 229.907 60.74C228.612 62.1243 226.982 63.2035 225.017 63.9775C223.067 64.7367 220.842 65.1163 218.341 65.1163Z",
          fill: "black"
        }
      ),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M187.902 64.4241V30.1281H194.578V64.4241H187.902ZM191.274 24.8364C190.112 24.8364 189.115 24.4493 188.282 23.6753C187.463 22.8864 187.054 21.9486 187.054 20.862C187.054 19.7604 187.463 18.8227 188.282 18.0486C189.115 17.2597 190.112 16.8652 191.274 16.8652C192.435 16.8652 193.424 17.2597 194.243 18.0486C195.077 18.8227 195.494 19.7604 195.494 20.862C195.494 21.9486 195.077 22.8864 194.243 23.6753C193.424 24.4493 192.435 24.8364 191.274 24.8364Z",
          fill: "black"
        }
      ),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M163.771 64.4241V30.1281H170.224V35.5762H170.581C171.206 33.7304 172.308 32.2791 173.886 31.2222C175.478 30.1504 177.279 29.6146 179.289 29.6146C179.706 29.6146 180.197 29.6294 180.763 29.6592C181.343 29.689 181.797 29.7262 182.125 29.7709V36.1567C181.857 36.0823 181.38 36.0004 180.696 35.9111C180.011 35.8069 179.326 35.7548 178.641 35.7548C177.064 35.7548 175.657 36.0897 174.421 36.7596C173.201 37.4145 172.233 38.33 171.519 39.5059C170.804 40.667 170.447 41.9918 170.447 43.4803V64.4241H163.771Z",
          fill: "black"
        }
      ),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M148.102 50.2011V30.1281H154.801V64.4241H148.236V58.4848H147.879C147.09 60.3157 145.825 61.8415 144.083 63.0621C142.356 64.2678 140.205 64.8706 137.63 64.8706C135.427 64.8706 133.477 64.3869 131.78 63.4193C130.098 62.4369 128.773 60.9856 127.806 59.0653C126.853 57.1451 126.377 54.7709 126.377 51.9427V30.1281H133.053V51.1389C133.053 53.4759 133.701 55.3365 134.996 56.7209C136.291 58.1052 137.973 58.7974 140.042 58.7974C141.292 58.7974 142.535 58.4848 143.77 57.8596C145.021 57.2344 146.055 56.2892 146.874 55.0239C147.708 53.7587 148.117 52.1511 148.102 50.2011Z",
          fill: "black"
        }
      ),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M118.657 33.5667H111.691C111.423 32.0781 110.924 30.7682 110.195 29.6369C109.465 28.5056 108.572 27.5455 107.515 26.7566C106.458 25.9677 105.275 25.3722 103.965 24.9703C102.67 24.5684 101.293 24.3675 99.8344 24.3675C97.1997 24.3675 94.8403 25.0299 92.7564 26.3547C90.6873 27.6795 89.0499 29.622 87.8442 32.1823C86.6534 34.7426 86.0579 37.8685 86.0579 41.5601C86.0579 45.2815 86.6534 48.4223 87.8442 50.9826C89.0499 53.5429 90.6947 55.478 92.7787 56.7879C94.8627 58.0978 97.2071 58.7528 99.8121 58.7528C101.256 58.7528 102.625 58.5592 103.92 58.1722C105.23 57.7703 106.414 57.1823 107.471 56.4083C108.527 55.6343 109.421 54.689 110.15 53.5726C110.894 52.4413 111.408 51.1463 111.691 49.6875L118.657 49.7099C118.285 51.9576 117.563 54.0266 116.491 55.9171C115.434 57.7926 114.072 59.4152 112.405 60.7846C110.753 62.1392 108.862 63.1886 106.734 63.9329C104.605 64.6771 102.283 65.0493 99.7674 65.0493C95.8079 65.0493 92.28 64.1115 89.1839 62.2359C86.0877 60.3455 83.6465 57.6438 81.8603 54.1308C80.0889 50.6179 79.2032 46.4276 79.2032 41.5601C79.2032 36.6777 80.0963 32.4875 81.8826 28.9894C83.6688 25.4764 86.11 22.7822 89.2062 20.9066C92.3024 19.0162 95.8228 18.071 99.7674 18.071C102.194 18.071 104.456 18.4208 106.555 19.1204C108.669 19.8051 110.567 20.8173 112.249 22.157C113.931 23.4818 115.323 25.1043 116.424 27.0245C117.526 28.9299 118.27 31.1106 118.657 33.5667Z",
          fill: "black"
        }
      ),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M18.4296 40.3421C19.615 40.3424 20.5759 41.3031 20.5761 42.4886V45.7093H23.7968C24.9824 45.7095 25.9442 46.6711 25.9442 47.8568C25.9441 48.9683 25.0991 49.8825 24.0165 49.9925L23.7968 50.0042H20.5761V53.2249C20.5758 54.4103 19.615 55.3721 18.4296 55.3724C17.2439 55.3724 16.2824 54.4105 16.2821 53.2249V50.0042H13.0614C11.8757 50.0042 10.9142 49.0424 10.914 47.8568C10.914 46.671 11.8756 45.7093 13.0614 45.7093H16.2821V42.4886C16.2823 41.3029 17.2439 40.3421 18.4296 40.3421ZM36.6806 10.2816C37.5686 10.2818 38.3656 10.8287 38.6845 11.6575L42.4081 21.3392C43.0529 23.0157 43.2559 23.4991 43.5331 23.889C43.8112 24.28 44.1528 24.6226 44.5439 24.9007C44.9337 25.1778 45.4182 25.3809 47.0946 26.0257L56.7753 29.7493C57.6043 30.0684 58.1523 30.8649 58.1523 31.7532C58.1521 32.6414 57.6043 33.4382 56.7753 33.7571L47.0946 37.4808C45.4177 38.1258 44.9338 38.3286 44.5439 38.6058C44.1528 38.8838 43.8112 39.2255 43.5331 39.6165C43.2559 40.0064 43.0531 40.4904 42.4081 42.1673L38.6845 51.848C38.3656 52.6769 37.5687 53.2246 36.6806 53.2249C35.7923 53.2249 34.9947 52.677 34.6757 51.848L30.953 42.1673C30.3082 40.4908 30.1051 40.0064 29.828 39.6165C29.5499 39.2255 29.2073 38.8839 28.8163 38.6058C28.4265 38.3286 27.943 38.1256 26.2665 37.4808L16.5849 33.7571C15.7558 33.4382 15.2091 32.6415 15.2089 31.7532C15.2089 30.8649 15.7557 30.0683 16.5849 29.7493L26.2665 26.0257C27.9431 25.3809 28.4265 25.1779 28.8163 24.9007C29.2075 24.6225 29.5499 24.2802 29.828 23.889C30.1051 23.4992 30.3083 23.0154 30.953 21.3392L34.6757 11.6575C34.9947 10.8284 35.7922 10.2816 36.6806 10.2816ZM18.4296 8.13409C19.6152 8.13442 20.5761 9.09591 20.5761 10.2816V13.5023H23.7968C24.9825 13.5024 25.9442 14.464 25.9442 15.6497C25.9439 16.8352 24.9823 17.796 23.7968 17.7962H20.5761V21.0169C20.5759 22.2024 19.6151 23.164 18.4296 23.1644C17.2439 23.1644 16.2823 22.2026 16.2821 21.0169V17.7962H13.0614C11.8758 17.7962 10.9143 16.8353 10.914 15.6497C10.914 14.4639 11.8756 13.5023 13.0614 13.5023H16.2821V10.2816C16.2821 9.09571 17.2438 8.13409 18.4296 8.13409Z",
          fill: "black"
        }
      )
    ]
  }
));
CurieAiBlackText.displayName = "CurieAiBlackText";
var CurieAiWhiteIcon = React10.forwardRef(({ className, viewpoint, ...props }, ref) => /* @__PURE__ */ jsx10(
  "svg",
  {
    ref,
    width: "95",
    height: "95",
    viewBox: viewpoint || "0 0 95 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M18.3716 50.8564C20.0112 50.8564 21.3404 52.1855 21.3404 53.8251V58.2782H25.7935L25.9468 58.2821C27.5153 58.3619 28.7623 59.6587 28.7623 61.247C28.7622 62.8352 27.5152 64.1321 25.9468 64.2118L25.7935 64.2157H21.3404V68.6689C21.3404 70.3084 20.0112 71.6376 18.3716 71.6376C16.7321 71.6375 15.4029 70.3084 15.4029 68.6689V64.2157H10.9498C9.3102 64.2157 7.9811 62.8865 7.98102 61.247C7.98102 59.6074 9.31015 58.2782 10.9498 58.2782H15.4029V53.8251C15.4029 52.1855 16.7321 50.8564 18.3716 50.8564ZM43.607 9.29288C44.8352 9.29311 45.9366 10.0498 46.3775 11.1962L51.5259 24.5819C52.4177 26.9006 52.6983 27.5692 53.0816 28.1083C53.4661 28.6489 53.9385 29.1213 54.4791 29.5058C55.0182 29.8891 55.6869 30.1697 58.0054 31.0614L71.3912 36.2099C72.5375 36.6508 73.2943 37.7522 73.2945 38.9804C73.2945 40.2088 72.5377 41.3109 71.3912 41.7519L58.0054 46.9003C55.6869 47.7921 55.0182 48.0727 54.4791 48.456C53.9385 48.8404 53.4661 49.3128 53.0816 49.8534C52.6983 50.3925 52.4177 51.0611 51.5259 53.3798L46.3775 66.7655C45.9366 67.9119 44.8352 68.6686 43.607 68.6689C42.3786 68.6689 41.2765 67.912 40.8355 66.7655L35.6871 53.3798C34.7953 51.0612 34.5147 50.3925 34.1314 49.8534C33.7469 49.3128 33.2745 48.8404 32.7339 48.456C32.1949 48.0726 31.5262 47.7921 29.2076 46.9003L15.8218 41.7519C14.6753 41.3109 13.9185 40.2088 13.9185 38.9804C13.9187 37.7522 14.6755 36.6508 15.8218 36.2099L29.2076 31.0614C31.5262 30.1696 32.1949 29.8891 32.7339 29.5058C33.2745 29.1213 33.7469 28.6489 34.1314 28.1083C34.5147 27.5692 34.7953 26.9005 35.6871 24.5819L40.8355 11.1962L40.9263 10.9853C41.4153 9.95772 42.4556 9.29288 43.607 9.29288ZM18.3716 6.32413C20.0112 6.32418 21.3404 7.65329 21.3404 9.29288V13.746H25.7935C27.4331 13.7461 28.7622 15.0752 28.7623 16.7148C28.7623 18.3543 27.4331 19.6834 25.7935 19.6835H21.3404V24.1366C21.3404 25.7762 20.0112 27.1053 18.3716 27.1054C16.7321 27.1053 15.4029 25.7762 15.4029 24.1366V19.6835H10.9498C9.31015 19.6835 7.98102 18.3544 7.98102 16.7148C7.98108 15.0752 9.31019 13.746 10.9498 13.746H15.4029V9.29288C15.4029 7.6533 16.7321 6.32419 18.3716 6.32413Z",
        fill: "white"
      }
    )
  }
));
CurieAiWhiteIcon.displayName = "CurieAiWhiteIcon";
var CurieAiWhiteText = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs9(
  "svg",
  {
    ref,
    width: "319",
    height: "95",
    viewBox: "0 0 319 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx10("path", { d: "M308.563 18.6961V64.4241H301.664V18.6961H308.563Z", fill: "white" }),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M261.501 64.4241H254.177L270.633 18.6961H278.604L295.06 64.4241H287.736L274.809 27.0022H274.451L261.501 64.4241ZM262.729 46.5169H286.486V52.3222H262.729V46.5169Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M218.341 65.1162C214.962 65.1162 212.052 64.3943 209.61 62.9504C207.184 61.4916 205.309 59.4449 203.984 56.8102C202.674 54.1606 202.019 51.057 202.019 47.4994C202.019 43.9864 202.674 40.8903 203.984 38.2109C205.309 35.5315 207.154 33.4401 209.521 31.9367C211.903 30.4333 214.686 29.6815 217.872 29.6815C219.807 29.6815 221.683 30.0016 223.499 30.6417C225.315 31.2817 226.945 32.2865 228.388 33.6559C229.832 35.0254 230.971 36.8042 231.805 38.9924C232.638 41.1656 233.055 43.8078 233.055 46.9188V49.2856H205.792V44.2841H226.513C226.513 42.5276 226.156 40.9721 225.441 39.6176C224.727 38.2481 223.722 37.1689 222.427 36.38C221.147 35.5911 219.643 35.1966 217.917 35.1966C216.041 35.1966 214.404 35.658 213.004 36.5809C211.62 37.4889 210.548 38.6798 209.789 40.1534C209.045 41.6122 208.673 43.1975 208.673 44.9093V48.8167C208.673 51.1091 209.075 53.0591 209.878 54.6667C210.697 56.2743 211.836 57.5024 213.295 58.3508C214.753 59.1844 216.458 59.6012 218.408 59.6012C219.673 59.6012 220.827 59.4226 221.869 59.0653C222.911 58.6932 223.811 58.1424 224.57 57.413C225.329 56.6837 225.91 55.7831 226.312 54.7113L232.631 55.8501C232.125 57.7108 231.217 59.3407 229.907 60.7399C228.612 62.1243 226.982 63.2035 225.017 63.9775C223.067 64.7367 220.842 65.1162 218.341 65.1162Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M187.902 64.4241V30.1281H194.578V64.4241H187.902ZM191.274 24.8364C190.112 24.8364 189.115 24.4493 188.282 23.6753C187.463 22.8864 187.054 21.9486 187.054 20.8619C187.054 19.7604 187.463 18.8226 188.282 18.0486C189.115 17.2597 190.112 16.8652 191.274 16.8652C192.435 16.8652 193.424 17.2597 194.243 18.0486C195.077 18.8226 195.494 19.7604 195.494 20.8619C195.494 21.9486 195.077 22.8864 194.243 23.6753C193.424 24.4493 192.435 24.8364 191.274 24.8364Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M163.771 64.4241V30.1281H170.224V35.5762H170.581C171.206 33.7304 172.308 32.2791 173.886 31.2222C175.478 30.1504 177.279 29.6146 179.289 29.6146C179.706 29.6146 180.197 29.6294 180.763 29.6592C181.343 29.689 181.797 29.7262 182.125 29.7709V36.1567C181.857 36.0823 181.38 36.0004 180.696 35.9111C180.011 35.8069 179.326 35.7548 178.641 35.7548C177.064 35.7548 175.657 36.0897 174.421 36.7596C173.201 37.4145 172.233 38.33 171.519 39.5059C170.804 40.667 170.447 41.9918 170.447 43.4803V64.4241H163.771Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M148.102 50.2011V30.1281H154.801V64.4241H148.236V58.4848H147.879C147.09 60.3157 145.825 61.8415 144.083 63.0621C142.356 64.2678 140.205 64.8706 137.63 64.8706C135.427 64.8706 133.477 64.3869 131.78 63.4193C130.098 62.4369 128.773 60.9856 127.806 59.0653C126.853 57.1451 126.377 54.7709 126.377 51.9427V30.1281H133.053V51.1389C133.053 53.4759 133.701 55.3365 134.996 56.7209C136.291 58.1052 137.973 58.7974 140.042 58.7974C141.292 58.7974 142.535 58.4848 143.77 57.8596C145.021 57.2344 146.055 56.2892 146.874 55.0239C147.708 53.7587 148.117 52.1511 148.102 50.2011Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M118.657 33.5666H111.691C111.423 32.0781 110.924 30.7682 110.195 29.6369C109.465 28.5056 108.572 27.5455 107.515 26.7566C106.458 25.9676 105.275 25.3722 103.965 24.9703C102.67 24.5684 101.293 24.3675 99.8344 24.3675C97.1997 24.3675 94.8403 25.0299 92.7564 26.3547C90.6873 27.6795 89.0499 29.622 87.8442 32.1823C86.6534 34.7426 86.0579 37.8685 86.0579 41.5601C86.0579 45.2815 86.6534 48.4223 87.8442 50.9826C89.0499 53.5428 90.6947 55.478 92.7787 56.7879C94.8627 58.0978 97.2071 58.7527 99.8121 58.7527C101.256 58.7527 102.625 58.5592 103.92 58.1722C105.23 57.7703 106.414 57.1823 107.471 56.4083C108.527 55.6342 109.421 54.689 110.15 53.5726C110.894 52.4413 111.408 51.1463 111.691 49.6875L118.657 49.7099C118.285 51.9576 117.563 54.0266 116.491 55.9171C115.434 57.7926 114.072 59.4151 112.405 60.7846C110.753 62.1392 108.862 63.1886 106.734 63.9329C104.605 64.6771 102.283 65.0493 99.7674 65.0493C95.8079 65.0493 92.28 64.1115 89.1839 62.2359C86.0877 60.3455 83.6465 57.6438 81.8603 54.1308C80.0889 50.6179 79.2032 46.4276 79.2032 41.5601C79.2032 36.6777 80.0963 32.4874 81.8826 28.9894C83.6688 25.4764 86.11 22.7822 89.2062 20.9066C92.3024 19.0162 95.8228 18.0709 99.7674 18.0709C102.194 18.0709 104.456 18.4207 106.555 19.1204C108.669 19.8051 110.567 20.8173 112.249 22.157C113.931 23.4818 115.323 25.1043 116.424 27.0245C117.526 28.9298 118.27 31.1105 118.657 33.5666Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M18.4296 40.3421C19.615 40.3424 20.5759 41.3031 20.5761 42.4886V45.7093H23.7968C24.9824 45.7095 25.9442 46.6711 25.9442 47.8567C25.9441 48.9683 25.0991 49.8825 24.0165 49.9925L23.7968 50.0042H20.5761V53.2249C20.5758 54.4103 19.615 55.372 18.4296 55.3724C17.2439 55.3724 16.2824 54.4105 16.2821 53.2249V50.0042H13.0614C11.8757 50.0042 10.9142 49.0424 10.914 47.8567C10.914 46.6709 11.8756 45.7093 13.0614 45.7093H16.2821V42.4886C16.2823 41.3029 17.2439 40.3421 18.4296 40.3421ZM36.6806 10.2815C37.5686 10.2818 38.3656 10.8287 38.6845 11.6575L42.4081 21.3392C43.0529 23.0156 43.2559 23.4991 43.5331 23.889C43.8112 24.28 44.1528 24.6226 44.5439 24.9007C44.9337 25.1778 45.4182 25.3809 47.0946 26.0257L56.7753 29.7493C57.6043 30.0683 58.1523 30.8649 58.1523 31.7532C58.1521 32.6414 57.6043 33.4382 56.7753 33.7571L47.0946 37.4808C45.4177 38.1257 44.9338 38.3285 44.5439 38.6058C44.1528 38.8838 43.8112 39.2255 43.5331 39.6165C43.2559 40.0064 43.0531 40.4903 42.4081 42.1673L38.6845 51.8479C38.3656 52.6768 37.5687 53.2246 36.6806 53.2249C35.7923 53.2249 34.9947 52.6769 34.6757 51.8479L30.953 42.1673C30.3082 40.4908 30.1051 40.0063 29.828 39.6165C29.5499 39.2254 29.2073 38.8839 28.8163 38.6058C28.4265 38.3286 27.943 38.1255 26.2665 37.4808L16.5849 33.7571C15.7558 33.4382 15.2091 32.6415 15.2089 31.7532C15.2089 30.8648 15.7557 30.0683 16.5849 29.7493L26.2665 26.0257C27.9431 25.3808 28.4265 25.1779 28.8163 24.9007C29.2075 24.6225 29.5499 24.2801 29.828 23.889C30.1051 23.4991 30.3083 23.0154 30.953 21.3392L34.6757 11.6575C34.9947 10.8284 35.7922 10.2815 36.6806 10.2815ZM18.4296 8.13408C19.6152 8.1344 20.5761 9.09589 20.5761 10.2815V13.5022H23.7968C24.9825 13.5024 25.9442 14.464 25.9442 15.6497C25.9439 16.8352 24.9823 17.796 23.7968 17.7962H20.5761V21.0169C20.5759 22.2024 19.6151 23.164 18.4296 23.1644C17.2439 23.1644 16.2823 22.2026 16.2821 21.0169V17.7962H13.0614C11.8758 17.7962 10.9143 16.8353 10.914 15.6497C10.914 14.4639 11.8756 13.5022 13.0614 13.5022H16.2821V10.2815C16.2821 9.0957 17.2438 8.13408 18.4296 8.13408Z",
          fill: "white"
        }
      )
    ]
  }
));
CurieAiWhiteText.displayName = "CurieAiWhiteText";
var SupremeIntelligenceOriginalText = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs9("svg", { viewBox: "0 0 319 95", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsxs9("g", { clipPath: "url(#clip0_1668_1288)", children: [
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M0 0V94.2818H94.7752V0H0ZM55.7218 66.0637C54.0247 68.412 51.717 70.2056 48.7891 71.4538C45.866 72.7021 42.5823 73.3239 38.9476 73.3239C33.2456 73.3239 28.5773 72.0039 24.9378 69.3638C21.2983 66.7237 19.0627 62.9597 18.2262 58.067H24.4186C25.2551 61.4388 26.8994 63.9976 29.3561 65.7337C31.8129 67.4698 35.0341 68.3355 39.0149 68.3355C42.9957 68.3355 45.9573 67.4459 48.3419 65.6572C50.7266 63.8732 51.9189 61.5154 51.9189 58.5788C51.9189 56.0344 51.217 54.0208 49.8179 52.5286C48.4189 51.0364 46.241 49.9986 43.2938 49.4103L31.0533 46.9185C27.0724 46.1389 24.1109 44.7567 22.1685 42.7767C20.2262 40.7966 19.255 38.0226 19.255 34.4499C19.255 31.566 20.1156 29.1076 21.8368 27.0798C23.558 25.0519 25.8561 23.5214 28.7311 22.4979C31.6062 21.4696 34.7649 20.9579 38.2072 20.9579C43.515 20.9579 47.7939 22.1583 51.0343 24.5497C54.2795 26.9459 56.2218 30.3942 56.8613 34.8899H50.6689C50.0775 31.8577 48.6881 29.5955 46.5054 28.1033C44.3179 26.6111 41.5053 25.865 38.063 25.865C34.3754 25.865 31.3754 26.5871 29.0677 28.0267C26.7551 29.4711 25.6013 31.4847 25.6013 34.0769C25.6013 36.3248 26.1782 38.0513 27.3321 39.247C28.4859 40.4475 30.3658 41.3131 32.9716 41.8488L45.7986 44.4171C50.0247 45.2493 53.1593 46.7415 55.1978 48.889C57.2363 51.0412 58.2555 54.0208 58.2555 57.8374C58.2555 60.9653 57.4094 63.7058 55.7122 66.0542L55.7218 66.0637ZM76.549 72.8121H70.2797V40.0983H63.4239V35.1817H76.549V72.8074V72.8121Z",
        fill: "url(#paint0_radial_1668_1288)"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M126.319 42.0114C123.968 42.0114 121.963 41.5619 120.309 40.6723C118.651 39.7779 117.242 38.5487 116.079 36.98L118.651 34.8374C119.675 36.1861 120.805 37.2096 122.05 37.9079C123.295 38.6109 124.757 38.9601 126.444 38.9601C128.516 38.9601 130.098 38.4674 131.189 37.4774C132.281 36.4874 132.829 35.1674 132.829 33.5173C132.829 32.1447 132.415 31.0829 131.584 30.3416C130.757 29.6003 129.386 29.0072 127.478 28.5672L125.112 28.0315C122.459 27.4289 120.434 26.5106 119.04 25.291C117.646 24.0667 116.944 22.3401 116.944 20.1161C116.944 18.8535 117.18 17.7248 117.651 16.7348C118.122 15.7447 118.776 14.9221 119.622 14.2621C120.468 13.6021 121.473 13.0999 122.651 12.7555C123.824 12.4112 125.117 12.239 126.526 12.239C128.709 12.239 130.584 12.636 132.146 13.4347C133.709 14.2334 135.026 15.4004 136.108 16.9404L133.497 18.8392C132.694 17.7391 131.728 16.8735 130.593 16.2421C129.459 15.6108 128.05 15.2952 126.362 15.2952C124.511 15.2952 123.05 15.6873 121.987 16.4717C120.925 17.2561 120.391 18.4326 120.391 19.9966C120.391 21.374 120.838 22.4118 121.737 23.1101C122.636 23.8132 123.997 24.368 125.819 24.7793L128.185 25.315C131.031 25.9463 133.093 26.9124 134.362 28.2037C135.632 29.4951 136.271 31.2168 136.271 33.3595C136.271 34.6795 136.045 35.8752 135.588 36.9465C135.132 38.0179 134.473 38.9266 133.617 39.6679C132.762 40.4092 131.718 40.9879 130.487 41.3992C129.257 41.8106 127.867 42.0162 126.319 42.0162V42.0114Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M153.848 38.0895H153.684C153.463 38.5822 153.194 39.0652 152.877 39.5387C152.559 40.017 152.165 40.4379 151.694 40.8061C151.223 41.1744 150.655 41.4661 149.992 41.6861C149.328 41.9062 148.554 42.0114 147.67 42.0114C145.458 42.0114 143.703 41.3035 142.405 39.8878C141.107 38.4722 140.458 36.473 140.458 33.8855V20.2356H143.776V33.3403C143.776 37.1713 145.405 39.0843 148.67 39.0843C149.333 39.0843 149.978 39.003 150.598 38.8356C151.218 38.673 151.771 38.4243 152.256 38.0895C152.742 37.7595 153.127 37.3387 153.42 36.8269C153.708 36.3151 153.857 35.703 153.857 34.9856V20.2309H157.175V41.514H153.857V38.0895H153.848Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M162.925 20.2309H166.242V23.6553H166.406C166.959 22.3209 167.767 21.3357 168.834 20.6948C169.896 20.0539 171.175 19.7335 172.67 19.7335C173.997 19.7335 175.199 19.9965 176.276 20.5178C177.353 21.0392 178.271 21.7853 179.031 22.7466C179.791 23.7079 180.372 24.8797 180.771 26.2523C181.171 27.6297 181.372 29.165 181.372 30.8724C181.372 32.5799 181.171 34.1151 180.771 35.4925C180.372 36.87 179.791 38.0369 179.031 38.9983C178.271 39.9596 177.353 40.7057 176.276 41.227C175.199 41.7483 173.997 42.0114 172.67 42.0114C169.767 42.0114 167.68 40.7057 166.411 38.0896H166.247V49.7642H162.93V20.2309H162.925ZM171.757 39.0796C173.637 39.0796 175.118 38.4913 176.195 37.3195C177.271 36.143 177.81 34.603 177.81 32.6946V29.0454C177.81 27.1371 177.271 25.5971 176.195 24.4253C175.118 23.2488 173.637 22.6653 171.757 22.6653C171.012 22.6653 170.3 22.7705 169.622 22.9762C168.944 23.1818 168.358 23.4688 167.858 23.8275C167.363 24.1862 166.968 24.6214 166.675 25.1332C166.387 25.6449 166.238 26.1901 166.238 26.7689V34.7273C166.238 35.416 166.382 36.033 166.675 36.5734C166.968 37.1139 167.358 37.5682 167.858 37.9413C168.358 38.3143 168.944 38.5965 169.622 38.7926C170.3 38.9839 171.012 39.0844 171.757 39.0844V39.0796Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M185.69 41.514V20.2309H189.007V24.1479H189.214C189.598 23.1292 190.291 22.2253 191.286 21.4265C192.281 20.6278 193.646 20.2309 195.392 20.2309H196.675V23.5309H194.728C192.93 23.5309 191.526 23.8657 190.521 24.5401C189.512 25.2145 189.007 26.061 189.007 27.0749V41.5092H185.69V41.514Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M207.454 42.0114C205.988 42.0114 204.67 41.7483 203.493 41.227C202.32 40.7057 201.31 39.9548 200.464 38.9791C199.622 38.0035 198.968 36.8365 198.517 35.4734C198.06 34.1103 197.834 32.5799 197.834 30.8724C197.834 29.165 198.06 27.668 198.517 26.2954C198.973 24.9227 199.622 23.7462 200.464 22.7705C201.305 21.7948 202.315 21.0439 203.493 20.5226C204.666 20.0013 205.988 19.7383 207.454 19.7383C208.921 19.7383 210.175 19.9965 211.31 20.5178C212.445 21.0392 213.411 21.7566 214.214 22.6748C215.017 23.5931 215.627 24.6836 216.06 25.9414C216.488 27.2041 216.704 28.5863 216.704 30.0928V31.6568H201.324V32.6468C201.324 33.5555 201.469 34.3973 201.762 35.1817C202.05 35.966 202.469 36.6452 203.007 37.2239C203.545 37.8026 204.209 38.2569 204.997 38.587C205.786 38.917 206.675 39.0796 207.671 39.0796C209.026 39.0796 210.204 38.7639 211.214 38.1326C212.223 37.5013 213.002 36.5926 213.555 35.4112L215.921 37.1139C215.228 38.5822 214.151 39.7635 212.685 40.6627C211.219 41.5618 209.478 42.0114 207.459 42.0114H207.454ZM207.454 22.4979C206.541 22.4979 205.714 22.6557 204.969 22.9714C204.223 23.287 203.579 23.7318 203.041 24.3057C202.502 24.8797 202.079 25.554 201.776 26.3336C201.473 27.1132 201.319 27.9645 201.319 28.8972V29.1841H213.137V28.7345C213.137 26.8502 212.618 25.3388 211.584 24.2053C210.55 23.0718 209.171 22.5027 207.459 22.5027L207.454 22.4979Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M220.887 41.514V20.2309H224.204V23.6553H224.368C224.618 23.1101 224.902 22.6031 225.219 22.1248C225.536 21.6466 225.926 21.2352 226.382 20.8813C226.839 20.5274 227.368 20.25 227.978 20.0443C228.584 19.8387 229.305 19.7383 230.137 19.7383C231.546 19.7383 232.844 20.073 234.036 20.7378C235.224 21.4074 236.108 22.5027 236.69 24.0284H236.772C237.156 22.8853 237.882 21.8809 238.95 21.0248C240.012 20.1687 241.459 19.7383 243.282 19.7383C245.464 19.7383 247.171 20.4461 248.402 21.8618C249.633 23.2775 250.248 25.2766 250.248 27.8641V41.514H246.931V28.4093C246.931 26.5058 246.556 25.0758 245.81 24.1097C245.065 23.1435 243.878 22.6605 242.243 22.6605C241.58 22.6605 240.95 22.7418 240.358 22.9092C239.762 23.0766 239.233 23.3205 238.762 23.6553C238.291 23.9853 237.921 24.4062 237.642 24.9179C237.363 25.4297 237.229 26.0275 237.229 26.7162V41.514H233.911V28.4093C233.911 26.5058 233.536 25.0758 232.791 24.1097C232.046 23.1435 230.882 22.6605 229.31 22.6605C228.647 22.6605 228.012 22.7418 227.402 22.9092C226.791 23.0766 226.252 23.3205 225.786 23.6553C225.315 23.9853 224.935 24.4062 224.647 24.9179C224.358 25.4297 224.209 26.0275 224.209 26.7162V41.514H220.892H220.887Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M263.84 42.0114C262.373 42.0114 261.056 41.7483 259.878 41.227C258.705 40.7057 257.695 39.9548 256.849 38.9791C256.008 38.0035 255.359 36.8365 254.902 35.4734C254.445 34.1103 254.219 32.5799 254.219 30.8724C254.219 29.165 254.445 27.668 254.902 26.2954C255.359 24.9227 256.008 23.7462 256.849 22.7705C257.69 21.7948 258.7 21.0439 259.878 20.5226C261.051 20.0013 262.373 19.7383 263.84 19.7383C265.306 19.7383 266.561 19.9965 267.695 20.5178C268.83 21.0392 269.796 21.7566 270.599 22.6748C271.402 23.5931 272.018 24.6836 272.445 25.9414C272.873 27.2041 273.09 28.5863 273.09 30.0928V31.6568H257.71V32.6468C257.71 33.5555 257.854 34.3973 258.147 35.1817C258.436 35.966 258.854 36.6452 259.392 37.2239C259.931 37.8026 260.594 38.2569 261.383 38.587C262.171 38.917 263.061 39.0796 264.056 39.0796C265.412 39.0796 266.59 38.7639 267.599 38.1326C268.609 37.5013 269.388 36.5926 269.941 35.4112L272.306 37.1139C271.614 38.5822 270.537 39.7635 269.07 40.6627C267.604 41.5618 265.864 42.0114 263.844 42.0114H263.84ZM263.84 22.4979C262.926 22.4979 262.099 22.6557 261.354 22.9714C260.609 23.287 259.964 23.7318 259.426 24.3057C258.888 24.8797 258.464 25.554 258.162 26.3336C257.859 27.1132 257.705 27.9645 257.705 28.8972V29.1841H269.522V28.7345C269.522 26.8502 269.003 25.3388 267.969 24.2053C266.936 23.0718 265.556 22.5027 263.844 22.5027L263.84 22.4979Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M116.072 81.4354V78.5466H120.135V55.5322H116.072V52.6434H127.683V55.5322H123.62V78.5466H127.683V81.4354H116.072Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M132.409 81.4354V60.1523H135.726V63.5767H135.89C136.414 62.381 137.154 61.4245 138.106 60.7166C139.058 60.0088 140.337 59.6549 141.943 59.6549C144.154 59.6549 145.904 60.3627 147.188 61.7784C148.472 63.1941 149.116 65.1933 149.116 67.7807V81.4306H145.799V68.326C145.799 64.495 144.183 62.5819 140.948 62.5819C140.284 62.5819 139.64 62.6632 139.02 62.8306C138.399 62.998 137.837 63.2419 137.342 63.5767C136.847 63.9067 136.452 64.3276 136.159 64.8393C135.871 65.3511 135.722 65.9489 135.722 66.6377V81.4354H132.404H132.409Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M159.4 81.4354C158.241 81.4354 157.361 81.1149 156.765 80.4693C156.169 79.8236 155.876 78.9819 155.876 77.9392V63.0841H152.352V60.1571H154.342C155.058 60.1571 155.549 60.0136 155.813 59.7218C156.078 59.4349 156.207 58.9327 156.207 58.2153V54.2552H159.193V60.1523H163.881V63.0793H159.193V78.5036H163.544V81.4306H159.4V81.4354Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M175.818 81.928C174.352 81.928 173.034 81.665 171.857 81.1436C170.683 80.6223 169.674 79.8714 168.828 78.8958C167.986 77.9201 167.337 76.7531 166.881 75.39C166.424 74.027 166.198 72.4965 166.198 70.789C166.198 69.0816 166.424 67.5846 166.881 66.212C167.337 64.8393 167.986 63.6628 168.828 62.6871C169.669 61.7114 170.679 60.9606 171.857 60.4392C173.03 59.9179 174.352 59.6549 175.818 59.6549C177.284 59.6549 178.539 59.9131 179.674 60.4345C180.809 60.9558 181.775 61.6732 182.578 62.5915C183.381 63.5097 183.996 64.6002 184.424 65.8581C184.852 67.1207 185.068 68.5029 185.068 70.0095V71.5734H169.688V72.5634C169.688 73.4722 169.832 74.3139 170.126 75.0983C170.414 75.8827 170.832 76.5618 171.371 77.1405C171.909 77.7192 172.573 78.1736 173.361 78.5036C174.15 78.8336 175.039 78.9962 176.034 78.9962C177.39 78.9962 178.568 78.6805 179.578 78.0492C180.587 77.4179 181.366 76.5092 181.919 75.3279L184.285 77.0305C183.592 78.4988 182.515 79.6801 181.049 80.5793C179.583 81.4784 177.842 81.928 175.823 81.928H175.818ZM175.818 62.4193C174.905 62.4193 174.078 62.5771 173.333 62.8928C172.587 63.2084 171.943 63.6532 171.405 64.2272C170.866 64.8011 170.443 65.4754 170.14 66.255C169.837 67.0346 169.683 67.8859 169.683 68.8186V69.1055H181.501V68.656C181.501 66.7716 180.982 65.2602 179.948 64.1267C178.914 62.9932 177.534 62.4241 175.823 62.4241L175.818 62.4193Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M192.775 81.4354C191.612 81.4354 190.737 81.1102 190.141 80.4645C189.544 79.8188 189.251 79.001 189.251 78.0109V50.912H192.568V78.5036H195.722V81.4306H192.78L192.775 81.4354Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M202.564 81.4354C201.4 81.4354 200.525 81.1102 199.929 80.4645C199.333 79.8188 199.04 79.001 199.04 78.0109V50.912H202.357V78.5036H205.506V81.4306H202.564V81.4354Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M210.689 55.1639C209.968 55.1639 209.453 54.9917 209.136 54.6473C208.819 54.303 208.66 53.8582 208.66 53.3082V52.7725C208.66 52.2225 208.819 51.7777 209.136 51.4334C209.453 51.089 209.972 50.9168 210.689 50.9168C211.405 50.9168 211.924 51.089 212.242 51.4334C212.559 51.7777 212.718 52.2225 212.718 52.7725V53.3082C212.718 53.8582 212.559 54.303 212.242 54.6473C211.924 54.9917 211.405 55.1639 210.689 55.1639ZM209.03 60.1522H212.348V81.4354H209.03V60.1522Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M236.146 83.8076C236.146 85.9981 235.281 87.6099 233.555 88.6381C231.829 89.6664 229.237 90.1782 225.78 90.1782C222.324 90.1782 220.03 89.7238 218.564 88.8199C217.098 87.9112 216.367 86.6246 216.367 84.9459C216.367 83.7932 216.67 82.8941 217.28 82.2484C217.886 81.6028 218.718 81.1293 219.766 80.828V80.3736C218.492 79.771 217.857 78.7857 217.857 77.4179C217.857 76.3513 218.203 75.5383 218.896 74.9739C219.588 74.4143 220.473 73.9934 221.55 73.7208V73.5582C220.28 72.9508 219.29 72.0851 218.588 70.9516C217.881 69.8229 217.53 68.5125 217.53 67.0202C217.53 65.9441 217.723 64.9493 218.112 64.0406C218.497 63.1319 219.045 62.3523 219.752 61.7019C220.458 61.0514 221.3 60.5492 222.28 60.1905C223.261 59.8318 224.362 59.6501 225.579 59.6501C227.098 59.6501 228.454 59.9275 229.641 60.4727V60.0996C229.641 59.2675 229.833 58.574 230.223 58.0287C230.607 57.4835 231.247 57.2109 232.131 57.2109H235.324V60.1379H231.261V61.501C232.035 62.1658 232.636 62.9549 233.064 63.878C233.492 64.8011 233.708 65.8437 233.708 67.0011C233.708 68.0772 233.516 69.0672 233.127 69.9807C232.737 70.8895 232.194 71.669 231.487 72.3195C230.781 72.9699 229.934 73.4721 228.939 73.8308C227.944 74.1895 226.838 74.3665 225.622 74.3665C224.929 74.3665 224.237 74.2995 223.55 74.1608C222.829 74.3521 222.179 74.6343 221.603 75.0074C221.021 75.3804 220.732 75.8922 220.732 76.5522C220.732 77.2122 221.035 77.6092 221.646 77.8292C222.252 78.0492 223.04 78.1592 224.011 78.1592H228.574C231.228 78.1592 233.156 78.6614 234.357 79.661C235.559 80.6606 236.16 82.038 236.16 83.7932L236.146 83.8076ZM233.035 84.0324C233.035 83.181 232.708 82.4971 232.059 81.9902C231.41 81.4832 230.256 81.2249 228.598 81.2249H221.468C220.141 81.8275 219.477 82.7936 219.477 84.1137C219.477 85.0463 219.828 85.845 220.535 86.505C221.242 87.1651 222.434 87.4951 224.122 87.4951H227.189C229.04 87.4951 230.478 87.2081 231.502 86.6294C232.526 86.0507 233.035 85.185 233.035 84.0324ZM225.612 71.7408C227.021 71.7408 228.141 71.4012 228.973 70.7268C229.805 70.0525 230.218 69.0098 230.218 67.5989V66.4367C230.218 65.0306 229.805 63.988 228.973 63.3088C228.141 62.6297 227.026 62.2949 225.612 62.2949C224.199 62.2949 223.083 62.6345 222.252 63.3088C221.425 63.9832 221.006 65.0306 221.006 66.4367V67.5989C221.006 69.0098 221.42 70.0477 222.252 70.7268C223.079 71.4012 224.199 71.7408 225.612 71.7408Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M246.511 81.928C245.045 81.928 243.728 81.665 242.55 81.1436C241.377 80.6223 240.367 79.8714 239.521 78.8958C238.68 77.9201 238.031 76.7531 237.574 75.39C237.117 74.027 236.891 72.4965 236.891 70.789C236.891 69.0816 237.117 67.5846 237.574 66.212C238.031 64.8393 238.68 63.6628 239.521 62.6871C240.362 61.7114 241.372 60.9606 242.55 60.4392C243.723 59.9179 245.045 59.6549 246.511 59.6549C247.978 59.6549 249.233 59.9131 250.367 60.4345C251.502 60.9558 252.468 61.6732 253.271 62.5915C254.074 63.5097 254.689 64.6002 255.117 65.8581C255.545 67.1207 255.762 68.5029 255.762 70.0095V71.5734H240.382V72.5634C240.382 73.4722 240.526 74.3139 240.819 75.0983C241.108 75.8827 241.526 76.5618 242.064 77.1405C242.603 77.7192 243.266 78.1736 244.055 78.5036C244.843 78.8336 245.733 78.9962 246.728 78.9962C248.084 78.9962 249.261 78.6805 250.271 78.0492C251.281 77.4179 252.06 76.5092 252.612 75.3279L254.978 77.0305C254.286 78.4988 253.209 79.6801 251.742 80.5793C250.276 81.4784 248.535 81.928 246.516 81.928H246.511ZM246.511 62.4193C245.598 62.4193 244.771 62.5771 244.026 62.8928C243.281 63.2084 242.636 63.6532 242.098 64.2272C241.559 64.8011 241.136 65.4754 240.833 66.255C240.531 67.0346 240.377 67.8859 240.377 68.8186V69.1055H252.194V68.656C252.194 66.7716 251.675 65.2602 250.641 64.1267C249.608 62.9932 248.228 62.4241 246.516 62.4241L246.511 62.4193Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M259.944 81.4354V60.1523H263.262V63.5767H263.43C263.954 62.381 264.694 61.4245 265.646 60.7166C266.598 60.0088 267.877 59.6549 269.483 59.6549C271.694 59.6549 273.444 60.3627 274.728 61.7784C276.012 63.1941 276.656 65.1933 276.656 67.7807V81.4306H273.339V68.326C273.339 64.495 271.723 62.5819 268.488 62.5819C267.824 62.5819 267.18 62.6632 266.56 62.8306C265.94 62.998 265.377 63.2419 264.882 63.5767C264.382 63.9067 263.992 64.3276 263.699 64.8393C263.411 65.3511 263.262 65.9489 263.262 66.6377V81.4354H259.944Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M290.171 81.928C288.68 81.928 287.339 81.665 286.147 81.1437C284.959 80.6223 283.954 79.881 283.142 78.9149C282.324 77.9536 281.704 76.7866 281.276 75.4092C280.848 74.0365 280.632 72.4965 280.632 70.7891C280.632 69.0816 280.844 67.5464 281.276 66.169C281.704 64.7963 282.324 63.6246 283.142 62.6632C283.954 61.7019 284.959 60.9606 286.147 60.4345C287.334 59.9132 288.676 59.6501 290.171 59.6501C292.301 59.6501 294.007 60.1092 295.291 61.0323C296.575 61.9554 297.536 63.1558 298.171 64.6433L295.392 66.0446C295.003 64.9446 294.368 64.0933 293.483 63.4859C292.599 62.8832 291.493 62.5771 290.166 62.5771C289.171 62.5771 288.3 62.735 287.555 63.0506C286.81 63.3663 286.185 63.8063 285.69 64.3707C285.19 64.935 284.82 65.6094 284.57 66.3937C284.32 67.1781 284.199 68.039 284.199 68.9716V72.6017C284.199 74.4718 284.704 76.0022 285.714 77.2027C286.724 78.3984 288.209 78.9962 290.171 78.9962C292.853 78.9962 294.786 77.7575 295.974 75.2848L298.378 76.8918C297.685 78.4319 296.656 79.6562 295.286 80.5649C293.916 81.4737 292.209 81.928 290.166 81.928H290.171Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M309.575 81.928C308.108 81.928 306.791 81.665 305.613 81.1436C304.435 80.6223 303.43 79.8714 302.584 78.8958C301.738 77.9201 301.089 76.7531 300.637 75.39C300.18 74.027 299.954 72.4965 299.954 70.789C299.954 69.0816 300.18 67.5846 300.637 66.212C301.094 64.8393 301.743 63.6628 302.584 62.6871C303.425 61.7114 304.435 60.9606 305.613 60.4392C306.786 59.9179 308.108 59.6549 309.575 59.6549C311.041 59.6549 312.296 59.9131 313.43 60.4345C314.565 60.9558 315.531 61.6732 316.334 62.5915C317.137 63.5097 317.753 64.6002 318.18 65.8581C318.608 67.1159 318.825 68.5029 318.825 70.0095V71.5734H303.445V72.5634C303.445 73.4722 303.589 74.3139 303.882 75.0983C304.171 75.8827 304.589 76.5618 305.127 77.1405C305.666 77.7192 306.329 78.1736 307.118 78.5036C307.906 78.8336 308.796 78.9962 309.791 78.9962C311.147 78.9962 312.325 78.6805 313.334 78.0492C314.344 77.4179 315.123 76.5092 315.676 75.3279L318.041 77.0305C317.349 78.4988 316.272 79.6801 314.805 80.5793C313.339 81.4784 311.599 81.928 309.579 81.928H309.575ZM309.575 62.4193C308.661 62.4193 307.834 62.5771 307.089 62.8928C306.344 63.2084 305.699 63.6532 305.161 64.2272C304.623 64.8011 304.199 65.4754 303.897 66.255C303.594 67.0346 303.44 67.8859 303.44 68.8186V69.1055H315.257V68.656C315.257 66.7716 314.738 65.2602 313.704 64.1267C312.666 62.9932 311.291 62.4241 309.579 62.4241L309.575 62.4193Z",
        fill: "#392C44"
      }
    )
  ] }),
  /* @__PURE__ */ jsxs9("defs", { children: [
    /* @__PURE__ */ jsxs9(
      "radialGradient",
      {
        id: "paint0_radial_1668_1288",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(53.0473 88.0189) rotate(85.8187) scale(40.2243 72.7587)",
        children: [
          /* @__PURE__ */ jsx10("stop", { stopColor: "#3830B7" }),
          /* @__PURE__ */ jsx10("stop", { offset: "1", stopColor: "#392D43" })
        ]
      }
    ),
    /* @__PURE__ */ jsx10("clipPath", { id: "clip0_1668_1288", children: /* @__PURE__ */ jsx10("rect", { width: "318.821", height: "94.2818", fill: "white" }) })
  ] })
] }));
SupremeIntelligenceOriginalText.displayName = "SupremeIntelligenceOriginalText";
var SupremeIntelligenceOriginalIcon = React10.forwardRef(({ className, viewpoint, ...props }, ref) => /* @__PURE__ */ jsxs9(
  "svg",
  {
    width: "95",
    height: "95",
    viewBox: viewpoint || "0 0 95 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx10("g", { clipPath: "url(#clip0_1844_1347)", children: /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M0 0.281769V94.5635H94.7752V0.281769H0ZM55.7218 66.3455C54.0247 68.6938 51.717 70.4873 48.7891 71.7356C45.866 72.9839 42.5823 73.6057 38.9476 73.6057C33.2456 73.6057 28.5773 72.2856 24.9378 69.6456C21.2983 67.0055 19.0627 63.2415 18.2262 58.3488H24.4186C25.2551 61.7206 26.8994 64.2794 29.3561 66.0155C31.8129 67.7516 35.0341 68.6173 39.0149 68.6173C42.9957 68.6173 45.9573 67.7277 48.3419 65.939C50.7266 64.155 51.9189 61.7971 51.9189 58.8605C51.9189 56.3161 51.217 54.3026 49.8179 52.8104C48.4189 51.3182 46.241 50.2803 43.2938 49.6921L31.0533 47.2003C27.0724 46.4207 24.1109 45.0385 22.1685 43.0584C20.2262 41.0784 19.255 38.3044 19.255 34.7317C19.255 31.8477 20.1156 29.3894 21.8368 27.3615C23.558 25.3337 25.8561 23.8032 28.7311 22.7797C31.6062 21.7514 34.7649 21.2397 38.2072 21.2397C43.515 21.2397 47.7939 22.4401 51.0343 24.8315C54.2795 27.2276 56.2218 30.676 56.8613 35.1717H50.6689C50.0775 32.1395 48.6881 29.8772 46.5054 28.385C44.3179 26.8928 41.5053 26.1467 38.063 26.1467C34.3754 26.1467 31.3754 26.8689 29.0677 28.3085C26.7551 29.7529 25.6013 31.7664 25.6013 34.3587C25.6013 36.6065 26.1782 38.3331 27.3321 39.5288C28.4859 40.7292 30.3658 41.5949 32.9716 42.1306L45.7986 44.6989C50.0247 45.5311 53.1593 47.0233 55.1978 49.1707C57.2363 51.323 58.2555 54.3026 58.2555 58.1192C58.2555 61.2471 57.4094 63.9876 55.7122 66.3359L55.7218 66.3455ZM76.549 73.0939H70.2797V40.3801H63.4239V35.4635H76.549V73.0891V73.0939Z",
          fill: "url(#paint0_radial_1844_1347)"
        }
      ) }),
      /* @__PURE__ */ jsxs9("defs", { children: [
        /* @__PURE__ */ jsxs9(
          "radialGradient",
          {
            id: "paint0_radial_1844_1347",
            cx: "0",
            cy: "0",
            r: "1",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "translate(53.0473 88.3007) rotate(85.8187) scale(40.2243 72.7587)",
            children: [
              /* @__PURE__ */ jsx10("stop", { stopColor: "#3830B7" }),
              /* @__PURE__ */ jsx10("stop", { offset: "1", stopColor: "#392D43" })
            ]
          }
        ),
        /* @__PURE__ */ jsx10("clipPath", { id: "clip0_1844_1347", children: /* @__PURE__ */ jsx10(
          "rect",
          {
            width: "94.28",
            height: "94.2818",
            fill: "white",
            transform: "translate(0 0.281769)"
          }
        ) })
      ] })
    ]
  }
));
SupremeIntelligenceOriginalIcon.displayName = "SupremeIntelligenceOriginalIcon";
var SupremeIntelligenceWhiteText = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs9("svg", { viewBox: "0 0 319 95", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsxs9("g", { clipPath: "url(#clip0_1844_1453)", children: [
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M0 0V94.2818H94.7752V0H0ZM55.7218 66.0637C54.0247 68.412 51.717 70.2056 48.7891 71.4538C45.866 72.7021 42.5823 73.3239 38.9476 73.3239C33.2456 73.3239 28.5773 72.0039 24.9378 69.3638C21.2983 66.7237 19.0627 62.9597 18.2262 58.067H24.4186C25.2551 61.4388 26.8994 63.9976 29.3561 65.7337C31.8129 67.4698 35.0341 68.3355 39.0149 68.3355C42.9957 68.3355 45.9573 67.4459 48.3419 65.6572C50.7266 63.8732 51.9189 61.5154 51.9189 58.5788C51.9189 56.0344 51.217 54.0208 49.8179 52.5286C48.4189 51.0364 46.241 49.9986 43.2938 49.4103L31.0533 46.9185C27.0724 46.1389 24.1109 44.7567 22.1685 42.7767C20.2262 40.7966 19.255 38.0226 19.255 34.4499C19.255 31.566 20.1156 29.1076 21.8368 27.0798C23.558 25.0519 25.8561 23.5214 28.7311 22.4979C31.6062 21.4696 34.7649 20.9579 38.2072 20.9579C43.515 20.9579 47.7939 22.1583 51.0343 24.5497C54.2795 26.9459 56.2218 30.3942 56.8613 34.8899H50.6689C50.0775 31.8577 48.6881 29.5955 46.5054 28.1033C44.3179 26.6111 41.5053 25.865 38.063 25.865C34.3754 25.865 31.3754 26.5871 29.0677 28.0267C26.7551 29.4711 25.6013 31.4847 25.6013 34.0769C25.6013 36.3248 26.1782 38.0513 27.3321 39.247C28.4859 40.4475 30.3658 41.3131 32.9716 41.8488L45.7986 44.4171C50.0247 45.2493 53.1593 46.7415 55.1978 48.889C57.2363 51.0412 58.2555 54.0208 58.2555 57.8374C58.2555 60.9653 57.4094 63.7058 55.7122 66.0542L55.7218 66.0637ZM76.549 72.8121H70.2797V40.0983H63.4239V35.1817H76.549V72.8074V72.8121Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M126.319 42.0114C123.968 42.0114 121.963 41.5619 120.309 40.6723C118.651 39.7779 117.242 38.5487 116.079 36.98L118.651 34.8374C119.675 36.1861 120.805 37.2096 122.05 37.9079C123.295 38.6109 124.757 38.9601 126.444 38.9601C128.516 38.9601 130.098 38.4674 131.189 37.4774C132.281 36.4874 132.829 35.1674 132.829 33.5173C132.829 32.1447 132.415 31.0829 131.584 30.3416C130.757 29.6003 129.386 29.0072 127.478 28.5672L125.112 28.0315C122.459 27.4289 120.434 26.5106 119.04 25.291C117.646 24.0667 116.944 22.3401 116.944 20.1161C116.944 18.8535 117.18 17.7248 117.651 16.7348C118.122 15.7447 118.776 14.9221 119.622 14.2621C120.468 13.6021 121.473 13.0999 122.651 12.7555C123.824 12.4112 125.117 12.239 126.526 12.239C128.709 12.239 130.584 12.636 132.146 13.4347C133.709 14.2334 135.026 15.4004 136.108 16.9404L133.497 18.8392C132.694 17.7391 131.728 16.8735 130.593 16.2421C129.459 15.6108 128.05 15.2952 126.362 15.2952C124.511 15.2952 123.05 15.6873 121.987 16.4717C120.925 17.2561 120.391 18.4326 120.391 19.9966C120.391 21.374 120.838 22.4118 121.737 23.1101C122.636 23.8132 123.997 24.368 125.819 24.7793L128.185 25.315C131.031 25.9463 133.093 26.9124 134.362 28.2037C135.632 29.4951 136.271 31.2168 136.271 33.3595C136.271 34.6795 136.045 35.8752 135.588 36.9465C135.132 38.0179 134.473 38.9266 133.617 39.6679C132.762 40.4092 131.718 40.9879 130.487 41.3992C129.257 41.8106 127.867 42.0162 126.319 42.0162V42.0114Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M153.848 38.0895H153.684C153.463 38.5822 153.194 39.0652 152.877 39.5387C152.559 40.017 152.165 40.4379 151.694 40.8061C151.223 41.1744 150.655 41.4662 149.992 41.6862C149.328 41.9062 148.554 42.0114 147.67 42.0114C145.458 42.0114 143.703 41.3035 142.405 39.8879C141.107 38.4722 140.458 36.473 140.458 33.8855V20.2356H143.776V33.3403C143.776 37.1713 145.405 39.0844 148.67 39.0844C149.333 39.0844 149.978 39.003 150.598 38.8357C151.218 38.673 151.771 38.4243 152.256 38.0895C152.742 37.7595 153.127 37.3387 153.42 36.8269C153.708 36.3152 153.857 35.703 153.857 34.9856V20.2309H157.175V41.514H153.857V38.0895H153.848Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M162.925 20.2309H166.242V23.6553H166.406C166.959 22.3209 167.767 21.3357 168.834 20.6948C169.896 20.0539 171.175 19.7335 172.67 19.7335C173.997 19.7335 175.199 19.9965 176.276 20.5178C177.353 21.0392 178.271 21.7853 179.031 22.7466C179.791 23.7079 180.372 24.8797 180.771 26.2523C181.171 27.6297 181.372 29.165 181.372 30.8724C181.372 32.5799 181.171 34.1151 180.771 35.4925C180.372 36.87 179.791 38.0369 179.031 38.9983C178.271 39.9596 177.353 40.7057 176.276 41.227C175.199 41.7483 173.997 42.0114 172.67 42.0114C169.767 42.0114 167.68 40.7057 166.411 38.0896H166.247V49.7642H162.93V20.2309H162.925ZM171.757 39.0796C173.637 39.0796 175.118 38.4913 176.195 37.3195C177.271 36.143 177.81 34.603 177.81 32.6946V29.0454C177.81 27.1371 177.271 25.5971 176.195 24.4253C175.118 23.2488 173.637 22.6653 171.757 22.6653C171.012 22.6653 170.3 22.7705 169.622 22.9762C168.944 23.1818 168.358 23.4688 167.858 23.8275C167.363 24.1862 166.968 24.6214 166.675 25.1332C166.387 25.6449 166.238 26.1901 166.238 26.7689V34.7273C166.238 35.416 166.382 36.033 166.675 36.5734C166.968 37.1139 167.358 37.5682 167.858 37.9413C168.358 38.3143 168.944 38.5965 169.622 38.7926C170.3 38.9839 171.012 39.0844 171.757 39.0844V39.0796Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M185.69 41.514V20.2309H189.007V24.1479H189.214C189.598 23.1292 190.291 22.2253 191.286 21.4265C192.281 20.6278 193.646 20.2309 195.392 20.2309H196.675V23.5309H194.728C192.93 23.5309 191.526 23.8657 190.521 24.5401C189.512 25.2145 189.007 26.061 189.007 27.0749V41.5092H185.69V41.514Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M207.454 42.0114C205.988 42.0114 204.67 41.7483 203.493 41.227C202.32 40.7057 201.31 39.9548 200.464 38.9791C199.622 38.0035 198.968 36.8365 198.517 35.4734C198.06 34.1103 197.834 32.5799 197.834 30.8724C197.834 29.165 198.06 27.668 198.517 26.2954C198.973 24.9227 199.622 23.7462 200.464 22.7705C201.305 21.7948 202.315 21.0439 203.493 20.5226C204.666 20.0013 205.988 19.7383 207.454 19.7383C208.921 19.7383 210.175 19.9965 211.31 20.5178C212.445 21.0392 213.411 21.7566 214.214 22.6748C215.017 23.5931 215.627 24.6836 216.06 25.9414C216.488 27.2041 216.704 28.5863 216.704 30.0928V31.6568H201.324V32.6468C201.324 33.5555 201.469 34.3973 201.762 35.1817C202.05 35.966 202.469 36.6452 203.007 37.2239C203.545 37.8026 204.209 38.2569 204.997 38.587C205.786 38.917 206.675 39.0796 207.671 39.0796C209.026 39.0796 210.204 38.7639 211.214 38.1326C212.223 37.5013 213.002 36.5926 213.555 35.4112L215.921 37.1139C215.228 38.5822 214.151 39.7635 212.685 40.6627C211.219 41.5618 209.478 42.0114 207.459 42.0114H207.454ZM207.454 22.4979C206.541 22.4979 205.714 22.6557 204.969 22.9714C204.223 23.287 203.579 23.7318 203.041 24.3057C202.502 24.8797 202.079 25.554 201.776 26.3336C201.473 27.1132 201.319 27.9645 201.319 28.8972V29.1841H213.137V28.7345C213.137 26.8502 212.618 25.3388 211.584 24.2053C210.55 23.0718 209.171 22.5027 207.459 22.5027L207.454 22.4979Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M220.887 41.514V20.2309H224.204V23.6553H224.368C224.618 23.1101 224.902 22.6031 225.219 22.1248C225.536 21.6466 225.926 21.2352 226.382 20.8813C226.839 20.5274 227.368 20.25 227.978 20.0443C228.584 19.8387 229.305 19.7383 230.137 19.7383C231.546 19.7383 232.844 20.073 234.036 20.7378C235.224 21.4074 236.108 22.5027 236.69 24.0284H236.772C237.156 22.8853 237.882 21.8809 238.95 21.0248C240.012 20.1687 241.459 19.7383 243.282 19.7383C245.464 19.7383 247.171 20.4461 248.402 21.8618C249.633 23.2775 250.248 25.2766 250.248 27.8641V41.514H246.931V28.4093C246.931 26.5058 246.556 25.0758 245.81 24.1097C245.065 23.1435 243.878 22.6605 242.243 22.6605C241.58 22.6605 240.95 22.7418 240.358 22.9092C239.762 23.0766 239.233 23.3205 238.762 23.6553C238.291 23.9853 237.921 24.4062 237.642 24.9179C237.363 25.4297 237.229 26.0275 237.229 26.7162V41.514H233.911V28.4093C233.911 26.5058 233.536 25.0758 232.791 24.1097C232.046 23.1435 230.882 22.6605 229.31 22.6605C228.647 22.6605 228.012 22.7418 227.402 22.9092C226.791 23.0766 226.252 23.3205 225.786 23.6553C225.315 23.9853 224.935 24.4062 224.647 24.9179C224.358 25.4297 224.209 26.0275 224.209 26.7162V41.514H220.892H220.887Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M263.84 42.0114C262.373 42.0114 261.056 41.7483 259.878 41.227C258.705 40.7057 257.695 39.9548 256.849 38.9791C256.008 38.0035 255.359 36.8365 254.902 35.4734C254.445 34.1103 254.219 32.5799 254.219 30.8724C254.219 29.165 254.445 27.668 254.902 26.2954C255.359 24.9227 256.008 23.7462 256.849 22.7705C257.69 21.7948 258.7 21.0439 259.878 20.5226C261.051 20.0013 262.373 19.7383 263.84 19.7383C265.306 19.7383 266.561 19.9965 267.695 20.5178C268.83 21.0392 269.796 21.7566 270.599 22.6748C271.402 23.5931 272.018 24.6836 272.445 25.9414C272.873 27.2041 273.09 28.5863 273.09 30.0928V31.6568H257.71V32.6468C257.71 33.5555 257.854 34.3973 258.147 35.1817C258.436 35.966 258.854 36.6452 259.392 37.2239C259.931 37.8026 260.594 38.2569 261.383 38.587C262.171 38.917 263.061 39.0796 264.056 39.0796C265.412 39.0796 266.59 38.7639 267.599 38.1326C268.609 37.5013 269.388 36.5926 269.941 35.4112L272.306 37.1139C271.614 38.5822 270.537 39.7635 269.07 40.6627C267.604 41.5618 265.864 42.0114 263.844 42.0114H263.84ZM263.84 22.4979C262.926 22.4979 262.099 22.6557 261.354 22.9714C260.609 23.287 259.964 23.7318 259.426 24.3057C258.888 24.8797 258.464 25.554 258.162 26.3336C257.859 27.1132 257.705 27.9645 257.705 28.8972V29.1841H269.522V28.7345C269.522 26.8502 269.003 25.3388 267.969 24.2053C266.936 23.0718 265.556 22.5027 263.844 22.5027L263.84 22.4979Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M116.072 81.4354V78.5466H120.135V55.5322H116.072V52.6434H127.683V55.5322H123.62V78.5466H127.683V81.4354H116.072Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M132.409 81.4354V60.1523H135.726V63.5767H135.89C136.414 62.381 137.154 61.4245 138.106 60.7166C139.058 60.0088 140.337 59.6549 141.943 59.6549C144.154 59.6549 145.904 60.3627 147.188 61.7784C148.472 63.1941 149.116 65.1933 149.116 67.7807V81.4306H145.799V68.326C145.799 64.495 144.183 62.5819 140.948 62.5819C140.284 62.5819 139.64 62.6632 139.02 62.8306C138.399 62.998 137.837 63.2419 137.342 63.5767C136.847 63.9067 136.452 64.3276 136.159 64.8393C135.871 65.3511 135.722 65.9489 135.722 66.6377V81.4354H132.404H132.409Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M159.4 81.4354C158.241 81.4354 157.361 81.1149 156.765 80.4693C156.169 79.8236 155.876 78.9818 155.876 77.9392V63.0841H152.352V60.157H154.342C155.058 60.157 155.549 60.0136 155.813 59.7218C156.078 59.4349 156.207 58.9327 156.207 58.2153V54.2552H159.193V60.1523H163.881V63.0793H159.193V78.5036H163.544V81.4306H159.4V81.4354Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M175.818 81.928C174.352 81.928 173.034 81.665 171.857 81.1436C170.683 80.6223 169.674 79.8714 168.828 78.8958C167.986 77.9201 167.337 76.7531 166.881 75.39C166.424 74.027 166.198 72.4965 166.198 70.789C166.198 69.0816 166.424 67.5846 166.881 66.212C167.337 64.8393 167.986 63.6628 168.828 62.6871C169.669 61.7114 170.679 60.9606 171.857 60.4392C173.03 59.9179 174.352 59.6549 175.818 59.6549C177.284 59.6549 178.539 59.9131 179.674 60.4345C180.809 60.9558 181.775 61.6732 182.578 62.5915C183.381 63.5097 183.996 64.6002 184.424 65.8581C184.852 67.1207 185.068 68.5029 185.068 70.0095V71.5734H169.688V72.5634C169.688 73.4722 169.832 74.3139 170.126 75.0983C170.414 75.8827 170.832 76.5618 171.371 77.1405C171.909 77.7192 172.573 78.1736 173.361 78.5036C174.15 78.8336 175.039 78.9962 176.034 78.9962C177.39 78.9962 178.568 78.6805 179.578 78.0492C180.587 77.4179 181.366 76.5092 181.919 75.3279L184.285 77.0305C183.592 78.4988 182.515 79.6801 181.049 80.5793C179.583 81.4784 177.842 81.928 175.823 81.928H175.818ZM175.818 62.4193C174.905 62.4193 174.078 62.5771 173.333 62.8928C172.587 63.2084 171.943 63.6532 171.405 64.2272C170.866 64.8011 170.443 65.4754 170.14 66.255C169.837 67.0346 169.683 67.8859 169.683 68.8186V69.1055H181.501V68.656C181.501 66.7716 180.982 65.2602 179.948 64.1267C178.914 62.9932 177.534 62.4241 175.823 62.4241L175.818 62.4193Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M192.775 81.4354C191.612 81.4354 190.737 81.1101 190.141 80.4645C189.544 79.8188 189.251 79.001 189.251 78.0109V50.912H192.568V78.5036H195.722V81.4306H192.78L192.775 81.4354Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M202.564 81.4354C201.4 81.4354 200.525 81.1101 199.929 80.4645C199.333 79.8188 199.04 79.001 199.04 78.0109V50.912H202.357V78.5036H205.506V81.4306H202.564V81.4354Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M210.689 55.1639C209.968 55.1639 209.453 54.9917 209.136 54.6473C208.819 54.303 208.66 53.8582 208.66 53.3082V52.7725C208.66 52.2225 208.819 51.7777 209.136 51.4333C209.453 51.089 209.972 50.9168 210.689 50.9168C211.405 50.9168 211.924 51.089 212.242 51.4333C212.559 51.7777 212.718 52.2225 212.718 52.7725V53.3082C212.718 53.8582 212.559 54.303 212.242 54.6473C211.924 54.9917 211.405 55.1639 210.689 55.1639ZM209.03 60.1522H212.348V81.4354H209.03V60.1522Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M236.146 83.8076C236.146 85.9981 235.281 87.6098 233.555 88.6381C231.829 89.6664 229.237 90.1782 225.78 90.1782C222.324 90.1782 220.03 89.7238 218.564 88.8199C217.098 87.9112 216.367 86.6246 216.367 84.9459C216.367 83.7932 216.67 82.8941 217.28 82.2484C217.886 81.6028 218.718 81.1293 219.766 80.8279V80.3736C218.492 79.771 217.857 78.7857 217.857 77.4179C217.857 76.3513 218.203 75.5383 218.896 74.9739C219.588 74.4143 220.473 73.9934 221.55 73.7208V73.5582C220.28 72.9508 219.29 72.0851 218.588 70.9516C217.881 69.8229 217.53 68.5124 217.53 67.0202C217.53 65.9441 217.723 64.9493 218.112 64.0406C218.497 63.1319 219.045 62.3523 219.752 61.7018C220.458 61.0514 221.3 60.5492 222.28 60.1905C223.261 59.8318 224.362 59.6501 225.579 59.6501C227.098 59.6501 228.454 59.9275 229.641 60.4727V60.0996C229.641 59.2674 229.833 58.574 230.223 58.0287C230.607 57.4835 231.247 57.2109 232.131 57.2109H235.324V60.1379H231.261V61.501C232.035 62.1658 232.636 62.9549 233.064 63.878C233.492 64.8011 233.708 65.8437 233.708 67.0011C233.708 68.0772 233.516 69.0672 233.127 69.9807C232.737 70.8895 232.194 71.669 231.487 72.3195C230.781 72.9699 229.934 73.4721 228.939 73.8308C227.944 74.1895 226.838 74.3665 225.622 74.3665C224.929 74.3665 224.237 74.2995 223.55 74.1608C222.829 74.3521 222.179 74.6343 221.603 75.0074C221.021 75.3804 220.732 75.8922 220.732 76.5522C220.732 77.2122 221.035 77.6092 221.646 77.8292C222.252 78.0492 223.04 78.1592 224.011 78.1592H228.574C231.228 78.1592 233.156 78.6614 234.357 79.661C235.559 80.6606 236.16 82.038 236.16 83.7932L236.146 83.8076ZM233.035 84.0324C233.035 83.181 232.708 82.4971 232.059 81.9901C231.41 81.4832 230.256 81.2249 228.598 81.2249H221.468C220.141 81.8275 219.477 82.7936 219.477 84.1137C219.477 85.0463 219.828 85.845 220.535 86.505C221.242 87.1651 222.434 87.4951 224.122 87.4951H227.189C229.04 87.4951 230.478 87.2081 231.502 86.6294C232.526 86.0507 233.035 85.185 233.035 84.0324ZM225.612 71.7408C227.021 71.7408 228.141 71.4012 228.973 70.7268C229.805 70.0525 230.218 69.0098 230.218 67.5989V66.4367C230.218 65.0306 229.805 63.988 228.973 63.3088C228.141 62.6297 227.026 62.2949 225.612 62.2949C224.199 62.2949 223.083 62.6345 222.252 63.3088C221.425 63.9832 221.006 65.0306 221.006 66.4367V67.5989C221.006 69.0098 221.42 70.0477 222.252 70.7268C223.079 71.4012 224.199 71.7408 225.612 71.7408Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M246.511 81.928C245.045 81.928 243.728 81.665 242.55 81.1436C241.377 80.6223 240.367 79.8714 239.521 78.8958C238.68 77.9201 238.031 76.7531 237.574 75.39C237.117 74.027 236.891 72.4965 236.891 70.789C236.891 69.0816 237.117 67.5846 237.574 66.212C238.031 64.8393 238.68 63.6628 239.521 62.6871C240.362 61.7114 241.372 60.9606 242.55 60.4392C243.723 59.9179 245.045 59.6549 246.511 59.6549C247.978 59.6549 249.233 59.9131 250.367 60.4345C251.502 60.9558 252.468 61.6732 253.271 62.5915C254.074 63.5097 254.689 64.6002 255.117 65.8581C255.545 67.1207 255.762 68.5029 255.762 70.0095V71.5734H240.382V72.5634C240.382 73.4722 240.526 74.3139 240.819 75.0983C241.108 75.8827 241.526 76.5618 242.064 77.1405C242.603 77.7192 243.266 78.1736 244.055 78.5036C244.843 78.8336 245.733 78.9962 246.728 78.9962C248.084 78.9962 249.261 78.6805 250.271 78.0492C251.281 77.4179 252.06 76.5092 252.612 75.3279L254.978 77.0305C254.286 78.4988 253.209 79.6801 251.742 80.5793C250.276 81.4784 248.535 81.928 246.516 81.928H246.511ZM246.511 62.4193C245.598 62.4193 244.771 62.5771 244.026 62.8928C243.281 63.2084 242.636 63.6532 242.098 64.2272C241.559 64.8011 241.136 65.4754 240.833 66.255C240.531 67.0346 240.377 67.8859 240.377 68.8186V69.1055H252.194V68.656C252.194 66.7716 251.675 65.2602 250.641 64.1267C249.608 62.9932 248.228 62.4241 246.516 62.4241L246.511 62.4193Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M259.944 81.4354V60.1523H263.262V63.5767H263.43C263.954 62.381 264.694 61.4245 265.646 60.7166C266.598 60.0088 267.877 59.6549 269.483 59.6549C271.694 59.6549 273.444 60.3627 274.728 61.7784C276.012 63.1941 276.656 65.1933 276.656 67.7807V81.4306H273.339V68.326C273.339 64.495 271.723 62.5819 268.488 62.5819C267.824 62.5819 267.18 62.6632 266.56 62.8306C265.94 62.998 265.377 63.2419 264.882 63.5767C264.382 63.9067 263.992 64.3276 263.699 64.8393C263.411 65.3511 263.262 65.9489 263.262 66.6377V81.4354H259.944Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M290.171 81.928C288.68 81.928 287.339 81.665 286.147 81.1437C284.959 80.6223 283.954 79.881 283.142 78.9149C282.324 77.9536 281.704 76.7866 281.276 75.4092C280.848 74.0365 280.632 72.4965 280.632 70.7891C280.632 69.0816 280.844 67.5464 281.276 66.169C281.704 64.7963 282.324 63.6245 283.142 62.6632C283.954 61.7019 284.959 60.9606 286.147 60.4345C287.334 59.9132 288.676 59.6501 290.171 59.6501C292.301 59.6501 294.007 60.1092 295.291 61.0323C296.575 61.9554 297.536 63.1558 298.171 64.6433L295.392 66.0446C295.003 64.9446 294.368 64.0933 293.483 63.4858C292.599 62.8832 291.493 62.5771 290.166 62.5771C289.171 62.5771 288.3 62.735 287.555 63.0506C286.81 63.3663 286.185 63.8063 285.69 64.3706C285.19 64.935 284.82 65.6094 284.57 66.3937C284.32 67.1781 284.199 68.039 284.199 68.9716V72.6017C284.199 74.4718 284.704 76.0022 285.714 77.2027C286.724 78.3984 288.209 78.9962 290.171 78.9962C292.853 78.9962 294.786 77.7575 295.974 75.2848L298.378 76.8918C297.685 78.4318 296.656 79.6562 295.286 80.5649C293.916 81.4737 292.209 81.928 290.166 81.928H290.171Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M309.575 81.928C308.108 81.928 306.791 81.665 305.613 81.1436C304.435 80.6223 303.43 79.8714 302.584 78.8958C301.738 77.9201 301.089 76.7531 300.637 75.39C300.18 74.027 299.954 72.4965 299.954 70.789C299.954 69.0816 300.18 67.5846 300.637 66.212C301.094 64.8393 301.743 63.6628 302.584 62.6871C303.425 61.7114 304.435 60.9606 305.613 60.4392C306.786 59.9179 308.108 59.6549 309.575 59.6549C311.041 59.6549 312.296 59.9131 313.43 60.4345C314.565 60.9558 315.531 61.6732 316.334 62.5915C317.137 63.5097 317.753 64.6002 318.18 65.8581C318.608 67.1159 318.825 68.5029 318.825 70.0095V71.5734H303.445V72.5634C303.445 73.4722 303.589 74.3139 303.882 75.0983C304.171 75.8827 304.589 76.5618 305.127 77.1405C305.666 77.7192 306.329 78.1736 307.118 78.5036C307.906 78.8336 308.796 78.9962 309.791 78.9962C311.147 78.9962 312.325 78.6805 313.334 78.0492C314.344 77.4179 315.123 76.5092 315.676 75.3279L318.041 77.0305C317.349 78.4988 316.272 79.6801 314.805 80.5793C313.339 81.4784 311.599 81.928 309.579 81.928H309.575ZM309.575 62.4193C308.661 62.4193 307.834 62.5771 307.089 62.8928C306.344 63.2084 305.699 63.6532 305.161 64.2272C304.623 64.8011 304.199 65.4754 303.897 66.255C303.594 67.0346 303.44 67.8859 303.44 68.8186V69.1055H315.257V68.656C315.257 66.7716 314.738 65.2602 313.704 64.1267C312.666 62.9932 311.291 62.4241 309.579 62.4241L309.575 62.4193Z",
        fill: "white"
      }
    )
  ] }),
  /* @__PURE__ */ jsx10("defs", { children: /* @__PURE__ */ jsx10("clipPath", { id: "clip0_1844_1453", children: /* @__PURE__ */ jsx10("rect", { width: "318.821", height: "94.2818", fill: "white" }) }) })
] }));
SupremeIntelligenceWhiteText.displayName = "SupremeIntelligenceWhiteText";
var SupremeIntelligenceWhiteIcon = React10.forwardRef(({ className, viewpoint, ...props }, ref) => /* @__PURE__ */ jsxs9(
  "svg",
  {
    width: "95",
    height: "95",
    viewBox: viewpoint || "0 0 95 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx10("g", { clipPath: "url(#clip0_1844_1478)", children: /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M0 0.281769V94.5635H94.7752V0.281769H0ZM55.7218 66.3455C54.0247 68.6938 51.717 70.4873 48.7891 71.7356C45.866 72.9839 42.5823 73.6057 38.9476 73.6057C33.2456 73.6057 28.5773 72.2856 24.9378 69.6456C21.2983 67.0055 19.0627 63.2415 18.2262 58.3488H24.4186C25.2551 61.7206 26.8994 64.2794 29.3561 66.0155C31.8129 67.7516 35.0341 68.6173 39.0149 68.6173C42.9957 68.6173 45.9573 67.7277 48.3419 65.939C50.7266 64.155 51.9189 61.7971 51.9189 58.8605C51.9189 56.3161 51.217 54.3026 49.8179 52.8104C48.4189 51.3182 46.241 50.2803 43.2938 49.6921L31.0533 47.2003C27.0724 46.4207 24.1109 45.0385 22.1685 43.0584C20.2262 41.0784 19.255 38.3044 19.255 34.7317C19.255 31.8477 20.1156 29.3894 21.8368 27.3615C23.558 25.3337 25.8561 23.8032 28.7311 22.7797C31.6062 21.7514 34.7649 21.2397 38.2072 21.2397C43.515 21.2397 47.7939 22.4401 51.0343 24.8315C54.2795 27.2276 56.2218 30.676 56.8613 35.1717H50.6689C50.0775 32.1395 48.6881 29.8772 46.5054 28.385C44.3179 26.8928 41.5053 26.1467 38.063 26.1467C34.3754 26.1467 31.3754 26.8689 29.0677 28.3085C26.7551 29.7529 25.6013 31.7664 25.6013 34.3587C25.6013 36.6065 26.1782 38.3331 27.3321 39.5288C28.4859 40.7292 30.3658 41.5949 32.9716 42.1306L45.7986 44.6989C50.0247 45.5311 53.1593 47.0233 55.1978 49.1707C57.2363 51.323 58.2555 54.3026 58.2555 58.1192C58.2555 61.2471 57.4094 63.9876 55.7122 66.3359L55.7218 66.3455ZM76.549 73.0939H70.2797V40.3801H63.4239V35.4635H76.549V73.0891V73.0939Z",
          fill: "white"
        }
      ) }),
      /* @__PURE__ */ jsx10("defs", { children: /* @__PURE__ */ jsx10("clipPath", { id: "clip0_1844_1478", children: /* @__PURE__ */ jsx10(
        "rect",
        {
          width: "94.28",
          height: "94.2818",
          fill: "white",
          transform: "translate(0 0.281769)"
        }
      ) }) })
    ]
  }
));
SupremeIntelligenceWhiteIcon.displayName = "SupremeIntelligenceWhiteIcon";
var SupremeIntelligenceBlackText = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs9("svg", { viewBox: "0 0 319 95", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsxs9("g", { clipPath: "url(#clip0_1844_1507)", children: [
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M0 -0.000457764V94.2813H94.7752V-0.000457764H0ZM55.7218 66.0633C54.0247 68.4116 51.717 70.2051 48.7891 71.4534C45.866 72.7017 42.5823 73.3234 38.9476 73.3234C33.2456 73.3234 28.5773 72.0034 24.9378 69.3633C21.2983 66.7233 19.0627 62.9593 18.2262 58.0666H24.4186C25.2551 61.4384 26.8994 63.9971 29.3561 65.7333C31.8129 67.4694 35.0341 68.3351 39.0149 68.3351C42.9957 68.3351 45.9573 67.4455 48.3419 65.6567C50.7266 63.8728 51.9189 61.5149 51.9189 58.5783C51.9189 56.0339 51.217 54.0204 49.8179 52.5282C48.4189 51.036 46.241 49.9981 43.2938 49.4098L31.0533 46.918C27.0724 46.1385 24.1109 44.7562 22.1685 42.7762C20.2262 40.7962 19.255 38.0222 19.255 34.4495C19.255 31.5655 20.1156 29.1072 21.8368 27.0793C23.558 25.0514 25.8561 23.521 28.7311 22.4975C31.6062 21.4692 34.7649 20.9574 38.2072 20.9574C43.515 20.9574 47.7939 22.1579 51.0343 24.5492C54.2795 26.9454 56.2218 30.3937 56.8613 34.8895H50.6689C50.0775 31.8572 48.6881 29.595 46.5054 28.1028C44.3179 26.6106 41.5053 25.8645 38.063 25.8645C34.3754 25.8645 31.3754 26.5867 29.0677 28.0263C26.7551 29.4707 25.6013 31.4842 25.6013 34.0764C25.6013 36.3243 26.1782 38.0509 27.3321 39.2465C28.4859 40.447 30.3658 41.3127 32.9716 41.8484L45.7986 44.4167C50.0247 45.2489 53.1593 46.7411 55.1978 48.8885C57.2363 51.0407 58.2555 54.0204 58.2555 57.837C58.2555 60.9649 57.4094 63.7054 55.7122 66.0537L55.7218 66.0633ZM76.549 72.8117H70.2797V40.0979H63.4239V35.1812H76.549V72.8069V72.8117Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M126.319 42.011C123.968 42.011 121.963 41.5614 120.309 40.6718C118.651 39.7774 117.242 38.5483 116.079 36.9795L118.651 34.8369C119.675 36.1856 120.805 37.2091 122.05 37.9074C123.295 38.6104 124.757 38.9596 126.444 38.9596C128.516 38.9596 130.098 38.467 131.189 37.4769C132.281 36.4869 132.829 35.1669 132.829 33.5169C132.829 32.1442 132.415 31.0824 131.584 30.3411C130.757 29.5998 129.386 29.0067 127.478 28.5667L125.112 28.0311C122.459 27.4284 120.434 26.5102 119.04 25.2906C117.646 24.0662 116.944 22.3396 116.944 20.1157C116.944 18.853 117.18 17.7243 117.651 16.7343C118.122 15.7443 118.776 14.9216 119.622 14.2616C120.468 13.6016 121.473 13.0994 122.651 12.7551C123.824 12.4107 125.117 12.2385 126.526 12.2385C128.709 12.2385 130.584 12.6355 132.146 13.4342C133.709 14.2329 135.026 15.3999 136.108 16.9399L133.497 18.8387C132.694 17.7387 131.728 16.873 130.593 16.2417C129.459 15.6103 128.05 15.2947 126.362 15.2947C124.511 15.2947 123.05 15.6869 121.987 16.4712C120.925 17.2556 120.391 18.4321 120.391 19.9961C120.391 21.3735 120.838 22.4114 121.737 23.1096C122.636 23.8127 123.997 24.3675 125.819 24.7788L128.185 25.3145C131.031 25.9458 133.093 26.9119 134.362 28.2032C135.632 29.4946 136.271 31.2164 136.271 33.359C136.271 34.6791 136.045 35.8747 135.588 36.9461C135.132 38.0174 134.473 38.9261 133.617 39.6674C132.762 40.4088 131.718 40.9875 130.487 41.3988C129.257 41.8101 127.867 42.0157 126.319 42.0157V42.011Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M153.848 38.0891H153.684C153.463 38.5817 153.194 39.0647 152.877 39.5382C152.559 40.0165 152.165 40.4374 151.694 40.8056C151.223 41.1739 150.655 41.4657 149.992 41.6857C149.328 41.9057 148.554 42.0109 147.67 42.0109C145.458 42.0109 143.703 41.303 142.405 39.8874C141.107 38.4717 140.458 36.4725 140.458 33.885V20.2352H143.776V33.3398C143.776 37.1708 145.405 39.0839 148.67 39.0839C149.333 39.0839 149.978 39.0026 150.598 38.8352C151.218 38.6726 151.771 38.4238 152.256 38.0891C152.742 37.7591 153.127 37.3382 153.42 36.8264C153.708 36.3147 153.857 35.7025 153.857 34.9851V20.2304H157.175V41.5135H153.857V38.0891H153.848Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M162.925 20.2304H166.242V23.6548H166.406C166.959 22.3205 167.767 21.3352 168.834 20.6943C169.896 20.0534 171.175 19.733 172.67 19.733C173.997 19.733 175.199 19.9961 176.276 20.5174C177.353 21.0387 178.271 21.7848 179.031 22.7461C179.791 23.7074 180.372 24.8792 180.771 26.2519C181.171 27.6293 181.372 29.1645 181.372 30.872C181.372 32.5794 181.171 34.1146 180.771 35.4921C180.372 36.8695 179.791 38.0365 179.031 38.9978C178.271 39.9591 177.353 40.7052 176.276 41.2265C175.199 41.7479 173.997 42.0109 172.67 42.0109C169.767 42.0109 167.68 40.7052 166.411 38.0891H166.247V49.7637H162.93V20.2304H162.925ZM171.757 39.0791C173.637 39.0791 175.118 38.4908 176.195 37.3191C177.271 36.1425 177.81 34.6025 177.81 32.6942V29.045C177.81 27.1367 177.271 25.5966 176.195 24.4249C175.118 23.2483 173.637 22.6648 171.757 22.6648C171.012 22.6648 170.3 22.77 169.622 22.9757C168.944 23.1813 168.358 23.4683 167.858 23.827C167.363 24.1857 166.968 24.6209 166.675 25.1327C166.387 25.6444 166.238 26.1897 166.238 26.7684V34.7268C166.238 35.4155 166.382 36.0325 166.675 36.573C166.968 37.1134 167.358 37.5678 167.858 37.9408C168.358 38.3139 168.944 38.5961 169.622 38.7921C170.3 38.9835 171.012 39.0839 171.757 39.0839V39.0791Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M185.69 41.5135V20.2304H189.007V24.1474H189.214C189.598 23.1287 190.291 22.2248 191.286 21.4261C192.281 20.6273 193.646 20.2304 195.392 20.2304H196.675V23.5305H194.728C192.93 23.5305 191.526 23.8652 190.521 24.5396C189.512 25.214 189.007 26.0605 189.007 27.0745V41.5087H185.69V41.5135Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M207.454 42.0109C205.988 42.0109 204.67 41.7478 203.493 41.2265C202.32 40.7052 201.31 39.9543 200.464 38.9786C199.622 38.003 198.968 36.836 198.517 35.4729C198.06 34.1098 197.834 32.5794 197.834 30.8719C197.834 29.1645 198.06 27.6675 198.517 26.2949C198.973 24.9222 199.622 23.7457 200.464 22.77C201.305 21.7943 202.315 21.0434 203.493 20.5221C204.666 20.0008 205.988 19.7378 207.454 19.7378C208.921 19.7378 210.175 19.996 211.31 20.5173C212.445 21.0387 213.411 21.7561 214.214 22.6744C215.017 23.5926 215.627 24.6831 216.06 25.941C216.488 27.2036 216.704 28.5858 216.704 30.0924V31.6563H201.324V32.6463C201.324 33.555 201.469 34.3968 201.762 35.1812C202.05 35.9655 202.469 36.6447 203.007 37.2234C203.545 37.8021 204.209 38.2565 204.997 38.5865C205.786 38.9165 206.675 39.0791 207.671 39.0791C209.026 39.0791 210.204 38.7634 211.214 38.1321C212.223 37.5008 213.002 36.5921 213.555 35.4107L215.921 37.1134C215.228 38.5817 214.151 39.763 212.685 40.6622C211.219 41.5613 209.478 42.0109 207.459 42.0109H207.454ZM207.454 22.4974C206.541 22.4974 205.714 22.6552 204.969 22.9709C204.223 23.2865 203.579 23.7313 203.041 24.3053C202.502 24.8792 202.079 25.5536 201.776 26.3331C201.473 27.1127 201.319 27.964 201.319 28.8967V29.1836H213.137V28.7341C213.137 26.8497 212.618 25.3383 211.584 24.2048C210.55 23.0713 209.171 22.5022 207.459 22.5022L207.454 22.4974Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M220.887 41.5135V20.2304H224.204V23.6548H224.368C224.618 23.1096 224.902 22.6026 225.219 22.1243C225.536 21.6461 225.926 21.2348 226.382 20.8808C226.839 20.5269 227.368 20.2495 227.978 20.0439C228.584 19.8382 229.305 19.7378 230.137 19.7378C231.546 19.7378 232.844 20.0726 234.036 20.7374C235.224 21.4069 236.108 22.5022 236.69 24.0279H236.772C237.156 22.8848 237.882 21.8804 238.95 21.0243C240.012 20.1682 241.459 19.7378 243.282 19.7378C245.464 19.7378 247.171 20.4456 248.402 21.8613C249.633 23.277 250.248 25.2762 250.248 27.8636V41.5135H246.931V28.4088C246.931 26.5053 246.556 25.0753 245.81 24.1092C245.065 23.1431 243.878 22.66 242.243 22.66C241.58 22.66 240.95 22.7413 240.358 22.9087C239.762 23.0761 239.233 23.32 238.762 23.6548C238.291 23.9848 237.921 24.4057 237.642 24.9174C237.363 25.4292 237.229 26.027 237.229 26.7158V41.5135H233.911V28.4088C233.911 26.5053 233.536 25.0753 232.791 24.1092C232.046 23.1431 230.882 22.66 229.31 22.66C228.647 22.66 228.012 22.7413 227.402 22.9087C226.791 23.0761 226.252 23.32 225.786 23.6548C225.315 23.9848 224.935 24.4057 224.647 24.9174C224.358 25.4292 224.209 26.027 224.209 26.7158V41.5135H220.892H220.887Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M263.84 42.0109C262.373 42.0109 261.056 41.7478 259.878 41.2265C258.705 40.7052 257.695 39.9543 256.849 38.9786C256.008 38.003 255.359 36.836 254.902 35.4729C254.445 34.1098 254.219 32.5794 254.219 30.8719C254.219 29.1645 254.445 27.6675 254.902 26.2949C255.359 24.9222 256.008 23.7457 256.849 22.77C257.69 21.7943 258.7 21.0434 259.878 20.5221C261.051 20.0008 262.373 19.7378 263.84 19.7378C265.306 19.7378 266.561 19.996 267.695 20.5173C268.83 21.0387 269.796 21.7561 270.599 22.6744C271.402 23.5926 272.018 24.6831 272.445 25.941C272.873 27.2036 273.09 28.5858 273.09 30.0924V31.6563H257.71V32.6463C257.71 33.555 257.854 34.3968 258.147 35.1812C258.436 35.9655 258.854 36.6447 259.392 37.2234C259.931 37.8021 260.594 38.2565 261.383 38.5865C262.171 38.9165 263.061 39.0791 264.056 39.0791C265.412 39.0791 266.59 38.7634 267.599 38.1321C268.609 37.5008 269.388 36.5921 269.941 35.4107L272.306 37.1134C271.614 38.5817 270.537 39.763 269.07 40.6622C267.604 41.5613 265.864 42.0109 263.844 42.0109H263.84ZM263.84 22.4974C262.926 22.4974 262.099 22.6552 261.354 22.9709C260.609 23.2865 259.964 23.7313 259.426 24.3053C258.888 24.8792 258.464 25.5536 258.162 26.3331C257.859 27.1127 257.705 27.964 257.705 28.8967V29.1836H269.522V28.7341C269.522 26.8497 269.003 25.3383 267.969 24.2048C266.936 23.0713 265.556 22.5022 263.844 22.5022L263.84 22.4974Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M116.072 81.4349V78.5462H120.135V55.5317H116.072V52.6429H127.683V55.5317H123.62V78.5462H127.683V81.4349H116.072Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M132.409 81.4349V60.1518H135.726V63.5762H135.89C136.414 62.3806 137.154 61.424 138.106 60.7162C139.058 60.0083 140.337 59.6544 141.943 59.6544C144.154 59.6544 145.904 60.3623 147.188 61.7779C148.472 63.1936 149.116 65.1928 149.116 67.7803V81.4301H145.799V68.3255C145.799 64.4945 144.183 62.5814 140.948 62.5814C140.284 62.5814 139.64 62.6627 139.02 62.8301C138.399 62.9975 137.837 63.2415 137.342 63.5762C136.847 63.9063 136.452 64.3271 136.159 64.8389C135.871 65.3506 135.722 65.9485 135.722 66.6372V81.4349H132.404H132.409Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M159.4 81.4349C158.241 81.4349 157.361 81.1145 156.765 80.4688C156.169 79.8232 155.876 78.9814 155.876 77.9388V63.0836H152.352V60.1566H154.342C155.058 60.1566 155.549 60.0131 155.813 59.7214C156.078 59.4344 156.207 58.9322 156.207 58.2148V54.2547H159.193V60.1518H163.881V63.0788H159.193V78.5031H163.544V81.4301H159.4V81.4349Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M175.818 81.9276C174.352 81.9276 173.034 81.6645 171.857 81.1432C170.683 80.6219 169.674 79.871 168.828 78.8953C167.986 77.9196 167.337 76.7526 166.881 75.3896C166.424 74.0265 166.198 72.496 166.198 70.7886C166.198 69.0812 166.424 67.5842 166.881 66.2115C167.337 64.8389 167.986 63.6623 168.828 62.6867C169.669 61.711 170.679 60.9601 171.857 60.4388C173.03 59.9175 174.352 59.6544 175.818 59.6544C177.284 59.6544 178.539 59.9127 179.674 60.434C180.809 60.9553 181.775 61.6727 182.578 62.591C183.381 63.5093 183.996 64.5997 184.424 65.8576C184.852 67.1202 185.068 68.5025 185.068 70.009V71.573H169.688V72.563C169.688 73.4717 169.832 74.3135 170.126 75.0978C170.414 75.8822 170.832 76.5613 171.371 77.14C171.909 77.7188 172.573 78.1731 173.361 78.5031C174.15 78.8331 175.039 78.9957 176.034 78.9957C177.39 78.9957 178.568 78.6801 179.578 78.0488C180.587 77.4174 181.366 76.5087 181.919 75.3274L184.285 77.03C183.592 78.4983 182.515 79.6797 181.049 80.5788C179.583 81.478 177.842 81.9276 175.823 81.9276H175.818ZM175.818 62.4188C174.905 62.4188 174.078 62.5767 173.333 62.8923C172.587 63.208 171.943 63.6528 171.405 64.2267C170.866 64.8006 170.443 65.475 170.14 66.2546C169.837 67.0342 169.683 67.8855 169.683 68.8181V69.1051H181.501V68.6555C181.501 66.7711 180.982 65.2598 179.948 64.1263C178.914 62.9928 177.534 62.4236 175.823 62.4236L175.818 62.4188Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M192.775 81.4349C191.612 81.4349 190.737 81.1097 190.141 80.464C189.544 79.8184 189.251 79.0005 189.251 78.0105V50.9116H192.568V78.5031H195.722V81.4301H192.78L192.775 81.4349Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M202.564 81.4349C201.4 81.4349 200.525 81.1097 199.929 80.464C199.333 79.8184 199.04 79.0005 199.04 78.0105V50.9116H202.357V78.5031H205.506V81.4301H202.564V81.4349Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M210.689 55.1634C209.968 55.1634 209.453 54.9912 209.136 54.6469C208.819 54.3025 208.66 53.8577 208.66 53.3077V52.772C208.66 52.222 208.819 51.7772 209.136 51.4329C209.453 51.0885 209.972 50.9164 210.689 50.9164C211.405 50.9164 211.924 51.0885 212.242 51.4329C212.559 51.7772 212.718 52.222 212.718 52.772V53.3077C212.718 53.8577 212.559 54.3025 212.242 54.6469C211.924 54.9912 211.405 55.1634 210.689 55.1634ZM209.03 60.1518H212.348V81.4349H209.03V60.1518Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M236.146 83.8071C236.146 85.9976 235.281 87.6094 233.555 88.6377C231.829 89.666 229.237 90.1777 225.78 90.1777C222.324 90.1777 220.03 89.7234 218.564 88.8194C217.098 87.9107 216.367 86.6241 216.367 84.9454C216.367 83.7928 216.67 82.8936 217.28 82.248C217.886 81.6023 218.718 81.1288 219.766 80.8275V80.3731C218.492 79.7705 217.857 78.7853 217.857 77.4174C217.857 76.3509 218.203 75.5378 218.896 74.9734C219.588 74.4139 220.473 73.993 221.55 73.7204V73.5578C220.28 72.9504 219.29 72.0847 218.588 70.9512C217.881 69.8225 217.53 68.512 217.53 67.0198C217.53 65.9437 217.723 64.9489 218.112 64.0401C218.497 63.1314 219.045 62.3518 219.752 61.7014C220.458 61.0509 221.3 60.5488 222.28 60.1901C223.261 59.8313 224.362 59.6496 225.579 59.6496C227.098 59.6496 228.454 59.927 229.641 60.4722V60.0992C229.641 59.267 229.833 58.5735 230.223 58.0283C230.607 57.483 231.247 57.2104 232.131 57.2104H235.324V60.1374H231.261V61.5005C232.035 62.1653 232.636 62.9545 233.064 63.8775C233.492 64.8006 233.708 65.8432 233.708 67.0006C233.708 68.0768 233.516 69.0668 233.127 69.9803C232.737 70.889 232.194 71.6686 231.487 72.319C230.781 72.9695 229.934 73.4717 228.939 73.8304C227.944 74.1891 226.838 74.366 225.622 74.366C224.929 74.366 224.237 74.2991 223.55 74.1604C222.829 74.3517 222.179 74.6339 221.603 75.0069C221.021 75.38 220.732 75.8917 220.732 76.5517C220.732 77.2118 221.035 77.6087 221.646 77.8287C222.252 78.0487 223.04 78.1587 224.011 78.1587H228.574C231.228 78.1587 233.156 78.6609 234.357 79.6605C235.559 80.6601 236.16 82.0375 236.16 83.7928L236.146 83.8071ZM233.035 84.0319C233.035 83.1806 232.708 82.4967 232.059 81.9897C231.41 81.4827 230.256 81.2245 228.598 81.2245H221.468C220.141 81.8271 219.477 82.7932 219.477 84.1132C219.477 85.0458 219.828 85.8446 220.535 86.5046C221.242 87.1646 222.434 87.4946 224.122 87.4946H227.189C229.04 87.4946 230.478 87.2076 231.502 86.6289C232.526 86.0502 233.035 85.1845 233.035 84.0319ZM225.612 71.7403C227.021 71.7403 228.141 71.4008 228.973 70.7264C229.805 70.052 230.218 69.0094 230.218 67.5985V66.4363C230.218 65.0302 229.805 63.9875 228.973 63.3084C228.141 62.6292 227.026 62.2944 225.612 62.2944C224.199 62.2944 223.083 62.634 222.252 63.3084C221.425 63.9827 221.006 65.0302 221.006 66.4363V67.5985C221.006 69.0094 221.42 70.0472 222.252 70.7264C223.079 71.4008 224.199 71.7403 225.612 71.7403Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M246.511 81.9276C245.045 81.9276 243.728 81.6645 242.55 81.1432C241.377 80.6219 240.367 79.871 239.521 78.8953C238.68 77.9196 238.031 76.7526 237.574 75.3896C237.117 74.0265 236.891 72.496 236.891 70.7886C236.891 69.0812 237.117 67.5842 237.574 66.2115C238.031 64.8389 238.68 63.6623 239.521 62.6867C240.362 61.711 241.372 60.9601 242.55 60.4388C243.723 59.9175 245.045 59.6544 246.511 59.6544C247.978 59.6544 249.233 59.9127 250.367 60.434C251.502 60.9553 252.468 61.6727 253.271 62.591C254.074 63.5093 254.689 64.5997 255.117 65.8576C255.545 67.1202 255.762 68.5025 255.762 70.009V71.573H240.382V72.563C240.382 73.4717 240.526 74.3135 240.819 75.0978C241.108 75.8822 241.526 76.5613 242.064 77.14C242.603 77.7188 243.266 78.1731 244.055 78.5031C244.843 78.8331 245.733 78.9957 246.728 78.9957C248.084 78.9957 249.261 78.6801 250.271 78.0488C251.281 77.4174 252.06 76.5087 252.612 75.3274L254.978 77.03C254.286 78.4983 253.209 79.6797 251.742 80.5788C250.276 81.478 248.535 81.9276 246.516 81.9276H246.511ZM246.511 62.4188C245.598 62.4188 244.771 62.5767 244.026 62.8923C243.281 63.208 242.636 63.6528 242.098 64.2267C241.559 64.8006 241.136 65.475 240.833 66.2546C240.531 67.0342 240.377 67.8855 240.377 68.8181V69.1051H252.194V68.6555C252.194 66.7711 251.675 65.2598 250.641 64.1263C249.608 62.9928 248.228 62.4236 246.516 62.4236L246.511 62.4188Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M259.944 81.4349V60.1518H263.262V63.5762H263.43C263.954 62.3806 264.694 61.424 265.646 60.7162C266.598 60.0083 267.877 59.6544 269.483 59.6544C271.694 59.6544 273.444 60.3623 274.728 61.7779C276.012 63.1936 276.656 65.1928 276.656 67.7803V81.4301H273.339V68.3255C273.339 64.4945 271.723 62.5814 268.488 62.5814C267.824 62.5814 267.18 62.6627 266.56 62.8301C265.94 62.9975 265.377 63.2415 264.882 63.5762C264.382 63.9063 263.992 64.3271 263.699 64.8389C263.411 65.3506 263.262 65.9485 263.262 66.6372V81.4349H259.944Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M290.171 81.9276C288.68 81.9276 287.339 81.6645 286.147 81.1432C284.959 80.6219 283.954 79.8806 283.142 78.9145C282.324 77.9531 281.704 76.7861 281.276 75.4087C280.848 74.0361 280.632 72.496 280.632 70.7886C280.632 69.0812 280.844 67.5459 281.276 66.1685C281.704 64.7959 282.324 63.6241 283.142 62.6628C283.954 61.7014 284.959 60.9601 286.147 60.434C287.334 59.9127 288.676 59.6497 290.171 59.6497C292.301 59.6497 294.007 60.1088 295.291 61.0319C296.575 61.9549 297.536 63.1554 298.171 64.6428L295.392 66.0442C295.003 64.9441 294.368 64.0928 293.483 63.4854C292.599 62.8828 291.493 62.5767 290.166 62.5767C289.171 62.5767 288.3 62.7345 287.555 63.0502C286.81 63.3658 286.185 63.8058 285.69 64.3702C285.19 64.9346 284.82 65.6089 284.57 66.3933C284.32 67.1777 284.199 68.0386 284.199 68.9712V72.6013C284.199 74.4713 284.704 76.0018 285.714 77.2022C286.724 78.3979 288.209 78.9958 290.171 78.9958C292.853 78.9958 294.786 77.757 295.974 75.2844L298.378 76.8914C297.685 78.4314 296.656 79.6558 295.286 80.5645C293.916 81.4732 292.209 81.9276 290.166 81.9276H290.171Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M309.575 81.9276C308.108 81.9276 306.791 81.6645 305.613 81.1432C304.435 80.6219 303.43 79.871 302.584 78.8953C301.738 77.9196 301.089 76.7526 300.637 75.3896C300.18 74.0265 299.954 72.496 299.954 70.7886C299.954 69.0812 300.18 67.5842 300.637 66.2115C301.094 64.8389 301.743 63.6623 302.584 62.6867C303.425 61.711 304.435 60.9601 305.613 60.4388C306.786 59.9175 308.108 59.6544 309.575 59.6544C311.041 59.6544 312.296 59.9127 313.43 60.434C314.565 60.9553 315.531 61.6727 316.334 62.591C317.137 63.5093 317.753 64.5997 318.18 65.8576C318.608 67.1155 318.825 68.5025 318.825 70.009V71.573H303.445V72.563C303.445 73.4717 303.589 74.3135 303.882 75.0978C304.171 75.8822 304.589 76.5613 305.127 77.14C305.666 77.7188 306.329 78.1731 307.118 78.5031C307.906 78.8331 308.796 78.9957 309.791 78.9957C311.147 78.9957 312.325 78.6801 313.334 78.0488C314.344 77.4174 315.123 76.5087 315.676 75.3274L318.041 77.03C317.349 78.4983 316.272 79.6797 314.805 80.5788C313.339 81.478 311.599 81.9276 309.579 81.9276H309.575ZM309.575 62.4188C308.661 62.4188 307.834 62.5767 307.089 62.8923C306.344 63.208 305.699 63.6528 305.161 64.2267C304.623 64.8006 304.199 65.475 303.897 66.2546C303.594 67.0342 303.44 67.8855 303.44 68.8181V69.1051H315.257V68.6555C315.257 66.7711 314.738 65.2598 313.704 64.1263C312.666 62.9928 311.291 62.4236 309.579 62.4236L309.575 62.4188Z",
        fill: "black"
      }
    )
  ] }),
  /* @__PURE__ */ jsx10("defs", { children: /* @__PURE__ */ jsx10("clipPath", { id: "clip0_1844_1507", children: /* @__PURE__ */ jsx10(
    "rect",
    {
      width: "318.821",
      height: "94.2818",
      fill: "white",
      transform: "translate(0 -0.000457764)"
    }
  ) }) })
] }));
SupremeIntelligenceBlackText.displayName = "SupremeIntelligenceBlackText";
var SupremeIntelligenceBlackIcon = React10.forwardRef(({ className, viewpoint, ...props }, ref) => /* @__PURE__ */ jsxs9(
  "svg",
  {
    width: "95",
    height: "95",
    viewBox: viewpoint || "0 0 95 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx10("g", { clipPath: "url(#clip0_1844_1532)", children: /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M0 0.281311V94.5631H94.7752V0.281311H0ZM55.7218 66.345C54.0247 68.6934 51.717 70.4869 48.7891 71.7352C45.866 72.9834 42.5823 73.6052 38.9476 73.6052C33.2456 73.6052 28.5773 72.2852 24.9378 69.6451C21.2983 67.0051 19.0627 63.2411 18.2262 58.3483H24.4186C25.2551 61.7201 26.8994 64.2789 29.3561 66.015C31.8129 67.7512 35.0341 68.6168 39.0149 68.6168C42.9957 68.6168 45.9573 67.7272 48.3419 65.9385C50.7266 64.1545 51.9189 61.7967 51.9189 58.8601C51.9189 56.3157 51.217 54.3021 49.8179 52.8099C48.4189 51.3177 46.241 50.2799 43.2938 49.6916L31.0533 47.1998C27.0724 46.4202 24.1109 45.038 22.1685 43.058C20.2262 41.0779 19.255 38.3039 19.255 34.7312C19.255 31.8473 20.1156 29.3889 21.8368 27.3611C23.558 25.3332 25.8561 23.8027 28.7311 22.7792C31.6062 21.7509 34.7649 21.2392 38.2072 21.2392C43.515 21.2392 47.7939 22.4397 51.0343 24.831C54.2795 27.2272 56.2218 30.6755 56.8613 35.1713H50.6689C50.0775 32.139 48.6881 29.8768 46.5054 28.3846C44.3179 26.8924 41.5053 26.1463 38.063 26.1463C34.3754 26.1463 31.3754 26.8685 29.0677 28.3081C26.7551 29.7524 25.6013 31.766 25.6013 34.3582C25.6013 36.6061 26.1782 38.3326 27.3321 39.5283C28.4859 40.7288 30.3658 41.5945 32.9716 42.1301L45.7986 44.6984C50.0247 45.5306 53.1593 47.0228 55.1978 49.1703C57.2363 51.3225 58.2555 54.3021 58.2555 58.1188C58.2555 61.2467 57.4094 63.9872 55.7122 66.3355L55.7218 66.345ZM76.549 73.0935H70.2797V40.3796H63.4239V35.463H76.549V73.0887V73.0935Z",
          fill: "black"
        }
      ) }),
      /* @__PURE__ */ jsx10("defs", { children: /* @__PURE__ */ jsx10("clipPath", { id: "clip0_1844_1532", children: /* @__PURE__ */ jsx10(
        "rect",
        {
          width: "94.28",
          height: "94.2818",
          fill: "white",
          transform: "translate(0 0.281311)"
        }
      ) }) })
    ]
  }
));
SupremeIntelligenceBlackIcon.displayName = "SupremeIntelligenceBlackIcon";
var Logo = React10.forwardRef(
  ({
    className,
    variant = "supreme",
    theme = "original",
    size = "md",
    showText = true,
    ...props
  }, ref) => {
    const renderCurieSvg = (size2) => {
      const viewpoint = size2 === "sm" ? "0 0 185 95" : size2 === "md" ? "0 0 125 95" : "0 0 80 95";
      if (variant === "curie") {
        if (theme === "original") {
          return showText ? /* @__PURE__ */ jsx10(CurieAiOriginalText, {}) : /* @__PURE__ */ jsx10(CurieAiOriginalIcon, { viewpoint });
        } else if (theme === "black") {
          return showText ? /* @__PURE__ */ jsx10(CurieAiBlackText, {}) : /* @__PURE__ */ jsx10(CurieAiBlackIcon, { viewpoint });
        } else if (theme === "white") {
          return showText ? /* @__PURE__ */ jsx10(CurieAiWhiteText, {}) : /* @__PURE__ */ jsx10(CurieAiWhiteIcon, { viewpoint });
        }
      }
      return null;
    };
    const renderSupremeIntelligenceSvg = (size2) => {
      const viewpoint = size2 === "sm" ? "0 0 212 95" : size2 === "md" ? "0 0 151 95" : "0 0 101 95";
      if (variant === "supreme") {
        if (theme === "original") {
          return showText ? /* @__PURE__ */ jsx10(SupremeIntelligenceOriginalText, {}) : /* @__PURE__ */ jsx10(SupremeIntelligenceOriginalIcon, { viewpoint });
        } else if (theme === "black") {
          return showText ? /* @__PURE__ */ jsx10(SupremeIntelligenceBlackText, {}) : /* @__PURE__ */ jsx10(SupremeIntelligenceBlackIcon, { viewpoint });
        } else if (theme === "white") {
          return showText ? /* @__PURE__ */ jsx10(SupremeIntelligenceWhiteText, {}) : /* @__PURE__ */ jsx10(SupremeIntelligenceWhiteIcon, { viewpoint });
        }
      }
      return null;
    };
    const getSizeClasses = () => {
      switch (size) {
        case "sm":
          return "w-[143px] h-auto";
        case "md":
          return "w-[200px] h-auto";
        case "lg":
          return "w-[300px] h-auto";
        default:
          return "w-[200px] h-auto";
      }
    };
    return /* @__PURE__ */ jsx10(
      "div",
      {
        ref,
        className: cn("flex items-center gap-2", className),
        ...props,
        children: /* @__PURE__ */ jsx10(
          "div",
          {
            className: cn(
              "relative flex items-center justify-center",
              getSizeClasses()
            ),
            children: renderCurieSvg(size) || renderSupremeIntelligenceSvg(size)
          }
        )
      }
    );
  }
);
Logo.displayName = "Logo";

// src/components/ui/menubar.tsx
import * as React11 from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var MenubarMenu = MenubarPrimitive.Menu;
var MenubarGroup = MenubarPrimitive.Group;
var MenubarPortal = MenubarPrimitive.Portal;
var MenubarSub = MenubarPrimitive.Sub;
var MenubarRadioGroup = MenubarPrimitive.RadioGroup;
var Menubar = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  MenubarPrimitive.Root,
  {
    ref,
    className: cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    ),
    ...props
  }
));
Menubar.displayName = MenubarPrimitive.Root.displayName;
var MenubarTrigger = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  MenubarPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    ),
    ...props
  }
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
var MenubarSubTrigger = React11.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs10(
  MenubarPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx11(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
var MenubarSubContent = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  MenubarPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
var MenubarContent = React11.forwardRef(
  ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx11(MenubarPrimitive.Portal, { children: /* @__PURE__ */ jsx11(
    MenubarPrimitive.Content,
    {
      ref,
      align,
      alignOffset,
      sideOffset,
      className: cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      ),
      ...props
    }
  ) })
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
var MenubarItem = React11.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx11(
  MenubarPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
var MenubarCheckboxItem = React11.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs10(
  MenubarPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx11("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx11(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx11(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
var MenubarRadioItem = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs10(
  MenubarPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx11("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx11(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx11(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
var MenubarLabel = React11.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx11(
  MenubarPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
var MenubarSeparator = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  MenubarPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
var MenubarShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx11(
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

// src/components/ui/page-level.tsx
import * as React12 from "react";
import { ChevronRightIcon as ChevronRightIcon2 } from "@heroicons/react/24/outline";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var pageLevelVariants = cva3(
  "flex items-center text-xs font-normal text-neutral-600 opacity-80 gap-1.5",
  {
    variants: {
      variant: {
        default: "text-neutral-600",
        primary: "text-foreground",
        secondary: "text-neutral-600/70",
        brand: "text-supreme-blue-600"
      },
      size: {
        sm: "text-xs",
        default: "text-xs",
        lg: "text-sm",
        xl: "text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var PageLevel = React12.forwardRef(
  ({
    className,
    variant,
    size,
    level = 1,
    showArrow = true,
    arrowPosition = "before",
    separator,
    children,
    ...props
  }, ref) => {
    const defaultSeparator = /* @__PURE__ */ jsx12(ChevronRightIcon2, { className: "h-4 w-4 text-neutral-400" });
    const separatorElement = separator || defaultSeparator;
    return /* @__PURE__ */ jsxs11(
      "div",
      {
        ref,
        className: cn(pageLevelVariants({ variant, size, className })),
        ...props,
        children: [
          showArrow && arrowPosition === "before" && separatorElement,
          /* @__PURE__ */ jsx12("span", { children: children || `Page level ${level}` }),
          showArrow && arrowPosition === "after" && separatorElement
        ]
      }
    );
  }
);
PageLevel.displayName = "PageLevel";
var PageLevelList = React12.forwardRef(({ className, separator, children, ...props }, ref) => {
  const defaultSeparator = /* @__PURE__ */ jsx12(ChevronRightIcon2, { className: "h-4 w-4 text-neutral-400" });
  const separatorElement = separator || defaultSeparator;
  return /* @__PURE__ */ jsx12(
    "div",
    {
      ref,
      className: cn("flex items-center gap-1.5", className),
      ...props,
      children: React12.Children.map(children, (child, index) => /* @__PURE__ */ jsxs11(React12.Fragment, { children: [
        child,
        index < React12.Children.count(children) - 1 && separatorElement
      ] }, index))
    }
  );
});
PageLevelList.displayName = "PageLevelList";
var PageLevelItem = React12.forwardRef(({ className, active = false, ...props }, ref) => /* @__PURE__ */ jsx12(
  "span",
  {
    ref,
    className: cn(
      "text-xs leading-4 font-normal text-neutral-600 opacity-80 transition-colors",
      active && "text-foreground opacity-100",
      className
    ),
    ...props
  }
));
PageLevelItem.displayName = "PageLevelItem";

// src/components/ui/pagination.tsx
import * as React13 from "react";
import { ChevronLeft, ChevronRight as ChevronRight2, MoreHorizontal } from "lucide-react";
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
var Pagination = ({ className, ...props }) => /* @__PURE__ */ jsx13(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: cn("mx-auto flex justify-center", className),
    ...props
  }
);
Pagination.displayName = "Pagination";
var PaginationContent = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
  "ul",
  {
    ref,
    className: cn("isolate flex flex-row items-center -space-x-px", className),
    ...props
  }
));
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13("li", { ref, className: cn("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
var PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => /* @__PURE__ */ jsx13(
  "a",
  {
    "aria-current": isActive ? "page" : void 0,
    className: cn(
      buttonVariants({
        variant: "secondary",
        size
      }),
      "relative z-0 rounded-none text-neutral-800 hover:z-10 hover:border-supreme-blue-300 focus-visible:z-10",
      isActive && "bg-supreme-blue-50 text-neutral-900 relative z-10",
      className
    ),
    ...props
  }
);
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx13(
  PaginationLink,
  {
    "aria-label": "Go to previous page",
    size: "icon",
    className: cn("rounded-l-lg", className),
    ...props,
    children: /* @__PURE__ */ jsx13(ChevronLeft, { className: "h-4 w-4" })
  }
);
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx13(
  PaginationLink,
  {
    "aria-label": "Go to next page",
    size: "icon",
    className: cn("rounded-r-lg", className),
    ...props,
    children: /* @__PURE__ */ jsx13(ChevronRight2, { className: "h-4 w-4" })
  }
);
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs12(
  "span",
  {
    "aria-hidden": true,
    className: cn(
      "flex h-10 w-10 items-center justify-center rounded-none border border-[#D4D4D4] bg-white text-[#737373]",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx13(MoreHorizontal, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx13("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
PaginationEllipsis.displayName = "PaginationEllipsis";

// src/components/ui/popover.tsx
import * as React14 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsx as jsx14 } from "react/jsx-runtime";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React14.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx14(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx14(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/ui/persona.tsx
import * as React15 from "react";
import { ChevronDown, Building2, CheckCircle } from "lucide-react";
import { CheckIcon as CheckIcon2 } from "@heroicons/react/24/outline";
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx15, jsxs as jsxs13 } from "react/jsx-runtime";
var UserIcon = ({ className, ...props }) => /* @__PURE__ */ jsx15(
  "svg",
  {
    width: "21",
    height: "20",
    viewBox: "0 0 21 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    ...props,
    children: /* @__PURE__ */ jsx15(
      "path",
      {
        d: "M4.48467 16.6946C5.03216 15.4047 6.31043 14.5 7.8 14.5H13.2C14.6896 14.5 15.9678 15.4047 16.5153 16.6946M14.1 7.75C14.1 9.73822 12.4882 11.35 10.5 11.35C8.51177 11.35 6.9 9.73822 6.9 7.75C6.9 5.76177 8.51177 4.15 10.5 4.15C12.4882 4.15 14.1 5.76177 14.1 7.75ZM19.5 10C19.5 14.9706 15.4706 19 10.5 19C5.52944 19 1.5 14.9706 1.5 10C1.5 5.02944 5.52944 1 10.5 1C15.4706 1 19.5 5.02944 19.5 10Z",
        stroke: "currentColor",
        strokeWidth: "1.43406",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var personaVariants = cva4(
  "inline-flex w-full items-center justify-between gap-3 rounded-[8px] border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-[#4136D4]/5 border-[#D4D4D4] text-[#272080] hover:border-supreme-blue-500",
        selected: "bg-[#EDEBFD] border-[#272080] text-[#272080]",
        outline: "bg-white border-[#D4D4D4] text-[#737373] hover:text-[#272080] hover:border-[#272080]"
      },
      size: {
        default: "w-[364px] h-10 px-6 py-2",
        sm: "w-[364px] h-8 px-4 py-1.5 text-sm",
        lg: "w-[364px] h-12 px-6 py-3 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var personaProfileVariants = cva4(
  "flex gap-2.5 items-start rounded-lg transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-white border border-neutral-300 p-3.5 w-[279px]",
        hover: "bg-white border border-supreme-blue-300 p-3.5 w-[279px]",
        selected: "bg-supreme-blue-50 border border-supreme-blue-300 p-3.5 w-[279px]",
        ghost: "bg-transparent w-[279px]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Persona = React15.forwardRef(
  ({
    className,
    variant,
    size,
    personas: personasProp,
    defaultPersonas = [],
    options: optionsProp,
    onPersonasChange,
    closeOnSelect = false,
    placeholder = "Select personas...",
    showLeftIcon = true,
    showRightIcon = true,
    ...props
  }, ref) => {
    const [open, setOpen] = React15.useState(false);
    const isControlled = personasProp !== void 0 && typeof onPersonasChange === "function";
    const [internalPersonas, setInternalPersonas] = React15.useState(
      () => personasProp !== void 0 && !isControlled ? personasProp : defaultPersonas
    );
    React15.useEffect(() => {
      if (!isControlled && personasProp !== void 0) {
        setInternalPersonas(personasProp);
      }
    }, [isControlled, personasProp?.join("\0")]);
    const personas = isControlled ? personasProp : internalPersonas;
    const options = React15.useMemo(() => {
      const base = optionsProp ?? personasProp ?? defaultPersonas;
      return Array.from(new Set(base));
    }, [optionsProp, personasProp, defaultPersonas]);
    const displayText = personas.length > 0 ? personas.join(" + ") : placeholder;
    const togglePersona = (label) => {
      const isSelected = personas.includes(label);
      const next = isSelected ? personas.filter((p) => p !== label) : [...personas, label];
      if (!isControlled) {
        setInternalPersonas(next);
      }
      onPersonasChange?.(next);
      if (closeOnSelect) {
        setOpen(false);
      }
    };
    return /* @__PURE__ */ jsxs13(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx15(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs13(
        "button",
        {
          ref,
          type: "button",
          className: cn(
            personaVariants({ variant, size, className }),
            "cursor-pointer hover:shadow-sm"
          ),
          "aria-haspopup": "listbox",
          "aria-expanded": open,
          ...props,
          children: [
            /* @__PURE__ */ jsxs13("span", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
              showLeftIcon && /* @__PURE__ */ jsx15(UserIcon, { className: "h-5 w-5 shrink-0 text-[#4136D4]" }),
              /* @__PURE__ */ jsx15(
                "span",
                {
                  className: cn(
                    "truncate text-sm font-medium",
                    personas.length > 0 ? "text-neutral-900" : "text-neutral-500"
                  ),
                  children: displayText
                }
              )
            ] }),
            showRightIcon && /* @__PURE__ */ jsx15(
              ChevronDown,
              {
                className: cn(
                  "h-4 w-4 shrink-0 text-[#272080] transition-transform duration-200",
                  open ? "rotate-180" : "rotate-0"
                )
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsx15(
        PopoverContent,
        {
          className: "w-[364px] overflow-hidden rounded-md border border-neutral-200 bg-white p-0 shadow-lg",
          align: "start",
          children: /* @__PURE__ */ jsx15("div", { className: cn("flex max-h-72 flex-col gap-2 overflow-y-auto p-2", options.length === 0 && "p-0"), children: options.length === 0 ? /* @__PURE__ */ jsx15("p", { className: "px-2 py-3 text-center text-sm text-neutral-500", children: "No personas available" }) : options.map((option) => {
            const isSelected = personas.includes(option);
            return /* @__PURE__ */ jsxs13(
              "button",
              {
                type: "button",
                onClick: () => togglePersona(option),
                className: cn(
                  "flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-500 focus-visible:ring-offset-0",
                  isSelected ? "bg-supreme-blue-50 text-neutral-900" : "text-neutral-700 hover:bg-slate-50"
                ),
                role: "option",
                "aria-selected": isSelected,
                children: [
                  /* @__PURE__ */ jsx15("span", { className: "truncate text-sm font-medium", children: option }),
                  isSelected && /* @__PURE__ */ jsx15(CheckIcon2, { className: "h-4 w-4 shrink-0 text-neutral-900" })
                ]
              },
              option
            );
          }) })
        }
      )
    ] });
  }
);
Persona.displayName = "Persona";
var PersonaProfile = React15.forwardRef(
  ({
    className,
    variant,
    avatar,
    avatarFallback = "AA",
    name = "Name and Title Here",
    title = "Text Content",
    organization = "Text Content",
    tags = [],
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs13(
      "div",
      {
        className: cn(personaProfileVariants({ variant, className })),
        ref,
        ...props,
        children: [
          /* @__PURE__ */ jsxs13("div", { className: "flex flex-1 gap-3 items-start", children: [
            avatar || /* @__PURE__ */ jsx15("div", { className: "bg-[#4136D4] overflow-hidden rounded-full shrink-0 size-10 relative flex items-center justify-center", children: /* @__PURE__ */ jsx15("p", { className: "font-sans font-normal leading-7 text-lg text-white text-center tracking-normal whitespace-nowrap", children: avatarFallback }) }),
            /* @__PURE__ */ jsxs13("div", { className: "flex flex-1 flex-col gap-1.5 items-start min-h-0 min-w-0", children: [
              /* @__PURE__ */ jsx15("p", { className: "font-sans font-semibold leading-6 text-neutral-900 text-base w-full", children: name }),
              /* @__PURE__ */ jsx15("p", { className: "font-sans font-normal leading-4 text-neutral-600 text-sm w-full", children: title }),
              /* @__PURE__ */ jsx15("div", { className: "flex gap-[5px] items-center w-full", children: /* @__PURE__ */ jsxs13("div", { className: "flex flex-1 gap-[5px] items-center min-h-0 min-w-0", children: [
                /* @__PURE__ */ jsx15(Building2, { className: "size-3.5 text-neutral-900" }),
                /* @__PURE__ */ jsx15("p", { className: "font-sans font-normal leading-4 text-neutral-600 text-xs", children: organization })
              ] }) }),
              tags.length > 0 && /* @__PURE__ */ jsx15("div", { className: "flex flex-wrap gap-1 items-start w-full", children: tags.map((tag, index) => /* @__PURE__ */ jsx15(Badge, { variant: "default", className: "bg-gray-100 text-gray-600 text-xs px-1.5 py-0.5 rounded-full", children: tag }, index)) })
            ] })
          ] }),
          /* @__PURE__ */ jsx15("div", { className: cn("relative shrink-0 size-6", variant === "selected" ? "opacity-100" : "opacity-0"), children: variant === "selected" && /* @__PURE__ */ jsx15(CheckCircle, { className: "size-6 text-supreme-blue-700" }) })
        ]
      }
    );
  }
);
PersonaProfile.displayName = "PersonaProfile";

// src/components/ui/slider.tsx
import * as React16 from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { jsx as jsx16, jsxs as jsxs14 } from "react/jsx-runtime";
var Slider = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs14(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx16(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-200", children: /* @__PURE__ */ jsx16(SliderPrimitive.Range, { className: "absolute h-full bg-[#4136D4] rounded-full" }) }),
      /* @__PURE__ */ jsx16(SliderPrimitive.Thumb, { className: "block h-6 w-6 rounded-full border-2 border-[#4136D4] bg-white shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;
var RangeSlider = React16.forwardRef(({ className, defaultValue, value, onValueChange, ...props }, ref) => /* @__PURE__ */ jsxs14(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    defaultValue,
    value,
    onValueChange,
    ...props,
    children: [
      /* @__PURE__ */ jsx16(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-200", children: /* @__PURE__ */ jsx16(SliderPrimitive.Range, { className: "absolute h-full bg-[#4136D4] rounded-full" }) }),
      /* @__PURE__ */ jsx16(SliderPrimitive.Thumb, { className: "block h-6 w-6 rounded-full border-2 border-[#4136D4] bg-white shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" }),
      /* @__PURE__ */ jsx16(SliderPrimitive.Thumb, { className: "block h-6 w-6 rounded-full border-2 border-[#4136D4] bg-white shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
RangeSlider.displayName = "RangeSlider";

// src/components/ui/table.tsx
import * as React17 from "react";
import { GlobeAltIcon, ArrowDownIcon, LinkIcon } from "@heroicons/react/24/outline";
import { jsx as jsx17, jsxs as jsxs15 } from "react/jsx-runtime";
var getScoreColor = (score) => {
  if (1 <= score && score <= 10) return "bg-[#FF8F8F] text-neutral-800";
  if (11 <= score && score <= 20) return "bg-[#FFB28E] text-neutral-800";
  if (21 <= score && score <= 30) return "bg-[#FFE15D] text-neutral-800";
  if (31 <= score && score <= 50) return "bg-[#6CFFA5] text-neutral-800";
  return "bg-[#FF8F8F] text-neutral-800";
};
var Table = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx17(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17(
  "thead",
  {
    ref,
    className: cn("bg-violet-50 border-b border-neutral-200", className),
    ...props
  }
));
TableHeader.displayName = "TableHeader";
var TableBody = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17(
  "tbody",
  {
    ref,
    className: cn("divide-y divide-gray-200", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React17.forwardRef(({ className, onClick, clickable, ...props }, ref) => /* @__PURE__ */ jsx17(
  "tr",
  {
    ref,
    className: cn(
      "transition-colors hover:bg-neutral-50 data-[state=selected]:bg-muted",
      clickable && "cursor-pointer hover:bg-blue-50",
      className
    ),
    onClick,
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React17.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx17(
  "th",
  {
    ref,
    className: cn(
      "px-6 py-4 text-left align-middle font-semibold text-sm leading-4 text-neutral-800 [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props,
    children
  }
));
TableHead.displayName = "TableHead";
var TableCell = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
var TableCheckbox = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17(
  "input",
  {
    ref,
    type: "checkbox",
    className: cn(
      "h-4 w-4 rounded border-gray-300 text-supreme-blue-600 focus:ring-supreme-blue-500",
      className
    ),
    ...props
  }
));
TableCheckbox.displayName = "TableCheckbox";
var TableHeaderCell = React17.forwardRef(({ className, showCheckbox = true, rightIcon = true, showText = "", state = "Default", selectedRows, setSelectedRows, tableData, handleHeaderCheckbox, ...props }, ref) => /* @__PURE__ */ jsxs15(
  "div",
  {
    ref,
    className: cn("flex gap-2 items-center", className),
    ...props,
    children: [
      showCheckbox && /* @__PURE__ */ jsx17(
        TableCheckbox,
        {
          checked: selectedRows.size === tableData.length && tableData.length > 0,
          onChange: (e) => handleHeaderCheckbox(e.target.checked)
        }
      ),
      showText && /* @__PURE__ */ jsx17("p", { className: "font-semibold leading-4 relative shrink-0 text-neutral-800 text-sm", children: showText }),
      rightIcon && (typeof rightIcon === "boolean" ? /* @__PURE__ */ jsx17(ArrowDownIcon, { className: "h-4 w-4 relative shrink-0" }) : /* @__PURE__ */ jsx17("div", { className: "relative shrink-0 flex items-center justify-center", children: rightIcon }))
    ]
  }
));
TableHeaderCell.displayName = "TableHeaderCell";
var TableCellGeneric = React17.forwardRef(({
  className,
  showCheckbox = true,
  style = "Lead Text",
  description = true,
  state = "Default",
  title,
  subtitle,
  selectedRows,
  handleRowCheckbox,
  rowId,
  children,
  score,
  range,
  lvl,
  ...props
}, ref) => {
  if (style === "Score") {
    return /* @__PURE__ */ jsx17(Score, { score });
  }
  if (style === "Range") {
    return /* @__PURE__ */ jsx17(Range2, { range, lvl });
  }
  if (style === "Text" && description === true && state === "Default") {
    return /* @__PURE__ */ jsxs15(
      "div",
      {
        ref,
        className: cn("flex flex-col gap-1 items-start leading-4 text-sm whitespace-pre-wrap", className),
        ...props,
        children: [
          /* @__PURE__ */ jsx17("p", { className: "font-medium relative shrink-0 text-neutral-800 w-full", children: title || "Tempor suspendisse amet" }),
          /* @__PURE__ */ jsx17("p", { className: "font-normal relative shrink-0 text-neutral-600 w-full", children: subtitle || "At enim nisi commodo" })
        ]
      }
    );
  }
  if (style === "Text" && description === false && state === "Default") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn("flex leading-4 relative text-neutral-600 text-sm whitespace-pre-wrap", className),
        ...props,
        children: /* @__PURE__ */ jsx17("p", { className: "font-normal relative shrink-0 w-full", children: children || "Tempor suspendisse amet" })
      }
    );
  }
  if (style === "CTA" && state === "Default") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn("flex gap-1.5 items-center", className),
        ...props,
        children
      }
    );
  }
  if (style === "Badge" && state === "Default") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn("flex justify-center gap-1.5 items-center", className),
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ jsxs15(
    "div",
    {
      ref,
      className: cn("flex gap-1.5 items-center", className),
      ...props,
      children: [
        showCheckbox && /* @__PURE__ */ jsx17(
          TableCheckbox,
          {
            checked: selectedRows.has(rowId),
            onChange: (e) => handleRowCheckbox(rowId, e.target.checked)
          }
        ),
        children || /* @__PURE__ */ jsxs15("div", { className: "flex flex-1 flex-col gap-1 items-start leading-4 text-sm whitespace-pre-wrap", children: [
          /* @__PURE__ */ jsx17("p", { className: "font-medium relative shrink-0 text-neutral-800 w-full", children: title || "Tempor suspendisse amet" }),
          /* @__PURE__ */ jsx17("p", { className: "font-normal relative shrink-0 text-neutral-600 w-full", children: subtitle || "At enim nisi commodo" })
        ] })
      ]
    }
  );
});
TableCellGeneric.displayName = "TableCellGeneric";
var TableCellBenchmark = React17.forwardRef(({
  className,
  leftIcon = true,
  showCheckbox = true,
  descriptionText,
  showScore = true,
  rightIcon = false,
  style = "Lead",
  state = "Default",
  children,
  score,
  scoreColor = "#6CFFA5",
  selectedRows,
  handleRowCheckbox,
  rowId,
  ...props
}, ref) => {
  if (style === "Score" && state === "Default") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn(
          "bg-white flex gap-2 h-[68px] items-center px-6 py-4",
          className
        ),
        ...props,
        children: showScore && /* @__PURE__ */ jsx17(
          "div",
          {
            className: "flex flex-col gap-[10px] items-center justify-center px-2.5 py-0 rounded-[2px] shrink-0 w-9",
            style: { backgroundColor: scoreColor },
            children: /* @__PURE__ */ jsx17("p", { className: "text-xs leading-4 text-neutral-800", children: score || 40 })
          }
        )
      }
    );
  }
  if (style === "Score" && state === "Hover") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn(
          "bg-violet-50 flex gap-2 h-[68px] items-center px-6 py-4",
          className
        ),
        ...props,
        children: showScore && /* @__PURE__ */ jsx17(
          "div",
          {
            className: "flex flex-col gap-[10px] items-center justify-center px-2.5 py-0 rounded-[2px] shrink-0 w-9",
            style: { backgroundColor: scoreColor },
            children: /* @__PURE__ */ jsx17("p", { className: "text-xs leading-4 text-neutral-800", children: score || 40 })
          }
        )
      }
    );
  }
  if (style === "Lead" && state === "Hover") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn(
          "bg-violet-50 flex gap-2 items-center px-6 py-4 w-[357px]",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsxs15("div", { className: "flex flex-1 gap-2 items-center min-h-px min-w-px shrink-0", children: [
          showCheckbox && /* @__PURE__ */ jsx17(
            TableCheckbox,
            {
              checked: selectedRows.has(rowId),
              onChange: (e) => handleRowCheckbox(rowId, e.target.checked)
            }
          ),
          /* @__PURE__ */ jsxs15("div", { className: "flex flex-1 gap-2 items-center min-h-px min-w-px shrink-0", children: [
            leftIcon !== void 0 && /* @__PURE__ */ jsx17("div", { className: "flex gap-6 items-end relative shrink-0", children: /* @__PURE__ */ jsx17("div", { className: "overflow-clip relative shrink-0 size-4", children: leftIcon === true ? /* @__PURE__ */ jsx17(GlobeAltIcon, { className: "size-4 text-neutral-900" }) : leftIcon ? leftIcon : null }) }),
            children ? children : /* @__PURE__ */ jsxs15("div", { className: "flex flex-1 flex-col gap-1 items-start leading-4 text-sm whitespace-pre-wrap", children: [
              /* @__PURE__ */ jsx17("p", { className: "font-medium relative shrink-0 text-supreme-blue-700 w-full", children: "Company Name Here" }),
              descriptionText && /* @__PURE__ */ jsx17("p", { className: "font-normal relative shrink-0 text-neutral-500 w-full", children: descriptionText })
            ] }),
            rightIcon !== void 0 && /* @__PURE__ */ jsx17("div", { className: "overflow-clip relative shrink-0 size-4", children: rightIcon === true ? /* @__PURE__ */ jsx17(LinkIcon, { className: "size-4 text-supreme-blue-700" }) : rightIcon ? rightIcon : null })
          ] })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsx17(
    "div",
    {
      ref,
      className: cn(
        "bg-white flex gap-2 items-center px-4 py-2 w-[357px]",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxs15("div", { className: "flex flex-1 gap-2 items-center min-h-px min-w-px shrink-0", children: [
        showCheckbox && /* @__PURE__ */ jsx17(
          "input",
          {
            type: "checkbox",
            className: "bg-white border border-neutral-500 rounded-sm shrink-0 size-4"
          }
        ),
        /* @__PURE__ */ jsxs15("div", { className: "flex flex-1 gap-2 items-center min-h-px min-w-px shrink-0", children: [
          leftIcon === true && /* @__PURE__ */ jsx17("div", { className: "overflow-clip relative shrink-0 size-4", children: /* @__PURE__ */ jsx17(GlobeAltIcon, { className: "size-4 text-neutral-900" }) }),
          children ? children : /* @__PURE__ */ jsxs15("div", { className: "flex flex-1 flex-col gap-1 items-start leading-4 text-sm whitespace-pre-wrap", children: [
            /* @__PURE__ */ jsx17("p", { className: "font-medium relative shrink-0 text-supreme-blue-700 w-full", children: "Company Name Here" }),
            descriptionText && /* @__PURE__ */ jsx17("p", { className: "font-normal relative shrink-0 text-neutral-500 w-full", children: descriptionText })
          ] }),
          rightIcon === true && /* @__PURE__ */ jsx17("div", { className: "overflow-clip relative shrink-0 size-4", children: /* @__PURE__ */ jsx17(LinkIcon, { className: "size-4 text-supreme-blue-700" }) })
        ] })
      ] })
    }
  );
});
TableCellBenchmark.displayName = "TableCellBenchmark";
var Range2 = React17.forwardRef(({ className, range = "0-10", lvl = "1", ...props }, ref) => {
  const baseClasses = "flex gap-[10px] h-14 items-center justify-center w-[120px]";
  const element = /* @__PURE__ */ jsx17("p", { className: "font-normal leading-[18px] relative shrink-0 text-[#4e4c6c] text-sm text-center", children: range });
  if (range === "0-10" && lvl === "1") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn("bg-[#ff8f8f]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ jsx17("div", { className: "bg-[rgba(255,255,255,0.5)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "0-10" && lvl === "2") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn("bg-[#ff8f8f]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ jsx17("div", { className: "bg-[rgba(255,255,255,0.8)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "11-20" && lvl === "1") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn("bg-[#ffb28e]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ jsx17("div", { className: "bg-[rgba(255,255,255,0.5)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "11-20" && lvl === "2") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn("bg-[#ffb28e]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ jsx17("div", { className: "bg-[rgba(255,255,255,0.8)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "21-30" && lvl === "1") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn("bg-[#ffe15d]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ jsx17("div", { className: "bg-[rgba(255,255,255,0.5)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "21-30" && lvl === "2") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn("bg-[#ffe15d]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ jsx17("div", { className: "bg-[rgba(255,255,255,0.8)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "31-50" && lvl === "1") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn("bg-[#6cffa5]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ jsx17("div", { className: "bg-[rgba(255,255,255,0.5)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "31-50" && lvl === "2") {
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        className: cn("bg-[#6cffa5]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ jsx17("div", { className: "bg-[rgba(255,255,255,0.8)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
});
Range2.displayName = "Range";
var Score = React17.forwardRef(({ className, score = 40, ...props }, ref) => {
  const element = /* @__PURE__ */ jsx17("p", { className: cn("font-normal leading-4 relative shrink-0 text-xs whitespace-pre-wrap w-9 px-2.5 py-0 rounded-[2px]", getScoreColor(score)), children: score });
  return /* @__PURE__ */ jsx17(
    "div",
    {
      ref,
      className: cn("flex items-center justify-center", className),
      ...props,
      children: element
    }
  );
});
Score.displayName = "Score";

// src/components/ui/tabs.tsx
import * as React18 from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
var tabsListVariants = cva5(
  "inline-flex h-10 items-center justify-center bg-muted text-muted-foreground",
  {
    variants: {
      variant: {
        default: "bg-white border-b-2 border-neutral-200",
        "supreme-blue": "bg-supreme-blue-50",
        "card": "bg-white border border-neutral-200 shadow-sm",
        "outlined": "bg-white border-b border-slate-300",
        "filled": "bg-white border border-neutral-300",
        "selector": "bg-transparent"
      },
      size: {
        default: "h-10",
        sm: "h-8",
        lg: "h-12"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var tabsTriggerVariants = cva5(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
  {
    variants: {
      variant: {
        default: "data-[state=active]:bg-white data-[state=active]:text-neutral-900 data-[state=active]:shadow-sm text-neutral-600 hover:text-neutral-900",
        "supreme-blue": "data-[state=active]:bg-white data-[state=active]:text-[#201A72] data-[state=active]:shadow-sm mt-1.5 text-neutral-600 text-base font-semibold hover:text-neutral-900 data-[state=active]:border-b-2 data-[state=active]:border-b-[#201A72]",
        "card": "data-[state=active]:bg-supreme-blue-50 data-[state=active]:text-supreme-blue-700 data-[state=active]:shadow-sm text-neutral-600 hover:text-neutral-900",
        "outlined": "border-b-[3px] border-slate-300 data-[state=active]:border-b-[3px] data-[state=active]:border-indigo-900 data-[state=active]:font-semibold data-[state=active]:text-indigo-900 text-gray-700 font-normal py-3.5",
        "filled": "border border-neutral-300 bg-white data-[state=active]:bg-neutral-50 data-[state=active]:font-medium text-neutral-900 hover:bg-supreme-blue-50 text-sm py-2 px-3.5",
        "selector": "rounded-full px-5 py-2.5 data-[state=active]:bg-supreme-blue-100 data-[state=active]:text-supreme-blue-500 data-[state=active]:font-medium text-neutral-400 hover:text-neutral-600"
      },
      size: {
        default: "px-3 py-1.5 text-sm",
        sm: "px-2.5 py-1 text-xs",
        lg: "px-4 py-2 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var tabsContentVariants = cva5(
  "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "",
        "supreme-blue": "pt-4",
        "card": "bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",
        "outlined": "bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",
        "filled": "bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",
        "selector": ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Tabs = TabsPrimitive.Root;
var TabsList = React18.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx18(
  TabsPrimitive.List,
  {
    ref,
    className: cn(tabsListVariants({ variant, size, className })),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React18.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx18(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(tabsTriggerVariants({ variant, size, className })),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React18.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx18(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(tabsContentVariants({ variant, className })),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
var TabGroup = React18.forwardRef(({
  tabs,
  defaultValue,
  value,
  onValueChange,
  variant = "default",
  size = "default",
  className,
  orientation = "horizontal"
}, ref) => {
  return /* @__PURE__ */ jsx18("div", { ref, className: cn("w-full", className), children: /* @__PURE__ */ jsxs16(
    Tabs,
    {
      defaultValue,
      value,
      onValueChange,
      orientation,
      className: "w-full",
      children: [
        /* @__PURE__ */ jsx18(TabsList, { variant, size, className: "w-full", children: tabs.map((tab) => /* @__PURE__ */ jsx18(
          TabsTrigger,
          {
            value: tab.value,
            disabled: tab.disabled,
            variant,
            size,
            className: "flex-1",
            children: tab.label
          },
          tab.value
        )) }),
        tabs.map((tab) => /* @__PURE__ */ jsx18(TabsContent, { value: tab.value, variant, children: tab.content }, tab.value))
      ]
    }
  ) });
});
TabGroup.displayName = "TabGroup";

// src/components/ui/textarea.tsx
import * as React19 from "react";
import { jsx as jsx19, jsxs as jsxs17 } from "react/jsx-runtime";
var Textarea = React19.forwardRef(
  ({
    className,
    label,
    labelClassName,
    required = false,
    hint,
    error,
    state,
    ...props
  }, ref) => {
    const isError = state === "error" || Boolean(error);
    const isActive = state === "active";
    return /* @__PURE__ */ jsxs17("div", { className: "relative", children: [
      label && /* @__PURE__ */ jsxs17(
        "label",
        {
          className: cn(
            "text-sm font-medium bg-background px-1 text-neutral-600 dark:text-supreme-blue-300 mb-1 absolute -top-3 z-10 left-4",
            labelClassName,
            isError && "text-destructive"
          ),
          children: [
            label,
            required && /* @__PURE__ */ jsx19("span", { className: "text-destructive", children: " *" })
          ]
        }
      ),
      /* @__PURE__ */ jsx19(
        "textarea",
        {
          className: cn(
            "flex min-h-[80px] w-full rounded-md border bg-white px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            isError ? "border-destructive focus-visible:ring-2 focus-visible:ring-destructive" : isActive ? "border-supreme-blue-800 focus-visible:ring-0" : "border-neutral-300 focus-visible:ring-2 focus-visible:ring-supreme-blue-500",
            className
          ),
          ref,
          ...props
        }
      ),
      hint && !isError && /* @__PURE__ */ jsx19("p", { className: "text-xs leading-4 text-neutral-500", children: hint }),
      isError && /* @__PURE__ */ jsx19("p", { className: "text-xs leading-4 text-destructive", children: error || hint })
    ] });
  }
);
Textarea.displayName = "Textarea";

// src/components/ui/toast.tsx
import * as React20 from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva as cva6 } from "class-variance-authority";
import { XMarkIcon as XMarkIcon2, InformationCircleIcon } from "@heroicons/react/24/outline";
import { jsx as jsx20 } from "react/jsx-runtime";
var ToastProvider = ToastPrimitives.Provider;
var toastVariants = cva6(
  "group pointer-events-auto relative flex w-full items-start gap-4 overflow-hidden rounded-lg border p-4 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border-neutral-300 bg-white",
        primary: "border-supreme-blue-300 bg-supreme-blue-50",
        error: "border-red-600 bg-red-50",
        warning: "border-orange-300 bg-orange-50",
        success: "border-green-300 bg-green-50"
      },
      size: {
        floating: "max-w-full sm:max-w-xl lg:max-w-3xl",
        "full-width": "max-w-full items-center gap-4 rounded-none border-b border-l-0 border-r-0 border-t-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "floating"
    }
  }
);
var TOAST_DEFAULT_VARIANT = "default";
var TOAST_DEFAULT_SIZE = "floating";
var ToastContext = React20.createContext({
  variant: TOAST_DEFAULT_VARIANT,
  size: TOAST_DEFAULT_SIZE
});
var useToastContext = () => React20.useContext(ToastContext);
var ToastViewport = React20.forwardRef(({ className, size = TOAST_DEFAULT_SIZE, ...props }, ref) => /* @__PURE__ */ jsx20(
  ToastPrimitives.Viewport,
  {
    ref,
    "data-size": size,
    className: cn(
      "fixed top-0 z-[100] flex w-full flex-col gap-3 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:p-6",
      size === "floating" && "sm:max-w-xl lg:max-w-3xl",
      size === "full-width" && "sm:w-full",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var Toast = React20.forwardRef(({ className, variant, size, ...props }, ref) => {
  const toastVariant = variant ?? TOAST_DEFAULT_VARIANT;
  const toastSize = size ?? TOAST_DEFAULT_SIZE;
  return /* @__PURE__ */ jsx20(ToastContext.Provider, { value: { variant: toastVariant, size: toastSize }, children: /* @__PURE__ */ jsx20(
    ToastPrimitives.Root,
    {
      ref,
      "data-variant": toastVariant,
      "data-size": toastSize,
      className: cn(
        toastVariants({ variant: toastVariant, size: toastSize }),
        className
      ),
      ...props
    }
  ) });
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastIcon = React20.forwardRef(({ className, variant, size, children, ...props }, ref) => {
  const context = useToastContext();
  const iconVariant = variant ?? context.variant;
  const iconSize = size ?? context.size;
  return /* @__PURE__ */ jsx20(
    "div",
    {
      ref,
      className: cn(
        "flex shrink-0 items-center justify-center gap-2.5 rounded-lg border p-2.5",
        iconSize === "full-width" && "gap-0 border-0 p-0",
        iconVariant === "default" && iconSize === "floating" && "border-neutral-200",
        iconVariant === "primary" && iconSize === "floating" && "border-supreme-blue-200",
        iconVariant === "error" && iconSize === "floating" && "border-red-200",
        iconVariant === "warning" && iconSize === "floating" && "border-orange-200",
        iconVariant === "success" && iconSize === "floating" && "border-green-200",
        className
      ),
      ...props,
      children: children ?? /* @__PURE__ */ jsx20(
        InformationCircleIcon,
        {
          className: cn(
            "h-6 w-6 shrink-0",
            iconVariant === "default" && "text-neutral-900",
            iconVariant === "primary" && "text-supreme-blue-700",
            iconVariant === "error" && "text-red-800",
            iconVariant === "warning" && "text-orange-800",
            iconVariant === "success" && "text-green-700"
          )
        }
      )
    }
  );
});
ToastIcon.displayName = "ToastIcon";
var ToastContent = React20.forwardRef(({ className, size, ...props }, ref) => {
  const context = useToastContext();
  const contentSize = size ?? context.size;
  return /* @__PURE__ */ jsx20(
    "div",
    {
      ref,
      className: cn(
        "relative flex min-h-px min-w-px flex-1 flex-col items-start gap-1.5",
        contentSize === "full-width" && "sm:flex-row sm:items-center sm:justify-between sm:gap-6",
        className
      ),
      ...props
    }
  );
});
ToastContent.displayName = "ToastContent";
var ToastAction = React20.forwardRef(({ className, variant, ...props }, ref) => {
  const context = useToastContext();
  const actionVariant = variant ?? context.variant;
  return /* @__PURE__ */ jsx20(
    ToastPrimitives.Action,
    {
      ref,
      className: cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md bg-transparent text-sm font-medium ring-offset-background transition-colors focus:outline-none",
        actionVariant === "default" && "text-neutral-500",
        actionVariant === "primary" && "text-supreme-blue-700",
        actionVariant === "error" && "text-red-700",
        actionVariant === "warning" && "text-orange-800",
        actionVariant === "success" && "text-green-700",
        className
      ),
      ...props
    }
  );
});
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React20.forwardRef(({ className, variant, size, ...props }, ref) => {
  const context = useToastContext();
  const closeVariant = variant ?? context.variant;
  const closeSize = size ?? context.size;
  return /* @__PURE__ */ jsx20(
    ToastPrimitives.Close,
    {
      ref,
      className: cn(
        "h-6 w-6 rounded-md p-1 transition-opacity",
        closeSize === "floating" ? "absolute right-2.5 top-2 opacity-0 group-hover:opacity-100" : "relative ml-3 flex items-center justify-center opacity-100",
        className
      ),
      "toast-close": "",
      ...props,
      children: /* @__PURE__ */ jsx20(
        XMarkIcon2,
        {
          className: cn(
            "h-6 w-6",
            closeVariant === "default" && "text-neutral-900",
            closeVariant === "primary" && "text-supreme-blue-700",
            closeVariant === "error" && "text-red-800",
            closeVariant === "warning" && "text-orange-800",
            closeVariant === "success" && "text-green-700"
          )
        }
      )
    }
  );
});
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React20.forwardRef(({ className, variant, ...props }, ref) => {
  const context = useToastContext();
  const titleVariant = variant ?? context.variant;
  return /* @__PURE__ */ jsx20(
    ToastPrimitives.Title,
    {
      ref,
      className: cn(
        "text-base font-semibold leading-6",
        titleVariant === "default" && "text-neutral-900",
        titleVariant === "primary" && "text-supreme-blue-700",
        titleVariant === "error" && "text-red-800",
        titleVariant === "warning" && "text-orange-800",
        titleVariant === "success" && "text-green-700",
        className
      ),
      ...props
    }
  );
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React20.forwardRef(({ className, variant, ...props }, ref) => {
  const context = useToastContext();
  const descriptionVariant = variant ?? context.variant;
  return /* @__PURE__ */ jsx20(
    ToastPrimitives.Description,
    {
      ref,
      className: cn(
        "text-base font-normal leading-6",
        descriptionVariant === "default" && "text-neutral-500",
        descriptionVariant === "primary" && "text-supreme-blue-700",
        descriptionVariant === "error" && "text-red-700",
        descriptionVariant === "warning" && "text-orange-800",
        descriptionVariant === "success" && "text-green-700",
        className
      ),
      ...props
    }
  );
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;
var ToastActions = React20.forwardRef(({ className, size, ...props }, ref) => {
  const context = useToastContext();
  const actionsSize = size ?? context.size;
  return /* @__PURE__ */ jsx20(
    "div",
    {
      ref,
      className: cn(
        "flex flex-wrap gap-1.5",
        actionsSize === "full-width" ? "items-center justify-end gap-3" : "items-start",
        className
      ),
      ...props
    }
  );
});
ToastActions.displayName = "ToastActions";

// src/hooks/use-toast.ts
import * as React21 from "react";
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 3e4;
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
    default:
      return state;
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = props.id;
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React21.useState(memoryState);
  React21.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// src/components/ui/toaster.tsx
import { jsx as jsx21, jsxs as jsxs18 } from "react/jsx-runtime";
function Toaster() {
  const { toasts } = useToast();
  const viewportSize = toasts.some((toast2) => toast2.size === "full-width") ? "full-width" : "floating";
  return /* @__PURE__ */ jsxs18(ToastProvider, { children: [
    toasts.map(function({
      id,
      title,
      description,
      action,
      size,
      children,
      variant,
      ...props
    }) {
      return /* @__PURE__ */ jsxs18(Toast, { ...props, variant, size, children: [
        /* @__PURE__ */ jsx21(ToastIcon, {}),
        /* @__PURE__ */ jsxs18(ToastContent, { children: [
          /* @__PURE__ */ jsxs18("div", { className: "flex flex-col gap-1.5", children: [
            title && /* @__PURE__ */ jsx21(ToastTitle, { children: title }),
            description && /* @__PURE__ */ jsx21(ToastDescription, { children: description })
          ] }),
          action
        ] }),
        /* @__PURE__ */ jsx21(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx21(ToastViewport, { size: viewportSize })
  ] });
}

// src/components/ui/toggle.tsx
import * as React22 from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva as cva7 } from "class-variance-authority";
import { jsx as jsx22 } from "react/jsx-runtime";
var toggleVariants = cva7(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative",
  {
    variants: {
      variant: {
        default: "bg-white border border-slate-400 focus:ring-4 focus:ring-blue-500/20",
        checked: "bg-[#4136d4] border border-[#403A9A] focus:ring-4 focus:ring-blue-500/20",
        disabled: "bg-white border border-slate-400 opacity-50 focus:ring-4 focus:ring-blue-500/20",
        disabledChecked: "bg-[#4136d4] border border-[#403A9A] opacity-50 focus:ring-4 focus:ring-blue-500/20"
      },
      size: {
        sm: "w-8 h-4 p-0.5",
        md: "w-10 h-5 p-1",
        lg: "w-14 h-7 p-1.5"
      }
    },
    defaultVariants: {
      variant: "checked",
      size: "md"
    }
  }
);
var Toggle = React22.forwardRef(
  ({
    className,
    variant,
    size = "md",
    pressed,
    defaultPressed,
    onPressedChange,
    ...props
  }, ref) => {
    const isChecked = pressed ?? defaultPressed ?? false;
    const getVariant = () => {
      if (props.disabled) {
        return isChecked ? "disabledChecked" : "disabled";
      }
      return isChecked ? "checked" : "default";
    };
    const getThumbColor = () => {
      if (props.disabled) {
        return isChecked ? "bg-white" : "bg-slate-400";
      }
      return isChecked ? "bg-slate-200" : "bg-[#4136d4]";
    };
    return /* @__PURE__ */ jsx22(
      TogglePrimitive.Root,
      {
        ref,
        className: cn(
          toggleVariants({ variant: getVariant(), size, className })
        ),
        pressed,
        defaultPressed,
        onPressedChange,
        ...props,
        children: /* @__PURE__ */ jsx22(
          "div",
          {
            className: cn(
              "absolute rounded-full transition-all duration-300",
              size === "sm" ? "w-3 h-3" : size === "md" ? "w-4 h-4" : "w-5 h-5",
              getThumbColor(),
              isChecked ? "right-0.5" : "left-0.5"
            )
          }
        )
      }
    );
  }
);
Toggle.displayName = TogglePrimitive.Root.displayName;

// src/components/ui/tooltip.tsx
import * as React23 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx23, jsxs as jsxs19 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React23.forwardRef(({ className, sideOffset = 4, arrowDirection = "bottom", side, ...props }, ref) => {
  const getSide = () => {
    if (side) return side;
    switch (arrowDirection) {
      case "top":
        return "top";
      case "bottom":
        return "bottom";
      case "left":
        return "left";
      case "right":
        return "right";
      default:
        return "top";
    }
  };
  const getArrowClasses = () => {
    switch (arrowDirection) {
      case "top":
        return "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-supreme-blue-950";
      case "bottom":
        return "absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-supreme-blue-950";
      case "left":
        return "absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-supreme-blue-950";
      case "right":
        return "absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-t-transparent border-b-transparent border-r-supreme-blue-950";
      default:
        return "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-supreme-blue-950";
    }
  };
  return /* @__PURE__ */ jsxs19(
    TooltipPrimitive.Content,
    {
      ref,
      sideOffset,
      side: getSide(),
      className: cn(
        "z-50 overflow-visible rounded-md border-0 bg-supreme-blue-950 px-3 py-1.5 text-sm text-white shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative",
        className
      ),
      ...props,
      children: [
        props.children,
        /* @__PURE__ */ jsx23("div", { className: getArrowClasses() })
      ]
    }
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/components/ui/curie-ai-chat-prompt.tsx
import * as React24 from "react";
import { PlusIcon, ChevronDownIcon as ChevronDownIcon2 } from "@heroicons/react/24/outline";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { jsx as jsx24, jsxs as jsxs20 } from "react/jsx-runtime";
var CurieAIChatPrompt = React24.forwardRef(
  ({
    onSend,
    onAdd,
    onPersonasChange,
    personas = ["General", "Creative", "Analytical", "Technical"],
    placeholder = "Ask Anything",
    disabled = false,
    className,
    ...props
  }, ref) => {
    const [message, setMessage] = React24.useState("");
    const [selectedPersona, setSelectedPersona] = React24.useState(personas[0]);
    const [isPersonasOpen, setIsPersonasOpen] = React24.useState(false);
    const handleSend = () => {
      if (message.trim() && onSend) {
        onSend(message.trim());
        setMessage("");
      }
    };
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    };
    const handlePersonaSelect = (persona) => {
      setSelectedPersona(persona);
      setIsPersonasOpen(false);
      if (onPersonasChange) {
        onPersonasChange(persona);
      }
    };
    return /* @__PURE__ */ jsxs20(
      "div",
      {
        ref,
        className: cn(
          "flex flex-col items-center p-4 gap-4 bg-slate-100 rounded-2xl",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxs20("div", { className: "flex flex-col items-center space-y-2", children: [
            /* @__PURE__ */ jsxs20("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx24(
                AIIcon,
                {
                  className: "text-supreme-blue-700 w-7 h-7",
                  fill: "currentColor"
                }
              ),
              /* @__PURE__ */ jsx24("h1", { className: "text-2xl font-semibold text-supreme-blue-700", children: "Curie AI" })
            ] }),
            /* @__PURE__ */ jsx24("h2", { className: "text-3xl font-medium text-neutral-700", children: "What would you like to discover?" })
          ] }),
          /* @__PURE__ */ jsx24("div", { className: "relative w-full max-w-4xl", children: /* @__PURE__ */ jsxs20("div", { className: "relative bg-white rounded-2xl shadow-lg border border-neutral-200 p-4", children: [
            /* @__PURE__ */ jsx24(
              "textarea",
              {
                value: message,
                onChange: (e) => setMessage(e.target.value),
                onKeyPress: handleKeyPress,
                placeholder,
                disabled,
                className: "w-full h-16 resize-none border-none outline-none text-base placeholder:text-neutral-400 focus:ring-0 focus:outline-none disabled:opacity-50"
              }
            ),
            /* @__PURE__ */ jsxs20("div", { className: "flex items-center justify-between pt-2", children: [
              /* @__PURE__ */ jsxs20("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsx24(
                  Button,
                  {
                    variant: "secondary",
                    onClick: onAdd,
                    disabled,
                    size: "icon",
                    children: /* @__PURE__ */ jsx24(PlusIcon, { className: "w-6 h-6 text-black" })
                  }
                ),
                /* @__PURE__ */ jsx24("div", { className: "relative", children: /* @__PURE__ */ jsxs20(
                  Button,
                  {
                    onClick: () => setIsPersonasOpen(!isPersonasOpen),
                    disabled,
                    size: "default",
                    variant: "secondary",
                    children: [
                      /* @__PURE__ */ jsx24(PersonaIcon, { size: 24 }),
                      /* @__PURE__ */ jsx24("span", { className: "text-sm font-medium text-black", children: selectedPersona }),
                      /* @__PURE__ */ jsx24(ChevronDownIcon2, { className: "w-4 h-4 text-black" })
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx24(
                Button,
                {
                  onClick: handleSend,
                  size: "icon",
                  disabled: disabled || !message.trim(),
                  children: /* @__PURE__ */ jsx24(ArrowUpIcon, { className: "w-6 h-6 text-white" })
                }
              )
            ] })
          ] }) })
        ]
      }
    );
  }
);
CurieAIChatPrompt.displayName = "CurieAIChatPrompt";

// src/components/ui/footer.tsx
import * as React25 from "react";
import { jsx as jsx25, jsxs as jsxs21 } from "react/jsx-runtime";
var Footer = React25.forwardRef(
  ({
    className,
    copyright = `Supreme Optimization \xA9 ${(/* @__PURE__ */ new Date()).getFullYear()}. All rights Reserved`,
    links = [{ label: "Terms and Conditions", href: "#" }],
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx25(
      "footer",
      {
        ref,
        className: cn(
          "flex w-full justify-center border-t border-slate-200 bg-slate-50",
          "py-3.5 text-xs font-normal leading-4 tracking-normal text-[#4e4c6c]",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsxs21("div", { className: "flex w-full max-w-[1261px] flex-wrap items-center justify-center gap-9 px-4 text-center sm:flex-nowrap", children: [
          /* @__PURE__ */ jsx25("span", { className: "shrink-0", children: copyright }),
          links.map(
            ({ label, href, onClick }) => href ? /* @__PURE__ */ jsx25(
              "a",
              {
                href,
                onClick,
                className: "shrink-0 text-[#4e4c6c] hover:text-supreme-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-500 focus-visible:ring-offset-2",
                children: label
              },
              label
            ) : /* @__PURE__ */ jsx25("span", { className: "shrink-0", children: label }, label)
          )
        ] })
      }
    );
  }
);
Footer.displayName = "Footer";

// src/components/ui/dropdown.tsx
import * as React26 from "react";
import {
  CheckIcon as CheckIcon3,
  ChevronUpDownIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { Fragment as Fragment2, jsx as jsx26, jsxs as jsxs22 } from "react/jsx-runtime";
var renderOptionIcon = (option, className) => {
  if (option.icon) {
    if (React26.isValidElement(option.icon)) {
      return React26.cloneElement(option.icon, {
        className: cn("h-4 w-4", className, option.icon.props?.className)
      });
    }
    return /* @__PURE__ */ jsx26("span", { className: cn("h-4 w-4", className), children: option.icon });
  }
  if (option.iconSrc) {
    return /* @__PURE__ */ jsx26(
      "img",
      {
        src: option.iconSrc,
        alt: "",
        className: cn("h-4 w-4 shrink-0", className),
        "aria-hidden": "true"
      }
    );
  }
  return null;
};
var Dropdown = React26.forwardRef(
  ({
    className,
    options,
    value,
    defaultValue,
    onChange,
    placeholder = "Search",
    triggerPlaceholder = "Select an option",
    searchPlaceholder = "Search",
    searchable = true,
    searchValue,
    onSearchChange,
    emptyState = /* @__PURE__ */ jsx26("p", { className: "px-2 py-3 text-center text-sm text-neutral-500", children: "No results found" }),
    footerOption,
    renderOptionMeta,
    maxVisibleOptions = 8,
    closeOnSelect = true,
    disabled = false,
    ...props
  }, ref) => {
    const [open, setOpen] = React26.useState(false);
    const [internalValue, setInternalValue] = React26.useState(
      defaultValue
    );
    const [internalSearch, setInternalSearch] = React26.useState("");
    const currentValue = value ?? internalValue;
    const currentSearch = searchValue !== void 0 ? searchValue : internalSearch;
    const selectedOption = React26.useMemo(
      () => options.find((option) => option.id === currentValue),
      [options, currentValue]
    );
    const handleSearchChange = (event) => {
      const next = event.target.value;
      if (!searchable) {
        return;
      }
      if (searchValue === void 0) {
        setInternalSearch(next);
      }
      onSearchChange?.(next);
    };
    const filteredOptions = React26.useMemo(() => {
      if (!searchable || !currentSearch.trim()) {
        return options;
      }
      const query = currentSearch.trim().toLowerCase();
      return options.filter(
        (option) => option.label.toLowerCase().includes(query)
      );
    }, [options, currentSearch, searchable]);
    const visibleOptions = React26.useMemo(() => {
      if (maxVisibleOptions <= 0) {
        return filteredOptions;
      }
      return filteredOptions.slice(0, maxVisibleOptions);
    }, [filteredOptions, maxVisibleOptions]);
    const hasMore = maxVisibleOptions > 0 && filteredOptions.length > visibleOptions.length;
    const handleOptionSelect = (option) => {
      if (value === void 0) {
        setInternalValue(option.id);
      }
      if (searchable && searchValue === void 0) {
        setInternalSearch("");
      }
      onChange?.(option.id, option);
      if (closeOnSelect) {
        setOpen(false);
      }
    };
    const renderOptionContent = (option, isSelected) => {
      const icon = renderOptionIcon(option);
      return /* @__PURE__ */ jsxs22(Fragment2, { children: [
        /* @__PURE__ */ jsxs22("span", { className: "flex min-w-0 flex-1 items-center gap-2", children: [
          icon && /* @__PURE__ */ jsx26("span", { className: "flex h-4 w-4 items-center justify-center", children: icon }),
          /* @__PURE__ */ jsx26("span", { className: "truncate text-sm font-medium", children: option.label }),
          renderOptionMeta && /* @__PURE__ */ jsx26("span", { className: "ml-auto truncate text-xs text-neutral-500", children: renderOptionMeta(option) })
        ] }),
        isSelected && /* @__PURE__ */ jsx26(CheckIcon3, { className: "h-4 w-4 shrink-0 text-neutral-900" })
      ] });
    };
    return /* @__PURE__ */ jsxs22(
      Popover,
      {
        open,
        onOpenChange: (nextOpen) => {
          if (!disabled) {
            setOpen(nextOpen);
          }
        },
        children: [
          /* @__PURE__ */ jsx26(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs22(
            "button",
            {
              ref,
              type: "button",
              className: cn(
                "flex items-center justify-between gap-2 rounded-md border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-700 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-500 focus-visible:ring-offset-2",
                disabled && "cursor-not-allowed bg-neutral-100 text-neutral-400",
                className
              ),
              "aria-haspopup": "listbox",
              "aria-expanded": open,
              disabled,
              ...props,
              children: [
                /* @__PURE__ */ jsx26("span", { className: "flex min-w-0 flex-1 items-center gap-2", children: selectedOption ? /* @__PURE__ */ jsxs22(Fragment2, { children: [
                  renderOptionIcon(selectedOption, "h-4 w-4 shrink-0"),
                  /* @__PURE__ */ jsx26("span", { className: "truncate font-medium text-neutral-900", children: selectedOption.label })
                ] }) : /* @__PURE__ */ jsx26("span", { className: "truncate text-neutral-500", children: triggerPlaceholder }) }),
                /* @__PURE__ */ jsx26(ChevronUpDownIcon, { className: "h-5 w-5 text-neutral-500" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs22(
            PopoverContent,
            {
              className: cn(
                "w-[var(--radix-popover-trigger-width)] overflow-hidden rounded-md border border-neutral-200 bg-white p-0 shadow-lg",
                !searchable && "pt-2"
              ),
              align: "start",
              children: [
                searchable && /* @__PURE__ */ jsx26("div", { className: "border-b border-neutral-200 p-2.5", children: /* @__PURE__ */ jsx26(
                  Input,
                  {
                    placeholder: placeholder ?? searchPlaceholder,
                    value: currentSearch,
                    onChange: handleSearchChange,
                    leftIcon: /* @__PURE__ */ jsx26(MagnifyingGlassIcon, {}),
                    className: "py-0 text-sm",
                    "aria-label": searchPlaceholder,
                    autoFocus: true
                  }
                ) }),
                /* @__PURE__ */ jsxs22(
                  "div",
                  {
                    className: cn(
                      "flex max-h-80 flex-col gap-2 overflow-y-auto px-2.5 py-2",
                      filteredOptions.length === 0 && "py-0"
                    ),
                    role: "listbox",
                    "aria-activedescendant": currentValue ? `dropdown-option-${currentValue}` : void 0,
                    children: [
                      filteredOptions.length === 0 && emptyState,
                      visibleOptions.map((option) => {
                        const isSelected = option.id === currentValue;
                        return /* @__PURE__ */ jsx26(
                          "button",
                          {
                            id: `dropdown-option-${option.id}`,
                            type: "button",
                            onClick: () => handleOptionSelect(option),
                            className: cn(
                              "flex w-full items-center justify-between gap-2 rounded-md p-1.5 text-left transition-colors",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-500 focus-visible:ring-offset-0",
                              isSelected ? "bg-supreme-blue-50 text-neutral-900" : "text-neutral-600 hover:bg-slate-50"
                            ),
                            role: "option",
                            "aria-selected": isSelected,
                            children: renderOptionContent(option, isSelected)
                          },
                          option.id
                        );
                      }),
                      hasMore && /* @__PURE__ */ jsxs22("div", { className: "px-1 text-xs text-neutral-500", children: [
                        "Showing ",
                        visibleOptions.length,
                        " of ",
                        filteredOptions.length
                      ] })
                    ]
                  }
                ),
                footerOption && /* @__PURE__ */ jsx26("div", { className: "border-t border-neutral-300 px-2.5 py-2", children: /* @__PURE__ */ jsx26(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleOptionSelect(footerOption),
                    className: cn(
                      "flex w-full items-center gap-2 rounded-md p-1.5 text-left text-neutral-600 transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-500 focus-visible:ring-offset-0 hover:bg-slate-50"
                    ),
                    role: "option",
                    "aria-selected": footerOption.id === currentValue,
                    children: /* @__PURE__ */ jsxs22(Fragment2, { children: [
                      renderOptionIcon(footerOption, "h-4 w-4 shrink-0"),
                      /* @__PURE__ */ jsx26("span", { className: "truncate text-sm font-medium", children: footerOption.label })
                    ] })
                  }
                ) })
              ]
            }
          )
        ]
      }
    );
  }
);
Dropdown.displayName = "Dropdown";

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  badgeVariants,
  Badge,
  bannerVariants,
  Banner,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  Progress,
  AnnouncementCard,
  InfoCard,
  IconCard,
  MessageAngle,
  MessageCard,
  HighlightCard,
  HighlightCTACard,
  HowItWorksCard,
  SingleIconCard,
  ContentTypeCard,
  CardWithProgress,
  CommonCard,
  Checkbox,
  ContentBox,
  ContentBoxHeader,
  ContentBoxTitle,
  ContentBoxDescription,
  ContentBoxContent,
  ContentBoxFooter,
  Input,
  Logo,
  MenubarMenu,
  MenubarGroup,
  MenubarPortal,
  MenubarSub,
  MenubarRadioGroup,
  Menubar,
  MenubarTrigger,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
  pageLevelVariants,
  PageLevel,
  PageLevelList,
  PageLevelItem,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  Popover,
  PopoverTrigger,
  PopoverContent,
  personaVariants,
  personaProfileVariants,
  Persona,
  PersonaProfile,
  Slider,
  RangeSlider,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  TableHeaderCell,
  TableCellGeneric,
  TableCellBenchmark,
  Range2 as Range,
  Score,
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabGroup,
  Textarea,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastIcon,
  ToastContent,
  ToastAction,
  ToastClose,
  ToastTitle,
  ToastDescription,
  ToastActions,
  reducer,
  toast,
  useToast,
  Toaster,
  toggleVariants,
  Toggle,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  CurieAIChatPrompt,
  Footer,
  Dropdown
};
