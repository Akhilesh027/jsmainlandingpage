import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `
        flex h-10 w-full rounded-md
        border border-input
        bg-[#1a1a1a]
        px-3 py-2
        text-base text-white
        placeholder:text-gray-400

        ring-offset-[#1a1a1a]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-yellow-500/40
        focus-visible:ring-offset-0

        disabled:cursor-not-allowed
        disabled:opacity-50
        md:text-sm
        `,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
