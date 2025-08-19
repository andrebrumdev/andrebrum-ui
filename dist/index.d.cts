import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'ghost';
};
declare function Button({ variant, className, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps };
