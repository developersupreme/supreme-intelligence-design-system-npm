import * as React from "react"
import { ChevronDown, Building2, CheckCircle } from "lucide-react"
import { CheckIcon } from "@heroicons/react/24/outline"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const UserIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    width="21" 
    height="20" 
    viewBox="0 0 21 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path 
      d="M4.48467 16.6946C5.03216 15.4047 6.31043 14.5 7.8 14.5H13.2C14.6896 14.5 15.9678 15.4047 16.5153 16.6946M14.1 7.75C14.1 9.73822 12.4882 11.35 10.5 11.35C8.51177 11.35 6.9 9.73822 6.9 7.75C6.9 5.76177 8.51177 4.15 10.5 4.15C12.4882 4.15 14.1 5.76177 14.1 7.75ZM19.5 10C19.5 14.9706 15.4706 19 10.5 19C5.52944 19 1.5 14.9706 1.5 10C1.5 5.02944 5.52944 1 10.5 1C15.4706 1 19.5 5.02944 19.5 10Z" 
      stroke="currentColor" 
      strokeWidth="1.43406" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
)

const personaVariants = cva(
  "inline-flex w-full items-center justify-between gap-3 rounded-[8px] border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[#4136D4]/5 border-[#D4D4D4] text-[#272080] hover:border-supreme-blue-500",
        selected:
          "bg-[#EDEBFD] border-[#272080] text-[#272080]",
        outline:
          "bg-white border-[#D4D4D4] text-[#737373] hover:text-[#272080] hover:border-[#272080]",
      },
      size: {
        default: "w-[364px] h-10 px-6 py-2",
        sm: "w-[364px] h-8 px-4 py-1.5 text-sm",
        lg: "w-[364px] h-12 px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const personaProfileVariants = cva(
  "flex gap-2.5 items-start rounded-lg transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-white border border-neutral-300 p-3.5 w-[279px]",
        hover: "bg-white border border-supreme-blue-300 p-3.5 w-[279px]",
        selected: "bg-supreme-blue-50 border border-supreme-blue-300 p-3.5 w-[279px]",
        ghost: "bg-transparent w-[279px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface PersonaProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange">,
    VariantProps<typeof personaVariants> {
  /**
   * Additional CSS class names.
   */
  className?: string
  /**
   * The content of the persona.
   */
  children?: React.ReactNode
  /**
   * The variant style of the persona.
   * @default "default"
   */
  variant?: "default" | "selected" | "outline"
  /**
   * The size of the persona.
   * @default "default"
   */
  size?: "default" | "sm" | "lg"
  /**
   * Selected personas (multi-select).
   */
  personas?: string[]
  /**
   * Default selected personas (uncontrolled).
   */
  defaultPersonas?: string[]
  /**
   * Available options. If omitted, falls back to `personas`.
   */
  options?: string[]
  onPersonasChange?: (personas: string[]) => void
  closeOnSelect?: boolean
  placeholder?: string
  showLeftIcon?: boolean
  showRightIcon?: boolean
}

const Persona = React.forwardRef<HTMLButtonElement, PersonaProps>(
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
    const [open, setOpen] = React.useState(false)

    const isControlled =
      personasProp !== undefined && typeof onPersonasChange === "function"

    const [internalPersonas, setInternalPersonas] = React.useState<string[]>(
      () => (personasProp !== undefined && !isControlled ? personasProp : defaultPersonas)
    )

    React.useEffect(() => {
      // If caller passes `personas` without `onPersonasChange`, treat it as "default selected"
      // and only sync when the actual content changes (not just array identity).
      if (!isControlled && personasProp !== undefined) {
        setInternalPersonas(personasProp)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isControlled, personasProp?.join("\u0000")])

    const personas = isControlled ? personasProp! : internalPersonas
    const options = React.useMemo(() => {
      const base = optionsProp ?? personasProp ?? defaultPersonas
      // de-dupe while preserving order
      return Array.from(new Set(base))
    }, [optionsProp, personasProp, defaultPersonas])

    const displayText = personas.length > 0 ? personas.join(" + ") : placeholder

    const togglePersona = (label: string) => {
      const isSelected = personas.includes(label)
      const next = isSelected ? personas.filter((p) => p !== label) : [...personas, label]

      if (!isControlled) {
        setInternalPersonas(next)
      }

      onPersonasChange?.(next)

      if (closeOnSelect) {
        setOpen(false)
      }
    }

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            ref={ref}
            type="button"
            className={cn(
              personaVariants({ variant, size, className }),
              "cursor-pointer hover:shadow-sm"
            )}
            aria-haspopup="listbox"
            aria-expanded={open}
            {...props}
          >
            <span className="flex min-w-0 flex-1 items-center gap-3">
              {showLeftIcon && (
                <UserIcon className="h-5 w-5 shrink-0 text-[#4136D4]" />
              )}
              <span
                className={cn(
                  "truncate text-sm font-medium",
                  personas.length > 0 ? "text-neutral-900" : "text-neutral-500"
                )}
              >
                {displayText}
              </span>
            </span>
            {showRightIcon && (
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-[#272080] transition-transform duration-200",
                  open ? "rotate-180" : "rotate-0"
                )}
              />
            )}
          </button>
        </PopoverTrigger>

        <PopoverContent
          className="w-[364px] overflow-hidden rounded-md border border-neutral-200 bg-white p-0 shadow-lg"
          align="start"
        >
          <div className={cn("flex max-h-72 flex-col gap-2 overflow-y-auto p-2", options.length === 0 && "p-0")}>
            {options.length === 0 ? (
              <p className="px-2 py-3 text-center text-sm text-neutral-500">
                No personas available
              </p>
            ) : (
              options.map((option) => {
                const isSelected = personas.includes(option)

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => togglePersona(option)}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-500 focus-visible:ring-offset-0",
                      isSelected ? "bg-supreme-blue-50 text-neutral-900" : "text-neutral-700 hover:bg-slate-50"
                    )}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span className="truncate text-sm font-medium">{option}</span>
                    {isSelected && <CheckIcon className="h-4 w-4 shrink-0 text-neutral-900" />}
                  </button>
                )
              })
            )}
          </div>
        </PopoverContent>
      </Popover>
    )
  }
)
Persona.displayName = "Persona"

export interface PersonaProfileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof personaProfileVariants> {
  /**
   * Additional CSS class names.
   */
  className?: string
  /**
   * The content of the persona profile.
   */
  children?: React.ReactNode
  /**
   * The variant style of the persona profile.
   * @default "default"
   */
  variant?: "default" | "hover" | "selected" | "ghost"
  avatar?: React.ReactNode
  avatarFallback?: string
  name?: string
  title?: string
  organization?: string
  tags?: string[]
}

const PersonaProfile = React.forwardRef<HTMLDivElement, PersonaProfileProps>(
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
    return (
      <div
        className={cn(personaProfileVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <div className="flex flex-1 gap-3 items-start">
          {avatar || (
            <div className="bg-[#4136D4] overflow-hidden rounded-full shrink-0 size-10 relative flex items-center justify-center">
              <p className="font-sans font-normal leading-7 text-lg text-white text-center tracking-normal whitespace-nowrap">
                {avatarFallback}
              </p>
            </div>
          )}
          <div className="flex flex-1 flex-col gap-1.5 items-start min-h-0 min-w-0">
            <p className="font-sans font-semibold leading-6 text-neutral-900 text-base w-full">
              {name}
            </p>
            <p className="font-sans font-normal leading-4 text-neutral-600 text-sm w-full">
              {title}
            </p>
            <div className="flex gap-[5px] items-center w-full">
              <div className="flex flex-1 gap-[5px] items-center min-h-0 min-w-0">
                <Building2 className="size-3.5 text-neutral-900" />
                <p className="font-sans font-normal leading-4 text-neutral-600 text-xs">
                  {organization}
                </p>
              </div>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1 items-start w-full">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="default" className="bg-gray-100 text-gray-600 text-xs px-1.5 py-0.5 rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={cn("relative shrink-0 size-6", variant === "selected" ? "opacity-100" : "opacity-0")}>
          {variant === "selected" && (
            <CheckCircle className="size-6 text-supreme-blue-700" />
          )}
        </div>
      </div>
    )
  }
)
PersonaProfile.displayName = "PersonaProfile"

export { Persona, PersonaProfile, personaVariants, personaProfileVariants }
