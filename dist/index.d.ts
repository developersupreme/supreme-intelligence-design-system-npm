import { ToastProps, ToastActionElement } from './components.js';
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, AnnouncementCard, Avatar, AvatarGroup, Badge, BadgeProps, Banner, BannerProps, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, ButtonProps, CardWithProgress, Checkbox, CommonCard, ContentBox, ContentBoxContent, ContentBoxDescription, ContentBoxFooter, ContentBoxHeader, ContentBoxTitle, ContentTypeCard, CurieAIChatPrompt, CurieAIChatPromptProps, Dropdown, DropdownOption, DropdownProps, Footer, FooterProps, HighlightCTACard, HighlightCard, HowItWorksCard, IconCard, InfoCard, Input, InputProps, Logo, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, MessageAngle, MessageCard, PageLevel, PageLevelItem, PageLevelList, PageLevelProps, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Persona, PersonaProfile, PersonaProfileProps, PersonaProps, Popover, PopoverContent, PopoverTrigger, Progress, Range, RangeProps, RangeSlider, Score, ScoreProps, SingleIconCard, Slider, TabGroup, Table, TableBody, TableCaption, TableCell, TableCellBenchmark, TableCellBenchmarkProps, TableCellGeneric, TableCellGenericProps, TableFooter, TableHead, TableHeader, TableHeaderCell, TableHeaderCellProps, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, TextareaProps, Toast, ToastAction, ToastActions, ToastClose, ToastContent, ToastDescription, ToastIcon, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, bannerVariants, buttonVariants, pageLevelVariants, personaProfileVariants, personaVariants, tabsContentVariants, tabsListVariants, tabsTriggerVariants, toggleVariants } from './components.js';
import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
export { a as Sidebar, b as SidebarItem, S as SidebarProps, c as SidebarSection } from './sidebar-Cx6KMRp2.js';
export { A as AIIcon, a as AnalyticsIcon, b as AppIcon, c as AudiencesIcon, B as BrandGuidelinesIcon, D as DataSourcesIcon, d as DigitalAssetManagementIcon, G as GoogleIcon, H as HomeIcon, K as KnowledgeBaseIcon, L as LinkedInIcon, P as PaletteIcon, e as PersonaIcon, S as SidebarIcon, V as VectorIcon } from './VectorIcon-BG1C-eLa.js';
import { ClassValue } from 'clsx';
import '@radix-ui/react-accordion';
import '@radix-ui/react-avatar';
import 'react/jsx-runtime';
import '@radix-ui/react-checkbox';
import '@radix-ui/react-context';
import '@radix-ui/react-menubar';
import '@radix-ui/react-popover';
import '@radix-ui/react-progress';
import '@radix-ui/react-slider';
import '@radix-ui/react-tabs';
import '@radix-ui/react-toast';
import '@radix-ui/react-toggle';
import '@radix-ui/react-tooltip';

interface CreditsProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    label?: string;
    showLabel?: boolean;
}
declare const Credits: React.ForwardRefExoticComponent<CreditsProps & React.RefAttributes<HTMLDivElement>>;

interface QuoteProps extends React.HTMLAttributes<HTMLDivElement> {
    quote: string;
    authorName: string;
    authorTitle: string;
    avatar: React.ReactNode;
}
declare const Quote: React.ForwardRefExoticComponent<QuoteProps & React.RefAttributes<HTMLDivElement>>;

declare const RadioGroup: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare const dividerVariants: (props?: {
    variant?: "default" | "high-contrast" | "low-contrast";
    orientation?: "horizontal" | "vertical";
} & class_variance_authority_types.ClassProp) => string;
interface DividerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "orientation">, VariantProps<typeof dividerVariants> {
    /**
     * The variant style of the divider.
     * @default "default"
     */
    variant?: "default" | "high-contrast" | "low-contrast";
    /**
     * The orientation of the divider.
     * @default "horizontal"
     */
    orientation?: "horizontal" | "vertical";
    /**
     * Whether the divider is decorative (purely visual, not semantic).
     * When `true`, the divider will have `aria-hidden="true"`.
     * @default false
     */
    decorative?: boolean;
}
declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;

interface CreditOptionProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string;
    credits: number;
    label: string;
    selected?: boolean;
    disabled?: boolean;
}
declare const CreditOption: React.ForwardRefExoticComponent<CreditOptionProps & React.RefAttributes<HTMLDivElement>>;
interface CreditSelectorProps {
    options: Array<{
        id: string;
        credits: number;
        label: string;
        disabled?: boolean;
    }>;
    value?: string;
    defaultValue?: string;
    onValueChange?: (val: string) => void;
    className?: string;
}
declare const CreditSelector: React.FC<CreditSelectorProps>;

type AuthFormElement = HTMLDivElement;
interface AuthFormProps extends React.HTMLAttributes<AuthFormElement> {
    withCard?: boolean;
}
declare const AuthFormHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const AuthFormTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const AuthFormSubtitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const AuthFormDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const AuthFormBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const AuthFormActions: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const AuthFormPrimary: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface AuthFormDividerProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
}
declare const AuthFormDivider: React.ForwardRefExoticComponent<AuthFormDividerProps & React.RefAttributes<HTMLDivElement>>;
declare const AuthFormFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
type AuthFormComponent = React.ForwardRefExoticComponent<AuthFormProps & React.RefAttributes<AuthFormElement>> & {
    Header: typeof AuthFormHeader;
    Title: typeof AuthFormTitle;
    Subtitle: typeof AuthFormSubtitle;
    Description: typeof AuthFormDescription;
    Body: typeof AuthFormBody;
    Primary: typeof AuthFormPrimary;
    Actions: typeof AuthFormActions;
    Divider: typeof AuthFormDivider;
    Footer: typeof AuthFormFooter;
};
declare const AuthFormComponent: AuthFormComponent;

interface PageHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    heading: string;
    description?: string;
    showDescription?: boolean;
}
declare const PageHeading: React.ForwardRefExoticComponent<PageHeadingProps & React.RefAttributes<HTMLDivElement>>;

interface DragDropProps extends React.HTMLAttributes<HTMLDivElement> {
    onFiles?: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    label?: string;
    sublabel?: string;
    iconSize?: number | string;
    iconColor?: string;
}
declare const DragDrop: React.ForwardRefExoticComponent<DragDropProps & React.RefAttributes<HTMLDivElement>>;

type StepperStepState = "active" | "default" | "done";
type StepperStep = {
    title: React.ReactNode;
    step: StepperStepState;
    href?: string;
    onClick?: () => void;
};
interface StepperProps extends Omit<React.ComponentPropsWithoutRef<"nav">, "children"> {
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
declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLElement>>;

declare function cn(...inputs: ClassValue[]): string;

declare function useIsMobile(): boolean;

type Toast = ToastProps & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
};
declare const actionTypes: {
    readonly ADD_TOAST: "ADD_TOAST";
    readonly UPDATE_TOAST: "UPDATE_TOAST";
    readonly DISMISS_TOAST: "DISMISS_TOAST";
    readonly REMOVE_TOAST: "REMOVE_TOAST";
};
type ActionType = typeof actionTypes;
type Action = {
    type: ActionType["ADD_TOAST"];
    toast: Toast;
} | {
    type: ActionType["UPDATE_TOAST"];
    toast: Partial<Toast>;
} | {
    type: ActionType["DISMISS_TOAST"];
    toastId?: Toast["id"];
} | {
    type: ActionType["REMOVE_TOAST"];
    toastId?: Toast["id"];
};
interface State {
    toasts: Toast[];
}
declare const reducer: (state: State, action: Action) => State;
declare function toast({ ...props }: Toast): {
    id: string;
    dismiss: () => void;
    update: (props: Toast) => void;
};
declare function useToast(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: Toast[];
};

export { AuthFormComponent as AuthForm, AuthFormActions, AuthFormBody, AuthFormDescription, AuthFormDivider, type AuthFormDividerProps, AuthFormFooter, AuthFormHeader, AuthFormPrimary, type AuthFormProps, AuthFormSubtitle, AuthFormTitle, CreditOption, type CreditOptionProps, CreditSelector, type CreditSelectorProps, Credits, type CreditsProps, Divider, type DividerProps, DragDrop, type DragDropProps, PageHeading, type PageHeadingProps, Quote, type QuoteProps, RadioGroup, RadioGroupItem, Stepper, type StepperProps, type StepperStep, type StepperStepState, ToastActionElement, ToastProps, cn, dividerVariants, reducer, toast, useIsMobile, useToast };
