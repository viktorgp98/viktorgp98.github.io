import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const HoverButton = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden='true'
        className={cn(
          "group relative w-[12rem] md:w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center text-lg font-semibold",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 ease-in-out group-hover:scale-[100.8]"></div>
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all ease-in-out duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
          <span aria-hidden='true'>{children}</span>
          <ArrowRight aria-hidden='true' />
        </div>
      </div>
    );
  }
);
export default HoverButton;
