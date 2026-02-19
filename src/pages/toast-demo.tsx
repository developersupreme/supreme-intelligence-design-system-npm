import React from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { ToastAction, ToastActions } from "@/components/ui/toast"

export default function ToastDemo() {
  const { toast, dismiss } = useToast()

  // Cleanup toasts when component unmounts
  React.useEffect(() => {
    return () => {
      dismiss()
    }
  }, [dismiss])

  const showToast = () => {
    toast({
      id: "custom-toast",
      title: "We've just released a new feature",
      description: "Pretium at ullamcorper aliquam sed. Lectus nunc cursus scelerisque ut praesent morbi convallis nibh.",
      variant: "success",
      size: "floating",
      action: (
        <ToastActions>
          <ToastAction altText="Dismiss" onClick={() => dismiss("custom-toast")}>
            Dismiss
          </ToastAction>
          <ToastAction altText="View" onClick={() => {
            window.open("https://www.google.com", "_blank")
          }}>
            View
          </ToastAction>
        </ToastActions>
      ),
    })
  }

  return (
    <div className="p-4 md:p-8 space-y-8">
      <div>
        <h1 className="text-xl md:text-3xl font-bold mb-4">Toast Component Demo</h1>
        <p className="text-muted-foreground mb-6">
          This demonstrates the updated toast component with the new structure:
          information icon on the left, main content area, and close button on the right.
        </p>
      </div>

      <div className="space-y-4">
        <Button onClick={showToast}>
          Show Toast Notification
        </Button>
      </div>

      <div className="border rounded-lg p-6 bg-card">
        <h2 className="text-xl font-semibold mb-4">Toast Structure</h2>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• <strong>ToastIcon:</strong> Circular info icon on the left</p>
          <p>• <strong>ToastContent:</strong> Main content area with title, description, and actions</p>
          <p>• <strong>ToastTitle:</strong> Bold title text</p>
          <p>• <strong>ToastDescription:</strong> Secondary description text</p>
          <p>• <strong>ToastActions:</strong> Action links (Dismiss, View)</p>
          <p>• <strong>ToastClose:</strong> X button in top-right corner</p>
        </div>
      </div>
    </div>
  )
} 