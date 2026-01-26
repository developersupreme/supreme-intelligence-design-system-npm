import * as React from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

export interface DragDropProps extends React.HTMLAttributes<HTMLDivElement> {
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

export const DragDrop = React.forwardRef<HTMLDivElement, DragDropProps>(
  (
    {
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
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = React.useState(false);

    const isDisabled = disabled || loading;

    // Convert iconSize to pixel value
    const iconSizePx = typeof iconSize === "number" ? `${iconSize}px` : iconSize;
    
    // Get color value - support CSS variables, hex/rgb values, and Tailwind color names
    const getColorValue = (color: string) => {
      // If it's already a CSS variable, hex, or rgb value, return as is
      if (color.startsWith("var(") || color.startsWith("#") || color.startsWith("rgb")) {
        return color;
      }
      // Map Tailwind color names to CSS variables
      const colorMap: Record<string, string> = {
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
        "supreme-blue-950": "var(--supreme-blue-950)",
      };
      return colorMap[color] || color;
    };
    
    const iconColorValue = getColorValue(iconColor);

    const openFilePicker = () => {
      if (isDisabled) return;
      inputRef.current?.click();
    };

    const handleFiles = (fileList: FileList | null) => {
      if (!fileList) return;
      const files = Array.from(fileList);
      onFiles?.(files);
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      if (isDisabled) return;
      handleFiles(e.dataTransfer.files);
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (isDisabled) return;
      setIsDragging(true);
    };

    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (isDisabled) return;
      setIsDragging(false);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files);
      // allow re-selecting same file
      e.target.value = "";
    };

    return (
      <div
        ref={ref}
        role="button"
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        onClick={openFilePicker}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={cn(
          "flex flex-col items-center justify-center gap-[10px] p-8 rounded-lg",
          "border-2 border-dashed",
          isDisabled
            ? "border-neutral-300 cursor-not-allowed opacity-60"
            : isDragging
            ? "border-neutral-300 bg-supreme-blue-50"
            : "border-neutral-300 hover:border-supreme-blue-100",
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <div 
              className="animate-spin rounded-full border-b-2"
              style={{
                width: iconSizePx,
                height: iconSizePx,
                borderColor: iconColorValue,
              }}
            ></div>
            <div className="w-[336px] text-center">
              <p className="text-base leading-6 text-neutral-600">{loadingText}</p>
            </div>
          </>
        ) : (
          <>
            <ArrowUpTrayIcon 
              style={{
                width: iconSizePx,
                height: iconSizePx,
                color: iconColorValue,
              }}
            />
            <div className="w-[336px] text-center">
              <p className="text-base leading-6 text-neutral-600">{label}</p>
              <p className="text-xs leading-4 text-neutral-600">
                {sublabel}
              </p>
            </div>
          </>
        )}

        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={onInputChange}
          disabled={isDisabled}
          aria-hidden
        />
      </div>
    );
  }
);

DragDrop.displayName = "DragDrop";

export default DragDrop;


