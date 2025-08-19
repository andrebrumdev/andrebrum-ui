import * as React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2';
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary:   'bg-brand text-white hover:bg-blue-700',
    secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
    ghost:     'bg-transparent text-brand hover:bg-blue-50'
  };

  return (
    <button
      className={twMerge(clsx(base, variants[variant], className))}
      {...props}
    />
  );
}
