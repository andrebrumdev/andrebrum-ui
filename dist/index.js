// src/Button.tsx
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { jsx } from "react/jsx-runtime";
function Button({
  variant = "primary",
  className,
  ...props
}) {
  const base = "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2";
  const variants = {
    primary: "bg-brand text-white hover:bg-blue-700",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    ghost: "bg-transparent text-brand hover:bg-blue-50"
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: twMerge(clsx(base, variants[variant], className)),
      ...props
    }
  );
}
export {
  Button
};
//# sourceMappingURL=index.js.map