"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AnnouncementCard,
  Badge,
  Banner,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  CardWithProgress,
  Checkbox,
  CommonCard,
  ContentBox,
  ContentBoxContent,
  ContentBoxDescription,
  ContentBoxFooter,
  ContentBoxHeader,
  ContentBoxTitle,
  ContentTypeCard,
  CurieAIChatPrompt,
  Dropdown,
  Footer,
  HighlightCTACard,
  HighlightCard,
  HowItWorksCard,
  IconCard,
  InfoCard,
  Input,
  Logo,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MessageAngle,
  MessageCard,
  PageLevel,
  PageLevelItem,
  PageLevelList,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Persona,
  PersonaProfile,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Range,
  RangeSlider,
  Score,
  SingleIconCard,
  Slider,
  TabGroup,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableCellBenchmark,
  TableCellGeneric,
  TableFooter,
  TableHead,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toast,
  ToastAction,
  ToastActions,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastIcon,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toaster,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  bannerVariants,
  pageLevelVariants,
  personaProfileVariants,
  personaVariants,
  reducer,
  tabsContentVariants,
  tabsListVariants,
  tabsTriggerVariants,
  toast,
  toggleVariants,
  useToast
} from "./chunk-T7XC5JJB.js";
import {
  Avatar,
  AvatarGroup,
  Button,
  Sidebar,
  buttonVariants
} from "./chunk-NP4KP3QH.js";
import {
  AIIcon,
  AnalyticsIcon,
  AppIcon,
  AudiencesIcon,
  BrandGuidelinesIcon,
  DataSourcesIcon,
  DigitalAssetManagementIcon,
  GoogleIcon,
  HomeIcon,
  KnowledgeBaseIcon,
  LinkedInIcon,
  PaletteIcon,
  PersonaIcon,
  SidebarIcon,
  VectorIcon,
  cn
} from "./chunk-WJVRHA4Y.js";

// src/components/ui/credits.tsx
import * as React from "react";
import { BoltIcon } from "@heroicons/react/24/outline";
import { jsx, jsxs } from "react/jsx-runtime";
var Credits = React.forwardRef(
  ({ className, value, label = "Total credits used:", showLabel = true, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100",
          className
        ),
        ...props,
        children: [
          showLabel && /* @__PURE__ */ jsx("span", { className: "text-xs text-teal-800", children: label }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(BoltIcon, { className: "size-3.5 text-teal-800" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-teal-800", children: value.toLocaleString() })
          ] })
        ]
      }
    );
  }
);
Credits.displayName = "Credits";

// src/components/ui/quote.tsx
import * as React2 from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Quote = React2.forwardRef(
  ({
    className,
    quote,
    authorName,
    authorTitle,
    avatar,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx2(
      "div",
      {
        ref,
        className: cn("flex flex-col gap-2.5 w-full max-w-[850px]", className),
        ...props,
        children: /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-[15px] w-full", children: [
          /* @__PURE__ */ jsx2("div", { className: "flex flex-col pb-1.5 w-full", children: /* @__PURE__ */ jsx2("div", { className: "bg-supreme-blue-50 flex gap-2.5 items-center justify-center px-6 py-[17px] rounded-[10px] w-full mb-[-6px]", children: /* @__PURE__ */ jsxs2("p", { className: "flex-1 text-base font-normal leading-6 text-neutral-800 whitespace-pre-wrap", children: [
            '"',
            quote,
            '"'
          ] }) }) }),
          /* @__PURE__ */ jsxs2("div", { className: "flex gap-2.5 items-center", children: [
            avatar,
            /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-0.5 text-neutral-800", children: [
              /* @__PURE__ */ jsx2("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsx2("p", { className: "text-sm font-semibold leading-5", children: authorName }) }),
              /* @__PURE__ */ jsx2("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsx2("p", { className: "text-xs font-normal leading-4", children: authorTitle }) })
            ] })
          ] })
        ] })
      }
    );
  }
);
Quote.displayName = "Quote";

// src/components/ui/radio-group.tsx
import * as React3 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { jsx as jsx3 } from "react/jsx-runtime";
var RadioGroup = React3.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx3(
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React3.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx3(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
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
      ),
      ...props,
      children: /* @__PURE__ */ jsx3(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx3("div", { className: "h-3 w-3 rounded-full bg-[#4136D4]" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/ui/divider.tsx
import * as React4 from "react";
import { cva } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var dividerVariants = cva("", {
  variants: {
    variant: {
      default: "bg-slate-200",
      "high-contrast": "bg-slate-300",
      "low-contrast": "bg-slate-100"
    },
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]"
    }
  },
  defaultVariants: {
    variant: "default",
    orientation: "horizontal"
  }
});
var Divider = React4.forwardRef(
  ({
    className,
    variant,
    orientation = "horizontal",
    decorative = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx4(
      "div",
      {
        ref,
        className: cn(
          dividerVariants({ variant, orientation }),
          className
        ),
        role: "separator",
        "aria-orientation": orientation,
        "aria-hidden": decorative ? "true" : void 0,
        ...props
      }
    );
  }
);
Divider.displayName = "Divider";

// src/components/ui/credit-selector.tsx
import * as React5 from "react";
import { BoltIcon as BoltIcon2 } from "@heroicons/react/24/outline";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var CreditOption = React5.forwardRef(
  ({ id, credits, label, selected = false, disabled = false, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs3(
      "div",
      {
        ref,
        className: cn(
          "flex items-start justify-between px-[14px] py-4 rounded-lg w-[490px] border",
          selected ? "border-[#847cf0] bg-supreme-blue-50" : "border-neutral-300 bg-white",
          disabled && "opacity-50 cursor-not-allowed",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-[14px]", children: [
            /* @__PURE__ */ jsx5(RadioGroupItem, { id, value: id, disabled }),
            /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-1 px-2.5 py-0.5 rounded-full", children: [
              /* @__PURE__ */ jsx5(BoltIcon2, { className: "h-[18px] w-[18px] text-neutral-600" }),
              /* @__PURE__ */ jsx5("span", { className: "text-base leading-6 text-neutral-600", children: credits.toLocaleString() })
            ] })
          ] }),
          /* @__PURE__ */ jsx5("p", { className: "text-base leading-6 text-neutral-600", children: label })
        ]
      }
    );
  }
);
CreditOption.displayName = "CreditOption";
var CreditSelector = ({
  options,
  value,
  defaultValue,
  onValueChange,
  className
}) => {
  return /* @__PURE__ */ jsx5(
    RadioGroup,
    {
      className: cn("flex flex-col gap-3", className),
      value,
      defaultValue,
      onValueChange,
      children: options.map((opt) => /* @__PURE__ */ jsx5(
        CreditOption,
        {
          id: opt.id,
          credits: opt.credits,
          label: opt.label,
          selected: value ? value === opt.id : defaultValue === opt.id,
          disabled: opt.disabled,
          "data-node-id": "3093:829"
        },
        opt.id
      ))
    }
  );
};
CreditSelector.displayName = "CreditSelector";

// src/components/ui/authForm.tsx
import * as React6 from "react";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var AuthForm = React6.forwardRef(
  ({ className, withCard = false, ...props }, ref) => {
    return /* @__PURE__ */ jsx6(
      "div",
      {
        ref,
        className: cn(
          "flex w-full max-w-[440px] flex-col items-center gap-10 text-center",
          withCard && "rounded-3xl border border-neutral-200 bg-white px-10 py-12 shadow-lg",
          className
        ),
        ...props
      }
    );
  }
);
AuthForm.displayName = "AuthForm";
var AuthFormHeader = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
    "div",
    {
      ref,
      className: cn(
        "flex w-full flex-col items-center gap-3 text-center",
        className
      ),
      ...props
    }
  )
);
AuthFormHeader.displayName = "AuthFormHeader";
var AuthFormTitle = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
    "h1",
    {
      ref,
      className: cn(
        "text-4xl font-semibold leading-[40px] tracking-tight text-supreme-blue-900",
        className
      ),
      ...props
    }
  )
);
AuthFormTitle.displayName = "AuthFormTitle";
var AuthFormSubtitle = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
    "p",
    {
      ref,
      className: cn(
        "text-base font-medium leading-6 text-neutral-700",
        className
      ),
      ...props
    }
  )
);
AuthFormSubtitle.displayName = "AuthFormSubtitle";
var AuthFormDescription = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
    "p",
    {
      ref,
      className: cn(
        "max-w-[360px] text-base leading-6 text-neutral-600",
        className
      ),
      ...props
    }
  )
);
AuthFormDescription.displayName = "AuthFormDescription";
var AuthFormBody = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
    "div",
    {
      ref,
      className: cn("flex w-full flex-col gap-4", className),
      ...props
    }
  )
);
AuthFormBody.displayName = "AuthFormBody";
var AuthFormActions = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
    "div",
    {
      ref,
      className: cn("flex w-full flex-col gap-3", className),
      ...props
    }
  )
);
AuthFormActions.displayName = "AuthFormActions";
var AuthFormPrimary = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6("div", { ref, className: cn("w-full", className), ...props })
);
AuthFormPrimary.displayName = "AuthFormPrimary";
var AuthFormDivider = React6.forwardRef(
  ({ className, label = "OR", ...props }, ref) => /* @__PURE__ */ jsxs4(
    "div",
    {
      ref,
      className: cn(
        "flex w-full items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx6("span", { className: "h-px flex-1 bg-neutral-200" }),
        /* @__PURE__ */ jsx6("span", { children: label }),
        /* @__PURE__ */ jsx6("span", { className: "h-px flex-1 bg-neutral-200" })
      ]
    }
  )
);
AuthFormDivider.displayName = "AuthFormDivider";
var AuthFormFooter = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
    "div",
    {
      ref,
      className: cn("flex flex-col items-center gap-2 text-sm text-neutral-500", className),
      ...props
    }
  )
);
AuthFormFooter.displayName = "AuthFormFooter";
var AuthFormComponent = AuthForm;
AuthFormComponent.Header = AuthFormHeader;
AuthFormComponent.Title = AuthFormTitle;
AuthFormComponent.Subtitle = AuthFormSubtitle;
AuthFormComponent.Description = AuthFormDescription;
AuthFormComponent.Body = AuthFormBody;
AuthFormComponent.Primary = AuthFormPrimary;
AuthFormComponent.Actions = AuthFormActions;
AuthFormComponent.Divider = AuthFormDivider;
AuthFormComponent.Footer = AuthFormFooter;

// src/components/ui/page-heading.tsx
import * as React7 from "react";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var PageHeading = React7.forwardRef(
  ({
    className,
    heading,
    description,
    showDescription = true,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx7(
      "div",
      {
        ref,
        className: cn("flex flex-col items-start w-full", className),
        ...props,
        children: /* @__PURE__ */ jsx7("div", { className: "flex flex-col gap-7 items-start justify-center w-full", children: /* @__PURE__ */ jsxs5("div", { className: "flex flex-col gap-2.5 items-start w-full", children: [
          /* @__PURE__ */ jsx7("h1", { className: "text-3xl leading-9 font-normal text-neutral-950 w-full", children: heading }),
          showDescription && description && /* @__PURE__ */ jsx7("p", { className: "text-base leading-6 font-normal text-neutral-600 w-full", children: description })
        ] }) })
      }
    );
  }
);
PageHeading.displayName = "PageHeading";

// src/components/ui/drag-drop.tsx
import * as React8 from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { Fragment, jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var DragDrop = React8.forwardRef(
  ({
    className,
    onFiles,
    accept = ".pdf,.doc,.docx,.txt",
    multiple = true,
    disabled = false,
    loading = false,
    loadingText = "Uploading files...",
    label = "Click to upload or drag and drop",
    sublabel = `PDF, DOC, DOCX, TXT up to 10MB${multiple ? " (Multiple files allowed)" : ""}`,
    iconSize = 74,
    iconColor = "supreme-blue-600",
    ...props
  }, ref) => {
    const inputRef = React8.useRef(null);
    const [isDragging, setIsDragging] = React8.useState(false);
    const isDisabled = disabled || loading;
    const iconSizePx = typeof iconSize === "number" ? `${iconSize}px` : iconSize;
    const getColorValue = (color) => {
      if (color.startsWith("var(") || color.startsWith("#") || color.startsWith("rgb")) {
        return color;
      }
      const colorMap = {
        "supreme-blue-50": "var(--supreme-blue-50)",
        "supreme-blue-100": "var(--supreme-blue-100)",
        "supreme-blue-200": "var(--supreme-blue-200)",
        "supreme-blue-300": "var(--supreme-blue-300)",
        "supreme-blue-400": "var(--supreme-blue-400)",
        "supreme-blue-500": "var(--supreme-blue-500)",
        "supreme-blue-600": "var(--supreme-blue-600)",
        "supreme-blue-700": "var(--supreme-blue-700)",
        "supreme-blue-800": "var(--supreme-blue-800)",
        "supreme-blue-900": "var(--supreme-blue-900)",
        "supreme-blue-950": "var(--supreme-blue-950)"
      };
      return colorMap[color] || color;
    };
    const iconColorValue = getColorValue(iconColor);
    const openFilePicker = () => {
      if (isDisabled) return;
      inputRef.current?.click();
    };
    const handleFiles = (fileList) => {
      if (!fileList) return;
      const files = Array.from(fileList);
      onFiles?.(files);
    };
    const onDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      if (isDisabled) return;
      handleFiles(e.dataTransfer.files);
    };
    const onDragOver = (e) => {
      e.preventDefault();
      if (isDisabled) return;
      setIsDragging(true);
    };
    const onDragLeave = (e) => {
      e.preventDefault();
      if (isDisabled) return;
      setIsDragging(false);
    };
    const onInputChange = (e) => {
      handleFiles(e.target.files);
      e.target.value = "";
    };
    return /* @__PURE__ */ jsxs6(
      "div",
      {
        ref,
        role: "button",
        "aria-disabled": isDisabled,
        tabIndex: isDisabled ? -1 : 0,
        onClick: openFilePicker,
        onDrop,
        onDragOver,
        onDragLeave,
        className: cn(
          "flex flex-col items-center justify-center gap-[10px] p-8 rounded-lg",
          "border-2 border-dashed",
          isDisabled ? "border-neutral-300 cursor-not-allowed opacity-60" : isDragging ? "border-neutral-300 bg-supreme-blue-50" : "border-neutral-300 hover:border-supreme-blue-100",
          className
        ),
        ...props,
        children: [
          loading ? /* @__PURE__ */ jsxs6(Fragment, { children: [
            /* @__PURE__ */ jsx8(
              "div",
              {
                className: "animate-spin rounded-full border-b-2",
                style: {
                  width: iconSizePx,
                  height: iconSizePx,
                  borderColor: iconColorValue
                }
              }
            ),
            /* @__PURE__ */ jsx8("div", { className: "w-[336px] text-center", children: /* @__PURE__ */ jsx8("p", { className: "text-base leading-6 text-neutral-600", children: loadingText }) })
          ] }) : /* @__PURE__ */ jsxs6(Fragment, { children: [
            /* @__PURE__ */ jsx8(
              ArrowUpTrayIcon,
              {
                style: {
                  width: iconSizePx,
                  height: iconSizePx,
                  color: iconColorValue
                }
              }
            ),
            /* @__PURE__ */ jsxs6("div", { className: "w-[336px] text-center", children: [
              /* @__PURE__ */ jsx8("p", { className: "text-base leading-6 text-neutral-600", children: label }),
              /* @__PURE__ */ jsx8("p", { className: "text-xs leading-4 text-neutral-600", children: sublabel })
            ] })
          ] }),
          /* @__PURE__ */ jsx8(
            "input",
            {
              ref: inputRef,
              type: "file",
              className: "hidden",
              accept,
              multiple,
              onChange: onInputChange,
              disabled: isDisabled,
              "aria-hidden": true
            }
          )
        ]
      }
    );
  }
);
DragDrop.displayName = "DragDrop";

// src/components/ui/stepper.tsx
import * as React9 from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var Stepper = React9.forwardRef(
  ({ className, steps, showDivider = true, separator, ...props }, ref) => {
    const renderedSeparator = separator ?? /* @__PURE__ */ jsx9(
      ChevronRightIcon,
      {
        className: "h-4 w-4 text-neutral-400",
        "aria-hidden": "true"
      }
    );
    return /* @__PURE__ */ jsxs7(
      "nav",
      {
        ref,
        "aria-label": "Progress",
        className: cn("w-full", className),
        ...props,
        children: [
          /* @__PURE__ */ jsx9("ol", { className: "flex flex-wrap items-center gap-2 text-sm", children: steps.map((step, index) => {
            const isActive = step.step === "active";
            const isDone = step.step === "done";
            const isUpcoming = step.step === "default";
            const baseClasses = "inline-flex items-center rounded-md px-1 py-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-200";
            const stepClasses = cn(
              baseClasses,
              isActive && "text-supreme-blue-600 font-medium",
              isDone && "text-neutral-600 hover:text-supreme-blue-600",
              isUpcoming && "text-neutral-400"
            );
            const content = /* @__PURE__ */ jsx9("span", { className: "min-w-0 truncate", children: step.title });
            const node = step.href ? /* @__PURE__ */ jsx9(
              "a",
              {
                href: step.href,
                className: stepClasses,
                "aria-current": isActive ? "step" : void 0,
                children: content
              }
            ) : step.onClick ? /* @__PURE__ */ jsx9(
              "button",
              {
                type: "button",
                className: cn(stepClasses, isUpcoming && "pointer-events-none"),
                onClick: isUpcoming ? void 0 : step.onClick,
                "aria-current": isActive ? "step" : void 0,
                "aria-disabled": isUpcoming ? true : void 0,
                children: content
              }
            ) : /* @__PURE__ */ jsx9(
              "span",
              {
                className: stepClasses,
                "aria-current": isActive ? "step" : void 0,
                children: content
              }
            );
            return /* @__PURE__ */ jsxs7("li", { className: "flex min-w-0 items-center gap-2", children: [
              node,
              index < steps.length - 1 && /* @__PURE__ */ jsx9("span", { "aria-hidden": "true", className: "shrink-0", children: renderedSeparator })
            ] }, index);
          }) }),
          showDivider && /* @__PURE__ */ jsx9("div", { className: "mt-4 h-px w-full bg-neutral-200" })
        ]
      }
    );
  }
);
Stepper.displayName = "Stepper";

// src/hooks/use-mobile.tsx
import * as React10 from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React10.useState(void 0);
  React10.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
export {
  AIIcon,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AnalyticsIcon,
  AnnouncementCard,
  AppIcon,
  AudiencesIcon,
  AuthFormComponent as AuthForm,
  AuthFormActions,
  AuthFormBody,
  AuthFormDescription,
  AuthFormDivider,
  AuthFormFooter,
  AuthFormHeader,
  AuthFormPrimary,
  AuthFormSubtitle,
  AuthFormTitle,
  Avatar,
  AvatarGroup,
  Badge,
  Banner,
  BrandGuidelinesIcon,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  CardWithProgress,
  Checkbox,
  CommonCard,
  ContentBox,
  ContentBoxContent,
  ContentBoxDescription,
  ContentBoxFooter,
  ContentBoxHeader,
  ContentBoxTitle,
  ContentTypeCard,
  CreditOption,
  CreditSelector,
  Credits,
  CurieAIChatPrompt,
  DataSourcesIcon,
  DigitalAssetManagementIcon,
  Divider,
  DragDrop,
  Dropdown,
  Footer,
  GoogleIcon,
  HighlightCTACard,
  HighlightCard,
  HomeIcon,
  HowItWorksCard,
  IconCard,
  InfoCard,
  Input,
  KnowledgeBaseIcon,
  LinkedInIcon,
  Logo,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MessageAngle,
  MessageCard,
  PageHeading,
  PageLevel,
  PageLevelItem,
  PageLevelList,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaletteIcon,
  Persona,
  PersonaIcon,
  PersonaProfile,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Quote,
  RadioGroup,
  RadioGroupItem,
  Range,
  RangeSlider,
  Score,
  Sidebar,
  SidebarIcon,
  SingleIconCard,
  Slider,
  Stepper,
  TabGroup,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableCellBenchmark,
  TableCellGeneric,
  TableFooter,
  TableHead,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toast,
  ToastAction,
  ToastActions,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastIcon,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toaster,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  VectorIcon,
  badgeVariants,
  bannerVariants,
  buttonVariants,
  cn,
  dividerVariants,
  pageLevelVariants,
  personaProfileVariants,
  personaVariants,
  reducer,
  tabsContentVariants,
  tabsListVariants,
  tabsTriggerVariants,
  toast,
  toggleVariants,
  useIsMobile,
  useToast
};
