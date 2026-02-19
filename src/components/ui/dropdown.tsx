import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import {
  CheckIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";

export interface DropdownOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
  iconSrc?: string;
  meta?: string;
}

export interface DropdownProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "onChange" | "children"
  > {
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
  onChange?: (
    value: string,
    option: DropdownOption
  ) => void;
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

const renderOptionIcon = (
  option: DropdownOption,
  className?: string
) => {
  if (option.icon) {
    if (React.isValidElement(option.icon)) {
      return React.cloneElement(option.icon, {
        className: cn("h-4 w-4", className, (option.icon as any).props?.className),
      });
    }

    return (
      <span className={cn("h-4 w-4", className)}>{option.icon}</span>
    );
  }

  if (option.iconSrc) {
    return (
      <img
        src={option.iconSrc}
        alt=""
        className={cn("h-4 w-4 shrink-0", className)}
        aria-hidden="true"
      />
    );
  }

  return null;
};

const Dropdown = React.forwardRef<
  HTMLButtonElement,
  DropdownProps
>(
  (
    {
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
      emptyState = (
        <p className="px-2 py-3 text-center text-sm text-neutral-500">
          No results found
        </p>
      ),
      footerOption,
      renderOptionMeta,
      maxVisibleOptions = 8,
      closeOnSelect = true,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState<string | undefined>(
      defaultValue
    );
    const [internalSearch, setInternalSearch] = React.useState<string>("");

    const currentValue = value ?? internalValue;
    const currentSearch =
      searchValue !== undefined ? searchValue : internalSearch;

    const selectedOption = React.useMemo(
      () => options.find((option) => option.id === currentValue),
      [options, currentValue]
    );

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const next = event.target.value;
      if (!searchable) {
        return;
      }

      if (searchValue === undefined) {
        setInternalSearch(next);
      }
      onSearchChange?.(next);
    };

    const filteredOptions = React.useMemo(() => {
      if (!searchable || !currentSearch.trim()) {
        return options;
      }

      const query = currentSearch.trim().toLowerCase();

      return options.filter((option) =>
        option.label.toLowerCase().includes(query)
      );
    }, [options, currentSearch, searchable]);

    const visibleOptions = React.useMemo(() => {
      if (maxVisibleOptions <= 0) {
        return filteredOptions;
      }

      return filteredOptions.slice(0, maxVisibleOptions);
    }, [filteredOptions, maxVisibleOptions]);

    const hasMore =
      maxVisibleOptions > 0 && filteredOptions.length > visibleOptions.length;

    const handleOptionSelect = (option: DropdownOption) => {
      if (value === undefined) {
        setInternalValue(option.id);
      }
      if (searchable && searchValue === undefined) {
        setInternalSearch("");
      }
      onChange?.(option.id, option);
      if (closeOnSelect) {
        setOpen(false);
      }
    };

    const renderOptionContent = (option: DropdownOption, isSelected: boolean) => {
      const icon = renderOptionIcon(option);

      return (
        <>
          <span className="flex min-w-0 flex-1 items-center gap-2">
            {icon && (
              <span className="flex h-4 w-4 items-center justify-center">
                {icon}
              </span>
            )}
            <span className="truncate text-sm font-medium">
              {option.label}
            </span>
            {renderOptionMeta && (
              <span className="ml-auto truncate text-xs text-neutral-500">
                {renderOptionMeta(option)}
              </span>
            )}
          </span>
          {isSelected && (
            <CheckIcon className="h-4 w-4 shrink-0 text-neutral-900" />
          )}
        </>
      );
    };

    return (
      <Popover
        open={open}
        onOpenChange={(nextOpen) => {
          if (!disabled) {
            setOpen(nextOpen);
          }
        }}
      >
        <PopoverTrigger asChild>
          <button
            ref={ref}
            type="button"
            className={cn(
              "flex items-center justify-between gap-2 rounded-md border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-700 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-500 focus-visible:ring-offset-2",
              disabled && "cursor-not-allowed bg-neutral-100 text-neutral-400",
              className
            )}
            aria-haspopup="listbox"
            aria-expanded={open}
            disabled={disabled}
            {...props}
          >
            <span className="flex min-w-0 flex-1 items-center gap-2">
              {selectedOption
                ? (
                    <>
                      {renderOptionIcon(selectedOption, "h-4 w-4 shrink-0")}
                      <span className="truncate font-medium text-neutral-900">
                        {selectedOption.label}
                      </span>
                    </>
                  )
                : (
                    <span className="truncate text-neutral-500">
                      {triggerPlaceholder}
                    </span>
                  )}
            </span>
            <ChevronUpDownIcon className="h-5 w-5 text-neutral-500" />
          </button>
        </PopoverTrigger>

        <PopoverContent
          className={cn(
            "w-[var(--radix-popover-trigger-width)] overflow-hidden rounded-md border border-neutral-200 bg-white p-0 shadow-lg",
            !searchable && "pt-2"
          )}
          align="start"
        >
          {searchable && (
            <div className="border-b border-neutral-200 p-2.5">
              <Input
                placeholder={placeholder ?? searchPlaceholder}
                value={currentSearch}
                onChange={handleSearchChange}
                leftIcon={<MagnifyingGlassIcon />}
                className="py-0 text-sm"
                aria-label={searchPlaceholder}
                autoFocus
              />
            </div>
          )}

          <div
            className={cn(
              "flex max-h-80 flex-col gap-2 overflow-y-auto px-2.5 py-2",
              filteredOptions.length === 0 && "py-0"
            )}
            role="listbox"
            aria-activedescendant={
              currentValue ? `dropdown-option-${currentValue}` : undefined
            }
          >
            {filteredOptions.length === 0 && emptyState}

            {visibleOptions.map((option) => {
              const isSelected = option.id === currentValue;

              return (
                <button
                  key={option.id}
                  id={`dropdown-option-${option.id}`}
                  type="button"
                  onClick={() => handleOptionSelect(option)}
                  className={cn(
                    "flex w-full items-center justify-between gap-2 rounded-md p-1.5 text-left transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-500 focus-visible:ring-offset-0",
                    isSelected
                      ? "bg-supreme-blue-50 text-neutral-900"
                      : "text-neutral-600 hover:bg-slate-50"
                  )}
                  role="option"
                  aria-selected={isSelected}
                >
                  {renderOptionContent(option, isSelected)}
                </button>
              );
            })}

            {hasMore && (
              <div className="px-1 text-xs text-neutral-500">
                Showing {visibleOptions.length} of {filteredOptions.length}
              </div>
            )}
          </div>

          {footerOption && (
            <div className="border-t border-neutral-300 px-2.5 py-2">
              <button
                type="button"
                onClick={() => handleOptionSelect(footerOption)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md p-1.5 text-left text-neutral-600 transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-500 focus-visible:ring-offset-0 hover:bg-slate-50"
                )}
                role="option"
                aria-selected={footerOption.id === currentValue}
              >
                <>
                  {renderOptionIcon(footerOption, "h-4 w-4 shrink-0")}
                  <span className="truncate text-sm font-medium">
                    {footerOption.label}
                  </span>
                </>
              </button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    );
  }
);

Dropdown.displayName = "Dropdown";

export { Dropdown };

