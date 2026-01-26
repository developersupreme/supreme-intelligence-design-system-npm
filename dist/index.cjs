"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AIIcon: () => AIIcon,
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  AnalyticsIcon: () => AnalyticsIcon,
  AnnouncementCard: () => AnnouncementCard,
  AppIcon: () => AppIcon,
  AudiencesIcon: () => AudiencesIcon,
  AuthForm: () => AuthFormComponent,
  AuthFormActions: () => AuthFormActions,
  AuthFormBody: () => AuthFormBody,
  AuthFormDescription: () => AuthFormDescription,
  AuthFormDivider: () => AuthFormDivider,
  AuthFormFooter: () => AuthFormFooter,
  AuthFormHeader: () => AuthFormHeader,
  AuthFormPrimary: () => AuthFormPrimary,
  AuthFormSubtitle: () => AuthFormSubtitle,
  AuthFormTitle: () => AuthFormTitle,
  Avatar: () => Avatar,
  AvatarGroup: () => AvatarGroup,
  Badge: () => Badge,
  Banner: () => Banner,
  BrandGuidelinesIcon: () => BrandGuidelinesIcon,
  Breadcrumb: () => Breadcrumb,
  BreadcrumbEllipsis: () => BreadcrumbEllipsis,
  BreadcrumbItem: () => BreadcrumbItem,
  BreadcrumbLink: () => BreadcrumbLink,
  BreadcrumbList: () => BreadcrumbList,
  BreadcrumbPage: () => BreadcrumbPage,
  BreadcrumbSeparator: () => BreadcrumbSeparator,
  Button: () => Button,
  CardWithProgress: () => CardWithProgress,
  Checkbox: () => Checkbox,
  CommonCard: () => CommonCard,
  ContentBox: () => ContentBox,
  ContentBoxContent: () => ContentBoxContent,
  ContentBoxDescription: () => ContentBoxDescription,
  ContentBoxFooter: () => ContentBoxFooter,
  ContentBoxHeader: () => ContentBoxHeader,
  ContentBoxTitle: () => ContentBoxTitle,
  ContentTypeCard: () => ContentTypeCard,
  CreditOption: () => CreditOption,
  CreditSelector: () => CreditSelector,
  Credits: () => Credits,
  CurieAIChatPrompt: () => CurieAIChatPrompt,
  DataSourcesIcon: () => DataSourcesIcon,
  DigitalAssetManagementIcon: () => DigitalAssetManagementIcon,
  Divider: () => Divider,
  DragDrop: () => DragDrop,
  Dropdown: () => Dropdown,
  Footer: () => Footer,
  GoogleIcon: () => GoogleIcon,
  HighlightCTACard: () => HighlightCTACard,
  HighlightCard: () => HighlightCard,
  HomeIcon: () => HomeIcon,
  HowItWorksCard: () => HowItWorksCard,
  IconCard: () => IconCard,
  InfoCard: () => InfoCard,
  Input: () => Input,
  KnowledgeBaseIcon: () => KnowledgeBaseIcon,
  LinkedInIcon: () => LinkedInIcon,
  Logo: () => Logo,
  Menubar: () => Menubar,
  MenubarCheckboxItem: () => MenubarCheckboxItem,
  MenubarContent: () => MenubarContent,
  MenubarGroup: () => MenubarGroup,
  MenubarItem: () => MenubarItem,
  MenubarLabel: () => MenubarLabel,
  MenubarMenu: () => MenubarMenu,
  MenubarPortal: () => MenubarPortal,
  MenubarRadioGroup: () => MenubarRadioGroup,
  MenubarRadioItem: () => MenubarRadioItem,
  MenubarSeparator: () => MenubarSeparator,
  MenubarShortcut: () => MenubarShortcut,
  MenubarSub: () => MenubarSub,
  MenubarSubContent: () => MenubarSubContent,
  MenubarSubTrigger: () => MenubarSubTrigger,
  MenubarTrigger: () => MenubarTrigger,
  MessageAngle: () => MessageAngle,
  MessageCard: () => MessageCard,
  PageHeading: () => PageHeading,
  PageLevel: () => PageLevel,
  PageLevelItem: () => PageLevelItem,
  PageLevelList: () => PageLevelList,
  Pagination: () => Pagination,
  PaginationContent: () => PaginationContent,
  PaginationEllipsis: () => PaginationEllipsis,
  PaginationItem: () => PaginationItem,
  PaginationLink: () => PaginationLink,
  PaginationNext: () => PaginationNext,
  PaginationPrevious: () => PaginationPrevious,
  PaletteIcon: () => PaletteIcon,
  Persona: () => Persona,
  PersonaIcon: () => PersonaIcon,
  PersonaProfile: () => PersonaProfile,
  Popover: () => Popover,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  Progress: () => Progress,
  Quote: () => Quote,
  RadioGroup: () => RadioGroup,
  RadioGroupItem: () => RadioGroupItem,
  Range: () => Range2,
  RangeSlider: () => RangeSlider,
  Score: () => Score,
  Sidebar: () => Sidebar,
  SidebarIcon: () => SidebarIcon,
  SingleIconCard: () => SingleIconCard,
  Slider: () => Slider,
  Stepper: () => Stepper,
  TabGroup: () => TabGroup,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableCellBenchmark: () => TableCellBenchmark,
  TableCellGeneric: () => TableCellGeneric,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableHeaderCell: () => TableHeaderCell,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  Textarea: () => Textarea,
  Toast: () => Toast,
  ToastAction: () => ToastAction,
  ToastActions: () => ToastActions,
  ToastClose: () => ToastClose,
  ToastContent: () => ToastContent,
  ToastDescription: () => ToastDescription,
  ToastIcon: () => ToastIcon,
  ToastProvider: () => ToastProvider,
  ToastTitle: () => ToastTitle,
  ToastViewport: () => ToastViewport,
  Toaster: () => Toaster,
  Toggle: () => Toggle,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  VectorIcon: () => VectorIcon,
  badgeVariants: () => badgeVariants,
  bannerVariants: () => bannerVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  dividerVariants: () => dividerVariants,
  pageLevelVariants: () => pageLevelVariants,
  personaProfileVariants: () => personaProfileVariants,
  personaVariants: () => personaVariants,
  reducer: () => reducer,
  tabsContentVariants: () => tabsContentVariants,
  tabsListVariants: () => tabsListVariants,
  tabsTriggerVariants: () => tabsTriggerVariants,
  toast: () => toast,
  toggleVariants: () => toggleVariants,
  useIsMobile: () => useIsMobile,
  useToast: () => useToast
});
module.exports = __toCommonJS(index_exports);

// src/components/ui/accordion.tsx
var React = __toESM(require("react"), 1);
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"), 1);
var import_outline = require("@heroicons/react/24/outline");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/accordion.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border border-neutral-200 bg-slate-100 rounded-lg", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_outline.ChevronDownIcon, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-neutral-600 px-4 text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/ui/avatar.tsx
var React2 = __toESM(require("react"), 1);
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var avatarVariants = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16"
};
var avatarGroupSpacing = {
  sm: "-space-x-2",
  md: "-space-x-3",
  lg: "-space-x-4"
};
var avatarTextSizes = {
  sm: "text-xs",
  md: "text-base",
  lg: "text-lg"
};
var AvatarGroupContext = React2.createContext({
  isInGroup: false
});
var Avatar = React2.forwardRef(({ className, size = "md", type, fallback, src, alt, children, ...props }, ref) => {
  const { isInGroup, groupSize } = React2.useContext(AvatarGroupContext);
  const effectiveSize = isInGroup && groupSize ? groupSize : size;
  const shouldShowImage = type === "photo" || type !== "initials" && src;
  const shouldShowFallback = type === "initials" || !shouldShowImage && fallback;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    AvatarPrimitive.Root,
    {
      ref,
      className: cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        avatarVariants[effectiveSize],
        // Automatically add border when inside AvatarGroup
        isInGroup && "border-2 border-background",
        className
      ),
      ...props,
      children: [
        shouldShowImage && src && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          AvatarPrimitive.Image,
          {
            className: "aspect-square h-full w-full",
            src,
            alt
          }
        ),
        children,
        shouldShowFallback && fallback && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          AvatarPrimitive.Fallback,
          {
            className: cn(
              "flex h-full w-full items-center justify-center rounded-full",
              avatarTextSizes[effectiveSize]
            ),
            children: fallback
          }
        )
      ]
    }
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarGroup = React2.forwardRef(
  ({ className, size = "md", children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AvatarGroupContext.Provider, { value: { isInGroup: true, groupSize: size }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      ref,
      className: cn("flex", avatarGroupSpacing[size], className),
      ...props,
      children
    }
  ) })
);
AvatarGroup.displayName = "AvatarGroup";

// src/components/ui/badge.tsx
var React3 = __toESM(require("react"), 1);
var import_class_variance_authority = require("class-variance-authority");
var import_outline2 = require("@heroicons/react/24/outline");
var import_jsx_runtime3 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority.cva)(
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
var Badge = React3.forwardRef(
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "div",
      {
        ref,
        className: cn(badgeVariants({ variant }), className),
        ...props,
        children: [
          shouldShowDot && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: cn(
            "rounded-full bg-current",
            size === "sm" && "w-1.5 h-1.5",
            size === "md" && "w-2 h-2",
            size === "lg" && "w-2.5 h-2.5"
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children }),
          shouldShowRemove && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline2.XMarkIcon, { className: cn(
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
var React5 = __toESM(require("react"), 1);
var import_class_variance_authority3 = require("class-variance-authority");

// src/components/ui/button.tsx
var React4 = __toESM(require("react"), 1);
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_outline3 = require("@heroicons/react/24/outline");
var import_jsx_runtime4 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-[#4136D4] text-white hover:bg-[#372AAC] active:bg-[#312C85] active:scale-95 transition-all duration-300 ease-out",
        secondary: "border border-[#D4D4D4] bg-white text-[#737373] hover:bg-white hover:text-[#272080] hover:border-[#272080] active:scale-95 active:text-[#272080] active:border-[#272080] transition-all duration-300 ease-out",
        "secondary-color": "bg-[#EDEBFD] text-[#272080] border border-[#D4D4D4] hover:border-[#272080] active:scale-95 active:border-[#272080] transition-all duration-300 ease-out",
        "secondary-blue": "bg-[#EDEBFD] text-gray-700 border border-[#C6C2F8] hover:border-[#272080] active:scale-95 active:border-[#272080] transition-all duration-300 ease-out",
        link: "text-[#272080] underline-offset-4 hover:underline active:scale-95 bg-transparent border-none shadow-none h-5 gap-1 min-w-[83px]",
        ghost: "bg-transparent border-none shadow-none h-5 gap-1 min-w-[83px] active:scale-95",
        outline: "h-9 px-4 rounded-[8px] text-[#737373] border-[#d4d4d4] border bg-background text-foreground hover:bg-accent hover:text-accent-foreground active:scale-95 active:bg-accent active:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:active:bg-input/50"
      },
      size: {
        default: "h-10 rounded-[8px] px-6 py-2",
        md: "h-8 rounded-[8px] px-3.5 py-2 text-sm gap-1 min-w-[105px]",
        lg: "h-10 rounded-[8px] px-5 py-2.5 text-base gap-1 min-w-[123px]",
        xl: "h-12 rounded-[8px] px-10 text-lg",
        icon: "h-10 w-10 rounded-[8px] px-2.5 py-2.5 gap-2.5",
        "icon-sm": "h-8 w-8 rounded-[8px] px-2 py-2 gap-2",
        "icon-lg": "h-12 w-12 rounded-[8px] px-3 py-3 gap-3"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);
var Button = React4.forwardRef(
  ({
    className,
    variant,
    size,
    asChild = false,
    showIcons = "none",
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    if (asChild) {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Comp,
        {
          className: cn(buttonVariants({ variant, size, className })),
          ref,
          ...props,
          children
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props,
        children: [
          showIcons === "before" && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_outline3.PlusIcon, { className: "h-4 w-4" }),
            children
          ] }),
          showIcons === "after" && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            children,
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_outline3.PlusIcon, { className: "h-4 w-4" })
          ] }),
          showIcons === "both" && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_outline3.PlusIcon, { className: "h-4 w-4" }),
            children,
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_outline3.PlusIcon, { className: "h-4 w-4" })
          ] }),
          showIcons === "center" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_outline3.PlusIcon, { className: "h-4 w-4" }),
          showIcons === "none" && children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ui/banner.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var bannerVariants = (0, import_class_variance_authority3.cva)(
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
var Banner = React5.forwardRef(
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
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        className: cn(bannerVariants({ variant, size, className })),
        ref,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: `text-${size} font-medium leading-relaxed`, children: title }) }),
          showCta && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "ml-[10px]", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var React6 = __toESM(require("react"), 1);
var import_react_slot2 = require("@radix-ui/react-slot");
var import_outline4 = require("@heroicons/react/24/outline");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Breadcrumb = React6.forwardRef(({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var BreadcrumbItem = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "li",
  {
    ref,
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React6.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? import_react_slot2.Slot : "a";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var BreadcrumbPage = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
}) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:size-2 text-neutral-400", className),
    ...props,
    children: children ?? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_outline4.ChevronRightIcon, { className: "w-2 h-2" })
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_outline4.EllipsisHorizontalIcon, { className: "h-4 w-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "sr-only", children: "More" })
    ]
  }
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

// src/components/ui/card.tsx
var React8 = __toESM(require("react"), 1);

// src/components/ui/progress.tsx
var React7 = __toESM(require("react"), 1);
var ProgressPrimitive = __toESM(require("@radix-ui/react-progress"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var Progress = React7.forwardRef(({ className, value, indicatorClassName, showLabel = false, labelPosition = "bottom", title, badge, ...props }, ref) => {
  const displayValue = value || 0;
  const percentValue = `${Math.round(displayValue)}%`;
  if (title || badge) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: cn("flex gap-2 items-end", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-1 flex-col gap-1 items-end", children: [
        (title || badge) && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center justify-between w-full", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs leading-4 text-neutral-900", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex gap-1 items-center", children: [
            badge,
            showLabel && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs leading-4 text-neutral-900", children: percentValue })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          ProgressPrimitive.Root,
          {
            ref,
            className: cn(
              "relative h-2 w-full overflow-hidden rounded-full bg-neutral-200"
            ),
            value,
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
      showLabel && labelPosition === "right" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs leading-4 text-neutral-900", children: percentValue })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: cn(
    "flex gap-[10px]",
    labelPosition === "bottom" && "flex-col",
    className
  ), children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-col gap-[7px] pt-1 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        ProgressPrimitive.Root,
        {
          ref,
          className: cn(
            "relative h-2 w-full overflow-hidden rounded-full bg-neutral-200"
          ),
          value,
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
      showLabel && labelPosition === "bottom" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs leading-4 text-neutral-900 text-right w-full", children: percentValue })
    ] }),
    showLabel && labelPosition === "right" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs leading-4 text-neutral-900", children: percentValue })
  ] });
});
Progress.displayName = ProgressPrimitive.Root.displayName;

// src/components/ui/card.tsx
var import_outline5 = require("@heroicons/react/24/outline");
var import_jsx_runtime8 = require("react/jsx-runtime");
var AnnouncementCard = React8.forwardRef(({ className, title, author, date, content, badgeText, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col gap-2.5 items-start", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-lg font-semibold text-black leading-7 whitespace-pre-wrap", children: title }),
          (author || date) && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex gap-2.5 items-center", children: [
            author && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-xs font-normal text-neutral-500 leading-4", children: author }),
            author && date && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-xs text-neutral-500", children: "|" }),
            date && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-xs font-normal text-neutral-500 leading-4", children: date })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-base font-normal text-neutral-800 leading-6 w-full whitespace-pre-wrap", children: content })
        ] }),
        badgeText && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "absolute top-7 right-5", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Badge, { variant: "default", className: "text-gray-600 text-xs", children: badgeText }) })
      ]
    }
  );
});
AnnouncementCard.displayName = "AnnouncementCard";
var InfoCard = React8.forwardRef(({ className, title, subtitle, description, showIcon = true, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
        showIcon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "absolute top-6 right-6", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_outline5.SparklesIcon, { className: "w-[18px] h-[18px]" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: cn(showIcon && "pr-8"), children: [
          subtitle && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-lg font-normal text-neutral-700 mb-2", children: subtitle }),
          title && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-2xl font-semibold text-neutral-800 mb-1", children: title }),
          description && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-base font-normal text-neutral-600 leading-6", children: description })
        ] })
      ]
    }
  );
});
InfoCard.displayName = "InfoCard";
var IconCard = React8.forwardRef(({ className, title, value, showLeftIcon = true, showRightIcon = true, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex gap-3 items-center", children: [
          showLeftIcon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "bg-supreme-blue-50 flex items-center justify-center p-2.5 rounded-full flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_outline5.ArrowTrendingUpIcon, { className: "w-[25px] h-[25px] text-neutral-800" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col gap-1 items-start whitespace-nowrap", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-base font-normal text-neutral-600 leading-6", children: title }),
            value && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-2xl font-semibold text-neutral-800 leading-8", children: value })
          ] })
        ] }),
        showRightIcon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_outline5.UsersIcon, { className: "w-[35px] h-[35px] text-supreme-blue-700" })
      ]
    }
  );
});
IconCard.displayName = "IconCard";
var MessageAngle = React8.forwardRef(({ className, title, description, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
  "div",
  {
    ref,
    className: cn(
      "bg-white rounded-md p-4 text-black max-w-[232px]",
      className
    ),
    ...props,
    children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-base font-normal mb-3 text-neutral-600", children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-neutral-600 leading-relaxed", children: description }),
      children
    ]
  }
));
MessageAngle.displayName = "MessageAngle";
var MessageCard = React8.forwardRef(
  ({
    className,
    headerTitle,
    mainContent,
    nestedTitle,
    nestedContent,
    showIcon = true,
    ...props
  }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
        showIcon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "absolute top-6 right-6", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_outline5.PencilSquareIcon, { className: "w-[18px] h-[18px] text-neutral-600" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col gap-2.5 items-start", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "w-2.5 h-2.5 bg-supreme-blue-300 rounded-full" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-lg font-semibold text-supreme-blue-800 leading-7 whitespace-nowrap", children: headerTitle })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs font-normal text-neutral-600 leading-4 w-full whitespace-pre-wrap", children: mainContent }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(MessageAngle, { title: nestedTitle, description: nestedContent, className: "bg-gray-100 rounded-lg p-4" })
        ] })
      ]
    }
  )
);
MessageCard.displayName = "MessageCard";
var HighlightCard = React8.forwardRef(({ className, value, title, subtitle, showIcon = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
      showIcon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "bg-supreme-blue-50 flex items-center justify-center p-2.5 rounded-full flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_outline5.ArrowTrendingUpIcon, { className: "w-[25px] h-[25px] text-neutral-800" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "text-3xl font-semibold text-neutral-800 leading-9 whitespace-nowrap", children: [
          value,
          "%"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-base font-semibold text-neutral-600 leading-6", children: title }),
        subtitle && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-base font-normal text-neutral-600 leading-6", children: subtitle })
      ] })
    ]
  }
));
HighlightCard.displayName = "HighlightCard";
var HighlightCTACard = React8.forwardRef(({ className, title, value, description, icon, ctaText, onCtaClick, showIcon = true, showDescription = true, showAction = false, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex gap-3 items-center", children: [
        showIcon && icon ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-supreme-blue-900 w-6 h-6 flex items-center justify-center", children: icon }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "bg-white flex items-center justify-center p-2.5 rounded-full flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_outline5.ArrowTrendingUpIcon, { className: "w-[25px] h-[25px] text-supreme-blue-900" }) }),
        title && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-2xl font-semibold text-supreme-blue-900 leading-8 whitespace-pre-wrap", children: title })
      ] }),
      value && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-4xl font-bold text-supreme-blue-900 leading-10 whitespace-nowrap", children: value }),
      showDescription && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-base font-normal text-neutral-600 leading-6 w-full whitespace-pre-wrap", children: description }),
      showAction && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
var HowItWorksCard = React8.forwardRef(({ className, stepNumber, title, description, type = "numbers", icon, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
  "div",
  {
    ref,
    className: cn(
      "flex flex-col gap-2.5 items-center w-[233px] border border-neutral-300 p-6 rounded-xl hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col gap-3.5 items-center justify-center shrink-0 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "bg-supreme-blue-50 flex items-center justify-center p-2.5 rounded-full shrink-0 size-[41px]", children: type === "icons" && icon ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "size-6 flex items-center justify-center", children: icon }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-[#4136d4] text-lg font-bold leading-7 text-center w-full", children: stepNumber || 1 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-xl font-normal text-black text-center leading-7", children: title })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-base font-normal text-neutral-600 text-center leading-6 w-full whitespace-pre-wrap", children: description })
    ]
  }
));
HowItWorksCard.displayName = "HowItWorksCard";
var SingleIconCard = React8.forwardRef(({ className, title, description, titleClassName, descriptionClassName, icon, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
      icon || /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_outline5.UsersIcon, { className: "w-[60px] h-[60px] text-neutral-900" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col gap-1.5 items-start text-center w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: cn("text-lg font-semibold text-neutral-900 w-full leading-7", titleClassName), children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: cn("text-base font-normal text-neutral-600 w-full leading-6", descriptionClassName), children: description })
      ] })
    ]
  }
));
SingleIconCard.displayName = "SingleIconCard";
var ContentTypeCard = React8.forwardRef(({ className, title, description, icon, variant = "default", ...props }, ref) => {
  const baseClasses = "flex flex-col gap-2.5 items-start rounded-lg";
  const variantClasses = {
    default: "bg-white border border-neutral-300 p-4",
    selected: "bg-supreme-blue-50 border-2 border-supreme-blue-300 p-4",
    hover: "bg-white border border-neutral-400 p-4",
    ghost: "gap-2.5"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "div",
    {
      ref,
      className: cn(
        baseClasses,
        variantClasses[variant],
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex gap-2.5 items-start relative shrink-0 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "size-[35px] flex items-center justify-center shrink-0", children: icon || /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_outline5.DocumentIcon, { className: "w-[35px] h-[35px] text-supreme-blue-700" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-1 flex-col gap-1 items-start leading-6 min-w-0 whitespace-pre-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-lg font-semibold text-neutral-900 w-full", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-base font-normal text-neutral-600 w-full", children: description })
        ] })
      ] })
    }
  );
});
ContentTypeCard.displayName = "ContentTypeCard";
var CardWithProgress = React8.forwardRef(({ className, title, description, progressItems, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
  "div",
  {
    ref,
    className: cn(
      "bg-white border border-slate-300 rounded-xl p-6 w-[481px] flex flex-col gap-2.5 items-start",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_outline5.ArrowTrendingUpIcon, { className: "w-[25px] h-[25px] text-neutral-800" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-xl font-bold text-supreme-blue-900 leading-7 whitespace-pre-wrap w-[258px]", children: title })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-base font-normal text-neutral-600 leading-6 w-full whitespace-pre-wrap", children: description }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "flex flex-col gap-2.5 w-full", children: progressItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-xs font-normal text-neutral-600", children: item.label }),
          item.badge && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Badge, { variant: "default", className: "text-gray-600 text-xs", children: item.badge })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Progress, { value: item.value, className: "h-2", indicatorClassName: "bg-supreme-blue-600" })
      ] }, index)) })
    ]
  }
));
CardWithProgress.displayName = "CardWithProgress";
var CommonCard = React8.forwardRef(({
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
}, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: cn("flex items-center gap-3", headerClassName), children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "flex-shrink-0", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: cn("text-2xl font-semibold text-neutral-800", titleClassName), children: title }),
        badge && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Badge, { variant: "default", className: "text-gray-600 text-xs text-center", children: badge })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: cn("flex-1"), children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: cn("text-base font-normal text-neutral-600 leading-6", descriptionClassName), children: description }) }),
      (footerText || footerAction) && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: cn("flex items-center gap-2", footerClassName), children: [
        footerAction,
        footerText && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: cn("text-base font-normal text-neutral-600", footerTextClassName), children: footerText })
      ] })
    ]
  }
));
CommonCard.displayName = "CommonCard";

// src/components/ui/checkbox.tsx
var React9 = __toESM(require("react"), 1);
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"), 1);
var import_outline6 = require("@heroicons/react/24/outline");
var import_jsx_runtime9 = require("react/jsx-runtime");
var Checkbox = React9.forwardRef(({ className, externalState, ...props }, ref) => {
  const [state, setState] = React9.useState("unchecked");
  React9.useEffect(() => {
    if (externalState) {
      setState(externalState);
    }
  }, [externalState]);
  const handleClick = () => {
    const nextState = state === "unchecked" ? "checked" : state === "checked" ? "indeterminate" : "unchecked";
    setState(nextState);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "absolute inset-0 flex items-center justify-center p-0.5", children: [
        state === "checked" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_outline6.CheckIcon, { className: "h-3 w-3 text-[#4136D4]" }),
        state === "indeterminate" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_outline6.MinusIcon, { className: "h-3 w-3 text-[#4136D4]" })
      ] })
    }
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/ui/contentbox.tsx
var React10 = __toESM(require("react"), 1);
var import_jsx_runtime10 = require("react/jsx-runtime");
var ContentBox = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var ContentBoxHeader = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
ContentBoxHeader.displayName = "ContentBoxHeader";
var ContentBoxTitle = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
ContentBoxTitle.displayName = "ContentBoxTitle";
var ContentBoxDescription = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
ContentBoxDescription.displayName = "ContentBoxDescription";
var ContentBoxContent = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { ref, className: cn("p-6 pt-0", className), ...props }));
ContentBoxContent.displayName = "ContentBoxContent";
var ContentBoxFooter = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
ContentBoxFooter.displayName = "ContentBoxFooter";

// src/components/ui/credits.tsx
var React11 = __toESM(require("react"), 1);
var import_outline7 = require("@heroicons/react/24/outline");
var import_jsx_runtime11 = require("react/jsx-runtime");
var Credits = React11.forwardRef(
  ({ className, value, label = "Total credits used:", showLabel = true, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      "div",
      {
        ref,
        className: cn(
          "flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100",
          className
        ),
        ...props,
        children: [
          showLabel && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-xs text-teal-800", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_outline7.BoltIcon, { className: "size-3.5 text-teal-800" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-xs font-medium text-teal-800", children: value.toLocaleString() })
          ] })
        ]
      }
    );
  }
);
Credits.displayName = "Credits";

// src/components/ui/quote.tsx
var React12 = __toESM(require("react"), 1);
var import_jsx_runtime12 = require("react/jsx-runtime");
var Quote = React12.forwardRef(
  ({
    className,
    quote,
    authorName,
    authorTitle,
    avatar,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        ref,
        className: cn("flex flex-col gap-2.5 w-full max-w-[850px]", className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex flex-col gap-[15px] w-full", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex flex-col pb-1.5 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "bg-supreme-blue-50 flex gap-2.5 items-center justify-center px-6 py-[17px] rounded-[10px] w-full mb-[-6px]", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "flex-1 text-base font-normal leading-6 text-neutral-800 whitespace-pre-wrap", children: [
            '"',
            quote,
            '"'
          ] }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex gap-2.5 items-center", children: [
            avatar,
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex flex-col gap-0.5 text-neutral-800", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-sm font-semibold leading-5", children: authorName }) }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-xs font-normal leading-4", children: authorTitle }) })
            ] })
          ] })
        ] })
      }
    );
  }
);
Quote.displayName = "Quote";

// src/components/ui/radio-group.tsx
var React13 = __toESM(require("react"), 1);
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"), 1);
var import_jsx_runtime13 = require("react/jsx-runtime");
var RadioGroup = React13.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React13.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "h-3 w-3 rounded-full bg-[#4136D4]" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/ui/divider.tsx
var React14 = __toESM(require("react"), 1);
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime14 = require("react/jsx-runtime");
var dividerVariants = (0, import_class_variance_authority4.cva)("", {
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
var Divider = React14.forwardRef(
  ({
    className,
    variant,
    orientation = "horizontal",
    decorative = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var React15 = __toESM(require("react"), 1);
var import_outline8 = require("@heroicons/react/24/outline");
var import_jsx_runtime15 = require("react/jsx-runtime");
var CreditOption = React15.forwardRef(
  ({ id, credits, label, selected = false, disabled = false, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center gap-[14px]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(RadioGroupItem, { id, value: id, disabled }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center gap-1 px-2.5 py-0.5 rounded-full", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_outline8.BoltIcon, { className: "h-[18px] w-[18px] text-neutral-600" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "text-base leading-6 text-neutral-600", children: credits.toLocaleString() })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-base leading-6 text-neutral-600", children: label })
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    RadioGroup,
    {
      className: cn("flex flex-col gap-3", className),
      value,
      defaultValue,
      onValueChange,
      children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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

// src/components/ui/input.tsx
var React16 = __toESM(require("react"), 1);
var import_jsx_runtime16 = require("react/jsx-runtime");
var Input = React16.forwardRef(
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
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col gap-2 items-start w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "relative w-full", children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
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
              required && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "ml-0.5", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
          "div",
          {
            className: cn(
              "relative flex items-center gap-2 px-3 py-3.5 rounded-md bg-white border",
              isError ? "border-destructive focus-within:ring-0" : isActive ? "border-supreme-blue-800 focus-within:ring-0" : isDisabled ? "border-neutral-300 bg-neutral-200" : "border-neutral-300 focus-within:ring-2 focus-within:ring-supreme-blue-500"
            ),
            children: [
              leftIcon && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center justify-center shrink-0 w-5 h-5", children: [
                React16.isValidElement(leftIcon) && React16.cloneElement(leftIcon, {
                  className: cn(
                    "w-[20px] h-[20px]",
                    isError && "text-destructive",
                    !isError && "text-neutral-500",
                    leftIcon.props?.className
                  )
                }),
                !React16.isValidElement(leftIcon) && leftIcon
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "input",
                {
                  type,
                  className: cn(
                    "flex-1 text-sm min-w-0 h-auto bg-transparent border-0 text-sm leading-5 placeholder:text-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                    className
                  ),
                  ref,
                  disabled: isDisabled,
                  ...props
                }
              ),
              rightIcon && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center justify-center shrink-0 w-5 h-5", children: [
                React16.isValidElement(rightIcon) && React16.cloneElement(rightIcon, {
                  className: cn(
                    "w-[20px] h-[20px]",
                    isError && "text-destructive",
                    !isError && "text-neutral-500",
                    rightIcon.props?.className
                  )
                }),
                !React16.isValidElement(rightIcon) && rightIcon
              ] })
            ]
          }
        )
      ] }),
      hint && !isError && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-xs leading-3 text-neutral-500", children: hint }),
      isError && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-xs leading-3 text-destructive", children: error || hint })
    ] });
  }
);
Input.displayName = "Input";

// src/components/ui/logo.tsx
var React17 = __toESM(require("react"), 1);
var import_jsx_runtime17 = require("react/jsx-runtime");
var CurieAiOriginalIcon = React17.forwardRef(({ className, viewpoint, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("g", { filter: "url(#filter0_d_1846_3041)", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M18.3716 50.8564C20.0112 50.8564 21.3404 52.1855 21.3404 53.8251V58.2782H25.7935L25.9468 58.2821C27.5153 58.3619 28.7623 59.6587 28.7623 61.247C28.7622 62.8352 27.5152 64.1321 25.9468 64.2118L25.7935 64.2157H21.3404V68.6689C21.3404 70.3084 20.0112 71.6376 18.3716 71.6376C16.7321 71.6375 15.4029 70.3084 15.4029 68.6689V64.2157H10.9498C9.3102 64.2157 7.9811 62.8865 7.98102 61.247C7.98102 59.6074 9.31015 58.2782 10.9498 58.2782H15.4029V53.8251C15.4029 52.1855 16.7321 50.8564 18.3716 50.8564ZM43.607 9.29288C44.8352 9.29311 45.9366 10.0498 46.3775 11.1962L51.5259 24.5819C52.4177 26.9006 52.6983 27.5692 53.0816 28.1083C53.4661 28.6489 53.9385 29.1213 54.4791 29.5058C55.0182 29.8891 55.6869 30.1697 58.0054 31.0614L71.3912 36.2099C72.5375 36.6508 73.2943 37.7522 73.2945 38.9804C73.2945 40.2088 72.5377 41.3109 71.3912 41.7519L58.0054 46.9003C55.6869 47.7921 55.0182 48.0727 54.4791 48.456C53.9385 48.8404 53.4661 49.3128 53.0816 49.8534C52.6983 50.3925 52.4177 51.0611 51.5259 53.3798L46.3775 66.7655C45.9366 67.9119 44.8352 68.6686 43.607 68.6689C42.3786 68.6689 41.2765 67.912 40.8355 66.7655L35.6871 53.3798C34.7953 51.0612 34.5147 50.3925 34.1314 49.8534C33.7469 49.3128 33.2745 48.8404 32.7339 48.456C32.1949 48.0726 31.5262 47.7921 29.2076 46.9003L15.8218 41.7519C14.6753 41.3109 13.9185 40.2088 13.9185 38.9804C13.9187 37.7522 14.6755 36.6508 15.8218 36.2099L29.2076 31.0614C31.5262 30.1696 32.1949 29.8891 32.7339 29.5058C33.2745 29.1213 33.7469 28.6489 34.1314 28.1083C34.5147 27.5692 34.7953 26.9005 35.6871 24.5819L40.8355 11.1962L40.9263 10.9853C41.4153 9.95772 42.4556 9.29288 43.607 9.29288ZM18.3716 6.32413C20.0112 6.32418 21.3404 7.65329 21.3404 9.29288V13.746H25.7935C27.4331 13.7461 28.7622 15.0752 28.7623 16.7148C28.7623 18.3543 27.4331 19.6834 25.7935 19.6835H21.3404V24.1366C21.3404 25.7762 20.0112 27.1053 18.3716 27.1054C16.7321 27.1053 15.4029 25.7762 15.4029 24.1366V19.6835H10.9498C9.31015 19.6835 7.98102 18.3544 7.98102 16.7148C7.98108 15.0752 9.31019 13.746 10.9498 13.746H15.4029V9.29288C15.4029 7.6533 16.7321 6.32419 18.3716 6.32413Z",
          fill: "url(#paint0_linear_1846_3041)"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                "feColorMatrix",
                {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("feOffset", { dy: "5.43351" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                "feColorMatrix",
                {
                  type: "matrix",
                  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                "feBlend",
                {
                  mode: "normal",
                  in2: "BackgroundImageFix",
                  result: "effect1_dropShadow_1846_3041"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "linearGradient",
          {
            id: "paint0_linear_1846_3041",
            x1: "40.6377",
            y1: "6.32413",
            x2: "40.6377",
            y2: "71.6374",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        )
      ] })
    ]
  }
));
CurieAiOriginalIcon.displayName = "CurieAiOriginalIcon";
var CurieAiOriginalText = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("g", { filter: "url(#filter0_d_1846_3015)", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "path",
          {
            d: "M308.563 18.6961V64.4241H301.664V18.6961H308.563Z",
            fill: "url(#paint0_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "path",
          {
            d: "M261.501 64.4241H254.177L270.633 18.6961H278.604L295.06 64.4241H287.736L274.809 27.0022H274.451L261.501 64.4241ZM262.729 46.5169H286.486V52.3222H262.729V46.5169Z",
            fill: "url(#paint1_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "path",
          {
            d: "M218.341 65.1162C214.962 65.1162 212.052 64.3943 209.61 62.9504C207.184 61.4916 205.309 59.4449 203.984 56.8102C202.674 54.1606 202.019 51.057 202.019 47.4994C202.019 43.9864 202.674 40.8902 203.984 38.2109C205.309 35.5315 207.154 33.4401 209.521 31.9367C211.903 30.4333 214.686 29.6815 217.872 29.6815C219.807 29.6815 221.683 30.0016 223.499 30.6416C225.315 31.2817 226.945 32.2865 228.388 33.6559C229.832 35.0254 230.971 36.8042 231.805 38.9924C232.638 41.1656 233.055 43.8078 233.055 46.9188V49.2856H205.792V44.2841H226.513C226.513 42.5276 226.156 40.9721 225.441 39.6175C224.727 38.2481 223.722 37.1689 222.427 36.38C221.147 35.591 219.643 35.1966 217.917 35.1966C216.041 35.1966 214.404 35.658 213.004 36.5809C211.62 37.4889 210.548 38.6798 209.789 40.1534C209.045 41.6122 208.673 43.1975 208.673 44.9093V48.8167C208.673 51.1091 209.075 53.0591 209.878 54.6667C210.697 56.2743 211.836 57.5024 213.295 58.3508C214.753 59.1844 216.458 59.6012 218.408 59.6012C219.673 59.6012 220.827 59.4226 221.869 59.0653C222.911 58.6932 223.811 58.1424 224.57 57.413C225.329 56.6837 225.91 55.7831 226.312 54.7113L232.631 55.8501C232.125 57.7108 231.217 59.3407 229.907 60.7399C228.612 62.1243 226.982 63.2035 225.017 63.9775C223.067 64.7367 220.842 65.1162 218.341 65.1162Z",
            fill: "url(#paint2_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "path",
          {
            d: "M187.902 64.4241V30.1281H194.578V64.4241H187.902ZM191.274 24.8363C190.112 24.8363 189.115 24.4493 188.282 23.6753C187.463 22.8864 187.054 21.9486 187.054 20.8619C187.054 19.7604 187.463 18.8226 188.282 18.0486C189.115 17.2597 190.112 16.8652 191.274 16.8652C192.435 16.8652 193.424 17.2597 194.243 18.0486C195.077 18.8226 195.494 19.7604 195.494 20.8619C195.494 21.9486 195.077 22.8864 194.243 23.6753C193.424 24.4493 192.435 24.8363 191.274 24.8363Z",
            fill: "url(#paint3_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "path",
          {
            d: "M163.771 64.4241V30.1281H170.224V35.5762H170.581C171.206 33.7304 172.308 32.279 173.886 31.2222C175.478 30.1504 177.279 29.6146 179.289 29.6146C179.706 29.6146 180.197 29.6294 180.763 29.6592C181.343 29.689 181.797 29.7262 182.125 29.7709V36.1567C181.857 36.0823 181.38 36.0004 180.696 35.9111C180.011 35.8069 179.326 35.7548 178.641 35.7548C177.064 35.7548 175.657 36.0897 174.421 36.7595C173.201 37.4145 172.233 38.33 171.519 39.5059C170.804 40.667 170.447 41.9918 170.447 43.4803V64.4241H163.771Z",
            fill: "url(#paint4_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "path",
          {
            d: "M148.102 50.2011V30.1281H154.801V64.4241H148.236V58.4848H147.879C147.09 60.3157 145.825 61.8414 144.083 63.062C142.356 64.2678 140.205 64.8706 137.63 64.8706C135.427 64.8706 133.477 64.3869 131.78 63.4193C130.098 62.4369 128.773 60.9855 127.806 59.0653C126.853 57.1451 126.377 54.7709 126.377 51.9427V30.1281H133.053V51.1388C133.053 53.4758 133.701 55.3365 134.996 56.7209C136.291 58.1052 137.973 58.7974 140.042 58.7974C141.292 58.7974 142.535 58.4848 143.77 57.8596C145.021 57.2344 146.055 56.2892 146.874 55.0239C147.708 53.7587 148.117 52.151 148.102 50.2011Z",
            fill: "url(#paint5_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "path",
          {
            d: "M118.657 33.5666H111.691C111.423 32.0781 110.924 30.7682 110.195 29.6369C109.465 28.5056 108.572 27.5455 107.515 26.7566C106.458 25.9676 105.275 25.3722 103.965 24.9703C102.67 24.5684 101.293 24.3674 99.8344 24.3674C97.1997 24.3674 94.8403 25.0298 92.7564 26.3547C90.6873 27.6795 89.0499 29.622 87.8442 32.1823C86.6534 34.7426 86.0579 37.8685 86.0579 41.5601C86.0579 45.2814 86.6534 48.4223 87.8442 50.9825C89.0499 53.5428 90.6947 55.4779 92.7787 56.7878C94.8627 58.0978 97.2071 58.7527 99.8121 58.7527C101.256 58.7527 102.625 58.5592 103.92 58.1722C105.23 57.7703 106.414 57.1823 107.471 56.4083C108.527 55.6342 109.421 54.689 110.15 53.5726C110.894 52.4413 111.408 51.1463 111.691 49.6875L118.657 49.7098C118.285 51.9575 117.563 54.0266 116.491 55.9171C115.434 57.7926 114.072 59.4151 112.405 60.7846C110.753 62.1392 108.862 63.1886 106.734 63.9328C104.605 64.6771 102.283 65.0492 99.7674 65.0492C95.8079 65.0492 92.28 64.1115 89.1839 62.2359C86.0877 60.3455 83.6465 57.6438 81.8603 54.1308C80.0889 50.6179 79.2032 46.4276 79.2032 41.5601C79.2032 36.6777 80.0963 32.4874 81.8826 28.9894C83.6688 25.4764 86.11 22.7822 89.2062 20.9066C92.3024 19.0161 95.8228 18.0709 99.7674 18.0709C102.194 18.0709 104.456 18.4207 106.555 19.1203C108.669 19.8051 110.567 20.8173 112.249 22.157C113.931 23.4818 115.323 25.1043 116.424 27.0245C117.526 28.9298 118.27 31.1105 118.657 33.5666Z",
            fill: "url(#paint6_linear_1846_3015)"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "path",
          {
            d: "M18.4296 40.3421C19.615 40.3424 20.5759 41.3031 20.5761 42.4886V45.7093H23.7968C24.9824 45.7095 25.9442 46.6711 25.9442 47.8567C25.9441 48.9683 25.0991 49.8825 24.0165 49.9925L23.7968 50.0042H20.5761V53.2249C20.5758 54.4103 19.615 55.372 18.4296 55.3724C17.2439 55.3724 16.2824 54.4105 16.2821 53.2249V50.0042H13.0614C11.8757 50.0042 10.9142 49.0424 10.914 47.8567C10.914 46.6709 11.8756 45.7093 13.0614 45.7093H16.2821V42.4886C16.2823 41.3029 17.2439 40.3421 18.4296 40.3421ZM36.6806 10.2815C37.5686 10.2818 38.3656 10.8287 38.6845 11.6575L42.4081 21.3392C43.0529 23.0156 43.2559 23.4991 43.5331 23.889C43.8112 24.28 44.1528 24.6226 44.5439 24.9007C44.9337 25.1778 45.4182 25.3809 47.0946 26.0257L56.7753 29.7493C57.6043 30.0683 58.1523 30.8649 58.1523 31.7532C58.1521 32.6414 57.6043 33.4382 56.7753 33.7571L47.0946 37.4808C45.4177 38.1257 44.9338 38.3285 44.5439 38.6058C44.1528 38.8838 43.8112 39.2255 43.5331 39.6165C43.2559 40.0064 43.0531 40.4903 42.4081 42.1673L38.6845 51.8479C38.3656 52.6768 37.5687 53.2246 36.6806 53.2249C35.7923 53.2249 34.9947 52.6769 34.6757 51.8479L30.953 42.1673C30.3082 40.4908 30.1051 40.0063 29.828 39.6165C29.5499 39.2254 29.2073 38.8839 28.8163 38.6058C28.4265 38.3286 27.943 38.1255 26.2665 37.4808L16.5849 33.7571C15.7558 33.4382 15.2091 32.6415 15.2089 31.7532C15.2089 30.8648 15.7557 30.0683 16.5849 29.7493L26.2665 26.0257C27.9431 25.3808 28.4265 25.1779 28.8163 24.9007C29.2075 24.6225 29.5499 24.2801 29.828 23.889C30.1051 23.4991 30.3083 23.0154 30.953 21.3392L34.6757 11.6575C34.9947 10.8284 35.7922 10.2815 36.6806 10.2815ZM18.4296 8.13408C19.6152 8.1344 20.5761 9.09589 20.5761 10.2815V13.5022H23.7968C24.9825 13.5024 25.9442 14.464 25.9442 15.6497C25.9439 16.8352 24.9823 17.796 23.7968 17.7962H20.5761V21.0169C20.5759 22.2024 19.6151 23.164 18.4296 23.1644C17.2439 23.1644 16.2823 22.2026 16.2821 21.0169V17.7962H13.0614C11.8758 17.7962 10.9143 16.8353 10.914 15.6497C10.914 14.4639 11.8756 13.5022 13.0614 13.5022H16.2821V10.2815C16.2821 9.0957 17.2438 8.13408 18.4296 8.13408Z",
            fill: "url(#paint7_linear_1846_3015)"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                "feColorMatrix",
                {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("feOffset", { dy: "3.92975" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                "feColorMatrix",
                {
                  type: "matrix",
                  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                "feBlend",
                {
                  mode: "normal",
                  in2: "BackgroundImageFix",
                  result: "effect1_dropShadow_1846_3015"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "linearGradient",
          {
            id: "paint0_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57594",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "linearGradient",
          {
            id: "paint1_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57594",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "linearGradient",
          {
            id: "paint2_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57594",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "linearGradient",
          {
            id: "paint3_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57593",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "linearGradient",
          {
            id: "paint4_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57593",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "linearGradient",
          {
            id: "paint5_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57594",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "linearGradient",
          {
            id: "paint6_linear_1846_3015",
            x1: "194.653",
            y1: "-5.57594",
            x2: "194.653",
            y2: "89.4241",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "linearGradient",
          {
            id: "paint7_linear_1846_3015",
            x1: "34.5331",
            y1: "8.13408",
            x2: "34.5331",
            y2: "55.3724",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { stopColor: "#1F1880" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { offset: "1", stopColor: "#4F46CB" })
            ]
          }
        )
      ] })
    ]
  }
));
CurieAiOriginalText.displayName = "CurieAiOriginalText";
var CurieAiBlackIcon = React17.forwardRef(({ className, viewpoint, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  "svg",
  {
    ref,
    width: "95",
    height: "95",
    viewBox: viewpoint || "0 0 95 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M18.3716 50.8564C20.0112 50.8564 21.3404 52.1855 21.3404 53.8251V58.2782H25.7935L25.9468 58.2821C27.5153 58.3619 28.7623 59.6587 28.7623 61.247C28.7622 62.8352 27.5152 64.1321 25.9468 64.2118L25.7935 64.2157H21.3404V68.6689C21.3404 70.3084 20.0112 71.6376 18.3716 71.6376C16.7321 71.6375 15.4029 70.3084 15.4029 68.6689V64.2157H10.9498C9.3102 64.2157 7.9811 62.8865 7.98102 61.247C7.98102 59.6074 9.31015 58.2782 10.9498 58.2782H15.4029V53.8251C15.4029 52.1855 16.7321 50.8564 18.3716 50.8564ZM43.607 9.29288C44.8352 9.29311 45.9366 10.0498 46.3775 11.1962L51.5259 24.5819C52.4177 26.9006 52.6983 27.5692 53.0816 28.1083C53.4661 28.6489 53.9385 29.1213 54.4791 29.5058C55.0182 29.8891 55.6869 30.1697 58.0054 31.0614L71.3912 36.2099C72.5375 36.6508 73.2943 37.7522 73.2945 38.9804C73.2945 40.2088 72.5377 41.3109 71.3912 41.7519L58.0054 46.9003C55.6869 47.7921 55.0182 48.0727 54.4791 48.456C53.9385 48.8404 53.4661 49.3128 53.0816 49.8534C52.6983 50.3925 52.4177 51.0611 51.5259 53.3798L46.3775 66.7655C45.9366 67.9119 44.8352 68.6686 43.607 68.6689C42.3786 68.6689 41.2765 67.912 40.8355 66.7655L35.6871 53.3798C34.7953 51.0612 34.5147 50.3925 34.1314 49.8534C33.7469 49.3128 33.2745 48.8404 32.7339 48.456C32.1949 48.0726 31.5262 47.7921 29.2076 46.9003L15.8218 41.7519C14.6753 41.3109 13.9185 40.2088 13.9185 38.9804C13.9187 37.7522 14.6755 36.6508 15.8218 36.2099L29.2076 31.0614C31.5262 30.1696 32.1949 29.8891 32.7339 29.5058C33.2745 29.1213 33.7469 28.6489 34.1314 28.1083C34.5147 27.5692 34.7953 26.9005 35.6871 24.5819L40.8355 11.1962L40.9263 10.9853C41.4153 9.95772 42.4556 9.29288 43.607 9.29288ZM18.3716 6.32413C20.0112 6.32418 21.3404 7.65329 21.3404 9.29288V13.746H25.7935C27.4331 13.7461 28.7622 15.0752 28.7623 16.7148C28.7623 18.3543 27.4331 19.6834 25.7935 19.6835H21.3404V24.1366C21.3404 25.7762 20.0112 27.1053 18.3716 27.1054C16.7321 27.1053 15.4029 25.7762 15.4029 24.1366V19.6835H10.9498C9.31015 19.6835 7.98102 18.3544 7.98102 16.7148C7.98108 15.0752 9.31019 13.746 10.9498 13.746H15.4029V9.29288C15.4029 7.6533 16.7321 6.32419 18.3716 6.32413Z",
        fill: "black"
      }
    )
  }
));
CurieAiBlackIcon.displayName = "CurieAiBlackIcon";
var CurieAiBlackText = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M308.563 18.6961V64.4241H301.664V18.6961H308.563Z", fill: "black" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M261.501 64.4241H254.177L270.633 18.6961H278.604L295.06 64.4241H287.736L274.809 27.0022H274.451L261.501 64.4241ZM262.729 46.5169H286.486V52.3223H262.729V46.5169Z",
          fill: "black"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M218.341 65.1163C214.962 65.1163 212.052 64.3943 209.61 62.9504C207.184 61.4917 205.309 59.4449 203.984 56.8102C202.674 54.1606 202.019 51.057 202.019 47.4994C202.019 43.9864 202.674 40.8903 203.984 38.2109C205.309 35.5315 207.154 33.4401 209.521 31.9367C211.903 30.4333 214.686 29.6816 217.872 29.6816C219.807 29.6816 221.683 30.0016 223.499 30.6417C225.315 31.2818 226.945 32.2865 228.388 33.656C229.832 35.0254 230.971 36.8042 231.805 38.9924C232.638 41.1657 233.055 43.8078 233.055 46.9189V49.2857H205.792V44.2842H226.513C226.513 42.5277 226.156 40.9722 225.441 39.6176C224.727 38.2481 223.722 37.1689 222.427 36.38C221.147 35.5911 219.643 35.1966 217.917 35.1966C216.041 35.1966 214.404 35.6581 213.004 36.581C211.62 37.489 210.548 38.6798 209.789 40.1535C209.045 41.6122 208.673 43.1975 208.673 44.9093V48.8168C208.673 51.1091 209.075 53.0591 209.878 54.6667C210.697 56.2743 211.836 57.5024 213.295 58.3509C214.753 59.1844 216.458 59.6012 218.408 59.6012C219.673 59.6012 220.827 59.4226 221.869 59.0654C222.911 58.6932 223.811 58.1425 224.57 57.4131C225.329 56.6837 225.91 55.7831 226.312 54.7114L232.631 55.8501C232.125 57.7108 231.217 59.3407 229.907 60.74C228.612 62.1243 226.982 63.2035 225.017 63.9775C223.067 64.7367 220.842 65.1163 218.341 65.1163Z",
          fill: "black"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M187.902 64.4241V30.1281H194.578V64.4241H187.902ZM191.274 24.8364C190.112 24.8364 189.115 24.4493 188.282 23.6753C187.463 22.8864 187.054 21.9486 187.054 20.862C187.054 19.7604 187.463 18.8227 188.282 18.0486C189.115 17.2597 190.112 16.8652 191.274 16.8652C192.435 16.8652 193.424 17.2597 194.243 18.0486C195.077 18.8227 195.494 19.7604 195.494 20.862C195.494 21.9486 195.077 22.8864 194.243 23.6753C193.424 24.4493 192.435 24.8364 191.274 24.8364Z",
          fill: "black"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M163.771 64.4241V30.1281H170.224V35.5762H170.581C171.206 33.7304 172.308 32.2791 173.886 31.2222C175.478 30.1504 177.279 29.6146 179.289 29.6146C179.706 29.6146 180.197 29.6294 180.763 29.6592C181.343 29.689 181.797 29.7262 182.125 29.7709V36.1567C181.857 36.0823 181.38 36.0004 180.696 35.9111C180.011 35.8069 179.326 35.7548 178.641 35.7548C177.064 35.7548 175.657 36.0897 174.421 36.7596C173.201 37.4145 172.233 38.33 171.519 39.5059C170.804 40.667 170.447 41.9918 170.447 43.4803V64.4241H163.771Z",
          fill: "black"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M148.102 50.2011V30.1281H154.801V64.4241H148.236V58.4848H147.879C147.09 60.3157 145.825 61.8415 144.083 63.0621C142.356 64.2678 140.205 64.8706 137.63 64.8706C135.427 64.8706 133.477 64.3869 131.78 63.4193C130.098 62.4369 128.773 60.9856 127.806 59.0653C126.853 57.1451 126.377 54.7709 126.377 51.9427V30.1281H133.053V51.1389C133.053 53.4759 133.701 55.3365 134.996 56.7209C136.291 58.1052 137.973 58.7974 140.042 58.7974C141.292 58.7974 142.535 58.4848 143.77 57.8596C145.021 57.2344 146.055 56.2892 146.874 55.0239C147.708 53.7587 148.117 52.1511 148.102 50.2011Z",
          fill: "black"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M118.657 33.5667H111.691C111.423 32.0781 110.924 30.7682 110.195 29.6369C109.465 28.5056 108.572 27.5455 107.515 26.7566C106.458 25.9677 105.275 25.3722 103.965 24.9703C102.67 24.5684 101.293 24.3675 99.8344 24.3675C97.1997 24.3675 94.8403 25.0299 92.7564 26.3547C90.6873 27.6795 89.0499 29.622 87.8442 32.1823C86.6534 34.7426 86.0579 37.8685 86.0579 41.5601C86.0579 45.2815 86.6534 48.4223 87.8442 50.9826C89.0499 53.5429 90.6947 55.478 92.7787 56.7879C94.8627 58.0978 97.2071 58.7528 99.8121 58.7528C101.256 58.7528 102.625 58.5592 103.92 58.1722C105.23 57.7703 106.414 57.1823 107.471 56.4083C108.527 55.6343 109.421 54.689 110.15 53.5726C110.894 52.4413 111.408 51.1463 111.691 49.6875L118.657 49.7099C118.285 51.9576 117.563 54.0266 116.491 55.9171C115.434 57.7926 114.072 59.4152 112.405 60.7846C110.753 62.1392 108.862 63.1886 106.734 63.9329C104.605 64.6771 102.283 65.0493 99.7674 65.0493C95.8079 65.0493 92.28 64.1115 89.1839 62.2359C86.0877 60.3455 83.6465 57.6438 81.8603 54.1308C80.0889 50.6179 79.2032 46.4276 79.2032 41.5601C79.2032 36.6777 80.0963 32.4875 81.8826 28.9894C83.6688 25.4764 86.11 22.7822 89.2062 20.9066C92.3024 19.0162 95.8228 18.071 99.7674 18.071C102.194 18.071 104.456 18.4208 106.555 19.1204C108.669 19.8051 110.567 20.8173 112.249 22.157C113.931 23.4818 115.323 25.1043 116.424 27.0245C117.526 28.9299 118.27 31.1106 118.657 33.5667Z",
          fill: "black"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var CurieAiWhiteIcon = React17.forwardRef(({ className, viewpoint, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  "svg",
  {
    ref,
    width: "95",
    height: "95",
    viewBox: viewpoint || "0 0 95 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M18.3716 50.8564C20.0112 50.8564 21.3404 52.1855 21.3404 53.8251V58.2782H25.7935L25.9468 58.2821C27.5153 58.3619 28.7623 59.6587 28.7623 61.247C28.7622 62.8352 27.5152 64.1321 25.9468 64.2118L25.7935 64.2157H21.3404V68.6689C21.3404 70.3084 20.0112 71.6376 18.3716 71.6376C16.7321 71.6375 15.4029 70.3084 15.4029 68.6689V64.2157H10.9498C9.3102 64.2157 7.9811 62.8865 7.98102 61.247C7.98102 59.6074 9.31015 58.2782 10.9498 58.2782H15.4029V53.8251C15.4029 52.1855 16.7321 50.8564 18.3716 50.8564ZM43.607 9.29288C44.8352 9.29311 45.9366 10.0498 46.3775 11.1962L51.5259 24.5819C52.4177 26.9006 52.6983 27.5692 53.0816 28.1083C53.4661 28.6489 53.9385 29.1213 54.4791 29.5058C55.0182 29.8891 55.6869 30.1697 58.0054 31.0614L71.3912 36.2099C72.5375 36.6508 73.2943 37.7522 73.2945 38.9804C73.2945 40.2088 72.5377 41.3109 71.3912 41.7519L58.0054 46.9003C55.6869 47.7921 55.0182 48.0727 54.4791 48.456C53.9385 48.8404 53.4661 49.3128 53.0816 49.8534C52.6983 50.3925 52.4177 51.0611 51.5259 53.3798L46.3775 66.7655C45.9366 67.9119 44.8352 68.6686 43.607 68.6689C42.3786 68.6689 41.2765 67.912 40.8355 66.7655L35.6871 53.3798C34.7953 51.0612 34.5147 50.3925 34.1314 49.8534C33.7469 49.3128 33.2745 48.8404 32.7339 48.456C32.1949 48.0726 31.5262 47.7921 29.2076 46.9003L15.8218 41.7519C14.6753 41.3109 13.9185 40.2088 13.9185 38.9804C13.9187 37.7522 14.6755 36.6508 15.8218 36.2099L29.2076 31.0614C31.5262 30.1696 32.1949 29.8891 32.7339 29.5058C33.2745 29.1213 33.7469 28.6489 34.1314 28.1083C34.5147 27.5692 34.7953 26.9005 35.6871 24.5819L40.8355 11.1962L40.9263 10.9853C41.4153 9.95772 42.4556 9.29288 43.607 9.29288ZM18.3716 6.32413C20.0112 6.32418 21.3404 7.65329 21.3404 9.29288V13.746H25.7935C27.4331 13.7461 28.7622 15.0752 28.7623 16.7148C28.7623 18.3543 27.4331 19.6834 25.7935 19.6835H21.3404V24.1366C21.3404 25.7762 20.0112 27.1053 18.3716 27.1054C16.7321 27.1053 15.4029 25.7762 15.4029 24.1366V19.6835H10.9498C9.31015 19.6835 7.98102 18.3544 7.98102 16.7148C7.98108 15.0752 9.31019 13.746 10.9498 13.746H15.4029V9.29288C15.4029 7.6533 16.7321 6.32419 18.3716 6.32413Z",
        fill: "white"
      }
    )
  }
));
CurieAiWhiteIcon.displayName = "CurieAiWhiteIcon";
var CurieAiWhiteText = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M308.563 18.6961V64.4241H301.664V18.6961H308.563Z", fill: "white" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M261.501 64.4241H254.177L270.633 18.6961H278.604L295.06 64.4241H287.736L274.809 27.0022H274.451L261.501 64.4241ZM262.729 46.5169H286.486V52.3222H262.729V46.5169Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M218.341 65.1162C214.962 65.1162 212.052 64.3943 209.61 62.9504C207.184 61.4916 205.309 59.4449 203.984 56.8102C202.674 54.1606 202.019 51.057 202.019 47.4994C202.019 43.9864 202.674 40.8903 203.984 38.2109C205.309 35.5315 207.154 33.4401 209.521 31.9367C211.903 30.4333 214.686 29.6815 217.872 29.6815C219.807 29.6815 221.683 30.0016 223.499 30.6417C225.315 31.2817 226.945 32.2865 228.388 33.6559C229.832 35.0254 230.971 36.8042 231.805 38.9924C232.638 41.1656 233.055 43.8078 233.055 46.9188V49.2856H205.792V44.2841H226.513C226.513 42.5276 226.156 40.9721 225.441 39.6176C224.727 38.2481 223.722 37.1689 222.427 36.38C221.147 35.5911 219.643 35.1966 217.917 35.1966C216.041 35.1966 214.404 35.658 213.004 36.5809C211.62 37.4889 210.548 38.6798 209.789 40.1534C209.045 41.6122 208.673 43.1975 208.673 44.9093V48.8167C208.673 51.1091 209.075 53.0591 209.878 54.6667C210.697 56.2743 211.836 57.5024 213.295 58.3508C214.753 59.1844 216.458 59.6012 218.408 59.6012C219.673 59.6012 220.827 59.4226 221.869 59.0653C222.911 58.6932 223.811 58.1424 224.57 57.413C225.329 56.6837 225.91 55.7831 226.312 54.7113L232.631 55.8501C232.125 57.7108 231.217 59.3407 229.907 60.7399C228.612 62.1243 226.982 63.2035 225.017 63.9775C223.067 64.7367 220.842 65.1162 218.341 65.1162Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M187.902 64.4241V30.1281H194.578V64.4241H187.902ZM191.274 24.8364C190.112 24.8364 189.115 24.4493 188.282 23.6753C187.463 22.8864 187.054 21.9486 187.054 20.8619C187.054 19.7604 187.463 18.8226 188.282 18.0486C189.115 17.2597 190.112 16.8652 191.274 16.8652C192.435 16.8652 193.424 17.2597 194.243 18.0486C195.077 18.8226 195.494 19.7604 195.494 20.8619C195.494 21.9486 195.077 22.8864 194.243 23.6753C193.424 24.4493 192.435 24.8364 191.274 24.8364Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M163.771 64.4241V30.1281H170.224V35.5762H170.581C171.206 33.7304 172.308 32.2791 173.886 31.2222C175.478 30.1504 177.279 29.6146 179.289 29.6146C179.706 29.6146 180.197 29.6294 180.763 29.6592C181.343 29.689 181.797 29.7262 182.125 29.7709V36.1567C181.857 36.0823 181.38 36.0004 180.696 35.9111C180.011 35.8069 179.326 35.7548 178.641 35.7548C177.064 35.7548 175.657 36.0897 174.421 36.7596C173.201 37.4145 172.233 38.33 171.519 39.5059C170.804 40.667 170.447 41.9918 170.447 43.4803V64.4241H163.771Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M148.102 50.2011V30.1281H154.801V64.4241H148.236V58.4848H147.879C147.09 60.3157 145.825 61.8415 144.083 63.0621C142.356 64.2678 140.205 64.8706 137.63 64.8706C135.427 64.8706 133.477 64.3869 131.78 63.4193C130.098 62.4369 128.773 60.9856 127.806 59.0653C126.853 57.1451 126.377 54.7709 126.377 51.9427V30.1281H133.053V51.1389C133.053 53.4759 133.701 55.3365 134.996 56.7209C136.291 58.1052 137.973 58.7974 140.042 58.7974C141.292 58.7974 142.535 58.4848 143.77 57.8596C145.021 57.2344 146.055 56.2892 146.874 55.0239C147.708 53.7587 148.117 52.1511 148.102 50.2011Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M118.657 33.5666H111.691C111.423 32.0781 110.924 30.7682 110.195 29.6369C109.465 28.5056 108.572 27.5455 107.515 26.7566C106.458 25.9676 105.275 25.3722 103.965 24.9703C102.67 24.5684 101.293 24.3675 99.8344 24.3675C97.1997 24.3675 94.8403 25.0299 92.7564 26.3547C90.6873 27.6795 89.0499 29.622 87.8442 32.1823C86.6534 34.7426 86.0579 37.8685 86.0579 41.5601C86.0579 45.2815 86.6534 48.4223 87.8442 50.9826C89.0499 53.5428 90.6947 55.478 92.7787 56.7879C94.8627 58.0978 97.2071 58.7527 99.8121 58.7527C101.256 58.7527 102.625 58.5592 103.92 58.1722C105.23 57.7703 106.414 57.1823 107.471 56.4083C108.527 55.6342 109.421 54.689 110.15 53.5726C110.894 52.4413 111.408 51.1463 111.691 49.6875L118.657 49.7099C118.285 51.9576 117.563 54.0266 116.491 55.9171C115.434 57.7926 114.072 59.4151 112.405 60.7846C110.753 62.1392 108.862 63.1886 106.734 63.9329C104.605 64.6771 102.283 65.0493 99.7674 65.0493C95.8079 65.0493 92.28 64.1115 89.1839 62.2359C86.0877 60.3455 83.6465 57.6438 81.8603 54.1308C80.0889 50.6179 79.2032 46.4276 79.2032 41.5601C79.2032 36.6777 80.0963 32.4874 81.8826 28.9894C83.6688 25.4764 86.11 22.7822 89.2062 20.9066C92.3024 19.0162 95.8228 18.0709 99.7674 18.0709C102.194 18.0709 104.456 18.4207 106.555 19.1204C108.669 19.8051 110.567 20.8173 112.249 22.157C113.931 23.4818 115.323 25.1043 116.424 27.0245C117.526 28.9298 118.27 31.1105 118.657 33.5666Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var SupremeIntelligenceOriginalText = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("svg", { viewBox: "0 0 319 95", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("g", { clipPath: "url(#clip0_1668_1288)", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M0 0V94.2818H94.7752V0H0ZM55.7218 66.0637C54.0247 68.412 51.717 70.2056 48.7891 71.4538C45.866 72.7021 42.5823 73.3239 38.9476 73.3239C33.2456 73.3239 28.5773 72.0039 24.9378 69.3638C21.2983 66.7237 19.0627 62.9597 18.2262 58.067H24.4186C25.2551 61.4388 26.8994 63.9976 29.3561 65.7337C31.8129 67.4698 35.0341 68.3355 39.0149 68.3355C42.9957 68.3355 45.9573 67.4459 48.3419 65.6572C50.7266 63.8732 51.9189 61.5154 51.9189 58.5788C51.9189 56.0344 51.217 54.0208 49.8179 52.5286C48.4189 51.0364 46.241 49.9986 43.2938 49.4103L31.0533 46.9185C27.0724 46.1389 24.1109 44.7567 22.1685 42.7767C20.2262 40.7966 19.255 38.0226 19.255 34.4499C19.255 31.566 20.1156 29.1076 21.8368 27.0798C23.558 25.0519 25.8561 23.5214 28.7311 22.4979C31.6062 21.4696 34.7649 20.9579 38.2072 20.9579C43.515 20.9579 47.7939 22.1583 51.0343 24.5497C54.2795 26.9459 56.2218 30.3942 56.8613 34.8899H50.6689C50.0775 31.8577 48.6881 29.5955 46.5054 28.1033C44.3179 26.6111 41.5053 25.865 38.063 25.865C34.3754 25.865 31.3754 26.5871 29.0677 28.0267C26.7551 29.4711 25.6013 31.4847 25.6013 34.0769C25.6013 36.3248 26.1782 38.0513 27.3321 39.247C28.4859 40.4475 30.3658 41.3131 32.9716 41.8488L45.7986 44.4171C50.0247 45.2493 53.1593 46.7415 55.1978 48.889C57.2363 51.0412 58.2555 54.0208 58.2555 57.8374C58.2555 60.9653 57.4094 63.7058 55.7122 66.0542L55.7218 66.0637ZM76.549 72.8121H70.2797V40.0983H63.4239V35.1817H76.549V72.8074V72.8121Z",
        fill: "url(#paint0_radial_1668_1288)"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M126.319 42.0114C123.968 42.0114 121.963 41.5619 120.309 40.6723C118.651 39.7779 117.242 38.5487 116.079 36.98L118.651 34.8374C119.675 36.1861 120.805 37.2096 122.05 37.9079C123.295 38.6109 124.757 38.9601 126.444 38.9601C128.516 38.9601 130.098 38.4674 131.189 37.4774C132.281 36.4874 132.829 35.1674 132.829 33.5173C132.829 32.1447 132.415 31.0829 131.584 30.3416C130.757 29.6003 129.386 29.0072 127.478 28.5672L125.112 28.0315C122.459 27.4289 120.434 26.5106 119.04 25.291C117.646 24.0667 116.944 22.3401 116.944 20.1161C116.944 18.8535 117.18 17.7248 117.651 16.7348C118.122 15.7447 118.776 14.9221 119.622 14.2621C120.468 13.6021 121.473 13.0999 122.651 12.7555C123.824 12.4112 125.117 12.239 126.526 12.239C128.709 12.239 130.584 12.636 132.146 13.4347C133.709 14.2334 135.026 15.4004 136.108 16.9404L133.497 18.8392C132.694 17.7391 131.728 16.8735 130.593 16.2421C129.459 15.6108 128.05 15.2952 126.362 15.2952C124.511 15.2952 123.05 15.6873 121.987 16.4717C120.925 17.2561 120.391 18.4326 120.391 19.9966C120.391 21.374 120.838 22.4118 121.737 23.1101C122.636 23.8132 123.997 24.368 125.819 24.7793L128.185 25.315C131.031 25.9463 133.093 26.9124 134.362 28.2037C135.632 29.4951 136.271 31.2168 136.271 33.3595C136.271 34.6795 136.045 35.8752 135.588 36.9465C135.132 38.0179 134.473 38.9266 133.617 39.6679C132.762 40.4092 131.718 40.9879 130.487 41.3992C129.257 41.8106 127.867 42.0162 126.319 42.0162V42.0114Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M153.848 38.0895H153.684C153.463 38.5822 153.194 39.0652 152.877 39.5387C152.559 40.017 152.165 40.4379 151.694 40.8061C151.223 41.1744 150.655 41.4661 149.992 41.6861C149.328 41.9062 148.554 42.0114 147.67 42.0114C145.458 42.0114 143.703 41.3035 142.405 39.8878C141.107 38.4722 140.458 36.473 140.458 33.8855V20.2356H143.776V33.3403C143.776 37.1713 145.405 39.0843 148.67 39.0843C149.333 39.0843 149.978 39.003 150.598 38.8356C151.218 38.673 151.771 38.4243 152.256 38.0895C152.742 37.7595 153.127 37.3387 153.42 36.8269C153.708 36.3151 153.857 35.703 153.857 34.9856V20.2309H157.175V41.514H153.857V38.0895H153.848Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M162.925 20.2309H166.242V23.6553H166.406C166.959 22.3209 167.767 21.3357 168.834 20.6948C169.896 20.0539 171.175 19.7335 172.67 19.7335C173.997 19.7335 175.199 19.9965 176.276 20.5178C177.353 21.0392 178.271 21.7853 179.031 22.7466C179.791 23.7079 180.372 24.8797 180.771 26.2523C181.171 27.6297 181.372 29.165 181.372 30.8724C181.372 32.5799 181.171 34.1151 180.771 35.4925C180.372 36.87 179.791 38.0369 179.031 38.9983C178.271 39.9596 177.353 40.7057 176.276 41.227C175.199 41.7483 173.997 42.0114 172.67 42.0114C169.767 42.0114 167.68 40.7057 166.411 38.0896H166.247V49.7642H162.93V20.2309H162.925ZM171.757 39.0796C173.637 39.0796 175.118 38.4913 176.195 37.3195C177.271 36.143 177.81 34.603 177.81 32.6946V29.0454C177.81 27.1371 177.271 25.5971 176.195 24.4253C175.118 23.2488 173.637 22.6653 171.757 22.6653C171.012 22.6653 170.3 22.7705 169.622 22.9762C168.944 23.1818 168.358 23.4688 167.858 23.8275C167.363 24.1862 166.968 24.6214 166.675 25.1332C166.387 25.6449 166.238 26.1901 166.238 26.7689V34.7273C166.238 35.416 166.382 36.033 166.675 36.5734C166.968 37.1139 167.358 37.5682 167.858 37.9413C168.358 38.3143 168.944 38.5965 169.622 38.7926C170.3 38.9839 171.012 39.0844 171.757 39.0844V39.0796Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M185.69 41.514V20.2309H189.007V24.1479H189.214C189.598 23.1292 190.291 22.2253 191.286 21.4265C192.281 20.6278 193.646 20.2309 195.392 20.2309H196.675V23.5309H194.728C192.93 23.5309 191.526 23.8657 190.521 24.5401C189.512 25.2145 189.007 26.061 189.007 27.0749V41.5092H185.69V41.514Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M207.454 42.0114C205.988 42.0114 204.67 41.7483 203.493 41.227C202.32 40.7057 201.31 39.9548 200.464 38.9791C199.622 38.0035 198.968 36.8365 198.517 35.4734C198.06 34.1103 197.834 32.5799 197.834 30.8724C197.834 29.165 198.06 27.668 198.517 26.2954C198.973 24.9227 199.622 23.7462 200.464 22.7705C201.305 21.7948 202.315 21.0439 203.493 20.5226C204.666 20.0013 205.988 19.7383 207.454 19.7383C208.921 19.7383 210.175 19.9965 211.31 20.5178C212.445 21.0392 213.411 21.7566 214.214 22.6748C215.017 23.5931 215.627 24.6836 216.06 25.9414C216.488 27.2041 216.704 28.5863 216.704 30.0928V31.6568H201.324V32.6468C201.324 33.5555 201.469 34.3973 201.762 35.1817C202.05 35.966 202.469 36.6452 203.007 37.2239C203.545 37.8026 204.209 38.2569 204.997 38.587C205.786 38.917 206.675 39.0796 207.671 39.0796C209.026 39.0796 210.204 38.7639 211.214 38.1326C212.223 37.5013 213.002 36.5926 213.555 35.4112L215.921 37.1139C215.228 38.5822 214.151 39.7635 212.685 40.6627C211.219 41.5618 209.478 42.0114 207.459 42.0114H207.454ZM207.454 22.4979C206.541 22.4979 205.714 22.6557 204.969 22.9714C204.223 23.287 203.579 23.7318 203.041 24.3057C202.502 24.8797 202.079 25.554 201.776 26.3336C201.473 27.1132 201.319 27.9645 201.319 28.8972V29.1841H213.137V28.7345C213.137 26.8502 212.618 25.3388 211.584 24.2053C210.55 23.0718 209.171 22.5027 207.459 22.5027L207.454 22.4979Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M220.887 41.514V20.2309H224.204V23.6553H224.368C224.618 23.1101 224.902 22.6031 225.219 22.1248C225.536 21.6466 225.926 21.2352 226.382 20.8813C226.839 20.5274 227.368 20.25 227.978 20.0443C228.584 19.8387 229.305 19.7383 230.137 19.7383C231.546 19.7383 232.844 20.073 234.036 20.7378C235.224 21.4074 236.108 22.5027 236.69 24.0284H236.772C237.156 22.8853 237.882 21.8809 238.95 21.0248C240.012 20.1687 241.459 19.7383 243.282 19.7383C245.464 19.7383 247.171 20.4461 248.402 21.8618C249.633 23.2775 250.248 25.2766 250.248 27.8641V41.514H246.931V28.4093C246.931 26.5058 246.556 25.0758 245.81 24.1097C245.065 23.1435 243.878 22.6605 242.243 22.6605C241.58 22.6605 240.95 22.7418 240.358 22.9092C239.762 23.0766 239.233 23.3205 238.762 23.6553C238.291 23.9853 237.921 24.4062 237.642 24.9179C237.363 25.4297 237.229 26.0275 237.229 26.7162V41.514H233.911V28.4093C233.911 26.5058 233.536 25.0758 232.791 24.1097C232.046 23.1435 230.882 22.6605 229.31 22.6605C228.647 22.6605 228.012 22.7418 227.402 22.9092C226.791 23.0766 226.252 23.3205 225.786 23.6553C225.315 23.9853 224.935 24.4062 224.647 24.9179C224.358 25.4297 224.209 26.0275 224.209 26.7162V41.514H220.892H220.887Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M263.84 42.0114C262.373 42.0114 261.056 41.7483 259.878 41.227C258.705 40.7057 257.695 39.9548 256.849 38.9791C256.008 38.0035 255.359 36.8365 254.902 35.4734C254.445 34.1103 254.219 32.5799 254.219 30.8724C254.219 29.165 254.445 27.668 254.902 26.2954C255.359 24.9227 256.008 23.7462 256.849 22.7705C257.69 21.7948 258.7 21.0439 259.878 20.5226C261.051 20.0013 262.373 19.7383 263.84 19.7383C265.306 19.7383 266.561 19.9965 267.695 20.5178C268.83 21.0392 269.796 21.7566 270.599 22.6748C271.402 23.5931 272.018 24.6836 272.445 25.9414C272.873 27.2041 273.09 28.5863 273.09 30.0928V31.6568H257.71V32.6468C257.71 33.5555 257.854 34.3973 258.147 35.1817C258.436 35.966 258.854 36.6452 259.392 37.2239C259.931 37.8026 260.594 38.2569 261.383 38.587C262.171 38.917 263.061 39.0796 264.056 39.0796C265.412 39.0796 266.59 38.7639 267.599 38.1326C268.609 37.5013 269.388 36.5926 269.941 35.4112L272.306 37.1139C271.614 38.5822 270.537 39.7635 269.07 40.6627C267.604 41.5618 265.864 42.0114 263.844 42.0114H263.84ZM263.84 22.4979C262.926 22.4979 262.099 22.6557 261.354 22.9714C260.609 23.287 259.964 23.7318 259.426 24.3057C258.888 24.8797 258.464 25.554 258.162 26.3336C257.859 27.1132 257.705 27.9645 257.705 28.8972V29.1841H269.522V28.7345C269.522 26.8502 269.003 25.3388 267.969 24.2053C266.936 23.0718 265.556 22.5027 263.844 22.5027L263.84 22.4979Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M116.072 81.4354V78.5466H120.135V55.5322H116.072V52.6434H127.683V55.5322H123.62V78.5466H127.683V81.4354H116.072Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M132.409 81.4354V60.1523H135.726V63.5767H135.89C136.414 62.381 137.154 61.4245 138.106 60.7166C139.058 60.0088 140.337 59.6549 141.943 59.6549C144.154 59.6549 145.904 60.3627 147.188 61.7784C148.472 63.1941 149.116 65.1933 149.116 67.7807V81.4306H145.799V68.326C145.799 64.495 144.183 62.5819 140.948 62.5819C140.284 62.5819 139.64 62.6632 139.02 62.8306C138.399 62.998 137.837 63.2419 137.342 63.5767C136.847 63.9067 136.452 64.3276 136.159 64.8393C135.871 65.3511 135.722 65.9489 135.722 66.6377V81.4354H132.404H132.409Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M159.4 81.4354C158.241 81.4354 157.361 81.1149 156.765 80.4693C156.169 79.8236 155.876 78.9819 155.876 77.9392V63.0841H152.352V60.1571H154.342C155.058 60.1571 155.549 60.0136 155.813 59.7218C156.078 59.4349 156.207 58.9327 156.207 58.2153V54.2552H159.193V60.1523H163.881V63.0793H159.193V78.5036H163.544V81.4306H159.4V81.4354Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M175.818 81.928C174.352 81.928 173.034 81.665 171.857 81.1436C170.683 80.6223 169.674 79.8714 168.828 78.8958C167.986 77.9201 167.337 76.7531 166.881 75.39C166.424 74.027 166.198 72.4965 166.198 70.789C166.198 69.0816 166.424 67.5846 166.881 66.212C167.337 64.8393 167.986 63.6628 168.828 62.6871C169.669 61.7114 170.679 60.9606 171.857 60.4392C173.03 59.9179 174.352 59.6549 175.818 59.6549C177.284 59.6549 178.539 59.9131 179.674 60.4345C180.809 60.9558 181.775 61.6732 182.578 62.5915C183.381 63.5097 183.996 64.6002 184.424 65.8581C184.852 67.1207 185.068 68.5029 185.068 70.0095V71.5734H169.688V72.5634C169.688 73.4722 169.832 74.3139 170.126 75.0983C170.414 75.8827 170.832 76.5618 171.371 77.1405C171.909 77.7192 172.573 78.1736 173.361 78.5036C174.15 78.8336 175.039 78.9962 176.034 78.9962C177.39 78.9962 178.568 78.6805 179.578 78.0492C180.587 77.4179 181.366 76.5092 181.919 75.3279L184.285 77.0305C183.592 78.4988 182.515 79.6801 181.049 80.5793C179.583 81.4784 177.842 81.928 175.823 81.928H175.818ZM175.818 62.4193C174.905 62.4193 174.078 62.5771 173.333 62.8928C172.587 63.2084 171.943 63.6532 171.405 64.2272C170.866 64.8011 170.443 65.4754 170.14 66.255C169.837 67.0346 169.683 67.8859 169.683 68.8186V69.1055H181.501V68.656C181.501 66.7716 180.982 65.2602 179.948 64.1267C178.914 62.9932 177.534 62.4241 175.823 62.4241L175.818 62.4193Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M192.775 81.4354C191.612 81.4354 190.737 81.1102 190.141 80.4645C189.544 79.8188 189.251 79.001 189.251 78.0109V50.912H192.568V78.5036H195.722V81.4306H192.78L192.775 81.4354Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M202.564 81.4354C201.4 81.4354 200.525 81.1102 199.929 80.4645C199.333 79.8188 199.04 79.001 199.04 78.0109V50.912H202.357V78.5036H205.506V81.4306H202.564V81.4354Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M210.689 55.1639C209.968 55.1639 209.453 54.9917 209.136 54.6473C208.819 54.303 208.66 53.8582 208.66 53.3082V52.7725C208.66 52.2225 208.819 51.7777 209.136 51.4334C209.453 51.089 209.972 50.9168 210.689 50.9168C211.405 50.9168 211.924 51.089 212.242 51.4334C212.559 51.7777 212.718 52.2225 212.718 52.7725V53.3082C212.718 53.8582 212.559 54.303 212.242 54.6473C211.924 54.9917 211.405 55.1639 210.689 55.1639ZM209.03 60.1522H212.348V81.4354H209.03V60.1522Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M236.146 83.8076C236.146 85.9981 235.281 87.6099 233.555 88.6381C231.829 89.6664 229.237 90.1782 225.78 90.1782C222.324 90.1782 220.03 89.7238 218.564 88.8199C217.098 87.9112 216.367 86.6246 216.367 84.9459C216.367 83.7932 216.67 82.8941 217.28 82.2484C217.886 81.6028 218.718 81.1293 219.766 80.828V80.3736C218.492 79.771 217.857 78.7857 217.857 77.4179C217.857 76.3513 218.203 75.5383 218.896 74.9739C219.588 74.4143 220.473 73.9934 221.55 73.7208V73.5582C220.28 72.9508 219.29 72.0851 218.588 70.9516C217.881 69.8229 217.53 68.5125 217.53 67.0202C217.53 65.9441 217.723 64.9493 218.112 64.0406C218.497 63.1319 219.045 62.3523 219.752 61.7019C220.458 61.0514 221.3 60.5492 222.28 60.1905C223.261 59.8318 224.362 59.6501 225.579 59.6501C227.098 59.6501 228.454 59.9275 229.641 60.4727V60.0996C229.641 59.2675 229.833 58.574 230.223 58.0287C230.607 57.4835 231.247 57.2109 232.131 57.2109H235.324V60.1379H231.261V61.501C232.035 62.1658 232.636 62.9549 233.064 63.878C233.492 64.8011 233.708 65.8437 233.708 67.0011C233.708 68.0772 233.516 69.0672 233.127 69.9807C232.737 70.8895 232.194 71.669 231.487 72.3195C230.781 72.9699 229.934 73.4721 228.939 73.8308C227.944 74.1895 226.838 74.3665 225.622 74.3665C224.929 74.3665 224.237 74.2995 223.55 74.1608C222.829 74.3521 222.179 74.6343 221.603 75.0074C221.021 75.3804 220.732 75.8922 220.732 76.5522C220.732 77.2122 221.035 77.6092 221.646 77.8292C222.252 78.0492 223.04 78.1592 224.011 78.1592H228.574C231.228 78.1592 233.156 78.6614 234.357 79.661C235.559 80.6606 236.16 82.038 236.16 83.7932L236.146 83.8076ZM233.035 84.0324C233.035 83.181 232.708 82.4971 232.059 81.9902C231.41 81.4832 230.256 81.2249 228.598 81.2249H221.468C220.141 81.8275 219.477 82.7936 219.477 84.1137C219.477 85.0463 219.828 85.845 220.535 86.505C221.242 87.1651 222.434 87.4951 224.122 87.4951H227.189C229.04 87.4951 230.478 87.2081 231.502 86.6294C232.526 86.0507 233.035 85.185 233.035 84.0324ZM225.612 71.7408C227.021 71.7408 228.141 71.4012 228.973 70.7268C229.805 70.0525 230.218 69.0098 230.218 67.5989V66.4367C230.218 65.0306 229.805 63.988 228.973 63.3088C228.141 62.6297 227.026 62.2949 225.612 62.2949C224.199 62.2949 223.083 62.6345 222.252 63.3088C221.425 63.9832 221.006 65.0306 221.006 66.4367V67.5989C221.006 69.0098 221.42 70.0477 222.252 70.7268C223.079 71.4012 224.199 71.7408 225.612 71.7408Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M246.511 81.928C245.045 81.928 243.728 81.665 242.55 81.1436C241.377 80.6223 240.367 79.8714 239.521 78.8958C238.68 77.9201 238.031 76.7531 237.574 75.39C237.117 74.027 236.891 72.4965 236.891 70.789C236.891 69.0816 237.117 67.5846 237.574 66.212C238.031 64.8393 238.68 63.6628 239.521 62.6871C240.362 61.7114 241.372 60.9606 242.55 60.4392C243.723 59.9179 245.045 59.6549 246.511 59.6549C247.978 59.6549 249.233 59.9131 250.367 60.4345C251.502 60.9558 252.468 61.6732 253.271 62.5915C254.074 63.5097 254.689 64.6002 255.117 65.8581C255.545 67.1207 255.762 68.5029 255.762 70.0095V71.5734H240.382V72.5634C240.382 73.4722 240.526 74.3139 240.819 75.0983C241.108 75.8827 241.526 76.5618 242.064 77.1405C242.603 77.7192 243.266 78.1736 244.055 78.5036C244.843 78.8336 245.733 78.9962 246.728 78.9962C248.084 78.9962 249.261 78.6805 250.271 78.0492C251.281 77.4179 252.06 76.5092 252.612 75.3279L254.978 77.0305C254.286 78.4988 253.209 79.6801 251.742 80.5793C250.276 81.4784 248.535 81.928 246.516 81.928H246.511ZM246.511 62.4193C245.598 62.4193 244.771 62.5771 244.026 62.8928C243.281 63.2084 242.636 63.6532 242.098 64.2272C241.559 64.8011 241.136 65.4754 240.833 66.255C240.531 67.0346 240.377 67.8859 240.377 68.8186V69.1055H252.194V68.656C252.194 66.7716 251.675 65.2602 250.641 64.1267C249.608 62.9932 248.228 62.4241 246.516 62.4241L246.511 62.4193Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M259.944 81.4354V60.1523H263.262V63.5767H263.43C263.954 62.381 264.694 61.4245 265.646 60.7166C266.598 60.0088 267.877 59.6549 269.483 59.6549C271.694 59.6549 273.444 60.3627 274.728 61.7784C276.012 63.1941 276.656 65.1933 276.656 67.7807V81.4306H273.339V68.326C273.339 64.495 271.723 62.5819 268.488 62.5819C267.824 62.5819 267.18 62.6632 266.56 62.8306C265.94 62.998 265.377 63.2419 264.882 63.5767C264.382 63.9067 263.992 64.3276 263.699 64.8393C263.411 65.3511 263.262 65.9489 263.262 66.6377V81.4354H259.944Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M290.171 81.928C288.68 81.928 287.339 81.665 286.147 81.1437C284.959 80.6223 283.954 79.881 283.142 78.9149C282.324 77.9536 281.704 76.7866 281.276 75.4092C280.848 74.0365 280.632 72.4965 280.632 70.7891C280.632 69.0816 280.844 67.5464 281.276 66.169C281.704 64.7963 282.324 63.6246 283.142 62.6632C283.954 61.7019 284.959 60.9606 286.147 60.4345C287.334 59.9132 288.676 59.6501 290.171 59.6501C292.301 59.6501 294.007 60.1092 295.291 61.0323C296.575 61.9554 297.536 63.1558 298.171 64.6433L295.392 66.0446C295.003 64.9446 294.368 64.0933 293.483 63.4859C292.599 62.8832 291.493 62.5771 290.166 62.5771C289.171 62.5771 288.3 62.735 287.555 63.0506C286.81 63.3663 286.185 63.8063 285.69 64.3707C285.19 64.935 284.82 65.6094 284.57 66.3937C284.32 67.1781 284.199 68.039 284.199 68.9716V72.6017C284.199 74.4718 284.704 76.0022 285.714 77.2027C286.724 78.3984 288.209 78.9962 290.171 78.9962C292.853 78.9962 294.786 77.7575 295.974 75.2848L298.378 76.8918C297.685 78.4319 296.656 79.6562 295.286 80.5649C293.916 81.4737 292.209 81.928 290.166 81.928H290.171Z",
        fill: "#392C44"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M309.575 81.928C308.108 81.928 306.791 81.665 305.613 81.1436C304.435 80.6223 303.43 79.8714 302.584 78.8958C301.738 77.9201 301.089 76.7531 300.637 75.39C300.18 74.027 299.954 72.4965 299.954 70.789C299.954 69.0816 300.18 67.5846 300.637 66.212C301.094 64.8393 301.743 63.6628 302.584 62.6871C303.425 61.7114 304.435 60.9606 305.613 60.4392C306.786 59.9179 308.108 59.6549 309.575 59.6549C311.041 59.6549 312.296 59.9131 313.43 60.4345C314.565 60.9558 315.531 61.6732 316.334 62.5915C317.137 63.5097 317.753 64.6002 318.18 65.8581C318.608 67.1159 318.825 68.5029 318.825 70.0095V71.5734H303.445V72.5634C303.445 73.4722 303.589 74.3139 303.882 75.0983C304.171 75.8827 304.589 76.5618 305.127 77.1405C305.666 77.7192 306.329 78.1736 307.118 78.5036C307.906 78.8336 308.796 78.9962 309.791 78.9962C311.147 78.9962 312.325 78.6805 313.334 78.0492C314.344 77.4179 315.123 76.5092 315.676 75.3279L318.041 77.0305C317.349 78.4988 316.272 79.6801 314.805 80.5793C313.339 81.4784 311.599 81.928 309.579 81.928H309.575ZM309.575 62.4193C308.661 62.4193 307.834 62.5771 307.089 62.8928C306.344 63.2084 305.699 63.6532 305.161 64.2272C304.623 64.8011 304.199 65.4754 303.897 66.255C303.594 67.0346 303.44 67.8859 303.44 68.8186V69.1055H315.257V68.656C315.257 66.7716 314.738 65.2602 313.704 64.1267C312.666 62.9932 311.291 62.4241 309.579 62.4241L309.575 62.4193Z",
        fill: "#392C44"
      }
    )
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("defs", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      "radialGradient",
      {
        id: "paint0_radial_1668_1288",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(53.0473 88.0189) rotate(85.8187) scale(40.2243 72.7587)",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { stopColor: "#3830B7" }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { offset: "1", stopColor: "#392D43" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("clipPath", { id: "clip0_1668_1288", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("rect", { width: "318.821", height: "94.2818", fill: "white" }) })
  ] })
] }));
SupremeIntelligenceOriginalText.displayName = "SupremeIntelligenceOriginalText";
var SupremeIntelligenceOriginalIcon = React17.forwardRef(({ className, viewpoint, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
  "svg",
  {
    width: "95",
    height: "95",
    viewBox: viewpoint || "0 0 95 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("g", { clipPath: "url(#clip0_1844_1347)", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M0 0.281769V94.5635H94.7752V0.281769H0ZM55.7218 66.3455C54.0247 68.6938 51.717 70.4873 48.7891 71.7356C45.866 72.9839 42.5823 73.6057 38.9476 73.6057C33.2456 73.6057 28.5773 72.2856 24.9378 69.6456C21.2983 67.0055 19.0627 63.2415 18.2262 58.3488H24.4186C25.2551 61.7206 26.8994 64.2794 29.3561 66.0155C31.8129 67.7516 35.0341 68.6173 39.0149 68.6173C42.9957 68.6173 45.9573 67.7277 48.3419 65.939C50.7266 64.155 51.9189 61.7971 51.9189 58.8605C51.9189 56.3161 51.217 54.3026 49.8179 52.8104C48.4189 51.3182 46.241 50.2803 43.2938 49.6921L31.0533 47.2003C27.0724 46.4207 24.1109 45.0385 22.1685 43.0584C20.2262 41.0784 19.255 38.3044 19.255 34.7317C19.255 31.8477 20.1156 29.3894 21.8368 27.3615C23.558 25.3337 25.8561 23.8032 28.7311 22.7797C31.6062 21.7514 34.7649 21.2397 38.2072 21.2397C43.515 21.2397 47.7939 22.4401 51.0343 24.8315C54.2795 27.2276 56.2218 30.676 56.8613 35.1717H50.6689C50.0775 32.1395 48.6881 29.8772 46.5054 28.385C44.3179 26.8928 41.5053 26.1467 38.063 26.1467C34.3754 26.1467 31.3754 26.8689 29.0677 28.3085C26.7551 29.7529 25.6013 31.7664 25.6013 34.3587C25.6013 36.6065 26.1782 38.3331 27.3321 39.5288C28.4859 40.7292 30.3658 41.5949 32.9716 42.1306L45.7986 44.6989C50.0247 45.5311 53.1593 47.0233 55.1978 49.1707C57.2363 51.323 58.2555 54.3026 58.2555 58.1192C58.2555 61.2471 57.4094 63.9876 55.7122 66.3359L55.7218 66.3455ZM76.549 73.0939H70.2797V40.3801H63.4239V35.4635H76.549V73.0891V73.0939Z",
          fill: "url(#paint0_radial_1844_1347)"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "radialGradient",
          {
            id: "paint0_radial_1844_1347",
            cx: "0",
            cy: "0",
            r: "1",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "translate(53.0473 88.3007) rotate(85.8187) scale(40.2243 72.7587)",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { stopColor: "#3830B7" }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("stop", { offset: "1", stopColor: "#392D43" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("clipPath", { id: "clip0_1844_1347", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var SupremeIntelligenceWhiteText = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("svg", { viewBox: "0 0 319 95", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("g", { clipPath: "url(#clip0_1844_1453)", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M0 0V94.2818H94.7752V0H0ZM55.7218 66.0637C54.0247 68.412 51.717 70.2056 48.7891 71.4538C45.866 72.7021 42.5823 73.3239 38.9476 73.3239C33.2456 73.3239 28.5773 72.0039 24.9378 69.3638C21.2983 66.7237 19.0627 62.9597 18.2262 58.067H24.4186C25.2551 61.4388 26.8994 63.9976 29.3561 65.7337C31.8129 67.4698 35.0341 68.3355 39.0149 68.3355C42.9957 68.3355 45.9573 67.4459 48.3419 65.6572C50.7266 63.8732 51.9189 61.5154 51.9189 58.5788C51.9189 56.0344 51.217 54.0208 49.8179 52.5286C48.4189 51.0364 46.241 49.9986 43.2938 49.4103L31.0533 46.9185C27.0724 46.1389 24.1109 44.7567 22.1685 42.7767C20.2262 40.7966 19.255 38.0226 19.255 34.4499C19.255 31.566 20.1156 29.1076 21.8368 27.0798C23.558 25.0519 25.8561 23.5214 28.7311 22.4979C31.6062 21.4696 34.7649 20.9579 38.2072 20.9579C43.515 20.9579 47.7939 22.1583 51.0343 24.5497C54.2795 26.9459 56.2218 30.3942 56.8613 34.8899H50.6689C50.0775 31.8577 48.6881 29.5955 46.5054 28.1033C44.3179 26.6111 41.5053 25.865 38.063 25.865C34.3754 25.865 31.3754 26.5871 29.0677 28.0267C26.7551 29.4711 25.6013 31.4847 25.6013 34.0769C25.6013 36.3248 26.1782 38.0513 27.3321 39.247C28.4859 40.4475 30.3658 41.3131 32.9716 41.8488L45.7986 44.4171C50.0247 45.2493 53.1593 46.7415 55.1978 48.889C57.2363 51.0412 58.2555 54.0208 58.2555 57.8374C58.2555 60.9653 57.4094 63.7058 55.7122 66.0542L55.7218 66.0637ZM76.549 72.8121H70.2797V40.0983H63.4239V35.1817H76.549V72.8074V72.8121Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M126.319 42.0114C123.968 42.0114 121.963 41.5619 120.309 40.6723C118.651 39.7779 117.242 38.5487 116.079 36.98L118.651 34.8374C119.675 36.1861 120.805 37.2096 122.05 37.9079C123.295 38.6109 124.757 38.9601 126.444 38.9601C128.516 38.9601 130.098 38.4674 131.189 37.4774C132.281 36.4874 132.829 35.1674 132.829 33.5173C132.829 32.1447 132.415 31.0829 131.584 30.3416C130.757 29.6003 129.386 29.0072 127.478 28.5672L125.112 28.0315C122.459 27.4289 120.434 26.5106 119.04 25.291C117.646 24.0667 116.944 22.3401 116.944 20.1161C116.944 18.8535 117.18 17.7248 117.651 16.7348C118.122 15.7447 118.776 14.9221 119.622 14.2621C120.468 13.6021 121.473 13.0999 122.651 12.7555C123.824 12.4112 125.117 12.239 126.526 12.239C128.709 12.239 130.584 12.636 132.146 13.4347C133.709 14.2334 135.026 15.4004 136.108 16.9404L133.497 18.8392C132.694 17.7391 131.728 16.8735 130.593 16.2421C129.459 15.6108 128.05 15.2952 126.362 15.2952C124.511 15.2952 123.05 15.6873 121.987 16.4717C120.925 17.2561 120.391 18.4326 120.391 19.9966C120.391 21.374 120.838 22.4118 121.737 23.1101C122.636 23.8132 123.997 24.368 125.819 24.7793L128.185 25.315C131.031 25.9463 133.093 26.9124 134.362 28.2037C135.632 29.4951 136.271 31.2168 136.271 33.3595C136.271 34.6795 136.045 35.8752 135.588 36.9465C135.132 38.0179 134.473 38.9266 133.617 39.6679C132.762 40.4092 131.718 40.9879 130.487 41.3992C129.257 41.8106 127.867 42.0162 126.319 42.0162V42.0114Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M153.848 38.0895H153.684C153.463 38.5822 153.194 39.0652 152.877 39.5387C152.559 40.017 152.165 40.4379 151.694 40.8061C151.223 41.1744 150.655 41.4662 149.992 41.6862C149.328 41.9062 148.554 42.0114 147.67 42.0114C145.458 42.0114 143.703 41.3035 142.405 39.8879C141.107 38.4722 140.458 36.473 140.458 33.8855V20.2356H143.776V33.3403C143.776 37.1713 145.405 39.0844 148.67 39.0844C149.333 39.0844 149.978 39.003 150.598 38.8357C151.218 38.673 151.771 38.4243 152.256 38.0895C152.742 37.7595 153.127 37.3387 153.42 36.8269C153.708 36.3152 153.857 35.703 153.857 34.9856V20.2309H157.175V41.514H153.857V38.0895H153.848Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M162.925 20.2309H166.242V23.6553H166.406C166.959 22.3209 167.767 21.3357 168.834 20.6948C169.896 20.0539 171.175 19.7335 172.67 19.7335C173.997 19.7335 175.199 19.9965 176.276 20.5178C177.353 21.0392 178.271 21.7853 179.031 22.7466C179.791 23.7079 180.372 24.8797 180.771 26.2523C181.171 27.6297 181.372 29.165 181.372 30.8724C181.372 32.5799 181.171 34.1151 180.771 35.4925C180.372 36.87 179.791 38.0369 179.031 38.9983C178.271 39.9596 177.353 40.7057 176.276 41.227C175.199 41.7483 173.997 42.0114 172.67 42.0114C169.767 42.0114 167.68 40.7057 166.411 38.0896H166.247V49.7642H162.93V20.2309H162.925ZM171.757 39.0796C173.637 39.0796 175.118 38.4913 176.195 37.3195C177.271 36.143 177.81 34.603 177.81 32.6946V29.0454C177.81 27.1371 177.271 25.5971 176.195 24.4253C175.118 23.2488 173.637 22.6653 171.757 22.6653C171.012 22.6653 170.3 22.7705 169.622 22.9762C168.944 23.1818 168.358 23.4688 167.858 23.8275C167.363 24.1862 166.968 24.6214 166.675 25.1332C166.387 25.6449 166.238 26.1901 166.238 26.7689V34.7273C166.238 35.416 166.382 36.033 166.675 36.5734C166.968 37.1139 167.358 37.5682 167.858 37.9413C168.358 38.3143 168.944 38.5965 169.622 38.7926C170.3 38.9839 171.012 39.0844 171.757 39.0844V39.0796Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M185.69 41.514V20.2309H189.007V24.1479H189.214C189.598 23.1292 190.291 22.2253 191.286 21.4265C192.281 20.6278 193.646 20.2309 195.392 20.2309H196.675V23.5309H194.728C192.93 23.5309 191.526 23.8657 190.521 24.5401C189.512 25.2145 189.007 26.061 189.007 27.0749V41.5092H185.69V41.514Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M207.454 42.0114C205.988 42.0114 204.67 41.7483 203.493 41.227C202.32 40.7057 201.31 39.9548 200.464 38.9791C199.622 38.0035 198.968 36.8365 198.517 35.4734C198.06 34.1103 197.834 32.5799 197.834 30.8724C197.834 29.165 198.06 27.668 198.517 26.2954C198.973 24.9227 199.622 23.7462 200.464 22.7705C201.305 21.7948 202.315 21.0439 203.493 20.5226C204.666 20.0013 205.988 19.7383 207.454 19.7383C208.921 19.7383 210.175 19.9965 211.31 20.5178C212.445 21.0392 213.411 21.7566 214.214 22.6748C215.017 23.5931 215.627 24.6836 216.06 25.9414C216.488 27.2041 216.704 28.5863 216.704 30.0928V31.6568H201.324V32.6468C201.324 33.5555 201.469 34.3973 201.762 35.1817C202.05 35.966 202.469 36.6452 203.007 37.2239C203.545 37.8026 204.209 38.2569 204.997 38.587C205.786 38.917 206.675 39.0796 207.671 39.0796C209.026 39.0796 210.204 38.7639 211.214 38.1326C212.223 37.5013 213.002 36.5926 213.555 35.4112L215.921 37.1139C215.228 38.5822 214.151 39.7635 212.685 40.6627C211.219 41.5618 209.478 42.0114 207.459 42.0114H207.454ZM207.454 22.4979C206.541 22.4979 205.714 22.6557 204.969 22.9714C204.223 23.287 203.579 23.7318 203.041 24.3057C202.502 24.8797 202.079 25.554 201.776 26.3336C201.473 27.1132 201.319 27.9645 201.319 28.8972V29.1841H213.137V28.7345C213.137 26.8502 212.618 25.3388 211.584 24.2053C210.55 23.0718 209.171 22.5027 207.459 22.5027L207.454 22.4979Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M220.887 41.514V20.2309H224.204V23.6553H224.368C224.618 23.1101 224.902 22.6031 225.219 22.1248C225.536 21.6466 225.926 21.2352 226.382 20.8813C226.839 20.5274 227.368 20.25 227.978 20.0443C228.584 19.8387 229.305 19.7383 230.137 19.7383C231.546 19.7383 232.844 20.073 234.036 20.7378C235.224 21.4074 236.108 22.5027 236.69 24.0284H236.772C237.156 22.8853 237.882 21.8809 238.95 21.0248C240.012 20.1687 241.459 19.7383 243.282 19.7383C245.464 19.7383 247.171 20.4461 248.402 21.8618C249.633 23.2775 250.248 25.2766 250.248 27.8641V41.514H246.931V28.4093C246.931 26.5058 246.556 25.0758 245.81 24.1097C245.065 23.1435 243.878 22.6605 242.243 22.6605C241.58 22.6605 240.95 22.7418 240.358 22.9092C239.762 23.0766 239.233 23.3205 238.762 23.6553C238.291 23.9853 237.921 24.4062 237.642 24.9179C237.363 25.4297 237.229 26.0275 237.229 26.7162V41.514H233.911V28.4093C233.911 26.5058 233.536 25.0758 232.791 24.1097C232.046 23.1435 230.882 22.6605 229.31 22.6605C228.647 22.6605 228.012 22.7418 227.402 22.9092C226.791 23.0766 226.252 23.3205 225.786 23.6553C225.315 23.9853 224.935 24.4062 224.647 24.9179C224.358 25.4297 224.209 26.0275 224.209 26.7162V41.514H220.892H220.887Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M263.84 42.0114C262.373 42.0114 261.056 41.7483 259.878 41.227C258.705 40.7057 257.695 39.9548 256.849 38.9791C256.008 38.0035 255.359 36.8365 254.902 35.4734C254.445 34.1103 254.219 32.5799 254.219 30.8724C254.219 29.165 254.445 27.668 254.902 26.2954C255.359 24.9227 256.008 23.7462 256.849 22.7705C257.69 21.7948 258.7 21.0439 259.878 20.5226C261.051 20.0013 262.373 19.7383 263.84 19.7383C265.306 19.7383 266.561 19.9965 267.695 20.5178C268.83 21.0392 269.796 21.7566 270.599 22.6748C271.402 23.5931 272.018 24.6836 272.445 25.9414C272.873 27.2041 273.09 28.5863 273.09 30.0928V31.6568H257.71V32.6468C257.71 33.5555 257.854 34.3973 258.147 35.1817C258.436 35.966 258.854 36.6452 259.392 37.2239C259.931 37.8026 260.594 38.2569 261.383 38.587C262.171 38.917 263.061 39.0796 264.056 39.0796C265.412 39.0796 266.59 38.7639 267.599 38.1326C268.609 37.5013 269.388 36.5926 269.941 35.4112L272.306 37.1139C271.614 38.5822 270.537 39.7635 269.07 40.6627C267.604 41.5618 265.864 42.0114 263.844 42.0114H263.84ZM263.84 22.4979C262.926 22.4979 262.099 22.6557 261.354 22.9714C260.609 23.287 259.964 23.7318 259.426 24.3057C258.888 24.8797 258.464 25.554 258.162 26.3336C257.859 27.1132 257.705 27.9645 257.705 28.8972V29.1841H269.522V28.7345C269.522 26.8502 269.003 25.3388 267.969 24.2053C266.936 23.0718 265.556 22.5027 263.844 22.5027L263.84 22.4979Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M116.072 81.4354V78.5466H120.135V55.5322H116.072V52.6434H127.683V55.5322H123.62V78.5466H127.683V81.4354H116.072Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M132.409 81.4354V60.1523H135.726V63.5767H135.89C136.414 62.381 137.154 61.4245 138.106 60.7166C139.058 60.0088 140.337 59.6549 141.943 59.6549C144.154 59.6549 145.904 60.3627 147.188 61.7784C148.472 63.1941 149.116 65.1933 149.116 67.7807V81.4306H145.799V68.326C145.799 64.495 144.183 62.5819 140.948 62.5819C140.284 62.5819 139.64 62.6632 139.02 62.8306C138.399 62.998 137.837 63.2419 137.342 63.5767C136.847 63.9067 136.452 64.3276 136.159 64.8393C135.871 65.3511 135.722 65.9489 135.722 66.6377V81.4354H132.404H132.409Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M159.4 81.4354C158.241 81.4354 157.361 81.1149 156.765 80.4693C156.169 79.8236 155.876 78.9818 155.876 77.9392V63.0841H152.352V60.157H154.342C155.058 60.157 155.549 60.0136 155.813 59.7218C156.078 59.4349 156.207 58.9327 156.207 58.2153V54.2552H159.193V60.1523H163.881V63.0793H159.193V78.5036H163.544V81.4306H159.4V81.4354Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M175.818 81.928C174.352 81.928 173.034 81.665 171.857 81.1436C170.683 80.6223 169.674 79.8714 168.828 78.8958C167.986 77.9201 167.337 76.7531 166.881 75.39C166.424 74.027 166.198 72.4965 166.198 70.789C166.198 69.0816 166.424 67.5846 166.881 66.212C167.337 64.8393 167.986 63.6628 168.828 62.6871C169.669 61.7114 170.679 60.9606 171.857 60.4392C173.03 59.9179 174.352 59.6549 175.818 59.6549C177.284 59.6549 178.539 59.9131 179.674 60.4345C180.809 60.9558 181.775 61.6732 182.578 62.5915C183.381 63.5097 183.996 64.6002 184.424 65.8581C184.852 67.1207 185.068 68.5029 185.068 70.0095V71.5734H169.688V72.5634C169.688 73.4722 169.832 74.3139 170.126 75.0983C170.414 75.8827 170.832 76.5618 171.371 77.1405C171.909 77.7192 172.573 78.1736 173.361 78.5036C174.15 78.8336 175.039 78.9962 176.034 78.9962C177.39 78.9962 178.568 78.6805 179.578 78.0492C180.587 77.4179 181.366 76.5092 181.919 75.3279L184.285 77.0305C183.592 78.4988 182.515 79.6801 181.049 80.5793C179.583 81.4784 177.842 81.928 175.823 81.928H175.818ZM175.818 62.4193C174.905 62.4193 174.078 62.5771 173.333 62.8928C172.587 63.2084 171.943 63.6532 171.405 64.2272C170.866 64.8011 170.443 65.4754 170.14 66.255C169.837 67.0346 169.683 67.8859 169.683 68.8186V69.1055H181.501V68.656C181.501 66.7716 180.982 65.2602 179.948 64.1267C178.914 62.9932 177.534 62.4241 175.823 62.4241L175.818 62.4193Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M192.775 81.4354C191.612 81.4354 190.737 81.1101 190.141 80.4645C189.544 79.8188 189.251 79.001 189.251 78.0109V50.912H192.568V78.5036H195.722V81.4306H192.78L192.775 81.4354Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M202.564 81.4354C201.4 81.4354 200.525 81.1101 199.929 80.4645C199.333 79.8188 199.04 79.001 199.04 78.0109V50.912H202.357V78.5036H205.506V81.4306H202.564V81.4354Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M210.689 55.1639C209.968 55.1639 209.453 54.9917 209.136 54.6473C208.819 54.303 208.66 53.8582 208.66 53.3082V52.7725C208.66 52.2225 208.819 51.7777 209.136 51.4333C209.453 51.089 209.972 50.9168 210.689 50.9168C211.405 50.9168 211.924 51.089 212.242 51.4333C212.559 51.7777 212.718 52.2225 212.718 52.7725V53.3082C212.718 53.8582 212.559 54.303 212.242 54.6473C211.924 54.9917 211.405 55.1639 210.689 55.1639ZM209.03 60.1522H212.348V81.4354H209.03V60.1522Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M236.146 83.8076C236.146 85.9981 235.281 87.6098 233.555 88.6381C231.829 89.6664 229.237 90.1782 225.78 90.1782C222.324 90.1782 220.03 89.7238 218.564 88.8199C217.098 87.9112 216.367 86.6246 216.367 84.9459C216.367 83.7932 216.67 82.8941 217.28 82.2484C217.886 81.6028 218.718 81.1293 219.766 80.8279V80.3736C218.492 79.771 217.857 78.7857 217.857 77.4179C217.857 76.3513 218.203 75.5383 218.896 74.9739C219.588 74.4143 220.473 73.9934 221.55 73.7208V73.5582C220.28 72.9508 219.29 72.0851 218.588 70.9516C217.881 69.8229 217.53 68.5124 217.53 67.0202C217.53 65.9441 217.723 64.9493 218.112 64.0406C218.497 63.1319 219.045 62.3523 219.752 61.7018C220.458 61.0514 221.3 60.5492 222.28 60.1905C223.261 59.8318 224.362 59.6501 225.579 59.6501C227.098 59.6501 228.454 59.9275 229.641 60.4727V60.0996C229.641 59.2674 229.833 58.574 230.223 58.0287C230.607 57.4835 231.247 57.2109 232.131 57.2109H235.324V60.1379H231.261V61.501C232.035 62.1658 232.636 62.9549 233.064 63.878C233.492 64.8011 233.708 65.8437 233.708 67.0011C233.708 68.0772 233.516 69.0672 233.127 69.9807C232.737 70.8895 232.194 71.669 231.487 72.3195C230.781 72.9699 229.934 73.4721 228.939 73.8308C227.944 74.1895 226.838 74.3665 225.622 74.3665C224.929 74.3665 224.237 74.2995 223.55 74.1608C222.829 74.3521 222.179 74.6343 221.603 75.0074C221.021 75.3804 220.732 75.8922 220.732 76.5522C220.732 77.2122 221.035 77.6092 221.646 77.8292C222.252 78.0492 223.04 78.1592 224.011 78.1592H228.574C231.228 78.1592 233.156 78.6614 234.357 79.661C235.559 80.6606 236.16 82.038 236.16 83.7932L236.146 83.8076ZM233.035 84.0324C233.035 83.181 232.708 82.4971 232.059 81.9901C231.41 81.4832 230.256 81.2249 228.598 81.2249H221.468C220.141 81.8275 219.477 82.7936 219.477 84.1137C219.477 85.0463 219.828 85.845 220.535 86.505C221.242 87.1651 222.434 87.4951 224.122 87.4951H227.189C229.04 87.4951 230.478 87.2081 231.502 86.6294C232.526 86.0507 233.035 85.185 233.035 84.0324ZM225.612 71.7408C227.021 71.7408 228.141 71.4012 228.973 70.7268C229.805 70.0525 230.218 69.0098 230.218 67.5989V66.4367C230.218 65.0306 229.805 63.988 228.973 63.3088C228.141 62.6297 227.026 62.2949 225.612 62.2949C224.199 62.2949 223.083 62.6345 222.252 63.3088C221.425 63.9832 221.006 65.0306 221.006 66.4367V67.5989C221.006 69.0098 221.42 70.0477 222.252 70.7268C223.079 71.4012 224.199 71.7408 225.612 71.7408Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M246.511 81.928C245.045 81.928 243.728 81.665 242.55 81.1436C241.377 80.6223 240.367 79.8714 239.521 78.8958C238.68 77.9201 238.031 76.7531 237.574 75.39C237.117 74.027 236.891 72.4965 236.891 70.789C236.891 69.0816 237.117 67.5846 237.574 66.212C238.031 64.8393 238.68 63.6628 239.521 62.6871C240.362 61.7114 241.372 60.9606 242.55 60.4392C243.723 59.9179 245.045 59.6549 246.511 59.6549C247.978 59.6549 249.233 59.9131 250.367 60.4345C251.502 60.9558 252.468 61.6732 253.271 62.5915C254.074 63.5097 254.689 64.6002 255.117 65.8581C255.545 67.1207 255.762 68.5029 255.762 70.0095V71.5734H240.382V72.5634C240.382 73.4722 240.526 74.3139 240.819 75.0983C241.108 75.8827 241.526 76.5618 242.064 77.1405C242.603 77.7192 243.266 78.1736 244.055 78.5036C244.843 78.8336 245.733 78.9962 246.728 78.9962C248.084 78.9962 249.261 78.6805 250.271 78.0492C251.281 77.4179 252.06 76.5092 252.612 75.3279L254.978 77.0305C254.286 78.4988 253.209 79.6801 251.742 80.5793C250.276 81.4784 248.535 81.928 246.516 81.928H246.511ZM246.511 62.4193C245.598 62.4193 244.771 62.5771 244.026 62.8928C243.281 63.2084 242.636 63.6532 242.098 64.2272C241.559 64.8011 241.136 65.4754 240.833 66.255C240.531 67.0346 240.377 67.8859 240.377 68.8186V69.1055H252.194V68.656C252.194 66.7716 251.675 65.2602 250.641 64.1267C249.608 62.9932 248.228 62.4241 246.516 62.4241L246.511 62.4193Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M259.944 81.4354V60.1523H263.262V63.5767H263.43C263.954 62.381 264.694 61.4245 265.646 60.7166C266.598 60.0088 267.877 59.6549 269.483 59.6549C271.694 59.6549 273.444 60.3627 274.728 61.7784C276.012 63.1941 276.656 65.1933 276.656 67.7807V81.4306H273.339V68.326C273.339 64.495 271.723 62.5819 268.488 62.5819C267.824 62.5819 267.18 62.6632 266.56 62.8306C265.94 62.998 265.377 63.2419 264.882 63.5767C264.382 63.9067 263.992 64.3276 263.699 64.8393C263.411 65.3511 263.262 65.9489 263.262 66.6377V81.4354H259.944Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M290.171 81.928C288.68 81.928 287.339 81.665 286.147 81.1437C284.959 80.6223 283.954 79.881 283.142 78.9149C282.324 77.9536 281.704 76.7866 281.276 75.4092C280.848 74.0365 280.632 72.4965 280.632 70.7891C280.632 69.0816 280.844 67.5464 281.276 66.169C281.704 64.7963 282.324 63.6245 283.142 62.6632C283.954 61.7019 284.959 60.9606 286.147 60.4345C287.334 59.9132 288.676 59.6501 290.171 59.6501C292.301 59.6501 294.007 60.1092 295.291 61.0323C296.575 61.9554 297.536 63.1558 298.171 64.6433L295.392 66.0446C295.003 64.9446 294.368 64.0933 293.483 63.4858C292.599 62.8832 291.493 62.5771 290.166 62.5771C289.171 62.5771 288.3 62.735 287.555 63.0506C286.81 63.3663 286.185 63.8063 285.69 64.3706C285.19 64.935 284.82 65.6094 284.57 66.3937C284.32 67.1781 284.199 68.039 284.199 68.9716V72.6017C284.199 74.4718 284.704 76.0022 285.714 77.2027C286.724 78.3984 288.209 78.9962 290.171 78.9962C292.853 78.9962 294.786 77.7575 295.974 75.2848L298.378 76.8918C297.685 78.4318 296.656 79.6562 295.286 80.5649C293.916 81.4737 292.209 81.928 290.166 81.928H290.171Z",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M309.575 81.928C308.108 81.928 306.791 81.665 305.613 81.1436C304.435 80.6223 303.43 79.8714 302.584 78.8958C301.738 77.9201 301.089 76.7531 300.637 75.39C300.18 74.027 299.954 72.4965 299.954 70.789C299.954 69.0816 300.18 67.5846 300.637 66.212C301.094 64.8393 301.743 63.6628 302.584 62.6871C303.425 61.7114 304.435 60.9606 305.613 60.4392C306.786 59.9179 308.108 59.6549 309.575 59.6549C311.041 59.6549 312.296 59.9131 313.43 60.4345C314.565 60.9558 315.531 61.6732 316.334 62.5915C317.137 63.5097 317.753 64.6002 318.18 65.8581C318.608 67.1159 318.825 68.5029 318.825 70.0095V71.5734H303.445V72.5634C303.445 73.4722 303.589 74.3139 303.882 75.0983C304.171 75.8827 304.589 76.5618 305.127 77.1405C305.666 77.7192 306.329 78.1736 307.118 78.5036C307.906 78.8336 308.796 78.9962 309.791 78.9962C311.147 78.9962 312.325 78.6805 313.334 78.0492C314.344 77.4179 315.123 76.5092 315.676 75.3279L318.041 77.0305C317.349 78.4988 316.272 79.6801 314.805 80.5793C313.339 81.4784 311.599 81.928 309.579 81.928H309.575ZM309.575 62.4193C308.661 62.4193 307.834 62.5771 307.089 62.8928C306.344 63.2084 305.699 63.6532 305.161 64.2272C304.623 64.8011 304.199 65.4754 303.897 66.255C303.594 67.0346 303.44 67.8859 303.44 68.8186V69.1055H315.257V68.656C315.257 66.7716 314.738 65.2602 313.704 64.1267C312.666 62.9932 311.291 62.4241 309.579 62.4241L309.575 62.4193Z",
        fill: "white"
      }
    )
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("clipPath", { id: "clip0_1844_1453", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("rect", { width: "318.821", height: "94.2818", fill: "white" }) }) })
] }));
SupremeIntelligenceWhiteText.displayName = "SupremeIntelligenceWhiteText";
var SupremeIntelligenceWhiteIcon = React17.forwardRef(({ className, viewpoint, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
  "svg",
  {
    width: "95",
    height: "95",
    viewBox: viewpoint || "0 0 95 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("g", { clipPath: "url(#clip0_1844_1478)", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M0 0.281769V94.5635H94.7752V0.281769H0ZM55.7218 66.3455C54.0247 68.6938 51.717 70.4873 48.7891 71.7356C45.866 72.9839 42.5823 73.6057 38.9476 73.6057C33.2456 73.6057 28.5773 72.2856 24.9378 69.6456C21.2983 67.0055 19.0627 63.2415 18.2262 58.3488H24.4186C25.2551 61.7206 26.8994 64.2794 29.3561 66.0155C31.8129 67.7516 35.0341 68.6173 39.0149 68.6173C42.9957 68.6173 45.9573 67.7277 48.3419 65.939C50.7266 64.155 51.9189 61.7971 51.9189 58.8605C51.9189 56.3161 51.217 54.3026 49.8179 52.8104C48.4189 51.3182 46.241 50.2803 43.2938 49.6921L31.0533 47.2003C27.0724 46.4207 24.1109 45.0385 22.1685 43.0584C20.2262 41.0784 19.255 38.3044 19.255 34.7317C19.255 31.8477 20.1156 29.3894 21.8368 27.3615C23.558 25.3337 25.8561 23.8032 28.7311 22.7797C31.6062 21.7514 34.7649 21.2397 38.2072 21.2397C43.515 21.2397 47.7939 22.4401 51.0343 24.8315C54.2795 27.2276 56.2218 30.676 56.8613 35.1717H50.6689C50.0775 32.1395 48.6881 29.8772 46.5054 28.385C44.3179 26.8928 41.5053 26.1467 38.063 26.1467C34.3754 26.1467 31.3754 26.8689 29.0677 28.3085C26.7551 29.7529 25.6013 31.7664 25.6013 34.3587C25.6013 36.6065 26.1782 38.3331 27.3321 39.5288C28.4859 40.7292 30.3658 41.5949 32.9716 42.1306L45.7986 44.6989C50.0247 45.5311 53.1593 47.0233 55.1978 49.1707C57.2363 51.323 58.2555 54.3026 58.2555 58.1192C58.2555 61.2471 57.4094 63.9876 55.7122 66.3359L55.7218 66.3455ZM76.549 73.0939H70.2797V40.3801H63.4239V35.4635H76.549V73.0891V73.0939Z",
          fill: "white"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("clipPath", { id: "clip0_1844_1478", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var SupremeIntelligenceBlackText = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("svg", { viewBox: "0 0 319 95", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("g", { clipPath: "url(#clip0_1844_1507)", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M0 -0.000457764V94.2813H94.7752V-0.000457764H0ZM55.7218 66.0633C54.0247 68.4116 51.717 70.2051 48.7891 71.4534C45.866 72.7017 42.5823 73.3234 38.9476 73.3234C33.2456 73.3234 28.5773 72.0034 24.9378 69.3633C21.2983 66.7233 19.0627 62.9593 18.2262 58.0666H24.4186C25.2551 61.4384 26.8994 63.9971 29.3561 65.7333C31.8129 67.4694 35.0341 68.3351 39.0149 68.3351C42.9957 68.3351 45.9573 67.4455 48.3419 65.6567C50.7266 63.8728 51.9189 61.5149 51.9189 58.5783C51.9189 56.0339 51.217 54.0204 49.8179 52.5282C48.4189 51.036 46.241 49.9981 43.2938 49.4098L31.0533 46.918C27.0724 46.1385 24.1109 44.7562 22.1685 42.7762C20.2262 40.7962 19.255 38.0222 19.255 34.4495C19.255 31.5655 20.1156 29.1072 21.8368 27.0793C23.558 25.0514 25.8561 23.521 28.7311 22.4975C31.6062 21.4692 34.7649 20.9574 38.2072 20.9574C43.515 20.9574 47.7939 22.1579 51.0343 24.5492C54.2795 26.9454 56.2218 30.3937 56.8613 34.8895H50.6689C50.0775 31.8572 48.6881 29.595 46.5054 28.1028C44.3179 26.6106 41.5053 25.8645 38.063 25.8645C34.3754 25.8645 31.3754 26.5867 29.0677 28.0263C26.7551 29.4707 25.6013 31.4842 25.6013 34.0764C25.6013 36.3243 26.1782 38.0509 27.3321 39.2465C28.4859 40.447 30.3658 41.3127 32.9716 41.8484L45.7986 44.4167C50.0247 45.2489 53.1593 46.7411 55.1978 48.8885C57.2363 51.0407 58.2555 54.0204 58.2555 57.837C58.2555 60.9649 57.4094 63.7054 55.7122 66.0537L55.7218 66.0633ZM76.549 72.8117H70.2797V40.0979H63.4239V35.1812H76.549V72.8069V72.8117Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M126.319 42.011C123.968 42.011 121.963 41.5614 120.309 40.6718C118.651 39.7774 117.242 38.5483 116.079 36.9795L118.651 34.8369C119.675 36.1856 120.805 37.2091 122.05 37.9074C123.295 38.6104 124.757 38.9596 126.444 38.9596C128.516 38.9596 130.098 38.467 131.189 37.4769C132.281 36.4869 132.829 35.1669 132.829 33.5169C132.829 32.1442 132.415 31.0824 131.584 30.3411C130.757 29.5998 129.386 29.0067 127.478 28.5667L125.112 28.0311C122.459 27.4284 120.434 26.5102 119.04 25.2906C117.646 24.0662 116.944 22.3396 116.944 20.1157C116.944 18.853 117.18 17.7243 117.651 16.7343C118.122 15.7443 118.776 14.9216 119.622 14.2616C120.468 13.6016 121.473 13.0994 122.651 12.7551C123.824 12.4107 125.117 12.2385 126.526 12.2385C128.709 12.2385 130.584 12.6355 132.146 13.4342C133.709 14.2329 135.026 15.3999 136.108 16.9399L133.497 18.8387C132.694 17.7387 131.728 16.873 130.593 16.2417C129.459 15.6103 128.05 15.2947 126.362 15.2947C124.511 15.2947 123.05 15.6869 121.987 16.4712C120.925 17.2556 120.391 18.4321 120.391 19.9961C120.391 21.3735 120.838 22.4114 121.737 23.1096C122.636 23.8127 123.997 24.3675 125.819 24.7788L128.185 25.3145C131.031 25.9458 133.093 26.9119 134.362 28.2032C135.632 29.4946 136.271 31.2164 136.271 33.359C136.271 34.6791 136.045 35.8747 135.588 36.9461C135.132 38.0174 134.473 38.9261 133.617 39.6674C132.762 40.4088 131.718 40.9875 130.487 41.3988C129.257 41.8101 127.867 42.0157 126.319 42.0157V42.011Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M153.848 38.0891H153.684C153.463 38.5817 153.194 39.0647 152.877 39.5382C152.559 40.0165 152.165 40.4374 151.694 40.8056C151.223 41.1739 150.655 41.4657 149.992 41.6857C149.328 41.9057 148.554 42.0109 147.67 42.0109C145.458 42.0109 143.703 41.303 142.405 39.8874C141.107 38.4717 140.458 36.4725 140.458 33.885V20.2352H143.776V33.3398C143.776 37.1708 145.405 39.0839 148.67 39.0839C149.333 39.0839 149.978 39.0026 150.598 38.8352C151.218 38.6726 151.771 38.4238 152.256 38.0891C152.742 37.7591 153.127 37.3382 153.42 36.8264C153.708 36.3147 153.857 35.7025 153.857 34.9851V20.2304H157.175V41.5135H153.857V38.0891H153.848Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M162.925 20.2304H166.242V23.6548H166.406C166.959 22.3205 167.767 21.3352 168.834 20.6943C169.896 20.0534 171.175 19.733 172.67 19.733C173.997 19.733 175.199 19.9961 176.276 20.5174C177.353 21.0387 178.271 21.7848 179.031 22.7461C179.791 23.7074 180.372 24.8792 180.771 26.2519C181.171 27.6293 181.372 29.1645 181.372 30.872C181.372 32.5794 181.171 34.1146 180.771 35.4921C180.372 36.8695 179.791 38.0365 179.031 38.9978C178.271 39.9591 177.353 40.7052 176.276 41.2265C175.199 41.7479 173.997 42.0109 172.67 42.0109C169.767 42.0109 167.68 40.7052 166.411 38.0891H166.247V49.7637H162.93V20.2304H162.925ZM171.757 39.0791C173.637 39.0791 175.118 38.4908 176.195 37.3191C177.271 36.1425 177.81 34.6025 177.81 32.6942V29.045C177.81 27.1367 177.271 25.5966 176.195 24.4249C175.118 23.2483 173.637 22.6648 171.757 22.6648C171.012 22.6648 170.3 22.77 169.622 22.9757C168.944 23.1813 168.358 23.4683 167.858 23.827C167.363 24.1857 166.968 24.6209 166.675 25.1327C166.387 25.6444 166.238 26.1897 166.238 26.7684V34.7268C166.238 35.4155 166.382 36.0325 166.675 36.573C166.968 37.1134 167.358 37.5678 167.858 37.9408C168.358 38.3139 168.944 38.5961 169.622 38.7921C170.3 38.9835 171.012 39.0839 171.757 39.0839V39.0791Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M185.69 41.5135V20.2304H189.007V24.1474H189.214C189.598 23.1287 190.291 22.2248 191.286 21.4261C192.281 20.6273 193.646 20.2304 195.392 20.2304H196.675V23.5305H194.728C192.93 23.5305 191.526 23.8652 190.521 24.5396C189.512 25.214 189.007 26.0605 189.007 27.0745V41.5087H185.69V41.5135Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M207.454 42.0109C205.988 42.0109 204.67 41.7478 203.493 41.2265C202.32 40.7052 201.31 39.9543 200.464 38.9786C199.622 38.003 198.968 36.836 198.517 35.4729C198.06 34.1098 197.834 32.5794 197.834 30.8719C197.834 29.1645 198.06 27.6675 198.517 26.2949C198.973 24.9222 199.622 23.7457 200.464 22.77C201.305 21.7943 202.315 21.0434 203.493 20.5221C204.666 20.0008 205.988 19.7378 207.454 19.7378C208.921 19.7378 210.175 19.996 211.31 20.5173C212.445 21.0387 213.411 21.7561 214.214 22.6744C215.017 23.5926 215.627 24.6831 216.06 25.941C216.488 27.2036 216.704 28.5858 216.704 30.0924V31.6563H201.324V32.6463C201.324 33.555 201.469 34.3968 201.762 35.1812C202.05 35.9655 202.469 36.6447 203.007 37.2234C203.545 37.8021 204.209 38.2565 204.997 38.5865C205.786 38.9165 206.675 39.0791 207.671 39.0791C209.026 39.0791 210.204 38.7634 211.214 38.1321C212.223 37.5008 213.002 36.5921 213.555 35.4107L215.921 37.1134C215.228 38.5817 214.151 39.763 212.685 40.6622C211.219 41.5613 209.478 42.0109 207.459 42.0109H207.454ZM207.454 22.4974C206.541 22.4974 205.714 22.6552 204.969 22.9709C204.223 23.2865 203.579 23.7313 203.041 24.3053C202.502 24.8792 202.079 25.5536 201.776 26.3331C201.473 27.1127 201.319 27.964 201.319 28.8967V29.1836H213.137V28.7341C213.137 26.8497 212.618 25.3383 211.584 24.2048C210.55 23.0713 209.171 22.5022 207.459 22.5022L207.454 22.4974Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M220.887 41.5135V20.2304H224.204V23.6548H224.368C224.618 23.1096 224.902 22.6026 225.219 22.1243C225.536 21.6461 225.926 21.2348 226.382 20.8808C226.839 20.5269 227.368 20.2495 227.978 20.0439C228.584 19.8382 229.305 19.7378 230.137 19.7378C231.546 19.7378 232.844 20.0726 234.036 20.7374C235.224 21.4069 236.108 22.5022 236.69 24.0279H236.772C237.156 22.8848 237.882 21.8804 238.95 21.0243C240.012 20.1682 241.459 19.7378 243.282 19.7378C245.464 19.7378 247.171 20.4456 248.402 21.8613C249.633 23.277 250.248 25.2762 250.248 27.8636V41.5135H246.931V28.4088C246.931 26.5053 246.556 25.0753 245.81 24.1092C245.065 23.1431 243.878 22.66 242.243 22.66C241.58 22.66 240.95 22.7413 240.358 22.9087C239.762 23.0761 239.233 23.32 238.762 23.6548C238.291 23.9848 237.921 24.4057 237.642 24.9174C237.363 25.4292 237.229 26.027 237.229 26.7158V41.5135H233.911V28.4088C233.911 26.5053 233.536 25.0753 232.791 24.1092C232.046 23.1431 230.882 22.66 229.31 22.66C228.647 22.66 228.012 22.7413 227.402 22.9087C226.791 23.0761 226.252 23.32 225.786 23.6548C225.315 23.9848 224.935 24.4057 224.647 24.9174C224.358 25.4292 224.209 26.027 224.209 26.7158V41.5135H220.892H220.887Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M263.84 42.0109C262.373 42.0109 261.056 41.7478 259.878 41.2265C258.705 40.7052 257.695 39.9543 256.849 38.9786C256.008 38.003 255.359 36.836 254.902 35.4729C254.445 34.1098 254.219 32.5794 254.219 30.8719C254.219 29.1645 254.445 27.6675 254.902 26.2949C255.359 24.9222 256.008 23.7457 256.849 22.77C257.69 21.7943 258.7 21.0434 259.878 20.5221C261.051 20.0008 262.373 19.7378 263.84 19.7378C265.306 19.7378 266.561 19.996 267.695 20.5173C268.83 21.0387 269.796 21.7561 270.599 22.6744C271.402 23.5926 272.018 24.6831 272.445 25.941C272.873 27.2036 273.09 28.5858 273.09 30.0924V31.6563H257.71V32.6463C257.71 33.555 257.854 34.3968 258.147 35.1812C258.436 35.9655 258.854 36.6447 259.392 37.2234C259.931 37.8021 260.594 38.2565 261.383 38.5865C262.171 38.9165 263.061 39.0791 264.056 39.0791C265.412 39.0791 266.59 38.7634 267.599 38.1321C268.609 37.5008 269.388 36.5921 269.941 35.4107L272.306 37.1134C271.614 38.5817 270.537 39.763 269.07 40.6622C267.604 41.5613 265.864 42.0109 263.844 42.0109H263.84ZM263.84 22.4974C262.926 22.4974 262.099 22.6552 261.354 22.9709C260.609 23.2865 259.964 23.7313 259.426 24.3053C258.888 24.8792 258.464 25.5536 258.162 26.3331C257.859 27.1127 257.705 27.964 257.705 28.8967V29.1836H269.522V28.7341C269.522 26.8497 269.003 25.3383 267.969 24.2048C266.936 23.0713 265.556 22.5022 263.844 22.5022L263.84 22.4974Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M116.072 81.4349V78.5462H120.135V55.5317H116.072V52.6429H127.683V55.5317H123.62V78.5462H127.683V81.4349H116.072Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M132.409 81.4349V60.1518H135.726V63.5762H135.89C136.414 62.3806 137.154 61.424 138.106 60.7162C139.058 60.0083 140.337 59.6544 141.943 59.6544C144.154 59.6544 145.904 60.3623 147.188 61.7779C148.472 63.1936 149.116 65.1928 149.116 67.7803V81.4301H145.799V68.3255C145.799 64.4945 144.183 62.5814 140.948 62.5814C140.284 62.5814 139.64 62.6627 139.02 62.8301C138.399 62.9975 137.837 63.2415 137.342 63.5762C136.847 63.9063 136.452 64.3271 136.159 64.8389C135.871 65.3506 135.722 65.9485 135.722 66.6372V81.4349H132.404H132.409Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M159.4 81.4349C158.241 81.4349 157.361 81.1145 156.765 80.4688C156.169 79.8232 155.876 78.9814 155.876 77.9388V63.0836H152.352V60.1566H154.342C155.058 60.1566 155.549 60.0131 155.813 59.7214C156.078 59.4344 156.207 58.9322 156.207 58.2148V54.2547H159.193V60.1518H163.881V63.0788H159.193V78.5031H163.544V81.4301H159.4V81.4349Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M175.818 81.9276C174.352 81.9276 173.034 81.6645 171.857 81.1432C170.683 80.6219 169.674 79.871 168.828 78.8953C167.986 77.9196 167.337 76.7526 166.881 75.3896C166.424 74.0265 166.198 72.496 166.198 70.7886C166.198 69.0812 166.424 67.5842 166.881 66.2115C167.337 64.8389 167.986 63.6623 168.828 62.6867C169.669 61.711 170.679 60.9601 171.857 60.4388C173.03 59.9175 174.352 59.6544 175.818 59.6544C177.284 59.6544 178.539 59.9127 179.674 60.434C180.809 60.9553 181.775 61.6727 182.578 62.591C183.381 63.5093 183.996 64.5997 184.424 65.8576C184.852 67.1202 185.068 68.5025 185.068 70.009V71.573H169.688V72.563C169.688 73.4717 169.832 74.3135 170.126 75.0978C170.414 75.8822 170.832 76.5613 171.371 77.14C171.909 77.7188 172.573 78.1731 173.361 78.5031C174.15 78.8331 175.039 78.9957 176.034 78.9957C177.39 78.9957 178.568 78.6801 179.578 78.0488C180.587 77.4174 181.366 76.5087 181.919 75.3274L184.285 77.03C183.592 78.4983 182.515 79.6797 181.049 80.5788C179.583 81.478 177.842 81.9276 175.823 81.9276H175.818ZM175.818 62.4188C174.905 62.4188 174.078 62.5767 173.333 62.8923C172.587 63.208 171.943 63.6528 171.405 64.2267C170.866 64.8006 170.443 65.475 170.14 66.2546C169.837 67.0342 169.683 67.8855 169.683 68.8181V69.1051H181.501V68.6555C181.501 66.7711 180.982 65.2598 179.948 64.1263C178.914 62.9928 177.534 62.4236 175.823 62.4236L175.818 62.4188Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M192.775 81.4349C191.612 81.4349 190.737 81.1097 190.141 80.464C189.544 79.8184 189.251 79.0005 189.251 78.0105V50.9116H192.568V78.5031H195.722V81.4301H192.78L192.775 81.4349Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M202.564 81.4349C201.4 81.4349 200.525 81.1097 199.929 80.464C199.333 79.8184 199.04 79.0005 199.04 78.0105V50.9116H202.357V78.5031H205.506V81.4301H202.564V81.4349Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M210.689 55.1634C209.968 55.1634 209.453 54.9912 209.136 54.6469C208.819 54.3025 208.66 53.8577 208.66 53.3077V52.772C208.66 52.222 208.819 51.7772 209.136 51.4329C209.453 51.0885 209.972 50.9164 210.689 50.9164C211.405 50.9164 211.924 51.0885 212.242 51.4329C212.559 51.7772 212.718 52.222 212.718 52.772V53.3077C212.718 53.8577 212.559 54.3025 212.242 54.6469C211.924 54.9912 211.405 55.1634 210.689 55.1634ZM209.03 60.1518H212.348V81.4349H209.03V60.1518Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M236.146 83.8071C236.146 85.9976 235.281 87.6094 233.555 88.6377C231.829 89.666 229.237 90.1777 225.78 90.1777C222.324 90.1777 220.03 89.7234 218.564 88.8194C217.098 87.9107 216.367 86.6241 216.367 84.9454C216.367 83.7928 216.67 82.8936 217.28 82.248C217.886 81.6023 218.718 81.1288 219.766 80.8275V80.3731C218.492 79.7705 217.857 78.7853 217.857 77.4174C217.857 76.3509 218.203 75.5378 218.896 74.9734C219.588 74.4139 220.473 73.993 221.55 73.7204V73.5578C220.28 72.9504 219.29 72.0847 218.588 70.9512C217.881 69.8225 217.53 68.512 217.53 67.0198C217.53 65.9437 217.723 64.9489 218.112 64.0401C218.497 63.1314 219.045 62.3518 219.752 61.7014C220.458 61.0509 221.3 60.5488 222.28 60.1901C223.261 59.8313 224.362 59.6496 225.579 59.6496C227.098 59.6496 228.454 59.927 229.641 60.4722V60.0992C229.641 59.267 229.833 58.5735 230.223 58.0283C230.607 57.483 231.247 57.2104 232.131 57.2104H235.324V60.1374H231.261V61.5005C232.035 62.1653 232.636 62.9545 233.064 63.8775C233.492 64.8006 233.708 65.8432 233.708 67.0006C233.708 68.0768 233.516 69.0668 233.127 69.9803C232.737 70.889 232.194 71.6686 231.487 72.319C230.781 72.9695 229.934 73.4717 228.939 73.8304C227.944 74.1891 226.838 74.366 225.622 74.366C224.929 74.366 224.237 74.2991 223.55 74.1604C222.829 74.3517 222.179 74.6339 221.603 75.0069C221.021 75.38 220.732 75.8917 220.732 76.5517C220.732 77.2118 221.035 77.6087 221.646 77.8287C222.252 78.0487 223.04 78.1587 224.011 78.1587H228.574C231.228 78.1587 233.156 78.6609 234.357 79.6605C235.559 80.6601 236.16 82.0375 236.16 83.7928L236.146 83.8071ZM233.035 84.0319C233.035 83.1806 232.708 82.4967 232.059 81.9897C231.41 81.4827 230.256 81.2245 228.598 81.2245H221.468C220.141 81.8271 219.477 82.7932 219.477 84.1132C219.477 85.0458 219.828 85.8446 220.535 86.5046C221.242 87.1646 222.434 87.4946 224.122 87.4946H227.189C229.04 87.4946 230.478 87.2076 231.502 86.6289C232.526 86.0502 233.035 85.1845 233.035 84.0319ZM225.612 71.7403C227.021 71.7403 228.141 71.4008 228.973 70.7264C229.805 70.052 230.218 69.0094 230.218 67.5985V66.4363C230.218 65.0302 229.805 63.9875 228.973 63.3084C228.141 62.6292 227.026 62.2944 225.612 62.2944C224.199 62.2944 223.083 62.634 222.252 63.3084C221.425 63.9827 221.006 65.0302 221.006 66.4363V67.5985C221.006 69.0094 221.42 70.0472 222.252 70.7264C223.079 71.4008 224.199 71.7403 225.612 71.7403Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M246.511 81.9276C245.045 81.9276 243.728 81.6645 242.55 81.1432C241.377 80.6219 240.367 79.871 239.521 78.8953C238.68 77.9196 238.031 76.7526 237.574 75.3896C237.117 74.0265 236.891 72.496 236.891 70.7886C236.891 69.0812 237.117 67.5842 237.574 66.2115C238.031 64.8389 238.68 63.6623 239.521 62.6867C240.362 61.711 241.372 60.9601 242.55 60.4388C243.723 59.9175 245.045 59.6544 246.511 59.6544C247.978 59.6544 249.233 59.9127 250.367 60.434C251.502 60.9553 252.468 61.6727 253.271 62.591C254.074 63.5093 254.689 64.5997 255.117 65.8576C255.545 67.1202 255.762 68.5025 255.762 70.009V71.573H240.382V72.563C240.382 73.4717 240.526 74.3135 240.819 75.0978C241.108 75.8822 241.526 76.5613 242.064 77.14C242.603 77.7188 243.266 78.1731 244.055 78.5031C244.843 78.8331 245.733 78.9957 246.728 78.9957C248.084 78.9957 249.261 78.6801 250.271 78.0488C251.281 77.4174 252.06 76.5087 252.612 75.3274L254.978 77.03C254.286 78.4983 253.209 79.6797 251.742 80.5788C250.276 81.478 248.535 81.9276 246.516 81.9276H246.511ZM246.511 62.4188C245.598 62.4188 244.771 62.5767 244.026 62.8923C243.281 63.208 242.636 63.6528 242.098 64.2267C241.559 64.8006 241.136 65.475 240.833 66.2546C240.531 67.0342 240.377 67.8855 240.377 68.8181V69.1051H252.194V68.6555C252.194 66.7711 251.675 65.2598 250.641 64.1263C249.608 62.9928 248.228 62.4236 246.516 62.4236L246.511 62.4188Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M259.944 81.4349V60.1518H263.262V63.5762H263.43C263.954 62.3806 264.694 61.424 265.646 60.7162C266.598 60.0083 267.877 59.6544 269.483 59.6544C271.694 59.6544 273.444 60.3623 274.728 61.7779C276.012 63.1936 276.656 65.1928 276.656 67.7803V81.4301H273.339V68.3255C273.339 64.4945 271.723 62.5814 268.488 62.5814C267.824 62.5814 267.18 62.6627 266.56 62.8301C265.94 62.9975 265.377 63.2415 264.882 63.5762C264.382 63.9063 263.992 64.3271 263.699 64.8389C263.411 65.3506 263.262 65.9485 263.262 66.6372V81.4349H259.944Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M290.171 81.9276C288.68 81.9276 287.339 81.6645 286.147 81.1432C284.959 80.6219 283.954 79.8806 283.142 78.9145C282.324 77.9531 281.704 76.7861 281.276 75.4087C280.848 74.0361 280.632 72.496 280.632 70.7886C280.632 69.0812 280.844 67.5459 281.276 66.1685C281.704 64.7959 282.324 63.6241 283.142 62.6628C283.954 61.7014 284.959 60.9601 286.147 60.434C287.334 59.9127 288.676 59.6497 290.171 59.6497C292.301 59.6497 294.007 60.1088 295.291 61.0319C296.575 61.9549 297.536 63.1554 298.171 64.6428L295.392 66.0442C295.003 64.9441 294.368 64.0928 293.483 63.4854C292.599 62.8828 291.493 62.5767 290.166 62.5767C289.171 62.5767 288.3 62.7345 287.555 63.0502C286.81 63.3658 286.185 63.8058 285.69 64.3702C285.19 64.9346 284.82 65.6089 284.57 66.3933C284.32 67.1777 284.199 68.0386 284.199 68.9712V72.6013C284.199 74.4713 284.704 76.0018 285.714 77.2022C286.724 78.3979 288.209 78.9958 290.171 78.9958C292.853 78.9958 294.786 77.757 295.974 75.2844L298.378 76.8914C297.685 78.4314 296.656 79.6558 295.286 80.5645C293.916 81.4732 292.209 81.9276 290.166 81.9276H290.171Z",
        fill: "black"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M309.575 81.9276C308.108 81.9276 306.791 81.6645 305.613 81.1432C304.435 80.6219 303.43 79.871 302.584 78.8953C301.738 77.9196 301.089 76.7526 300.637 75.3896C300.18 74.0265 299.954 72.496 299.954 70.7886C299.954 69.0812 300.18 67.5842 300.637 66.2115C301.094 64.8389 301.743 63.6623 302.584 62.6867C303.425 61.711 304.435 60.9601 305.613 60.4388C306.786 59.9175 308.108 59.6544 309.575 59.6544C311.041 59.6544 312.296 59.9127 313.43 60.434C314.565 60.9553 315.531 61.6727 316.334 62.591C317.137 63.5093 317.753 64.5997 318.18 65.8576C318.608 67.1155 318.825 68.5025 318.825 70.009V71.573H303.445V72.563C303.445 73.4717 303.589 74.3135 303.882 75.0978C304.171 75.8822 304.589 76.5613 305.127 77.14C305.666 77.7188 306.329 78.1731 307.118 78.5031C307.906 78.8331 308.796 78.9957 309.791 78.9957C311.147 78.9957 312.325 78.6801 313.334 78.0488C314.344 77.4174 315.123 76.5087 315.676 75.3274L318.041 77.03C317.349 78.4983 316.272 79.6797 314.805 80.5788C313.339 81.478 311.599 81.9276 309.579 81.9276H309.575ZM309.575 62.4188C308.661 62.4188 307.834 62.5767 307.089 62.8923C306.344 63.208 305.699 63.6528 305.161 64.2267C304.623 64.8006 304.199 65.475 303.897 66.2546C303.594 67.0342 303.44 67.8855 303.44 68.8181V69.1051H315.257V68.6555C315.257 66.7711 314.738 65.2598 313.704 64.1263C312.666 62.9928 311.291 62.4236 309.579 62.4236L309.575 62.4188Z",
        fill: "black"
      }
    )
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("clipPath", { id: "clip0_1844_1507", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var SupremeIntelligenceBlackIcon = React17.forwardRef(({ className, viewpoint, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
  "svg",
  {
    width: "95",
    height: "95",
    viewBox: viewpoint || "0 0 95 95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("g", { clipPath: "url(#clip0_1844_1532)", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "path",
        {
          d: "M0 0.281311V94.5631H94.7752V0.281311H0ZM55.7218 66.345C54.0247 68.6934 51.717 70.4869 48.7891 71.7352C45.866 72.9834 42.5823 73.6052 38.9476 73.6052C33.2456 73.6052 28.5773 72.2852 24.9378 69.6451C21.2983 67.0051 19.0627 63.2411 18.2262 58.3483H24.4186C25.2551 61.7201 26.8994 64.2789 29.3561 66.015C31.8129 67.7512 35.0341 68.6168 39.0149 68.6168C42.9957 68.6168 45.9573 67.7272 48.3419 65.9385C50.7266 64.1545 51.9189 61.7967 51.9189 58.8601C51.9189 56.3157 51.217 54.3021 49.8179 52.8099C48.4189 51.3177 46.241 50.2799 43.2938 49.6916L31.0533 47.1998C27.0724 46.4202 24.1109 45.038 22.1685 43.058C20.2262 41.0779 19.255 38.3039 19.255 34.7312C19.255 31.8473 20.1156 29.3889 21.8368 27.3611C23.558 25.3332 25.8561 23.8027 28.7311 22.7792C31.6062 21.7509 34.7649 21.2392 38.2072 21.2392C43.515 21.2392 47.7939 22.4397 51.0343 24.831C54.2795 27.2272 56.2218 30.6755 56.8613 35.1713H50.6689C50.0775 32.139 48.6881 29.8768 46.5054 28.3846C44.3179 26.8924 41.5053 26.1463 38.063 26.1463C34.3754 26.1463 31.3754 26.8685 29.0677 28.3081C26.7551 29.7524 25.6013 31.766 25.6013 34.3582C25.6013 36.6061 26.1782 38.3326 27.3321 39.5283C28.4859 40.7288 30.3658 41.5945 32.9716 42.1301L45.7986 44.6984C50.0247 45.5306 53.1593 47.0228 55.1978 49.1703C57.2363 51.3225 58.2555 54.3021 58.2555 58.1188C58.2555 61.2467 57.4094 63.9872 55.7122 66.3355L55.7218 66.345ZM76.549 73.0935H70.2797V40.3796H63.4239V35.463H76.549V73.0887V73.0935Z",
          fill: "black"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("clipPath", { id: "clip0_1844_1532", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var Logo = React17.forwardRef(
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
          return showText ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CurieAiOriginalText, {}) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CurieAiOriginalIcon, { viewpoint });
        } else if (theme === "black") {
          return showText ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CurieAiBlackText, {}) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CurieAiBlackIcon, { viewpoint });
        } else if (theme === "white") {
          return showText ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CurieAiWhiteText, {}) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CurieAiWhiteIcon, { viewpoint });
        }
      }
      return null;
    };
    const renderSupremeIntelligenceSvg = (size2) => {
      const viewpoint = size2 === "sm" ? "0 0 212 95" : size2 === "md" ? "0 0 151 95" : "0 0 101 95";
      if (variant === "supreme") {
        if (theme === "original") {
          return showText ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SupremeIntelligenceOriginalText, {}) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SupremeIntelligenceOriginalIcon, { viewpoint });
        } else if (theme === "black") {
          return showText ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SupremeIntelligenceBlackText, {}) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SupremeIntelligenceBlackIcon, { viewpoint });
        } else if (theme === "white") {
          return showText ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SupremeIntelligenceWhiteText, {}) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SupremeIntelligenceWhiteIcon, { viewpoint });
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
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "div",
      {
        ref,
        className: cn("flex items-center gap-2", className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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

// src/components/ui/authForm.tsx
var React18 = __toESM(require("react"), 1);
var import_jsx_runtime18 = require("react/jsx-runtime");
var AuthForm = React18.forwardRef(
  ({ className, withCard = false, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var AuthFormHeader = React18.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var AuthFormTitle = React18.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var AuthFormSubtitle = React18.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var AuthFormDescription = React18.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var AuthFormBody = React18.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "div",
    {
      ref,
      className: cn("flex w-full flex-col gap-4", className),
      ...props
    }
  )
);
AuthFormBody.displayName = "AuthFormBody";
var AuthFormActions = React18.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "div",
    {
      ref,
      className: cn("flex w-full flex-col gap-3", className),
      ...props
    }
  )
);
AuthFormActions.displayName = "AuthFormActions";
var AuthFormPrimary = React18.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { ref, className: cn("w-full", className), ...props })
);
AuthFormPrimary.displayName = "AuthFormPrimary";
var AuthFormDivider = React18.forwardRef(
  ({ className, label = "OR", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    "div",
    {
      ref,
      className: cn(
        "flex w-full items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "h-px flex-1 bg-neutral-200" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "h-px flex-1 bg-neutral-200" })
      ]
    }
  )
);
AuthFormDivider.displayName = "AuthFormDivider";
var AuthFormFooter = React18.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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

// src/components/ui/menubar.tsx
var React19 = __toESM(require("react"), 1);
var MenubarPrimitive = __toESM(require("@radix-ui/react-menubar"), 1);
var import_lucide_react = require("lucide-react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var MenubarMenu = MenubarPrimitive.Menu;
var MenubarGroup = MenubarPrimitive.Group;
var MenubarPortal = MenubarPrimitive.Portal;
var MenubarSub = MenubarPrimitive.Sub;
var MenubarRadioGroup = MenubarPrimitive.RadioGroup;
var Menubar = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var MenubarTrigger = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var MenubarSubTrigger = React19.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
var MenubarSubContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var MenubarContent = React19.forwardRef(
  ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(MenubarPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var MenubarItem = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var MenubarCheckboxItem = React19.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
var MenubarRadioItem = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
  MenubarPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
var MenubarLabel = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var MenubarSeparator = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var React20 = __toESM(require("react"), 1);
var import_outline9 = require("@heroicons/react/24/outline");
var import_class_variance_authority5 = require("class-variance-authority");
var import_jsx_runtime20 = require("react/jsx-runtime");
var pageLevelVariants = (0, import_class_variance_authority5.cva)(
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
var PageLevel = React20.forwardRef(
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
    const defaultSeparator = /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_outline9.ChevronRightIcon, { className: "h-4 w-4 text-neutral-400" });
    const separatorElement = separator || defaultSeparator;
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      "div",
      {
        ref,
        className: cn(pageLevelVariants({ variant, size, className })),
        ...props,
        children: [
          showArrow && arrowPosition === "before" && separatorElement,
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: children || `Page level ${level}` }),
          showArrow && arrowPosition === "after" && separatorElement
        ]
      }
    );
  }
);
PageLevel.displayName = "PageLevel";
var PageLevelList = React20.forwardRef(({ className, separator, children, ...props }, ref) => {
  const defaultSeparator = /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_outline9.ChevronRightIcon, { className: "h-4 w-4 text-neutral-400" });
  const separatorElement = separator || defaultSeparator;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "div",
    {
      ref,
      className: cn("flex items-center gap-1.5", className),
      ...props,
      children: React20.Children.map(children, (child, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(React20.Fragment, { children: [
        child,
        index < React20.Children.count(children) - 1 && separatorElement
      ] }, index))
    }
  );
});
PageLevelList.displayName = "PageLevelList";
var PageLevelItem = React20.forwardRef(({ className, active = false, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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

// src/components/ui/page-heading.tsx
var React21 = __toESM(require("react"), 1);
var import_jsx_runtime21 = require("react/jsx-runtime");
var PageHeading = React21.forwardRef(
  ({
    className,
    heading,
    description,
    showDescription = true,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "div",
      {
        ref,
        className: cn("flex flex-col items-start w-full", className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "flex flex-col gap-7 items-start justify-center w-full", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex flex-col gap-2.5 items-start w-full", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h1", { className: "text-3xl leading-9 font-normal text-neutral-950 w-full", children: heading }),
          showDescription && description && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-base leading-6 font-normal text-neutral-600 w-full", children: description })
        ] }) })
      }
    );
  }
);
PageHeading.displayName = "PageHeading";

// src/components/ui/pagination.tsx
var React22 = __toESM(require("react"), 1);
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime22 = require("react/jsx-runtime");
var Pagination = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: cn("mx-auto flex justify-center", className),
    ...props
  }
);
Pagination.displayName = "Pagination";
var PaginationContent = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
  "ul",
  {
    ref,
    className: cn("isolate flex flex-row items-center -space-x-px", className),
    ...props
  }
));
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { ref, className: cn("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
var PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
}) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
  PaginationLink,
  {
    "aria-label": "Go to previous page",
    size: "icon",
    className: cn("rounded-l-lg", className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react2.ChevronLeft, { className: "h-4 w-4" })
  }
);
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
  PaginationLink,
  {
    "aria-label": "Go to next page",
    size: "icon",
    className: cn("rounded-r-lg", className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react2.ChevronRight, { className: "h-4 w-4" })
  }
);
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
  "span",
  {
    "aria-hidden": true,
    className: cn(
      "flex h-10 w-10 items-center justify-center rounded-none border border-[#D4D4D4] bg-white text-[#737373]",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react2.MoreHorizontal, { className: "h-4 w-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
PaginationEllipsis.displayName = "PaginationEllipsis";

// src/components/ui/persona.tsx
var React24 = __toESM(require("react"), 1);
var import_lucide_react3 = require("lucide-react");
var import_outline10 = require("@heroicons/react/24/outline");
var import_class_variance_authority6 = require("class-variance-authority");

// src/components/ui/popover.tsx
var React23 = __toESM(require("react"), 1);
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"), 1);
var import_jsx_runtime23 = require("react/jsx-runtime");
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React23.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
var import_jsx_runtime24 = require("react/jsx-runtime");
var UserIcon = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
  "svg",
  {
    width: "21",
    height: "20",
    viewBox: "0 0 21 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
var personaVariants = (0, import_class_variance_authority6.cva)(
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
var personaProfileVariants = (0, import_class_variance_authority6.cva)(
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
var Persona = React24.forwardRef(
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
    const [open, setOpen] = React24.useState(false);
    const isControlled = personasProp !== void 0 && typeof onPersonasChange === "function";
    const [internalPersonas, setInternalPersonas] = React24.useState(
      () => personasProp !== void 0 && !isControlled ? personasProp : defaultPersonas
    );
    React24.useEffect(() => {
      if (!isControlled && personasProp !== void 0) {
        setInternalPersonas(personasProp);
      }
    }, [isControlled, personasProp?.join("\0")]);
    const personas = isControlled ? personasProp : internalPersonas;
    const options = React24.useMemo(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
              showLeftIcon && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(UserIcon, { className: "h-5 w-5 shrink-0 text-[#4136D4]" }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
            showRightIcon && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
              import_lucide_react3.ChevronDown,
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
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        PopoverContent,
        {
          className: "w-[364px] overflow-hidden rounded-md border border-neutral-200 bg-white p-0 shadow-lg",
          align: "start",
          children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: cn("flex max-h-72 flex-col gap-2 overflow-y-auto p-2", options.length === 0 && "p-0"), children: options.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "px-2 py-3 text-center text-sm text-neutral-500", children: "No personas available" }) : options.map((option) => {
            const isSelected = personas.includes(option);
            return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
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
                  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "truncate text-sm font-medium", children: option }),
                  isSelected && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_outline10.CheckIcon, { className: "h-4 w-4 shrink-0 text-neutral-900" })
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
var PersonaProfile = React24.forwardRef(
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
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      "div",
      {
        className: cn(personaProfileVariants({ variant, className })),
        ref,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex flex-1 gap-3 items-start", children: [
            avatar || /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "bg-[#4136D4] overflow-hidden rounded-full shrink-0 size-10 relative flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "font-sans font-normal leading-7 text-lg text-white text-center tracking-normal whitespace-nowrap", children: avatarFallback }) }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex flex-1 flex-col gap-1.5 items-start min-h-0 min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "font-sans font-semibold leading-6 text-neutral-900 text-base w-full", children: name }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "font-sans font-normal leading-4 text-neutral-600 text-sm w-full", children: title }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex gap-[5px] items-center w-full", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex flex-1 gap-[5px] items-center min-h-0 min-w-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react3.Building2, { className: "size-3.5 text-neutral-900" }),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "font-sans font-normal leading-4 text-neutral-600 text-xs", children: organization })
              ] }) }),
              tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex flex-wrap gap-1 items-start w-full", children: tags.map((tag, index) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Badge, { variant: "default", className: "bg-gray-100 text-gray-600 text-xs px-1.5 py-0.5 rounded-full", children: tag }, index)) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: cn("relative shrink-0 size-6", variant === "selected" ? "opacity-100" : "opacity-0"), children: variant === "selected" && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react3.CheckCircle, { className: "size-6 text-supreme-blue-700" }) })
        ]
      }
    );
  }
);
PersonaProfile.displayName = "PersonaProfile";

// src/components/ui/drag-drop.tsx
var React25 = __toESM(require("react"), 1);
var import_solid = require("@heroicons/react/24/solid");
var import_jsx_runtime25 = require("react/jsx-runtime");
var DragDrop = React25.forwardRef(
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
    const inputRef = React25.useRef(null);
    const [isDragging, setIsDragging] = React25.useState(false);
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
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
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
          loading ? /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "w-[336px] text-center", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-base leading-6 text-neutral-600", children: loadingText }) })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              import_solid.ArrowUpTrayIcon,
              {
                style: {
                  width: iconSizePx,
                  height: iconSizePx,
                  color: iconColorValue
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "w-[336px] text-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-base leading-6 text-neutral-600", children: label }),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-xs leading-4 text-neutral-600", children: sublabel })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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

// src/components/ui/sidebar.tsx
var React27 = __toESM(require("react"), 1);
var import_react_router_dom = require("react-router-dom");
var import_outline11 = require("@heroicons/react/24/outline");

// src/components/ui/Icons/AIIcon.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var AIIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "path",
        {
          d: "M6.8335 18.8887V15.4443M6.8335 8.55566V5.11133M5.11133 6.8335H8.55566M5.11133 17.1665H8.55566M12.6889 5.8002L11.4942 8.9062C11.3 9.4113 11.2028 9.66385 11.0518 9.87628C10.9179 10.0646 10.7534 10.2291 10.5651 10.3629C10.3527 10.514 10.1002 10.6111 9.59507 10.8054L6.48906 12L9.59507 13.1946C10.1002 13.3889 10.3527 13.486 10.5651 13.6371C10.7534 13.7709 10.9179 13.9354 11.0518 14.1237C11.2028 14.3362 11.3 14.5887 11.4942 15.0938L12.6889 18.1998L13.8835 15.0938C14.0778 14.5887 14.1749 14.3362 14.3259 14.1237C14.4598 13.9354 14.6243 13.7709 14.8126 13.6371C15.025 13.486 15.2776 13.3889 15.7827 13.1946L18.8887 12L15.7827 10.8054C15.2776 10.6111 15.025 10.514 14.8126 10.3629C14.6243 10.2291 14.4598 10.0646 14.3259 9.87628C14.1749 9.66385 14.0778 9.4113 13.8835 8.9062L12.6889 5.8002Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

// src/components/ui/Icons/AnalyticsIcon.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
var AnalyticsIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "path",
        {
          opacity: "0.8",
          d: "M17.5847 17.9337V13.0471M12 17.9337V10.9529M6.4153 17.9337L6.4153 15.1414M12.982 7.48163L16.59 8.83464M11.1614 7.74231L7.25316 10.6735M18.3251 8.46722C18.7341 8.87615 18.7341 9.53915 18.3251 9.94808C17.9162 10.357 17.2532 10.357 16.8443 9.94808C16.4353 9.53915 16.4353 8.87615 16.8443 8.46722C17.2532 8.05828 17.9162 8.05828 18.3251 8.46722ZM7.15573 10.5615C7.56466 10.9704 7.56466 11.6334 7.15573 12.0423C6.7468 12.4513 6.08379 12.4513 5.67486 12.0423C5.26593 11.6334 5.26593 10.9704 5.67486 10.5615C6.08379 10.1525 6.7468 10.1525 7.15573 10.5615ZM12.7404 6.37295C13.1494 6.78188 13.1494 7.44489 12.7404 7.85382C12.3315 8.26275 11.6685 8.26275 11.2596 7.85382C10.8506 7.44489 10.8506 6.78188 11.2596 6.37295C11.6685 5.96402 12.3315 5.96402 12.7404 6.37295Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

// src/components/ui/Icons/AppIcon.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var AppIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        "path",
        {
          opacity: "0.8",
          d: "M18.8887 9.9334H5.11133M13.3777 15.7888L15.0999 14.0666L13.3777 12.3444M10.6223 12.3444L8.9001 14.0666L10.6223 15.7888M5.11133 9.10676L5.11133 14.8932C5.11133 16.0506 5.11133 16.6293 5.33657 17.0714C5.53471 17.4603 5.85086 17.7764 6.23971 17.9746C6.68178 18.1998 7.26048 18.1998 8.41789 18.1998H15.5821C16.7395 18.1998 17.3182 18.1998 17.7603 17.9746C18.1491 17.7764 18.4653 17.4603 18.6634 17.0714C18.8887 16.6293 18.8887 16.0506 18.8887 14.8932V9.10676C18.8887 7.94935 18.8887 7.37065 18.6634 6.92858C18.4653 6.53972 18.1491 6.22357 17.7603 6.02544C17.3182 5.80019 16.7395 5.80019 15.5821 5.80019L8.41789 5.80019C7.26049 5.80019 6.68178 5.80019 6.23971 6.02544C5.85086 6.22357 5.53471 6.53972 5.33657 6.92858C5.11133 7.37065 5.11133 7.94935 5.11133 9.10676Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

// src/components/ui/Icons/AudiencesIcon.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var AudiencesIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        "path",
        {
          opacity: "0.8",
          d: "M7.20747 17.3335C7.64366 16.3059 8.66205 15.5851 9.84879 15.5851H14.151C15.3377 15.5851 16.3561 16.3059 16.7923 17.3336M14.868 10.2074C14.868 11.7914 13.5839 13.0755 11.9999 13.0755C10.4159 13.0755 9.13176 11.7914 9.13176 10.2074C9.13176 8.62341 10.4159 7.33931 11.9999 7.33931C13.5839 7.33931 14.868 8.62341 14.868 10.2074ZM19.1702 12C19.1702 15.96 15.9599 19.1703 11.9999 19.1703C8.03984 19.1703 4.82959 15.96 4.82959 12C4.82959 8.03996 8.03984 4.82971 11.9999 4.82971C15.9599 4.82971 19.1702 8.03996 19.1702 12Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

// src/components/ui/Icons/BrandGuidelinesIcon.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var BrandGuidelinesIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        "path",
        {
          opacity: "0.8",
          d: "M17.6078 12.3739V8.11195C17.6078 6.85569 17.6078 6.22756 17.3633 5.74774C17.1482 5.32567 16.8051 4.98252 16.383 4.76746C15.9032 4.52298 15.2751 4.52298 14.0188 4.52298H9.2335C7.97724 4.52298 7.34912 4.52298 6.86929 4.76746C6.44722 4.98252 6.10407 5.32567 5.88902 5.74774C5.64453 6.22756 5.64453 6.85569 5.64453 8.11195V15.8881C5.64453 17.1443 5.64453 17.7724 5.88902 18.2523C6.10407 18.6743 6.44722 19.0175 6.86929 19.2325C7.34912 19.477 7.97724 19.477 9.2335 19.477H11.6261M13.1216 11.2523H8.63534M10.1307 14.2431H8.63534M14.617 8.26149H8.63534M13.4954 17.2339L14.9908 18.7293L18.3555 15.3647",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

// src/components/ui/Icons/DataSourcesIcon.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
var DataSourcesIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        "path",
        {
          opacity: "0.8",
          d: "M6.2625 16.3031V16.1597C6.2625 14.9547 6.2625 14.3522 6.49701 13.892C6.70328 13.4871 7.03243 13.158 7.43727 12.9517C7.89752 12.7172 8.50001 12.7172 9.705 12.7172H14.295C15.5 12.7172 16.1025 12.7172 16.5627 12.9517C16.9676 13.158 17.2967 13.4871 17.503 13.892C17.7375 14.3522 17.7375 14.9547 17.7375 16.1597V16.3031M6.2625 16.3031C5.47032 16.3031 4.82812 16.9453 4.82812 17.7375C4.82812 18.5297 5.47032 19.1719 6.2625 19.1719C7.05468 19.1719 7.69688 18.5297 7.69688 17.7375C7.69688 16.9453 7.05468 16.3031 6.2625 16.3031ZM17.7375 16.3031C16.9453 16.3031 16.3031 16.9453 16.3031 17.7375C16.3031 18.5297 16.9453 19.1719 17.7375 19.1719C18.5297 19.1719 19.1719 18.5297 19.1719 17.7375C19.1719 16.9453 18.5297 16.3031 17.7375 16.3031ZM12 16.3031C11.2078 16.3031 10.5656 16.9453 10.5656 17.7375C10.5656 18.5297 11.2078 19.1719 12 19.1719C12.7922 19.1719 13.4344 18.5297 13.4344 17.7375C13.4344 16.9453 12.7922 16.3031 12 16.3031ZM12 16.3031V9.13125M7.69688 9.13125H16.3031C16.9715 9.13125 17.3056 9.13125 17.5692 9.02206C17.9207 8.87648 18.1999 8.59725 18.3455 8.24579C18.4547 7.98219 18.4547 7.64802 18.4547 6.97969C18.4547 6.31135 18.4547 5.97719 18.3455 5.71359C18.1999 5.36213 17.9207 5.08289 17.5692 4.93731C17.3056 4.82812 16.9715 4.82812 16.3031 4.82812H7.69688C7.02854 4.82812 6.69437 4.82812 6.43078 4.93731C6.07931 5.08289 5.80008 5.36213 5.6545 5.71359C5.54531 5.97719 5.54531 6.31135 5.54531 6.97969C5.54531 7.64802 5.54531 7.98219 5.6545 8.24579C5.80008 8.59725 6.07931 8.87648 6.43078 9.02206C6.69437 9.13125 7.02854 9.13125 7.69688 9.13125Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

// src/components/ui/Icons/DigitalAssetManagementIcon.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
var DigitalAssetManagementIcon = ({ size = 24, className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("g", { opacity: "0.8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          "path",
          {
            d: "M9.34727 5.36816H6.54716C6.13447 5.36816 5.92813 5.36816 5.7705 5.44848C5.63185 5.51912 5.51912 5.63185 5.44848 5.7705C5.36816 5.92813 5.36816 6.13447 5.36816 6.54716V9.34727C5.36816 9.75995 5.36816 9.9663 5.44848 10.1239C5.51912 10.2626 5.63185 10.3753 5.7705 10.4459C5.92813 10.5263 6.13447 10.5263 6.54716 10.5263H9.34727C9.75995 10.5263 9.9663 10.5263 10.1239 10.4459C10.2626 10.3753 10.3753 10.2626 10.4459 10.1239C10.5263 9.9663 10.5263 9.75995 10.5263 9.34727V6.54716C10.5263 6.13447 10.5263 5.92813 10.4459 5.7705C10.3753 5.63185 10.2626 5.51912 10.1239 5.44848C9.9663 5.36816 9.75995 5.36816 9.34727 5.36816Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          "path",
          {
            d: "M17.4528 5.36816H14.6527C14.24 5.36816 14.0337 5.36816 13.8761 5.44848C13.7374 5.51912 13.6247 5.63185 13.5541 5.7705C13.4737 5.92813 13.4737 6.13447 13.4737 6.54716V9.34727C13.4737 9.75995 13.4737 9.9663 13.5541 10.1239C13.6247 10.2626 13.7374 10.3753 13.8761 10.4459C14.0337 10.5263 14.24 10.5263 14.6527 10.5263H17.4528C17.8655 10.5263 18.0719 10.5263 18.2295 10.4459C18.3681 10.3753 18.4809 10.2626 18.5515 10.1239C18.6318 9.9663 18.6318 9.75995 18.6318 9.34727V6.54716C18.6318 6.13447 18.6318 5.92813 18.5515 5.7705C18.4809 5.63185 18.3681 5.51912 18.2295 5.44848C18.0719 5.36816 17.8655 5.36816 17.4528 5.36816Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          "path",
          {
            d: "M17.4528 13.4737H14.6527C14.24 13.4737 14.0337 13.4737 13.8761 13.5541C13.7374 13.6247 13.6247 13.7374 13.5541 13.8761C13.4737 14.0337 13.4737 14.24 13.4737 14.6527V17.4528C13.4737 17.8655 13.4737 18.0719 13.5541 18.2295C13.6247 18.3681 13.7374 18.4809 13.8761 18.5515C14.0337 18.6318 14.24 18.6318 14.6527 18.6318H17.4528C17.8655 18.6318 18.0719 18.6318 18.2295 18.5515C18.3681 18.4809 18.4809 18.3681 18.5515 18.2295C18.6318 18.0719 18.6318 17.8655 18.6318 17.4528V14.6527C18.6318 14.24 18.6318 14.0337 18.5515 13.8761C18.4809 13.7374 18.3681 13.6247 18.2295 13.5541C18.0719 13.4737 17.8655 13.4737 17.4528 13.4737Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          "path",
          {
            d: "M9.34727 13.4737H6.54716C6.13447 13.4737 5.92813 13.4737 5.7705 13.5541C5.63185 13.6247 5.51912 13.7374 5.44848 13.8761C5.36816 14.0337 5.36816 14.24 5.36816 14.6527V17.4528C5.36816 17.8655 5.36816 18.0719 5.44848 18.2295C5.51912 18.3681 5.63185 18.4809 5.7705 18.5515C5.92813 18.6318 6.13447 18.6318 6.54716 18.6318H9.34727C9.75995 18.6318 9.9663 18.6318 10.1239 18.5515C10.2626 18.4809 10.3753 18.3681 10.4459 18.2295C10.5263 18.0719 10.5263 17.8655 10.5263 17.4528V14.6527C10.5263 14.24 10.5263 14.0337 10.4459 13.8761C10.3753 13.7374 10.2626 13.6247 10.1239 13.5541C9.9663 13.4737 9.75995 13.4737 9.34727 13.4737Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ] })
    }
  );
};

// src/components/ui/Icons/GoogleIcon.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var GoogleIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 20 21",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          "path",
          {
            d: "M10 0.507812C12.4741 0.507812 14.7249 1.43864 16.4443 2.95898L13.9658 5.4375C12.8873 4.54785 11.5085 4.00781 10 4.00781C6.54843 4.00781 3.75 6.80624 3.75 10.2578C3.75 13.7094 6.54843 16.5078 10 16.5078C12.7212 16.5078 15.0282 14.7655 15.8867 12.3408L16.0049 12.0078H10.25V8.50781H18.75V8.54883H19.5957C19.6943 9.10437 19.75 9.6749 19.75 10.2578C19.75 15.6422 15.3844 20.0078 10 20.0078C4.61557 20.0078 0.25 15.6422 0.25 10.2578C0.25 4.87338 4.61557 0.507812 10 0.507812Z",
            fill: "#FFC107",
            stroke: "#737373",
            "stroke-width": "0.5"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          "path",
          {
            d: "M1.153 5.60331L4.4385 8.01281C5.3275 5.81181 7.4805 4.25781 10 4.25781C11.5295 4.25781 12.921 4.83481 13.9805 5.77731L16.809 2.94881C15.023 1.28431 12.634 0.257812 10 0.257812C6.159 0.257812 2.828 2.42631 1.153 5.60331Z",
            fill: "#FF3D00"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          "path",
          {
            d: "M10 20.2578C12.583 20.2578 14.93 19.2693 16.7045 17.6618L13.6095 15.0428C12.572 15.8323 11.3038 16.2592 10 16.2578C7.399 16.2578 5.1905 14.5993 4.3585 12.2848L1.0975 14.7973C2.7525 18.0358 6.1135 20.2578 10 20.2578Z",
            fill: "#4CAF50"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          "path",
          {
            d: "M19.8055 8.29931H19V8.25781H10V12.2578H15.6515C15.2571 13.366 14.5467 14.3344 13.608 15.0433L13.6095 15.0423L16.7045 17.6613C16.4855 17.8603 20 15.2578 20 10.2578C20 9.58731 19.931 8.93281 19.8055 8.29931Z",
            fill: "#1976D2"
          }
        )
      ]
    }
  );
};

// src/components/ui/Icons/HomeIcon.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
var HomeIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        "path",
        {
          opacity: "0.8",
          d: "M8.93837 16.1076H15.0616M11.2481 5.21128L6.05691 9.2489C5.70989 9.5188 5.53639 9.65375 5.41139 9.82275C5.30066 9.97246 5.21818 10.1411 5.16799 10.3204C5.11133 10.5228 5.11133 10.7426 5.11133 11.1823V16.7199C5.11133 17.5773 5.11133 18.0059 5.27818 18.3334C5.42494 18.6214 5.65913 18.8556 5.94717 19.0024C6.27463 19.1692 6.7033 19.1692 7.56063 19.1692H16.4394C17.2967 19.1692 17.7254 19.1692 18.0528 19.0024C18.3409 18.8556 18.5751 18.6214 18.7218 18.3334C18.8887 18.0059 18.8887 17.5773 18.8887 16.7199V11.1823C18.8887 10.7426 18.8887 10.5228 18.832 10.3204C18.7818 10.1411 18.6993 9.97246 18.5886 9.82275C18.4636 9.65375 18.2901 9.5188 17.9431 9.2489L12.7519 5.21128C12.483 5.00213 12.3485 4.89755 12.2 4.85735C12.069 4.82189 11.931 4.82189 11.8 4.85735C11.6515 4.89755 11.517 5.00213 11.2481 5.21128Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

// src/components/ui/Icons/KnowledgeBaseIcon.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
var KnowledgeBaseIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        "path",
        {
          opacity: "0.8",
          d: "M7.23281 14.0431C6.59816 14.0431 6.28084 14.0431 6.03053 13.9394C5.69678 13.8012 5.43162 13.536 5.29338 13.2023C5.1897 12.952 5.1897 12.6346 5.1897 12V7.36895C5.1897 6.60612 5.1897 6.2247 5.33815 5.93334C5.46874 5.67705 5.67711 5.46868 5.9334 5.33809C6.22477 5.18964 6.60618 5.18964 7.36901 5.18964H12.0001C12.6347 5.18964 12.952 5.18964 13.2023 5.29332C13.5361 5.43156 13.8012 5.69672 13.9395 6.03047C14.0432 6.28078 14.0432 6.5981 14.0432 7.23275M12.1363 18.8104H16.6311C17.3939 18.8104 17.7754 18.8104 18.0667 18.6619C18.323 18.5313 18.5314 18.3229 18.662 18.0667C18.8104 17.7753 18.8104 17.3939 18.8104 16.631V12.1362C18.8104 11.3734 18.8104 10.992 18.662 10.7006C18.5314 10.4443 18.323 10.2359 18.0667 10.1053C17.7754 9.95689 17.3939 9.95689 16.6311 9.95689H12.1363C11.3734 9.95689 10.992 9.95689 10.7007 10.1053C10.4444 10.2359 10.236 10.4443 10.1054 10.7006C9.95695 10.992 9.95695 11.3734 9.95695 12.1362V16.631C9.95695 17.3939 9.95695 17.7753 10.1054 18.0667C10.236 18.3229 10.4444 18.5313 10.7007 18.6619C10.992 18.8104 11.3734 18.8104 12.1363 18.8104Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

// src/components/ui/Icons/LinkedInIcon.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
var LinkedInIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "path",
        {
          d: "M7.44 5.25784C7.43974 5.78827 7.22877 6.29687 6.85351 6.67176C6.47825 7.04664 5.96944 7.2571 5.439 7.25684C4.90857 7.25657 4.39997 7.0456 4.02508 6.67034C3.6502 6.29508 3.43974 5.78627 3.44 5.25584C3.44027 4.7254 3.65124 4.2168 4.0265 3.84192C4.40176 3.46703 4.91057 3.25657 5.441 3.25684C5.97144 3.2571 6.48004 3.46807 6.85492 3.84333C7.22981 4.21859 7.44027 4.7274 7.44 5.25784ZM7.5 8.73784H3.5V21.2578H7.5V8.73784ZM13.82 8.73784H9.84V21.2578H13.78V14.6878C13.78 11.0278 18.55 10.6878 18.55 14.6878V21.2578H22.5V13.3278C22.5 7.15784 15.44 7.38784 13.78 10.4178L13.82 8.73784Z",
          fill: "#0A66C2"
        }
      )
    }
  );
};

// src/components/ui/Icons/MicrosoftIcon.tsx
var React26 = __toESM(require("react"), 1);
var import_jsx_runtime37 = require("react/jsx-runtime");
var MicrosoftIcon = React26.forwardRef(
  ({ className, size = 24, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
    "svg",
    {
      ref,
      "aria-hidden": "true",
      focusable: "false",
      role: "img",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      className: cn("shrink-0", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("rect", { width: "10.5", height: "10.5", x: "1", y: "1", fill: "#F25022", rx: "1.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("rect", { width: "10.5", height: "10.5", x: "12.5", y: "1", fill: "#7FBA00", rx: "1.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("rect", { width: "10.5", height: "10.5", x: "1", y: "12.5", fill: "#00A4EF", rx: "1.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("rect", { width: "10.5", height: "10.5", x: "12.5", y: "12.5", fill: "#FFB900", rx: "1.5" })
      ]
    }
  )
);
MicrosoftIcon.displayName = "MicrosoftIcon";

// src/components/ui/Icons/SupremeIcon.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
var SupremeIcon = ({
  size,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
    "svg",
    {
      width: size || "70",
      height: size || "81",
      viewBox: "0 0 70 81",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("g", { "clip-path": "url(#clip0_536_983)", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M5.73686 38.0134C6.0443 40.6284 6.69265 42.8018 7.68191 44.5417C8.66908 46.2774 10.1958 47.6318 12.2643 48.5987C14.3306 49.5676 17.0935 50.0511 20.5506 50.0511C24.8716 50.0511 28.1259 49.3676 30.3177 48.0007C32.5096 46.6317 33.6034 44.4562 33.6034 41.4724C33.6034 39.5053 32.8944 37.9384 31.4743 36.7694C30.0542 35.6004 28.2806 34.7169 26.1515 34.1168C24.0224 33.5188 21.0442 32.8499 17.2168 32.1102C11.9401 31.1267 7.64217 30.0806 4.32722 28.9763C2.78163 28.4595 1.34062 27.776 0 26.9405V37.3237H4.95256C5.3834 37.3216 5.64483 37.5529 5.73686 38.0134Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M65.3246 0V6.51164C65.3246 6.81378 65.0799 7.05758 64.7767 7.05758H51.9059C51.6026 7.05758 51.3579 6.81378 51.3579 6.51164V0H39.7503C43.0255 3.13809 45.0501 7.41598 45.8239 12.8337V12.9253C45.8239 13.3858 45.5918 13.6171 45.1295 13.6171H31.7986C31.3657 13.6171 31.1189 13.3858 31.0582 12.9253C30.7194 9.94353 29.3913 7.66811 27.0782 6.09906C24.7651 4.53002 21.63 3.74862 17.6792 3.74862C14.1614 3.74862 11.3693 4.37999 9.30085 5.63856C7.23449 6.89921 6.19922 8.82041 6.19922 11.4042C6.19922 13.2192 6.89358 14.6715 8.28231 15.7613C9.67103 16.8532 11.4216 17.6908 13.536 18.2743C15.6484 18.8598 18.543 19.4745 22.2156 20.1184C27.6157 21.1331 32.0057 22.1854 35.3855 23.2794C38.7632 24.3692 41.6724 26.2153 44.111 28.8137C46.5475 31.4101 47.7669 34.9878 47.7669 39.5345C47.7669 44.0229 46.6647 47.8444 44.4582 50.995C43.8245 51.8993 43.1029 52.7328 42.3124 53.5121H51.3035V26.8071V14.7528C51.3035 14.261 51.5503 14.0151 52.0439 14.0151H64.6344C65.128 14.0151 65.3748 14.261 65.3748 14.7528V26.8071V53.5121H69.3381V0H65.3246Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M24.6831 68.7379C24.1247 68.5254 23.6876 68.2045 23.3718 67.7752C23.0539 67.3439 22.8845 66.8063 22.8594 66.1624C22.8594 66.0999 22.8907 66.0666 22.9535 66.0666H24.6622C24.7187 66.0666 24.7521 66.0957 24.7626 66.1562C24.8023 66.4917 24.886 66.7709 25.0136 66.9959C25.1411 67.2189 25.3377 67.3939 25.6013 67.5168C25.8669 67.6419 26.2224 67.7044 26.6658 67.7044C27.2221 67.7044 27.6404 67.6169 27.9228 67.4398C28.2051 67.2626 28.3453 66.9834 28.3453 66.6C28.3453 66.3479 28.2532 66.1458 28.0713 65.9957C27.8893 65.8457 27.6614 65.7311 27.3874 65.654C27.1134 65.5769 26.7307 65.4915 26.2392 65.3956C25.5615 65.2685 25.0073 65.1352 24.5827 64.9935C24.1561 64.8518 23.7901 64.6142 23.4847 64.2829C23.1794 63.9516 23.0267 63.4953 23.0267 62.9139C23.0267 62.3971 23.1585 61.9471 23.4199 61.5678C23.6813 61.1886 24.0641 60.8969 24.566 60.6926C25.0679 60.4905 25.6703 60.3884 26.373 60.3884C27.3853 60.3884 28.1989 60.5947 28.8137 61.0073C29.4286 61.4199 29.7988 62.0575 29.9201 62.9202V62.9327C29.9201 62.991 29.8908 63.0223 29.8302 63.0223H28.1173C28.0608 63.0223 28.0294 62.9931 28.0211 62.9327C27.9772 62.5492 27.8078 62.2575 27.5087 62.0554C27.2117 61.8533 26.808 61.7533 26.2998 61.7533C25.8481 61.7533 25.4883 61.8345 25.2227 61.9971C24.9571 62.1596 24.8232 62.4055 24.8232 62.7389C24.8232 62.9722 24.9132 63.1598 25.091 63.2994C25.2708 63.4411 25.4946 63.5474 25.7665 63.6224C26.0384 63.6974 26.4107 63.7766 26.8833 63.8599C27.5777 63.9891 28.1424 64.1246 28.5753 64.2662C29.0103 64.4059 29.3847 64.6434 29.6984 64.9768C30.0121 65.3102 30.169 65.7707 30.169 66.3541C30.169 66.9313 30.0268 67.4231 29.7444 67.8273C29.46 68.2337 29.0543 68.54 28.5251 68.7463C27.996 68.9546 27.3644 69.0588 26.6344 69.0588C25.8899 69.0567 25.2394 68.9505 24.6831 68.7379Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M31.4049 68.7275C31.0828 68.54 30.8339 68.267 30.6583 67.9086C30.4805 67.5502 30.3926 67.1272 30.3926 66.6375V65.356L30.3696 62.8535C30.3696 62.791 30.401 62.7597 30.4637 62.7597H32.0825C32.1453 62.7597 32.1766 62.791 32.1766 62.8535L32.1536 65.356V66.6125C32.1536 66.8292 32.1934 67.0209 32.2729 67.1876C32.3523 67.3543 32.4611 67.4814 32.6033 67.571C32.7434 67.6606 32.9045 67.7044 33.0822 67.7044C33.3081 67.7044 33.5235 67.6335 33.7243 67.4939C33.9272 67.3522 34.0924 67.1397 34.2221 66.8542C34.3518 66.5667 34.4166 66.2187 34.4166 65.8082V65.3581L34.3936 62.8556C34.3936 62.793 34.425 62.7618 34.4877 62.7618H36.1295C36.1922 62.7618 36.2257 62.793 36.2257 62.8556L36.2027 65.6894V68.7733C36.2027 68.8358 36.1713 68.8671 36.1086 68.8671H34.5735C34.5149 68.8671 34.4835 68.8358 34.4835 68.7733L34.5128 68.0982C34.2953 68.3753 34.0129 68.5962 33.6699 68.7629C33.3269 68.9296 32.9484 69.013 32.5364 69.013C32.1034 69.0088 31.727 68.915 31.4049 68.7275Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M41.6448 63.0514C42.0443 63.3265 42.3455 63.7016 42.5504 64.1787C42.7554 64.6538 42.8558 65.1935 42.8558 65.7936C42.8558 66.3875 42.747 66.9251 42.5274 67.4085C42.3099 67.8919 41.9962 68.2753 41.5863 68.5587C41.1784 68.8421 40.7037 68.9817 40.1641 68.9817C39.4258 68.9817 38.8444 68.7337 38.4198 68.2399L38.4366 70.7841C38.4366 70.8466 38.4052 70.88 38.3424 70.88H36.7236C36.6609 70.88 36.6274 70.8487 36.6274 70.7841L36.6504 66.3854L36.6274 62.8514C36.6274 62.7889 36.6588 62.7576 36.7236 62.7576H38.3299C38.3884 62.7576 38.4198 62.7889 38.4198 62.8514L38.3905 63.4682C38.6039 63.2035 38.8653 62.9993 39.1707 62.8556C39.476 62.7118 39.819 62.6389 40.1996 62.6389C40.7643 62.6389 41.2454 62.7764 41.6448 63.0514ZM40.689 67.3064C40.9191 66.9855 41.0341 66.5146 41.0341 65.8895C41.0341 65.2164 40.9212 64.7101 40.6953 64.3663C40.4694 64.0224 40.1369 63.8495 39.7019 63.8495C39.2627 63.8495 38.928 64.0162 38.7001 64.3475C38.4721 64.6788 38.3571 65.1706 38.3571 65.8186C38.3571 66.4521 38.47 66.9376 38.6959 67.2772C38.9218 67.6169 39.2459 67.7877 39.6663 67.7877C40.1181 67.7877 40.459 67.6273 40.689 67.3064Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M43.2363 68.865C43.1736 68.865 43.1401 68.8338 43.1401 68.7713L43.1757 65.8061L43.1401 62.8535C43.1401 62.791 43.1715 62.7597 43.2363 62.7597H44.8196C44.8781 62.7597 44.9095 62.791 44.9095 62.8535L44.8677 63.7912C45.1019 63.439 45.4094 63.1723 45.7942 62.9868C46.1769 62.8035 46.5994 62.7118 47.0595 62.7118C47.1515 62.7118 47.2498 62.7222 47.3565 62.741C47.4109 62.7535 47.4402 62.7889 47.4402 62.8472V63.9745C47.4402 64.0329 47.4109 64.0641 47.3502 64.0641C47.3147 64.0641 47.2749 64.062 47.231 64.0579C47.1871 64.0537 47.1453 64.0516 47.1055 64.0516C46.6768 64.0516 46.2982 64.1308 45.9678 64.2892C45.6394 64.4475 45.3801 64.683 45.1939 64.9976C45.0078 65.3123 44.9137 65.6957 44.9137 66.1499V68.7713C44.9137 68.8338 44.8823 68.865 44.8196 68.865H43.2363Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M49.0212 66.175C49.0567 66.748 49.1885 67.1689 49.4144 67.4356C49.6402 67.7023 49.9686 67.8357 50.4015 67.8357C51.0478 67.8357 51.4473 67.5189 51.5978 66.8876C51.6104 66.8334 51.6439 66.8042 51.6982 66.8042H53.2271C53.2585 66.8042 53.2836 66.8105 53.3024 66.8209C53.3212 66.8334 53.3275 66.848 53.3233 66.8688C53.2794 67.2564 53.133 67.6148 52.8841 67.9419C52.6331 68.2712 52.2943 68.5316 51.8635 68.7275C51.4326 68.9234 50.939 69.0213 50.3785 69.0213C49.7113 69.0213 49.1425 68.8859 48.6677 68.615C48.193 68.3441 47.8332 67.969 47.5906 67.4877C47.3459 67.0084 47.2246 66.4562 47.2246 65.8311C47.2246 65.1831 47.3501 64.6163 47.599 64.1329C47.85 63.6474 48.2076 63.2723 48.6761 63.0056C49.1446 62.7389 49.7009 62.6055 50.343 62.6055C51.006 62.6055 51.5727 62.7451 52.0412 63.0264C52.5118 63.3077 52.8694 63.7078 53.1183 64.2267C53.3672 64.7476 53.4969 65.3644 53.5073 66.0791C53.5073 66.1416 53.476 66.1729 53.4132 66.1729H49.0212V66.175ZM49.5001 64.0954C49.2868 64.3079 49.1446 64.6247 49.0693 65.0477H51.5811C51.5414 64.6872 51.4201 64.3871 51.2151 64.1433C51.0101 63.8995 50.7236 63.7787 50.3555 63.7787C49.9979 63.7787 49.7134 63.8849 49.5001 64.0954Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M62.8417 66.6729L62.8647 68.7712C62.8647 68.8338 62.8334 68.865 62.7706 68.865H61.1518C61.0891 68.865 61.0577 68.8338 61.0577 68.7712L61.0807 66.6729V65.0122C61.0807 64.6517 61.0117 64.3808 60.8758 64.1975C60.7398 64.0141 60.5453 63.9224 60.2964 63.9224C60.1249 63.9224 59.9576 63.9974 59.7924 64.1454C59.6272 64.2933 59.4912 64.5121 59.3845 64.7976C59.2779 65.0851 59.2235 65.4227 59.2235 65.8144V65.9207V66.6729L59.2465 68.7712C59.2465 68.8338 59.2151 68.865 59.1503 68.865H57.5315C57.4688 68.865 57.4353 68.8338 57.4353 68.7712L57.4583 66.6729V65.0122C57.4583 64.6475 57.3914 64.3746 57.2554 64.1933C57.1216 64.012 56.9271 63.9203 56.6719 63.9203C56.4962 63.9203 56.3289 63.9953 56.1637 64.1433C55.9985 64.2912 55.8646 64.51 55.758 64.7955C55.6534 65.083 55.6011 65.4227 55.6011 65.8186V66.6729L55.6241 68.7712C55.6241 68.8338 55.5927 68.865 55.53 68.865H53.8882C53.8255 68.865 53.792 68.8338 53.792 68.7712L53.815 66.6729V62.8535C53.815 62.791 53.8464 62.7597 53.9091 62.7597H55.4442C55.5028 62.7597 55.5342 62.791 55.5342 62.8535L55.5049 63.5286C55.7224 63.2244 55.9755 62.9952 56.2599 62.843C56.5464 62.6909 56.8811 62.6138 57.2659 62.6138C57.703 62.6138 58.0711 62.7097 58.3702 62.8993C58.6693 63.0889 58.891 63.3765 59.0332 63.7641C59.28 63.3327 59.5498 63.0347 59.8468 62.866C60.1417 62.6972 60.4888 62.6138 60.8841 62.6138C61.5157 62.6138 61.9989 62.8097 62.3335 63.2014C62.6681 63.5932 62.8354 64.187 62.8354 64.9872V66.6729H62.8417Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M64.8893 66.175C64.9249 66.748 65.0566 67.1689 65.2825 67.4356C65.5084 67.7023 65.8368 67.8357 66.2697 67.8357C66.9159 67.8357 67.3154 67.5189 67.466 66.8876C67.4786 66.8334 67.512 66.8042 67.5664 66.8042H69.0952C69.1266 66.8042 69.1517 66.8105 69.1705 66.8209C69.1894 66.8334 69.1956 66.848 69.1915 66.8688C69.1475 67.2564 69.0011 67.6148 68.7522 67.9419C68.5013 68.2712 68.1625 68.5316 67.7316 68.7275C67.3008 68.9234 66.8072 69.0213 66.2467 69.0213C65.5795 69.0213 65.0106 68.8859 64.5359 68.615C64.0611 68.3441 63.7014 67.969 63.4588 67.4877C63.2141 67.0084 63.0928 66.4562 63.0928 65.8311C63.0928 65.1831 63.2183 64.6163 63.4671 64.1329C63.7181 63.6474 64.0758 63.2723 64.5442 63.0056C65.0127 62.7389 65.5691 62.6055 66.2111 62.6055C66.8741 62.6055 67.4409 62.7451 67.9094 63.0264C68.38 63.3077 68.7376 63.7078 68.9865 64.2267C69.2354 64.7476 69.365 65.3644 69.3755 66.0791C69.3755 66.1416 69.3441 66.1729 69.2814 66.1729H64.8893V66.175ZM65.3662 64.0954C65.1529 64.3079 65.0106 64.6247 64.9353 65.0477H67.4472C67.4074 64.6872 67.2861 64.3871 67.0812 64.1433C66.8762 63.8995 66.5897 63.7787 66.2216 63.7787C65.864 63.7787 65.5795 63.8849 65.3662 64.0954Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M12.4921 78.6606C12.4293 78.6606 12.3979 78.6294 12.3979 78.5669L12.4335 74.5099L12.3979 70.4549C12.3979 70.3924 12.4293 70.3591 12.4921 70.3591H14.1108C14.1736 70.3591 14.205 70.3903 14.205 70.4549L14.1694 74.5099L14.205 78.5669C14.205 78.6294 14.1736 78.6606 14.1108 78.6606H12.4921Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M20.5503 76.0622L20.5734 78.5648C20.5734 78.6273 20.542 78.6585 20.4792 78.6585H18.8605C18.7977 78.6585 18.7663 78.6273 18.7663 78.5648L18.7893 76.0622V74.8057C18.7893 74.589 18.7496 74.3973 18.6701 74.2306C18.5907 74.0639 18.4798 73.9368 18.3397 73.8472C18.1996 73.7576 18.0385 73.7138 17.8607 73.7138C17.6349 73.7138 17.4194 73.7847 17.2187 73.9243C17.0158 74.0639 16.8506 74.2785 16.7209 74.564C16.5912 74.8516 16.5264 75.1995 16.5264 75.61V76.0622L16.5494 78.5648C16.5494 78.6273 16.518 78.6585 16.4553 78.6585H14.8135C14.7507 78.6585 14.7173 78.6273 14.7173 78.5648L14.7403 75.7309V72.647C14.7403 72.5845 14.7717 72.5532 14.8344 72.5532H16.3695C16.4281 72.5532 16.4595 72.5845 16.4595 72.647L16.4302 73.3221C16.6477 73.045 16.93 72.8241 17.273 72.6574C17.616 72.4907 17.9946 72.4073 18.4066 72.4073C18.8395 72.4073 19.216 72.5011 19.5381 72.6887C19.8602 72.8762 20.1091 73.1492 20.2847 73.5076C20.4625 73.866 20.5503 74.289 20.5503 74.7786V76.0622Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M22.3888 78.5835C22.0834 78.4543 21.8366 78.2439 21.6505 77.9584C21.4643 77.6729 21.3702 77.3104 21.3702 76.8707L21.3828 74.4744V73.8097H20.6801C20.6173 73.8097 20.5859 73.7784 20.5859 73.7159V72.6491C20.5859 72.5866 20.6173 72.5553 20.6801 72.5553H21.3765L21.3702 71.1196C21.3702 71.0571 21.4016 71.0258 21.4643 71.0258H23.0601C23.1229 71.0258 23.1542 71.0571 23.1542 71.1196L23.148 72.5553H24.5221C24.5848 72.5553 24.6183 72.5866 24.6183 72.6491V73.7159C24.6183 73.7784 24.5869 73.8097 24.5221 73.8097H23.1417V74.4682L23.1542 76.8228C23.1542 77.0707 23.2107 77.2479 23.3237 77.3541C23.4366 77.4583 23.5976 77.5104 23.8089 77.5104C24.0347 77.5104 24.2648 77.4771 24.499 77.4104C24.5074 77.4062 24.5158 77.4041 24.5283 77.4041C24.5513 77.4041 24.5702 77.4125 24.5848 77.4271C24.5994 77.4437 24.6057 77.4646 24.6057 77.4916V78.4585C24.6057 78.5106 24.5827 78.546 24.5346 78.5648C24.1142 78.7065 23.7336 78.7773 23.3927 78.7773C23.0308 78.7794 22.6941 78.7127 22.3888 78.5835Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M26.3102 75.9684C26.3458 76.5415 26.4775 76.9624 26.7034 77.2291C26.9293 77.4958 27.2577 77.6292 27.6906 77.6292C28.3369 77.6292 28.7363 77.3124 28.8869 76.6811C28.8995 76.6269 28.9329 76.5977 28.9873 76.5977H30.5161C30.5475 76.5977 30.5726 76.604 30.5914 76.6144C30.6103 76.6269 30.6165 76.6415 30.6124 76.6623C30.5684 77.0499 30.422 77.4083 30.1731 77.7354C29.9222 78.0647 29.5834 78.3251 29.1525 78.521C28.7217 78.7169 28.2281 78.8148 27.6676 78.8148C27.0004 78.8148 26.4315 78.6794 25.9568 78.4085C25.482 78.1376 25.1223 77.7625 24.8797 77.2812C24.635 76.8019 24.5137 76.2497 24.5137 75.6246C24.5137 74.9766 24.6392 74.4098 24.888 73.9264C25.139 73.4409 25.4967 73.0658 25.9651 72.7991C26.4336 72.5324 26.99 72.399 27.632 72.399C28.295 72.399 28.8618 72.5386 29.3303 72.8199C29.8009 73.1012 30.1585 73.5013 30.4074 74.0202C30.6563 74.5411 30.7859 75.1579 30.7964 75.8726C30.7964 75.9351 30.765 75.9664 30.7023 75.9664H26.3102V75.9684ZM26.7892 73.891C26.5758 74.1035 26.4336 74.4202 26.3583 74.8432H28.8702C28.8304 74.4827 28.7091 74.1827 28.5042 73.9389C28.2992 73.6951 28.0127 73.5742 27.6446 73.5742C27.2869 73.5722 27.0025 73.6784 26.7892 73.891Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M31.2398 78.6606C31.177 78.6606 31.1436 78.6294 31.1436 78.5669L31.1791 74.5099L31.1436 70.4549C31.1436 70.3924 31.1749 70.3591 31.2398 70.3591H32.8104C32.8732 70.3591 32.9067 70.3903 32.9067 70.4549L32.8711 74.5099L32.9067 78.5669C32.9067 78.6294 32.8753 78.6606 32.8104 78.6606H31.2398Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M33.5239 78.6606C33.4612 78.6606 33.4277 78.6294 33.4277 78.5669L33.4633 74.5099L33.4277 70.4549C33.4277 70.3924 33.4591 70.3591 33.5239 70.3591H35.0946C35.1574 70.3591 35.1908 70.3903 35.1908 70.4549L35.1553 74.5099L35.1908 78.5669C35.1908 78.6294 35.1595 78.6606 35.0946 78.6606H33.5239Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M35.7866 71.9594C35.7239 71.9594 35.6904 71.9281 35.6904 71.8656V70.4549C35.6904 70.3924 35.7218 70.3591 35.7866 70.3591H37.4054C37.4682 70.3591 37.5016 70.3903 37.5016 70.4549V71.8656C37.5016 71.9281 37.4703 71.9594 37.4054 71.9594H35.7866ZM35.7866 78.6606C35.7239 78.6606 35.6904 78.6294 35.6904 78.5669L35.7134 75.6142L35.6904 72.6491C35.6904 72.5866 35.7218 72.5553 35.7866 72.5553H37.4054C37.4682 72.5553 37.5016 72.5866 37.5016 72.6491L37.4786 75.6142L37.5016 78.5669C37.5016 78.6294 37.4703 78.6606 37.4054 78.6606H35.7866Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M39.0829 78.2251C38.6667 77.9584 38.3509 77.5938 38.1397 77.1312C37.9263 76.6686 37.8218 76.1456 37.8218 75.5663C37.8218 74.9933 37.9305 74.4723 38.1501 74.0014C38.3676 73.5305 38.6814 73.1575 39.0913 72.8845C39.4991 72.6095 39.9739 72.472 40.5135 72.472C40.8899 72.472 41.2288 72.5345 41.5257 72.6616C41.8227 72.7887 42.0779 72.9762 42.287 73.2242L42.2577 72.6491C42.2577 72.5866 42.287 72.5553 42.3477 72.5553H43.9435C44.0062 72.5553 44.0376 72.5866 44.0376 72.6491L44.0146 75.6976V78.496C44.0146 79.019 43.9016 79.4691 43.6758 79.8483C43.4499 80.2276 43.1111 80.5214 42.6614 80.7256C42.2117 80.9319 41.6533 81.034 40.9924 81.034C40.4445 81.0423 39.9572 80.9736 39.5263 80.8277C39.0955 80.6818 38.7525 80.4589 38.4973 80.1609C38.2422 79.8629 38.0999 79.4941 38.0728 79.0544V79.0419C38.0728 78.9857 38.102 78.9586 38.1627 78.9586H39.7396C39.794 78.9586 39.8296 78.9878 39.84 79.0482C39.8756 79.3087 39.9969 79.5087 40.2039 79.6504C40.411 79.79 40.6933 79.8608 41.0552 79.8608C41.4609 79.8608 41.7788 79.7442 42.013 79.5129C42.2473 79.2816 42.3644 78.9357 42.3644 78.471V77.7709C42.1574 78.048 41.9064 78.2585 41.6094 78.4064C41.3124 78.5523 40.9757 78.6252 40.6034 78.6252C40.0032 78.6252 39.4991 78.4918 39.0829 78.2251ZM42.3205 75.5642C42.3205 74.9349 42.2034 74.4557 41.9712 74.1264C41.7391 73.7972 41.4023 73.6305 40.961 73.6305C40.5281 73.6305 40.1998 73.7889 39.976 74.1077C39.7522 74.4265 39.6393 74.887 39.6393 75.4934C39.6393 76.1414 39.7522 76.6311 39.976 76.9645C40.1998 77.2958 40.5239 77.4625 40.9485 77.4625C41.8646 77.4625 42.3205 76.8311 42.3205 75.5642Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M46.1164 75.9684C46.1519 76.5415 46.2837 76.9624 46.5096 77.2291C46.7355 77.4958 47.0638 77.6292 47.4967 77.6292C48.143 77.6292 48.5425 77.3124 48.6931 76.6811C48.7056 76.6269 48.7391 76.5977 48.7934 76.5977H50.3223C50.3537 76.5977 50.3788 76.604 50.3976 76.6144C50.4164 76.6269 50.4227 76.6415 50.4185 76.6623C50.3746 77.0499 50.2282 77.4083 49.9793 77.7354C49.7283 78.0647 49.3895 78.3251 48.9587 78.521C48.5278 78.7169 48.0342 78.8148 47.4737 78.8148C46.8066 78.8148 46.2377 78.6794 45.7629 78.4085C45.2882 78.1376 44.9284 77.7625 44.6858 77.2812C44.4411 76.8019 44.3198 76.2497 44.3198 75.6246C44.3198 74.9766 44.4453 74.4098 44.6942 73.9264C44.9452 73.4409 45.3028 73.0658 45.7713 72.7991C46.2398 72.5324 46.7961 72.399 47.4382 72.399C48.1012 72.399 48.668 72.5386 49.1364 72.8199C49.607 73.1012 49.9647 73.5013 50.2135 74.0202C50.4624 74.5411 50.5921 75.1579 50.6026 75.8726C50.6026 75.9351 50.5712 75.9664 50.5084 75.9664H46.1164V75.9684ZM46.5953 73.891C46.382 74.1035 46.2398 74.4202 46.1645 74.8432H48.6763C48.6366 74.4827 48.5153 74.1827 48.3103 73.9389C48.1054 73.6951 47.8188 73.5742 47.4507 73.5742C47.0931 73.5722 46.8087 73.6784 46.5953 73.891Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M56.7242 76.0622L56.7472 78.5648C56.7472 78.6273 56.7158 78.6585 56.6531 78.6585H55.0343C54.9715 78.6585 54.9402 78.6273 54.9402 78.5648L54.9632 76.0622V74.8057C54.9632 74.589 54.9234 74.3973 54.844 74.2306C54.7645 74.0639 54.6536 73.9368 54.5135 73.8472C54.3734 73.7576 54.2123 73.7138 54.0346 73.7138C53.8087 73.7138 53.5933 73.7847 53.3925 73.9243C53.1896 74.0639 53.0244 74.2785 52.8947 74.564C52.7651 74.8516 52.7002 75.1995 52.7002 75.61V76.0622L52.7232 78.5648C52.7232 78.6273 52.6919 78.6585 52.6291 78.6585H50.9873C50.9246 78.6585 50.8911 78.6273 50.8911 78.5648L50.9141 75.7309V72.647C50.9141 72.5845 50.9455 72.5532 51.0082 72.5532H52.5434C52.6019 72.5532 52.6333 72.5845 52.6333 72.647L52.604 73.3221C52.8215 73.045 53.1039 72.8241 53.4469 72.6574C53.7899 72.4907 54.1684 72.4073 54.5804 72.4073C55.0134 72.4073 55.3898 72.5011 55.7119 72.6887C56.034 72.8762 56.2829 73.1492 56.4586 73.5076C56.6363 73.866 56.7242 74.289 56.7242 74.7786V76.0622Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M58.4288 78.4231C57.9582 78.1626 57.5985 77.7917 57.3475 77.3104C57.0965 76.8311 56.9731 76.2685 56.9731 75.6246C56.9731 74.9766 57.0986 74.4098 57.3475 73.9222C57.5985 73.4367 57.9603 73.0617 58.4372 72.7949C58.914 72.5303 59.4808 72.3969 60.1396 72.3969C60.6562 72.3969 61.1121 72.4886 61.5116 72.672C61.9111 72.8554 62.2269 73.1158 62.4632 73.4513C62.6995 73.7868 62.8397 74.1764 62.8836 74.6182V74.6307C62.8836 74.6578 62.8752 74.6807 62.8564 74.6953C62.8397 74.712 62.8146 74.7182 62.7874 74.7182H61.3234C61.2648 74.7182 61.2313 74.689 61.223 74.6286C61.1602 74.2931 61.0285 74.0348 60.8319 73.8576C60.6353 73.6805 60.4052 73.5909 60.1396 73.5909C59.6878 73.5951 59.3532 73.7618 59.1336 74.0952C58.914 74.4265 58.8053 74.9307 58.8053 75.6059C58.8053 76.306 58.9161 76.8165 59.1378 77.1395C59.3595 77.4625 59.7004 77.6229 60.1605 77.6229C60.4659 77.6229 60.7189 77.5167 60.9155 77.3062C61.1142 77.0957 61.2334 76.7936 61.2732 76.4019C61.2774 76.3393 61.3087 76.306 61.3673 76.306H62.8669C62.8982 76.306 62.9233 76.3143 62.9422 76.3289C62.961 76.3456 62.9672 76.3664 62.9631 76.3935C62.9233 76.8561 62.7769 77.2708 62.526 77.6375C62.2729 78.0042 61.9383 78.2918 61.52 78.4981C61.1017 78.7023 60.629 78.8065 60.0999 78.8065C59.4578 78.8148 58.8994 78.6835 58.4288 78.4231Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            "path",
            {
              d: "M64.8893 75.9684C64.9249 76.5415 65.0566 76.9624 65.2825 77.2291C65.5084 77.4958 65.8368 77.6292 66.2697 77.6292C66.9159 77.6292 67.3154 77.3124 67.466 76.6811C67.4786 76.6269 67.512 76.5977 67.5664 76.5977H69.0952C69.1266 76.5977 69.1517 76.604 69.1705 76.6144C69.1894 76.6269 69.1956 76.6415 69.1915 76.6623C69.1475 77.0499 69.0011 77.4083 68.7522 77.7354C68.5013 78.0647 68.1625 78.3251 67.7316 78.521C67.3008 78.7169 66.8072 78.8148 66.2467 78.8148C65.5795 78.8148 65.0106 78.6794 64.5359 78.4085C64.0611 78.1376 63.7014 77.7625 63.4588 77.2812C63.2141 76.8019 63.0928 76.2497 63.0928 75.6246C63.0928 74.9766 63.2183 74.4098 63.4671 73.9264C63.7181 73.4409 64.0758 73.0658 64.5442 72.7991C65.0127 72.5324 65.5691 72.399 66.2111 72.399C66.8741 72.399 67.4409 72.5386 67.9094 72.8199C68.38 73.1012 68.7376 73.5013 68.9865 74.0202C69.2354 74.5411 69.365 75.1579 69.3755 75.8726C69.3755 75.9351 69.3441 75.9664 69.2814 75.9664H64.8893V75.9684ZM65.3662 73.891C65.1529 74.1035 65.0106 74.4202 64.9353 74.8432H67.4472C67.4074 74.4827 67.2861 74.1827 67.0812 73.9389C66.8762 73.6951 66.5897 73.5742 66.2216 73.5742C65.864 73.5722 65.5795 73.6784 65.3662 73.891Z",
              fill: "black"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("clipPath", { id: "clip0_536_983", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("rect", { width: "70", height: "81", fill: "white" }) }) })
      ]
    }
  );
};

// src/components/ui/Icons/PersonaIcon.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
var PersonaIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
        "path",
        {
          d: "M5.98467 18.6946C6.53216 17.4047 7.81043 16.5 9.3 16.5H14.7C16.1896 16.5 17.4678 17.4047 18.0153 18.6946M15.6 9.75C15.6 11.7382 13.9882 13.35 12 13.35C10.0118 13.35 8.4 11.7382 8.4 9.75C8.4 7.76177 10.0118 6.15 12 6.15C13.9882 6.15 15.6 7.76177 15.6 9.75ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
          stroke: "currentColor",
          strokeWidth: "1.43406",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

// src/components/ui/Icons/PaletteIcon.tsx
var import_jsx_runtime40 = require("react/jsx-runtime");
var PaletteIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        "path",
        {
          d: "M12 22C10.6333 22 9.34167 21.7373 8.125 21.212C6.90833 20.6867 5.846 19.97 4.938 19.062C4.03 18.154 3.31333 17.0917 2.788 15.875C2.26267 14.6583 2 13.3667 2 12C2 10.6167 2.271 9.31667 2.813 8.1C3.355 6.88333 4.08833 5.825 5.013 4.925C5.93767 4.025 7.01667 3.31267 8.25 2.788C9.48333 2.26333 10.8 2.00067 12.2 2C13.5333 2 14.7917 2.22933 15.975 2.688C17.1583 3.14667 18.196 3.78 19.088 4.588C19.98 5.396 20.6883 6.35433 21.213 7.463C21.7377 8.57167 22 9.76733 22 11.05C22 12.9667 21.4167 14.4377 20.25 15.463C19.0833 16.4883 17.6667 17.0007 16 17H14.15C14 17 13.896 17.0417 13.838 17.125C13.78 17.2083 13.7507 17.3 13.75 17.4C13.75 17.6 13.875 17.8877 14.125 18.263C14.375 18.6383 14.5 19.0673 14.5 19.55C14.5 20.3833 14.271 21 13.813 21.4C13.355 21.8 12.7507 22 12 22ZM6.5 13C6.93333 13 7.29167 12.8583 7.575 12.575C7.85833 12.2917 8 11.9333 8 11.5C8 11.0667 7.85833 10.7083 7.575 10.425C7.29167 10.1417 6.93333 10 6.5 10C6.06667 10 5.70833 10.1417 5.425 10.425C5.14167 10.7083 5 11.0667 5 11.5C5 11.9333 5.14167 12.2917 5.425 12.575C5.70833 12.8583 6.06667 13 6.5 13ZM9.5 9C9.93333 9 10.2917 8.85833 10.575 8.575C10.8583 8.29167 11 7.93333 11 7.5C11 7.06667 10.8583 6.70833 10.575 6.425C10.2917 6.14167 9.93333 6 9.5 6C9.06667 6 8.70833 6.14167 8.425 6.425C8.14167 6.70833 8 7.06667 8 7.5C8 7.93333 8.14167 8.29167 8.425 8.575C8.70833 8.85833 9.06667 9 9.5 9ZM14.5 9C14.9333 9 15.2917 8.85833 15.575 8.575C15.8583 8.29167 16 7.93333 16 7.5C16 7.06667 15.8583 6.70833 15.575 6.425C15.2917 6.14167 14.9333 6 14.5 6C14.0667 6 13.7083 6.14167 13.425 6.425C13.1417 6.70833 13 7.06667 13 7.5C13 7.93333 13.1417 8.29167 13.425 8.575C13.7083 8.85833 14.0667 9 14.5 9ZM17.5 13C17.9333 13 18.2917 12.8583 18.575 12.575C18.8583 12.2917 19 11.9333 19 11.5C19 11.0667 18.8583 10.7083 18.575 10.425C18.2917 10.1417 17.9333 10 17.5 10C17.0667 10 16.7083 10.1417 16.425 10.425C16.1417 10.7083 16 11.0667 16 11.5C16 11.9333 16.1417 12.2917 16.425 12.575C16.7083 12.8583 17.0667 13 17.5 13ZM12 20C12.15 20 12.271 19.9583 12.363 19.875C12.455 19.7917 12.5007 19.6833 12.5 19.55C12.5 19.3167 12.375 19.0417 12.125 18.725C11.875 18.4083 11.75 17.9333 11.75 17.3C11.75 16.6 11.9917 16.0417 12.475 15.625C12.9583 15.2083 13.55 15 14.25 15H16C17.1 15 18.0417 14.6793 18.825 14.038C19.6083 13.3967 20 12.4007 20 11.05C20 9.03333 19.2293 7.354 17.688 6.012C16.1467 4.67 14.3173 3.99933 12.2 4C9.93333 4 8 4.775 6.4 6.325C4.8 7.875 4 9.76667 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.89667 19.2217 9.784 20.0007 12 20Z",
          fill: "black"
        }
      )
    }
  );
};

// src/components/ui/Icons/SidebarIcon.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
var SidebarIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        "path",
        {
          d: "M9.46419 2.14258C9.46419 1.72836 9.12841 1.39258 8.71419 1.39258C8.29998 1.39258 7.96419 1.72836 7.96419 2.14258H9.46419ZM7.96419 21.8574C7.96419 22.2716 8.29998 22.6074 8.71419 22.6074C9.12841 22.6074 9.46419 22.2716 9.46419 21.8574H7.96419ZM3.93666 21.4993L3.59617 22.1675H3.59617L3.93666 21.4993ZM2.50071 20.0633L3.16896 19.7228L3.16896 19.7228L2.50071 20.0633ZM21.4993 20.0633L20.831 19.7228V19.7228L21.4993 20.0633ZM20.0633 21.4993L19.7228 20.831H19.7228L20.0633 21.4993ZM20.0633 2.50071L19.7228 3.16896L19.7228 3.16896L20.0633 2.50071ZM21.4993 3.93666L22.1675 3.59617V3.59617L21.4993 3.93666ZM3.93666 2.50071L4.27715 3.16896L3.93666 2.50071ZM2.50071 3.93666L3.16896 4.27715L2.50071 3.93666ZM16.8099 10.1778C17.1028 9.88489 17.1028 9.41001 16.8099 9.11713C16.517 8.82425 16.0421 8.82427 15.7492 9.11718L16.8099 10.1778ZM13.9271 12.0001L13.3968 11.4698C13.1039 11.7627 13.1039 12.2376 13.3968 12.5304L13.9271 12.0001ZM15.7493 14.8829C16.0422 15.1758 16.517 15.1758 16.8099 14.8829C17.1028 14.59 17.1028 14.1151 16.8099 13.8222L15.7493 14.8829ZM8.71419 2.14258H7.96419V21.8574H8.71419H9.46419V2.14258H8.71419ZM7.39987 2.14258V2.89258H16.6001V2.14258V1.39258H7.39987V2.14258ZM21.8574 7.39987H21.1074V16.6001H21.8574H22.6074V7.39987H21.8574ZM16.6001 21.8574V21.1074H7.39987V21.8574V22.6074H16.6001V21.8574ZM2.14258 16.6001H2.89258V7.39987H2.14258H1.39258V16.6001H2.14258ZM7.39987 21.8574V21.1074C6.46738 21.1074 5.81312 21.1068 5.30283 21.0651C4.8013 21.0242 4.50524 20.9473 4.27715 20.831L3.93666 21.4993L3.59617 22.1675C4.07095 22.4095 4.58639 22.5116 5.18068 22.5602C5.76622 22.608 6.49213 22.6074 7.39987 22.6074V21.8574ZM2.14258 16.6001H1.39258C1.39258 17.5079 1.39199 18.2338 1.43984 18.8193C1.48839 19.4136 1.59054 19.929 1.83246 20.4038L2.50071 20.0633L3.16896 19.7228C3.05275 19.4948 2.97583 19.1987 2.93485 18.6972C2.89316 18.1869 2.89258 17.5326 2.89258 16.6001H2.14258ZM3.93666 21.4993L4.27715 20.831C3.80001 20.5879 3.41208 20.2 3.16896 19.7228L2.50071 20.0633L1.83245 20.4038C2.21938 21.1632 2.83678 21.7806 3.59617 22.1675L3.93666 21.4993ZM21.8574 16.6001H21.1074C21.1074 17.5326 21.1068 18.1869 21.0651 18.6972C21.0242 19.1987 20.9473 19.4948 20.831 19.7228L21.4993 20.0633L22.1675 20.4038C22.4095 19.929 22.5116 19.4136 22.5602 18.8193C22.608 18.2338 22.6074 17.5079 22.6074 16.6001H21.8574ZM16.6001 21.8574V22.6074C17.5079 22.6074 18.2338 22.608 18.8193 22.5602C19.4136 22.5116 19.929 22.4095 20.4038 22.1675L20.0633 21.4993L19.7228 20.831C19.4948 20.9473 19.1987 21.0242 18.6972 21.0651C18.1869 21.1068 17.5326 21.1074 16.6001 21.1074V21.8574ZM21.4993 20.0633L20.831 19.7228C20.5879 20.2 20.2 20.5879 19.7228 20.831L20.0633 21.4993L20.4038 22.1675C21.1632 21.7806 21.7806 21.1632 22.1675 20.4038L21.4993 20.0633ZM16.6001 2.14258V2.89258C17.5326 2.89258 18.1869 2.89316 18.6972 2.93485C19.1987 2.97583 19.4948 3.05275 19.7228 3.16896L20.0633 2.50071L20.4038 1.83246C19.929 1.59054 19.4136 1.48839 18.8193 1.43984C18.2338 1.39199 17.5079 1.39258 16.6001 1.39258V2.14258ZM21.8574 7.39987H22.6074C22.6074 6.49213 22.608 5.76622 22.5602 5.18068C22.5116 4.58639 22.4095 4.07095 22.1675 3.59617L21.4993 3.93666L20.831 4.27715C20.9473 4.50524 21.0242 4.8013 21.0651 5.30283C21.1068 5.81312 21.1074 6.46738 21.1074 7.39987H21.8574ZM20.0633 2.50071L19.7228 3.16896C20.2 3.41208 20.5879 3.80001 20.831 4.27715L21.4993 3.93666L22.1675 3.59617C21.7806 2.83678 21.1632 2.21938 20.4038 1.83245L20.0633 2.50071ZM7.39987 2.14258V1.39258C6.49213 1.39258 5.76622 1.39199 5.18068 1.43984C4.58639 1.48839 4.07095 1.59054 3.59617 1.83245L3.93666 2.50071L4.27715 3.16896C4.50524 3.05275 4.8013 2.97583 5.30283 2.93485C5.81312 2.89316 6.46738 2.89258 7.39987 2.89258V2.14258ZM2.14258 7.39987H2.89258C2.89258 6.46738 2.89316 5.81312 2.93485 5.30283C2.97583 4.8013 3.05275 4.50524 3.16896 4.27715L2.50071 3.93666L1.83245 3.59617C1.59054 4.07095 1.48839 4.58639 1.43984 5.18068C1.39199 5.76622 1.39258 6.49213 1.39258 7.39987H2.14258ZM3.93666 2.50071L3.59617 1.83245C2.83678 2.21938 2.21938 2.83678 1.83245 3.59617L2.50071 3.93666L3.16896 4.27715C3.41208 3.80001 3.80001 3.41208 4.27715 3.16896L3.93666 2.50071ZM16.2796 9.64748L15.7492 9.11718L13.3968 11.4698L13.9271 12.0001L14.4575 12.5304L16.8099 10.1778L16.2796 9.64748ZM13.9271 12.0001L13.3968 12.5304L15.7493 14.8829L16.2796 14.3525L16.8099 13.8222L14.4575 11.4698L13.9271 12.0001Z",
          fill: "currentColor"
        }
      )
    }
  );
};

// src/components/ui/Icons/VectorIcon.tsx
var import_jsx_runtime42 = require("react/jsx-runtime");
var VectorIcon = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
        "path",
        {
          d: "M9.25 9.25L9.29149 9.22926C9.86461 8.9427 10.5099 9.46034 10.3545 10.082L9.64549 12.918C9.49009 13.5397 10.1354 14.0573 10.7085 13.7707L10.75 13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM10 6.25H10.0075V6.2575H10V6.25Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

// src/components/ui/sidebar.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
var Sidebar = React27.forwardRef(
  ({ className, items, ...props }, ref) => {
    const navigate = (0, import_react_router_dom.useNavigate)();
    const [expandedSections, setExpandedSections] = React27.useState(
      new Set(items.map((section) => section.id))
    );
    const [isCollapsed, setIsCollapsed] = React27.useState(false);
    const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
    const handleSectionToggle = (sectionId) => {
      const newExpandedSections = new Set(expandedSections);
      if (newExpandedSections.has(sectionId)) {
        newExpandedSections.delete(sectionId);
      } else {
        newExpandedSections.add(sectionId);
      }
      setExpandedSections(newExpandedSections);
    };
    const handleItemClick = (item) => {
      if (item.href) {
        navigate(item.href);
      }
      item.onClick?.();
    };
    const toggleCollapse = () => {
      const newCollapsedState = !isCollapsed;
      setIsCollapsed(newCollapsedState);
    };
    const isItemActive = (item) => {
      if (item.href) {
        return currentPath === item.href || currentPath.startsWith(item.href);
      }
      return false;
    };
    const getSizeClasses = () => {
      return {
        sidebar: "",
        item: "text-base font-medium text-neutral-600 hover:text-neutral-900",
        sectionTitle: "px-4 py-2 text-sm text-neutral-400 hover:text-neutral-700",
        logo: "w-10 h-10",
        brandText: "text-base"
      };
    };
    const sizeClasses = getSizeClasses();
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
      "div",
      {
        ref,
        className: cn(
          "flex flex-col h-screen transition-all duration-500 ease-in-out bg-slate-100 overflow-hidden py-3",
          sizeClasses.sidebar,
          isCollapsed ? "w-16 px-3" : "w-[315px]  px-6",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "pb-7", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
            "div",
            {
              className: cn(
                "flex items-center justify-between",
                isCollapsed && "justify-center"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                  "div",
                  {
                    className: cn(
                      "transition-all duration-500 ease-in-out overflow-hidden",
                      isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                    ),
                    children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(SupremeIcon, {})
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                  "button",
                  {
                    onClick: toggleCollapse,
                    className: cn(
                      "rounded-md transition-all duration-500 ease-in-out py-4",
                      isCollapsed && "rotate-180"
                    ),
                    "aria-label": isCollapsed ? "Expand sidebar" : "Collapse sidebar",
                    children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                      SidebarIcon,
                      {
                        size: 24,
                        className: "transition-all duration-500 ease-in-out text-slate-600"
                      }
                    )
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "w-full h-[1px] bg-slate-200" }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "flex-col flex h-full gap-20 pt-7", children: items.map((section) => /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "mb-4", children: [
            section.isCollapsible ? /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
              "button",
              {
                onClick: () => handleSectionToggle(section.id),
                className: cn(
                  "flex items-center w-full text-left transition-all duration-500 ease-in-out",
                  sizeClasses.sectionTitle,
                  "hover:text-slate-700 dark:hover:text-slate-300 rounded-lg px-2 py-2",
                  isCollapsed && "justify-center px-2"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                    import_outline11.ChevronDownIcon,
                    {
                      className: cn(
                        "w-4 h-4 transition-transform duration-500 ease-in-out flex-shrink-0",
                        expandedSections.has(section.id) ? "rotate-0" : "-rotate-90",
                        !isCollapsed && "mr-2"
                      )
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                    "span",
                    {
                      className: cn(
                        "transition-all duration-500 ease-in-out",
                        isCollapsed ? "opacity-0 scale-95 w-0" : "opacity-100 scale-100 w-auto"
                      ),
                      children: section.title
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              "div",
              {
                className: cn(
                  "font-medium transition-all duration-500 ease-in-out",
                  isCollapsed ? "opacity-0 scale-95" : "opacity-100 scale-100"
                ),
                children: !isCollapsed && section.title
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              "div",
              {
                className: cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  expandedSections.has(section.id) || !section.isCollapsible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "space-y-1", children: section.items.map((item) => {
                  const isActive = isItemActive(item);
                  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                    "button",
                    {
                      onClick: () => handleItemClick(item),
                      className: cn(
                        "flex items-center w-full text-left rounded-lg transition-all duration-500",
                        sizeClasses.item,
                        isActive && "text-slate-600 font-semibold",
                        isCollapsed && "justify-center"
                      ),
                      children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
                        "div",
                        {
                          className: cn(
                            "flex w-full items-center hover:bg-white rounded-xl transition-all duration-500 ease-in-out py-2.5 px-3.5",
                            isCollapsed && "justify-center",
                            !isCollapsed && "gap-2",
                            isActive && "bg-white border border-slate-200"
                          ),
                          children: [
                            item.icon && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                              "span",
                              {
                                className: cn(
                                  "flex-shrink-0 transition-all duration-500 ease-in-out",
                                  !isCollapsed && "mr-1 ",
                                  isActive && "text-slate-600"
                                ),
                                children: item.icon
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                              "span",
                              {
                                className: cn(
                                  "transition-all duration-500 ease-in-out",
                                  isCollapsed ? "opacity-0 scale-95 w-0" : "opacity-100 scale-100 w-auto",
                                  "truncate",
                                  isActive && "text-slate-600 font-semibold"
                                ),
                                children: !isCollapsed && item.label
                              }
                            )
                          ]
                        }
                      )
                    },
                    item.id
                  );
                }) })
              }
            )
          ] }, section.id)) })
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";

// src/components/ui/slider.tsx
var React28 = __toESM(require("react"), 1);
var SliderPrimitive = __toESM(require("@radix-ui/react-slider"), 1);
var import_jsx_runtime44 = require("react/jsx-runtime");
var Slider = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-200", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SliderPrimitive.Range, { className: "absolute h-full bg-[#4136D4] rounded-full" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SliderPrimitive.Thumb, { className: "block h-6 w-6 rounded-full border-2 border-[#4136D4] bg-white shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;
var RangeSlider = React28.forwardRef(({ className, defaultValue, value, onValueChange, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-200", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SliderPrimitive.Range, { className: "absolute h-full bg-[#4136D4] rounded-full" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SliderPrimitive.Thumb, { className: "block h-6 w-6 rounded-full border-2 border-[#4136D4] bg-white shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SliderPrimitive.Thumb, { className: "block h-6 w-6 rounded-full border-2 border-[#4136D4] bg-white shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
RangeSlider.displayName = "RangeSlider";

// src/components/ui/stepper.tsx
var React29 = __toESM(require("react"), 1);
var import_outline12 = require("@heroicons/react/24/outline");
var import_jsx_runtime45 = require("react/jsx-runtime");
var Stepper = React29.forwardRef(
  ({ className, steps, showDivider = true, separator, ...props }, ref) => {
    const renderedSeparator = separator ?? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      import_outline12.ChevronRightIcon,
      {
        className: "h-4 w-4 text-neutral-400",
        "aria-hidden": "true"
      }
    );
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
      "nav",
      {
        ref,
        "aria-label": "Progress",
        className: cn("w-full", className),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ol", { className: "flex flex-wrap items-center gap-2 text-sm", children: steps.map((step, index) => {
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
            const content = /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "min-w-0 truncate", children: step.title });
            const node = step.href ? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
              "a",
              {
                href: step.href,
                className: stepClasses,
                "aria-current": isActive ? "step" : void 0,
                children: content
              }
            ) : step.onClick ? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
              "button",
              {
                type: "button",
                className: cn(stepClasses, isUpcoming && "pointer-events-none"),
                onClick: isUpcoming ? void 0 : step.onClick,
                "aria-current": isActive ? "step" : void 0,
                "aria-disabled": isUpcoming ? true : void 0,
                children: content
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
              "span",
              {
                className: stepClasses,
                "aria-current": isActive ? "step" : void 0,
                children: content
              }
            );
            return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("li", { className: "flex min-w-0 items-center gap-2", children: [
              node,
              index < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { "aria-hidden": "true", className: "shrink-0", children: renderedSeparator })
            ] }, index);
          }) }),
          showDivider && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "mt-4 h-px w-full bg-neutral-200" })
        ]
      }
    );
  }
);
Stepper.displayName = "Stepper";

// src/components/ui/table.tsx
var React30 = __toESM(require("react"), 1);
var import_outline13 = require("@heroicons/react/24/outline");
var import_jsx_runtime46 = require("react/jsx-runtime");
var getScoreColor = (score) => {
  if (1 <= score && score <= 10) return "bg-[#FF8F8F] text-neutral-800";
  if (11 <= score && score <= 20) return "bg-[#FFB28E] text-neutral-800";
  if (21 <= score && score <= 30) return "bg-[#FFE15D] text-neutral-800";
  if (31 <= score && score <= 50) return "bg-[#6CFFA5] text-neutral-800";
  return "bg-[#FF8F8F] text-neutral-800";
};
var Table = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
  "thead",
  {
    ref,
    className: cn("bg-violet-50 border-b border-neutral-200", className),
    ...props
  }
));
TableHeader.displayName = "TableHeader";
var TableBody = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
  "tbody",
  {
    ref,
    className: cn("divide-y divide-gray-200", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
var TableRow = React30.forwardRef(({ className, onClick, clickable, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
var TableHead = React30.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
var TableCell = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
var TableCheckbox = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
var TableHeaderCell = React30.forwardRef(({ className, showCheckbox = true, rightIcon = true, showText = "", state = "Default", selectedRows, setSelectedRows, tableData, handleHeaderCheckbox, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
  "div",
  {
    ref,
    className: cn("flex gap-2 items-center", className),
    ...props,
    children: [
      showCheckbox && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
        TableCheckbox,
        {
          checked: selectedRows.size === tableData.length && tableData.length > 0,
          onChange: (e) => handleHeaderCheckbox(e.target.checked)
        }
      ),
      showText && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "font-semibold leading-4 relative shrink-0 text-neutral-800 text-sm", children: showText }),
      rightIcon && (typeof rightIcon === "boolean" ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_outline13.ArrowDownIcon, { className: "h-4 w-4 relative shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "relative shrink-0 flex items-center justify-center", children: rightIcon }))
    ]
  }
));
TableHeaderCell.displayName = "TableHeaderCell";
var TableCellGeneric = React30.forwardRef(({
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
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Score, { score });
  }
  if (style === "Range") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Range2, { range, lvl });
  }
  if (style === "Text" && description === true && state === "Default") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
      "div",
      {
        ref,
        className: cn("flex flex-col gap-1 items-start leading-4 text-sm whitespace-pre-wrap", className),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "font-medium relative shrink-0 text-neutral-800 w-full", children: title || "Tempor suspendisse amet" }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "font-normal relative shrink-0 text-neutral-600 w-full", children: subtitle || "At enim nisi commodo" })
        ]
      }
    );
  }
  if (style === "Text" && description === false && state === "Default") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn("flex leading-4 relative text-neutral-600 text-sm whitespace-pre-wrap", className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "font-normal relative shrink-0 w-full", children: children || "Tempor suspendisse amet" })
      }
    );
  }
  if (style === "CTA" && state === "Default") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn("flex justify-center gap-1.5 items-center", className),
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
    "div",
    {
      ref,
      className: cn("flex gap-1.5 items-center", className),
      ...props,
      children: [
        showCheckbox && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          TableCheckbox,
          {
            checked: selectedRows.has(rowId),
            onChange: (e) => handleRowCheckbox(rowId, e.target.checked)
          }
        ),
        children || /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex flex-1 flex-col gap-1 items-start leading-4 text-sm whitespace-pre-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "font-medium relative shrink-0 text-neutral-800 w-full", children: title || "Tempor suspendisse amet" }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "font-normal relative shrink-0 text-neutral-600 w-full", children: subtitle || "At enim nisi commodo" })
        ] })
      ]
    }
  );
});
TableCellGeneric.displayName = "TableCellGeneric";
var TableCellBenchmark = React30.forwardRef(({
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
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn(
          "bg-white flex gap-2 h-[68px] items-center px-6 py-4",
          className
        ),
        ...props,
        children: showScore && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          "div",
          {
            className: "flex flex-col gap-[10px] items-center justify-center px-2.5 py-0 rounded-[2px] shrink-0 w-9",
            style: { backgroundColor: scoreColor },
            children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-xs leading-4 text-neutral-800", children: score || 40 })
          }
        )
      }
    );
  }
  if (style === "Score" && state === "Hover") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn(
          "bg-violet-50 flex gap-2 h-[68px] items-center px-6 py-4",
          className
        ),
        ...props,
        children: showScore && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          "div",
          {
            className: "flex flex-col gap-[10px] items-center justify-center px-2.5 py-0 rounded-[2px] shrink-0 w-9",
            style: { backgroundColor: scoreColor },
            children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text-xs leading-4 text-neutral-800", children: score || 40 })
          }
        )
      }
    );
  }
  if (style === "Lead" && state === "Hover") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn(
          "bg-violet-50 flex gap-2 items-center px-6 py-4 w-[357px]",
          className
        ),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex flex-1 gap-2 items-center min-h-px min-w-px shrink-0", children: [
          showCheckbox && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
            TableCheckbox,
            {
              checked: selectedRows.has(rowId),
              onChange: (e) => handleRowCheckbox(rowId, e.target.checked)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex flex-1 gap-2 items-center min-h-px min-w-px shrink-0", children: [
            leftIcon !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "flex gap-6 items-end relative shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "overflow-clip relative shrink-0 size-4", children: leftIcon === true ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_outline13.GlobeAltIcon, { className: "size-4 text-neutral-900" }) : leftIcon ? leftIcon : null }) }),
            children ? children : /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex flex-1 flex-col gap-1 items-start leading-4 text-sm whitespace-pre-wrap", children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "font-medium relative shrink-0 text-supreme-blue-700 w-full", children: "Company Name Here" }),
              descriptionText && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "font-normal relative shrink-0 text-neutral-500 w-full", children: descriptionText })
            ] }),
            rightIcon !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "overflow-clip relative shrink-0 size-4", children: rightIcon === true ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_outline13.LinkIcon, { className: "size-4 text-supreme-blue-700" }) : rightIcon ? rightIcon : null })
          ] })
        ] })
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    "div",
    {
      ref,
      className: cn(
        "bg-white flex gap-2 items-center px-4 py-2 w-[357px]",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex flex-1 gap-2 items-center min-h-px min-w-px shrink-0", children: [
        showCheckbox && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          "input",
          {
            type: "checkbox",
            className: "bg-white border border-neutral-500 rounded-sm shrink-0 size-4"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex flex-1 gap-2 items-center min-h-px min-w-px shrink-0", children: [
          leftIcon === true && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "overflow-clip relative shrink-0 size-4", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_outline13.GlobeAltIcon, { className: "size-4 text-neutral-900" }) }),
          children ? children : /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex flex-1 flex-col gap-1 items-start leading-4 text-sm whitespace-pre-wrap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "font-medium relative shrink-0 text-supreme-blue-700 w-full", children: "Company Name Here" }),
            descriptionText && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "font-normal relative shrink-0 text-neutral-500 w-full", children: descriptionText })
          ] }),
          rightIcon === true && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "overflow-clip relative shrink-0 size-4", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_outline13.LinkIcon, { className: "size-4 text-supreme-blue-700" }) })
        ] })
      ] })
    }
  );
});
TableCellBenchmark.displayName = "TableCellBenchmark";
var Range2 = React30.forwardRef(({ className, range = "0-10", lvl = "1", ...props }, ref) => {
  const baseClasses = "flex gap-[10px] h-14 items-center justify-center w-[120px]";
  const element = /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "font-normal leading-[18px] relative shrink-0 text-[#4e4c6c] text-sm text-center", children: range });
  if (range === "0-10" && lvl === "1") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn("bg-[#ff8f8f]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "bg-[rgba(255,255,255,0.5)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "0-10" && lvl === "2") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn("bg-[#ff8f8f]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "bg-[rgba(255,255,255,0.8)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "11-20" && lvl === "1") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn("bg-[#ffb28e]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "bg-[rgba(255,255,255,0.5)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "11-20" && lvl === "2") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn("bg-[#ffb28e]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "bg-[rgba(255,255,255,0.8)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "21-30" && lvl === "1") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn("bg-[#ffe15d]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "bg-[rgba(255,255,255,0.5)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "21-30" && lvl === "2") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn("bg-[#ffe15d]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "bg-[rgba(255,255,255,0.8)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "31-50" && lvl === "1") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn("bg-[#6cffa5]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "bg-[rgba(255,255,255,0.5)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
  if (range === "31-50" && lvl === "2") {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn("bg-[#6cffa5]", baseClasses, className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "bg-[rgba(255,255,255,0.8)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0", children: element })
      }
    );
  }
});
Range2.displayName = "Range";
var Score = React30.forwardRef(({ className, score = 40, ...props }, ref) => {
  const element = /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: cn("font-normal leading-4 relative shrink-0 text-xs whitespace-pre-wrap w-9 px-2.5 py-0 rounded-[2px]", getScoreColor(score)), children: score });
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
var React31 = __toESM(require("react"), 1);
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"), 1);
var import_class_variance_authority7 = require("class-variance-authority");
var import_jsx_runtime47 = require("react/jsx-runtime");
var tabsListVariants = (0, import_class_variance_authority7.cva)(
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
var tabsTriggerVariants = (0, import_class_variance_authority7.cva)(
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
var tabsContentVariants = (0, import_class_variance_authority7.cva)(
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
var TabsList = React31.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
  TabsPrimitive.List,
  {
    ref,
    className: cn(tabsListVariants({ variant, size, className })),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React31.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(tabsTriggerVariants({ variant, size, className })),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React31.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(tabsContentVariants({ variant, className })),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
var TabGroup = React31.forwardRef(({
  tabs,
  defaultValue,
  value,
  onValueChange,
  variant = "default",
  size = "default",
  className,
  orientation = "horizontal"
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { ref, className: cn("w-full", className), children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
    Tabs,
    {
      defaultValue,
      value,
      onValueChange,
      orientation,
      className: "w-full",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(TabsList, { variant, size, className: "w-full", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
        tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(TabsContent, { value: tab.value, variant, children: tab.content }, tab.value))
      ]
    }
  ) });
});
TabGroup.displayName = "TabGroup";

// src/components/ui/textarea.tsx
var React32 = __toESM(require("react"), 1);
var import_jsx_runtime48 = require("react/jsx-runtime");
var Textarea = React32.forwardRef(
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
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "relative", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
        "label",
        {
          className: cn(
            "text-sm font-medium bg-background px-1 text-neutral-600 dark:text-supreme-blue-300 mb-1 absolute -top-3 z-10 left-4",
            labelClassName,
            isError && "text-destructive"
          ),
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "text-destructive", children: " *" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
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
      hint && !isError && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-xs leading-4 text-neutral-500", children: hint }),
      isError && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-xs leading-4 text-destructive", children: error || hint })
    ] });
  }
);
Textarea.displayName = "Textarea";

// src/components/ui/toast.tsx
var React33 = __toESM(require("react"), 1);
var ToastPrimitives = __toESM(require("@radix-ui/react-toast"), 1);
var import_class_variance_authority8 = require("class-variance-authority");
var import_outline14 = require("@heroicons/react/24/outline");
var import_jsx_runtime49 = require("react/jsx-runtime");
var ToastProvider = ToastPrimitives.Provider;
var toastVariants = (0, import_class_variance_authority8.cva)(
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
var ToastContext = React33.createContext({
  variant: TOAST_DEFAULT_VARIANT,
  size: TOAST_DEFAULT_SIZE
});
var useToastContext = () => React33.useContext(ToastContext);
var ToastViewport = React33.forwardRef(({ className, size = TOAST_DEFAULT_SIZE, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
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
var Toast = React33.forwardRef(({ className, variant, size, ...props }, ref) => {
  const toastVariant = variant ?? TOAST_DEFAULT_VARIANT;
  const toastSize = size ?? TOAST_DEFAULT_SIZE;
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ToastContext.Provider, { value: { variant: toastVariant, size: toastSize }, children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
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
var ToastIcon = React33.forwardRef(({ className, variant, size, children, ...props }, ref) => {
  const context = useToastContext();
  const iconVariant = variant ?? context.variant;
  const iconSize = size ?? context.size;
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
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
      children: children ?? /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        import_outline14.InformationCircleIcon,
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
var ToastContent = React33.forwardRef(({ className, size, ...props }, ref) => {
  const context = useToastContext();
  const contentSize = size ?? context.size;
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
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
var ToastAction = React33.forwardRef(({ className, variant, ...props }, ref) => {
  const context = useToastContext();
  const actionVariant = variant ?? context.variant;
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
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
var ToastClose = React33.forwardRef(({ className, variant, size, ...props }, ref) => {
  const context = useToastContext();
  const closeVariant = variant ?? context.variant;
  const closeSize = size ?? context.size;
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        import_outline14.XMarkIcon,
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
var ToastTitle = React33.forwardRef(({ className, variant, ...props }, ref) => {
  const context = useToastContext();
  const titleVariant = variant ?? context.variant;
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
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
var ToastDescription = React33.forwardRef(({ className, variant, ...props }, ref) => {
  const context = useToastContext();
  const descriptionVariant = variant ?? context.variant;
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
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
var ToastActions = React33.forwardRef(({ className, size, ...props }, ref) => {
  const context = useToastContext();
  const actionsSize = size ?? context.size;
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
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
var React34 = __toESM(require("react"), 1);
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
  const [state, setState] = React34.useState(memoryState);
  React34.useEffect(() => {
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
var import_jsx_runtime50 = require("react/jsx-runtime");
function Toaster() {
  const { toasts } = useToast();
  const viewportSize = toasts.some((toast2) => toast2.size === "full-width") ? "full-width" : "floating";
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(ToastProvider, { children: [
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
      return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(Toast, { ...props, variant, size, children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ToastIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(ToastContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex flex-col gap-1.5", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ToastTitle, { children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ToastDescription, { children: description })
          ] }),
          action
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ToastViewport, { size: viewportSize })
  ] });
}

// src/components/ui/toggle.tsx
var React35 = __toESM(require("react"), 1);
var TogglePrimitive = __toESM(require("@radix-ui/react-toggle"), 1);
var import_class_variance_authority9 = require("class-variance-authority");
var import_jsx_runtime51 = require("react/jsx-runtime");
var toggleVariants = (0, import_class_variance_authority9.cva)(
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
var Toggle = React35.forwardRef(
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
    return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
var React36 = __toESM(require("react"), 1);
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_jsx_runtime52 = require("react/jsx-runtime");
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React36.forwardRef(({ className, sideOffset = 4, arrowDirection = "bottom", side, ...props }, ref) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: getArrowClasses() })
      ]
    }
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/components/ui/curie-ai-chat-prompt.tsx
var React37 = __toESM(require("react"), 1);
var import_outline15 = require("@heroicons/react/24/outline");
var import_outline16 = require("@heroicons/react/24/outline");
var import_jsx_runtime53 = require("react/jsx-runtime");
var CurieAIChatPrompt = React37.forwardRef(
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
    const [message, setMessage] = React37.useState("");
    const [selectedPersona, setSelectedPersona] = React37.useState(personas[0]);
    const [isPersonasOpen, setIsPersonasOpen] = React37.useState(false);
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
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
      "div",
      {
        ref,
        className: cn(
          "flex flex-col items-center p-4 gap-4 bg-slate-100 rounded-2xl",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex flex-col items-center space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
                AIIcon,
                {
                  className: "text-supreme-blue-700 w-7 h-7",
                  fill: "currentColor"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h1", { className: "text-2xl font-semibold text-supreme-blue-700", children: "Curie AI" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "text-3xl font-medium text-neutral-700", children: "What would you like to discover?" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "relative w-full max-w-4xl", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "relative bg-white rounded-2xl shadow-lg border border-neutral-200 p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex items-center justify-between pt-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
                  Button,
                  {
                    variant: "secondary",
                    onClick: onAdd,
                    disabled,
                    size: "icon",
                    children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_outline15.PlusIcon, { className: "w-6 h-6 text-black" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
                  Button,
                  {
                    onClick: () => setIsPersonasOpen(!isPersonasOpen),
                    disabled,
                    size: "default",
                    variant: "secondary",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(PersonaIcon, { size: 24 }),
                      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "text-sm font-medium text-black", children: selectedPersona }),
                      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_outline15.ChevronDownIcon, { className: "w-4 h-4 text-black" })
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
                Button,
                {
                  onClick: handleSend,
                  size: "icon",
                  disabled: disabled || !message.trim(),
                  children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_outline16.ArrowUpIcon, { className: "w-6 h-6 text-white" })
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
var React38 = __toESM(require("react"), 1);
var import_jsx_runtime54 = require("react/jsx-runtime");
var Footer = React38.forwardRef(
  ({
    className,
    copyright = `Supreme Optimization \xA9 ${(/* @__PURE__ */ new Date()).getFullYear()}. All rights Reserved`,
    links = [{ label: "Terms and Conditions", href: "#" }],
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
      "footer",
      {
        ref,
        className: cn(
          "flex w-full justify-center border-t border-slate-200 bg-slate-50",
          "py-3.5 text-xs font-normal leading-4 tracking-normal text-[#4e4c6c]",
          className
        ),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "flex w-full max-w-[1261px] flex-wrap items-center justify-center gap-9 px-4 text-center sm:flex-nowrap", children: [
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { className: "shrink-0", children: copyright }),
          links.map(
            ({ label, href, onClick }) => href ? /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
              "a",
              {
                href,
                onClick,
                className: "shrink-0 text-[#4e4c6c] hover:text-supreme-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-500 focus-visible:ring-offset-2",
                children: label
              },
              label
            ) : /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { className: "shrink-0", children: label }, label)
          )
        ] })
      }
    );
  }
);
Footer.displayName = "Footer";

// src/components/ui/dropdown.tsx
var React39 = __toESM(require("react"), 1);
var import_outline17 = require("@heroicons/react/24/outline");
var import_jsx_runtime55 = require("react/jsx-runtime");
var renderOptionIcon = (option, className) => {
  if (option.icon) {
    if (React39.isValidElement(option.icon)) {
      return React39.cloneElement(option.icon, {
        className: cn("h-4 w-4", className, option.icon.props?.className)
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: cn("h-4 w-4", className), children: option.icon });
  }
  if (option.iconSrc) {
    return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
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
var Dropdown = React39.forwardRef(
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
    emptyState = /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("p", { className: "px-2 py-3 text-center text-sm text-neutral-500", children: "No results found" }),
    footerOption,
    renderOptionMeta,
    maxVisibleOptions = 8,
    closeOnSelect = true,
    disabled = false,
    ...props
  }, ref) => {
    const [open, setOpen] = React39.useState(false);
    const [internalValue, setInternalValue] = React39.useState(
      defaultValue
    );
    const [internalSearch, setInternalSearch] = React39.useState("");
    const currentValue = value ?? internalValue;
    const currentSearch = searchValue !== void 0 ? searchValue : internalSearch;
    const selectedOption = React39.useMemo(
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
    const filteredOptions = React39.useMemo(() => {
      if (!searchable || !currentSearch.trim()) {
        return options;
      }
      const query = currentSearch.trim().toLowerCase();
      return options.filter(
        (option) => option.label.toLowerCase().includes(query)
      );
    }, [options, currentSearch, searchable]);
    const visibleOptions = React39.useMemo(() => {
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
      return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(import_jsx_runtime55.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("span", { className: "flex min-w-0 flex-1 items-center gap-2", children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "flex h-4 w-4 items-center justify-center", children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "truncate text-sm font-medium", children: option.label }),
          renderOptionMeta && /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "ml-auto truncate text-xs text-neutral-500", children: renderOptionMeta(option) })
        ] }),
        isSelected && /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_outline17.CheckIcon, { className: "h-4 w-4 shrink-0 text-neutral-900" })
      ] });
    };
    return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
      Popover,
      {
        open,
        onOpenChange: (nextOpen) => {
          if (!disabled) {
            setOpen(nextOpen);
          }
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
            "button",
            {
              ref,
              type: "button",
              className: cn(
                "flex w-[267px] items-center justify-between gap-2 rounded-md border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-700 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-500 focus-visible:ring-offset-2",
                disabled && "cursor-not-allowed bg-neutral-100 text-neutral-400",
                className
              ),
              "aria-haspopup": "listbox",
              "aria-expanded": open,
              disabled,
              ...props,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "flex min-w-0 flex-1 items-center gap-2", children: selectedOption ? /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(import_jsx_runtime55.Fragment, { children: [
                  renderOptionIcon(selectedOption, "h-4 w-4 shrink-0"),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "truncate font-medium text-neutral-900", children: selectedOption.label })
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "truncate text-neutral-500", children: triggerPlaceholder }) }),
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_outline17.ChevronUpDownIcon, { className: "h-5 w-5 text-neutral-500" })
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
            PopoverContent,
            {
              className: cn(
                "w-[267px] overflow-hidden rounded-md border border-neutral-200 bg-white p-0 shadow-lg",
                !searchable && "pt-2"
              ),
              align: "start",
              children: [
                searchable && /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "border-b border-neutral-200 p-2.5", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
                  Input,
                  {
                    placeholder: placeholder ?? searchPlaceholder,
                    value: currentSearch,
                    onChange: handleSearchChange,
                    leftIcon: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_outline17.MagnifyingGlassIcon, {}),
                    className: "py-0 text-sm",
                    "aria-label": searchPlaceholder,
                    autoFocus: true
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
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
                        return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
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
                      hasMore && /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "px-1 text-xs text-neutral-500", children: [
                        "Showing ",
                        visibleOptions.length,
                        " of ",
                        filteredOptions.length
                      ] })
                    ]
                  }
                ),
                footerOption && /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "border-t border-neutral-300 px-2.5 py-2", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
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
                    children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(import_jsx_runtime55.Fragment, { children: [
                      renderOptionIcon(footerOption, "h-4 w-4 shrink-0"),
                      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "truncate text-sm font-medium", children: footerOption.label })
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

// src/hooks/use-mobile.tsx
var React40 = __toESM(require("react"), 1);
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React40.useState(void 0);
  React40.useEffect(() => {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AIIcon,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AnalyticsIcon,
  AnnouncementCard,
  AppIcon,
  AudiencesIcon,
  AuthForm,
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
});
