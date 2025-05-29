"use client";

import cn from "@/lib/cn";
import * as React from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, type = "text", className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = React.useCallback(() => {
      setShowPassword((prev) => !prev);
    }, []);

    const inputType = React.useMemo(() => {
      if (type === "password") {
        return showPassword ? "text" : "password";
      }
      return type;
    }, [type, showPassword]);

    const autoComplete = React.useMemo(() => {
    if (type === "password") return "current-password";
      if (id === "email") return "username";
      return undefined;
    }, [type, id]);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={id}
            className="flex space-x-1 text-sm font-medium text-slate-900"
          >
            {label}
          </label>
        )}
        <div className="relative w-full">
          <input
            id={id}
            name={id}
            ref={ref}
            aria-describedby={id}
            type={inputType}
            autoComplete={autoComplete}
            className={cn(
              "h-full w-full rounded-lg border-1 border-neutral-300 focus:outline-none focus:ring-0 px-2 pl-3 py-2.5",
              "font-normal text-slate-900 text-sm placeholder:font-poppins placeholder:text-sm placeholder:text-slate-500",
              className
            )}
            {...props}
          />
          {type === "password" && (
            <button
              type="button"
              className="absolute bottom-0 right-0 pr-3 h-full flex items-center justify-center"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <RiEyeFill
                  className=" text-slate-800 size-5 cursor-pointer"
                  aria-hidden="true"
                />
              ) : (
                <RiEyeOffFill
                  className=" text-slate-800 size-5 cursor-pointer"
                  aria-hidden="true"
                />
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
