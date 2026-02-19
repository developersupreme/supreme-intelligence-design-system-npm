import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as _radix_ui_react_context from '@radix-ui/react-context';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ProgressPrimitive from '@radix-ui/react-progress';
export { a as Sidebar, b as SidebarItem, S as SidebarProps, c as SidebarSection } from './sidebar-Cx6KMRp2.cjs';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

declare const Accordion: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const avatarVariants: {
    sm: string;
    md: string;
    lg: string;
};
interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * The content of the avatar.
     */
    children?: React.ReactNode;
    /**
     * The size of the avatar.
     * @default "md"
     */
    size?: keyof typeof avatarVariants;
    /**
     * The type of avatar content.
     */
    type?: "photo" | "initials";
    /**
     * Fallback content when image is not available.
     */
    fallback?: React.ReactNode;
    /**
     * Image source URL.
     */
    src?: string;
    /**
     * Alt text for the image.
     */
    alt?: string;
}
interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: keyof typeof avatarVariants;
    children: React.ReactNode;
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarGroup: React.ForwardRefExoticComponent<AvatarGroupProps & React.RefAttributes<HTMLDivElement>>;

declare const badgeVariants: (props?: {
    variant?: "default" | "foundation" | "slate" | "zinc" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "pink";
} & class_variance_authority_types.ClassProp) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    /**
     * The variant style of the badge.
     */
    variant?: "foundation" | "default" | "slate" | "zinc" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "pink";
    showDot?: boolean;
    showRemove?: boolean;
    onRemove?: () => void;
    dismissible?: boolean;
    onDismiss?: () => void;
    dot?: boolean;
    size?: "sm" | "md" | "lg";
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;

declare const bannerVariants: (props?: {
    variant?: "default" | "primary" | "secondary" | "dark";
    size?: "default" | "sm" | "lg" | "xl";
} & class_variance_authority_types.ClassProp) => string;
interface BannerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof bannerVariants> {
    /**
     * The variant style of the banner.
     * @default "default"
     */
    variant?: "default" | "primary" | "secondary" | "dark";
    /**
     * The size of the banner.
     * @default "default"
     */
    size?: "default" | "sm" | "lg" | "xl";
    title: string;
    ctaText?: string;
    onCtaClick?: () => void;
    showCta?: boolean;
}
declare const Banner: React.ForwardRefExoticComponent<BannerProps & React.RefAttributes<HTMLDivElement>>;

declare const Breadcrumb: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    separator?: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;
declare const BreadcrumbList: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
declare const BreadcrumbLink: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    asChild?: boolean;
} & React.RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbPage: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React.ComponentProps<"li">): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const BreadcrumbEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const buttonVariants: (props?: {
    variant?: "link" | "primary" | "secondary" | "secondary-color" | "secondary-blue" | "ghost" | "outline";
    size?: "default" | "md" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg";
} & class_variance_authority_types.ClassProp) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    /**
     * The variant style of the button.
     * @default "primary"
     */
    variant?: "primary" | "secondary" | "secondary-color" | "secondary-blue" | "link" | "ghost" | "outline";
    /**
     * The size of the button.
     * @default "default"
     */
    size?: "default" | "md" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg";
    asChild?: boolean;
    showIcons?: "after" | "before" | "both" | "center" | "none";
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const AnnouncementCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    titleClassName?: string;
    author?: string;
    authorClassName?: string;
    date?: string;
    dateClassName?: string;
    content: string;
    contentClassName?: string;
    badgeText?: string;
    badgeClassName?: string;
} & React.RefAttributes<HTMLDivElement>>;
declare const InfoCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    titleClassName?: string;
    subtitle?: string;
    subtitleClassName?: string;
    description?: string;
    descriptionClassName?: string;
    showIcon?: boolean;
    icon?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
declare const IconCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    titleClassName?: string;
    value?: string | number;
    showLeftIcon?: boolean;
    showRightIcon?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
declare const MessageAngle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    titleClassName?: string;
    description?: string;
    descriptionClassName?: string;
} & React.RefAttributes<HTMLDivElement>>;
declare const MessageCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    headerTitle: string;
    headerTitleClassName?: string;
    mainContent: string;
    mainTitleClassName?: string;
    nestedTitle: string;
    nestedTitleClassName?: string;
    nestedContent: string;
    nestedContentClassName?: string;
    showIcon?: boolean;
    icon?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
declare const HighlightCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    value: string | number;
    valueClassName?: string;
    title: string;
    titleClassName?: string;
    subtitle?: string;
    subtitleClassName?: string;
    showIcon?: boolean;
    icon?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
declare const HighlightCTACard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode;
    title?: string;
    titleClassName?: string;
    value?: string | number;
    valueClassName?: string;
    description: string;
    descriptionClassName?: string;
    ctaText?: string;
    onCtaClick?: () => void;
    showIcon?: boolean;
    showDescription?: boolean;
    showAction?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const HowItWorksCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    stepNumber?: number;
    title: string;
    titleClassName?: string;
    description: string;
    descriptionClassName?: string;
    type?: "numbers" | "icons";
    icon?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
declare const SingleIconCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    description?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    icon?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
declare const ContentTypeCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    titleClassName?: string;
    description: string;
    descriptionClassName?: string;
    icon?: React.ReactNode;
    variant?: "default" | "selected" | "hover" | "ghost";
} & React.RefAttributes<HTMLDivElement>>;
declare const CardWithProgress: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    description: string;
    titleClassName?: string;
    descriptionClassName?: string;
    progressItems: Array<{
        label: string;
        value: number;
        badge?: string;
    }>;
} & React.RefAttributes<HTMLDivElement>>;
declare const CommonCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    description: string;
    icon?: React.ReactNode;
    footerText?: string;
    footerAction?: React.ReactNode;
    headerClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    footerClassName?: string;
    footerTextClassName?: string;
    badge?: string;
    disabled?: boolean;
} & React.RefAttributes<HTMLDivElement>>;

declare const Checkbox: React.ForwardRefExoticComponent<Omit<Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref">, "checked" | "onCheckedChange"> & {
    externalState?: "checked" | "unchecked" | "indeterminate";
} & React.RefAttributes<HTMLButtonElement>>;

declare const ContentBox: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const ContentBoxHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const ContentBoxTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const ContentBoxDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const ContentBoxContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const ContentBoxFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    required?: boolean;
    hint?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    error?: string;
    state?: "default" | "active" | "error" | "disabled";
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "curie" | "supreme";
    theme?: "original" | "black" | "white";
    size?: "sm" | "md" | "lg";
    showText?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<LogoProps & React.RefAttributes<HTMLDivElement>>;

declare const MenubarMenu: {
    (props: MenubarPrimitive.MenubarMenuProps & {
        __scopeMenubar?: _radix_ui_react_context.Scope;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const MenubarGroup: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const MenubarPortal: React.FC<MenubarPrimitive.MenubarPortalProps>;
declare const MenubarSub: React.FC<MenubarPrimitive.MenubarSubProps>;
declare const MenubarRadioGroup: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Menubar: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarTrigger: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const MenubarSubTrigger: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const MenubarSubContent: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarContent: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const MenubarCheckboxItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarRadioItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarLabel: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const MenubarSeparator: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayname: string;
};

declare const pageLevelVariants: (props?: {
    variant?: "default" | "primary" | "secondary" | "brand";
    size?: "default" | "sm" | "lg" | "xl";
} & class_variance_authority_types.ClassProp) => string;
interface PageLevelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof pageLevelVariants> {
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * The content of the page level.
     */
    children?: React.ReactNode;
    /**
     * The variant style of the page level.
     * @default "default"
     */
    variant?: "default" | "primary" | "secondary" | "brand";
    /**
     * The size of the page level.
     * @default "default"
     */
    size?: "sm" | "default" | "lg" | "xl";
    level?: number | string;
    showArrow?: boolean;
    arrowPosition?: "before" | "after";
    separator?: React.ReactNode;
}
declare const PageLevel: React.ForwardRefExoticComponent<PageLevelProps & React.RefAttributes<HTMLDivElement>>;
declare const PageLevelList: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * The content of the page level list.
     */
    children?: React.ReactNode;
    separator?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
declare const PageLevelItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & {
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * The content of the page level item.
     */
    children?: React.ReactNode;
    active?: boolean;
} & React.RefAttributes<HTMLSpanElement>>;

declare const Pagination: {
    ({ className, ...props }: React.ComponentProps<"nav">): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const PaginationItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> & React.ComponentProps<"a">;
declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const personaVariants: (props?: {
    variant?: "selected" | "default" | "outline";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_types.ClassProp) => string;
declare const personaProfileVariants: (props?: {
    variant?: "selected" | "default" | "ghost" | "hover";
} & class_variance_authority_types.ClassProp) => string;
interface PersonaProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange">, VariantProps<typeof personaVariants> {
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * The content of the persona.
     */
    children?: React.ReactNode;
    /**
     * The variant style of the persona.
     * @default "default"
     */
    variant?: "default" | "selected" | "outline";
    /**
     * The size of the persona.
     * @default "default"
     */
    size?: "default" | "sm" | "lg";
    /**
     * Selected personas (multi-select).
     */
    personas?: string[];
    /**
     * Default selected personas (uncontrolled).
     */
    defaultPersonas?: string[];
    /**
     * Available options. If omitted, falls back to `personas`.
     */
    options?: string[];
    onPersonasChange?: (personas: string[]) => void;
    closeOnSelect?: boolean;
    placeholder?: string;
    showLeftIcon?: boolean;
    showRightIcon?: boolean;
}
declare const Persona: React.ForwardRefExoticComponent<PersonaProps & React.RefAttributes<HTMLButtonElement>>;
interface PersonaProfileProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof personaProfileVariants> {
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * The content of the persona profile.
     */
    children?: React.ReactNode;
    /**
     * The variant style of the persona profile.
     * @default "default"
     */
    variant?: "default" | "hover" | "selected" | "ghost";
    avatar?: React.ReactNode;
    avatarFallback?: string;
    name?: string;
    title?: string;
    organization?: string;
    tags?: string[];
}
declare const PersonaProfile: React.ForwardRefExoticComponent<PersonaProfileProps & React.RefAttributes<HTMLDivElement>>;

declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Progress: React.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    indicatorClassName?: string;
    showLabel?: boolean;
    labelPosition?: "bottom" | "right";
    title?: string;
    badge?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;

declare const Slider: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const RangeSlider: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
    defaultValue?: [number, number];
    value?: [number, number];
    onValueChange?: (value: [number, number]) => void;
} & React.RefAttributes<HTMLSpanElement>>;

declare const Table: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableElement> & React.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & {
    onClick?: () => void;
    clickable?: boolean;
} & React.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React.ForwardRefExoticComponent<React.ThHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React.ForwardRefExoticComponent<React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableCaptionElement> & React.RefAttributes<HTMLTableCaptionElement>>;
interface TableHeaderCellProps {
    showCheckbox?: boolean;
    rightIcon?: boolean | React.ReactNode;
    showText?: string;
    state?: "Default";
    children?: React.ReactNode;
    selectedRows?: Set<number>;
    setSelectedRows?: (selectedRows: Set<number>) => void;
    tableData?: any[];
    handleHeaderCheckbox?: (checked: boolean) => void;
}
declare const TableHeaderCell: React.ForwardRefExoticComponent<TableHeaderCellProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface TableCellGenericProps {
    showCheckbox?: boolean;
    style?: "Lead Text" | "Text" | "Badge" | "CTA" | "Score" | "Range";
    description?: boolean;
    state?: "Default";
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
    selectedRows?: Set<number>;
    handleRowCheckbox?: (rowId: number, checked: boolean) => void;
    rowId?: number;
    score?: number;
    range?: string;
    lvl?: "1" | "2";
}
declare const TableCellGeneric: React.ForwardRefExoticComponent<TableCellGenericProps & React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
interface TableCellBenchmarkProps {
    leftIcon?: React.ReactNode;
    showCheckbox?: boolean;
    descriptionText?: string;
    showScore?: boolean;
    rightIcon?: React.ReactNode;
    style?: "Lead" | "Score";
    state?: "Default" | "Hover";
    children?: React.ReactNode;
    score?: number;
    scoreColor?: string;
    selectedRows?: Set<number>;
    handleRowCheckbox?: (rowId: number, checked: boolean) => void;
    rowId?: number;
}
declare const TableCellBenchmark: React.ForwardRefExoticComponent<TableCellBenchmarkProps & React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
interface RangeProps {
    range?: string;
    lvl?: "1" | "2";
}
declare const Range: React.ForwardRefExoticComponent<RangeProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface ScoreProps {
    score?: number;
}
declare const Score: React.ForwardRefExoticComponent<ScoreProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const tabsListVariants: (props?: {
    variant?: "default" | "filled" | "supreme-blue" | "card" | "outlined" | "selector";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_types.ClassProp) => string;
declare const tabsTriggerVariants: (props?: {
    variant?: "default" | "filled" | "supreme-blue" | "card" | "outlined" | "selector";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_types.ClassProp) => string;
declare const tabsContentVariants: (props?: {
    variant?: "default" | "filled" | "supreme-blue" | "card" | "outlined" | "selector";
} & class_variance_authority_types.ClassProp) => string;
declare const Tabs: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "filled" | "supreme-blue" | "card" | "outlined" | "selector";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "filled" | "supreme-blue" | "card" | "outlined" | "selector";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "filled" | "supreme-blue" | "card" | "outlined" | "selector";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLDivElement>>;
interface TabGroupProps {
    tabs: Array<{
        value: string;
        label: string;
        content: React.ReactNode;
        disabled?: boolean;
    }>;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    variant?: VariantProps<typeof tabsListVariants>["variant"];
    size?: VariantProps<typeof tabsListVariants>["size"];
    className?: string;
    orientation?: "horizontal" | "vertical";
}
declare const TabGroup: React.ForwardRefExoticComponent<TabGroupProps & React.RefAttributes<HTMLDivElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    required?: boolean;
    hint?: string;
    error?: string;
    labelClassName?: string;
    state?: "default" | "active" | "error";
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

declare const ToastProvider: React.FC<ToastPrimitives.ToastProviderProps>;
declare const toastVariants: (props?: {
    variant?: "default" | "primary" | "error" | "warning" | "success";
    size?: "full-width" | "floating";
} & class_variance_authority_types.ClassProp) => string;
type ToastSize = NonNullable<VariantProps<typeof toastVariants>["size"]>;
declare const ToastViewport: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React.RefAttributes<HTMLOListElement>, "ref"> & {
    size?: ToastSize;
} & React.RefAttributes<HTMLOListElement>>;
declare const Toast: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "primary" | "error" | "warning" | "success";
    size?: "full-width" | "floating";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLLIElement>>;
declare const ToastIcon: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: {
    variant?: "default" | "primary" | "error" | "warning" | "success";
    size?: "full-width" | "floating";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLDivElement>>;
declare const ToastContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    size?: ToastSize;
} & React.RefAttributes<HTMLDivElement>>;
declare const ToastAction: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "primary" | "error" | "warning" | "success";
    size?: "full-width" | "floating";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "primary" | "error" | "warning" | "success";
    size?: "full-width" | "floating";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & React.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "primary" | "error" | "warning" | "success";
    size?: "full-width" | "floating";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & React.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "primary" | "error" | "warning" | "success";
    size?: "full-width" | "floating";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLDivElement>>;
declare const ToastActions: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: {
    variant?: "default" | "primary" | "error" | "warning" | "success";
    size?: "full-width" | "floating";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLDivElement>>;
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;

declare function Toaster(): react_jsx_runtime.JSX.Element;

declare const toggleVariants: (props?: {
    variant?: "disabled" | "checked" | "default" | "disabledChecked";
    size?: "sm" | "md" | "lg";
} & class_variance_authority_types.ClassProp) => string;
declare const Toggle: React.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "disabled" | "checked" | "default" | "disabledChecked";
    size?: "sm" | "md" | "lg";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLButtonElement>>;

declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * The content of the tooltip.
     */
    children?: React.ReactNode;
    /**
     * The offset distance from the trigger element.
     * @default 4
     */
    sideOffset?: number;
    /**
     * The side of the trigger element to render against.
     */
    side?: 'top' | 'bottom' | 'left' | 'right';
    /**
     * The direction of the arrow indicator.
     * @default 'bottom'
     */
    arrowDirection?: 'top' | 'bottom' | 'left' | 'right';
}
declare const TooltipContent: React.ForwardRefExoticComponent<TooltipContentProps & React.RefAttributes<HTMLDivElement>>;

interface CurieAIChatPromptProps extends React.HTMLAttributes<HTMLDivElement> {
    onSend?: (message: string) => void;
    onAdd?: () => void;
    onPersonasChange?: (persona: string) => void;
    personas?: string[];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}
declare const CurieAIChatPrompt: React.ForwardRefExoticComponent<CurieAIChatPromptProps & React.RefAttributes<HTMLDivElement>>;

interface FooterLink {
    label: string;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    copyright?: string;
    links?: FooterLink[];
}
declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;

interface DropdownOption {
    id: string;
    label: string;
    icon?: React.ReactNode;
    iconSrc?: string;
    meta?: string;
}
interface DropdownProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "children"> {
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * Left icon to display on the trigger button.
     */
    leftIcon?: React.ReactNode;
    options: DropdownOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string, option: DropdownOption) => void;
    placeholder?: string;
    triggerPlaceholder?: string;
    searchPlaceholder?: string;
    searchable?: boolean;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    emptyState?: React.ReactNode;
    footerOption?: DropdownOption;
    renderOptionMeta?: (option: DropdownOption) => React.ReactNode;
    maxVisibleOptions?: number;
    closeOnSelect?: boolean;
}
declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLButtonElement>>;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, AnnouncementCard, Avatar, AvatarGroup, Badge, type BadgeProps, Banner, type BannerProps, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, type ButtonProps, CardWithProgress, Checkbox, CommonCard, ContentBox, ContentBoxContent, ContentBoxDescription, ContentBoxFooter, ContentBoxHeader, ContentBoxTitle, ContentTypeCard, CurieAIChatPrompt, type CurieAIChatPromptProps, Dropdown, type DropdownOption, type DropdownProps, Footer, type FooterProps, HighlightCTACard, HighlightCard, HowItWorksCard, IconCard, InfoCard, Input, type InputProps, Logo, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, MessageAngle, MessageCard, PageLevel, PageLevelItem, PageLevelList, type PageLevelProps, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Persona, PersonaProfile, type PersonaProfileProps, type PersonaProps, Popover, PopoverContent, PopoverTrigger, Progress, Range, type RangeProps, RangeSlider, Score, type ScoreProps, SingleIconCard, Slider, TabGroup, Table, TableBody, TableCaption, TableCell, TableCellBenchmark, type TableCellBenchmarkProps, TableCellGeneric, type TableCellGenericProps, TableFooter, TableHead, TableHeader, TableHeaderCell, type TableHeaderCellProps, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, type TextareaProps, Toast, ToastAction, type ToastActionElement, ToastActions, ToastClose, ToastContent, ToastDescription, ToastIcon, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, bannerVariants, buttonVariants, pageLevelVariants, personaProfileVariants, personaVariants, tabsContentVariants, tabsListVariants, tabsTriggerVariants, toggleVariants };
