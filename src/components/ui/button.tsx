import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary: Yellow with bold shadow (talentscare.de style)
        default:
          'bg-primary-gold text-black border-3 border-black rounded-md shadow-bold hover:shadow-bold-hover hover:translate-y-1 hover:translate-x-1',
        // Secondary: Dark navy with outline
        secondary:
          'bg-transparent border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-[25px]',
        // Outline with gold
        outline:
          'border-2 border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-black',
        // Ghost - minimal style
        ghost: 'hover:bg-gray-100 text-slate-gray lowercase tracking-normal',
        // Link style
        link: 'text-primary-gold underline-offset-4 hover:underline lowercase tracking-normal',
        // Dark CTA
        dark: 'bg-dark-charcoal text-white border-2 border-primary-gold hover:bg-primary-gold hover:text-black',
      },
      size: {
        default: 'h-12 px-8 py-3 text-base',
        sm: 'h-10 px-6 text-sm',
        lg: 'h-14 px-10 text-lg',
        xl: 'h-16 px-12 text-xl',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
