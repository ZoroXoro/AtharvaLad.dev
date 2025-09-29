import React from "react";
import Link from "next/link"; // remove if you won't use ButtonLink
import { cva } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900",
  {
    variants: {
      variant: {
        primary: "bg-sky-500 hover:bg-sky-600 focus:ring-sky-400",
        secondary: "bg-gray-800 hover:bg-gray-700 focus:ring-gray-600 border border-gray-700",
        ghost: "bg-transparent hover:bg-gray-800",
      },
    },
    defaultVariants: { variant: "primary" },
  }
);

export function Button({ className, variant = "primary", asChild = false, ...props }) {
  const Comp = asChild ? "span" : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}

/* Optional: link-styled button */
export function ButtonLink({ href, className, variant = "primary", ...props }) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}
