import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface GlowingButtonProps extends ButtonProps {}

export const GlowingButton = forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-blue-600 text-white hover:bg-blue-500 hover:text-white",
          "after:absolute after:inset-0 after:z-[-1] after:opacity-0 after:transition-opacity hover:after:opacity-100",
          "after:bg-[radial-gradient(circle,rgba(56,182,255,0.3)_0%,rgba(56,182,255,0)_70%)]",
          "before:absolute before:inset-0 before:z-[-1] before:animate-pulse before:bg-[radial-gradient(circle,rgba(56,182,255,0.3)_0%,rgba(56,182,255,0)_50%)] before:opacity-0 hover:before:opacity-100",
          className,
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    )
  },
)

GlowingButton.displayName = "GlowingButton"

