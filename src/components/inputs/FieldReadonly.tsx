import { cn } from '@/shared/utils/tailwind';
import type { ComponentType, ReactNode } from 'react';
import { InputLayout } from './InputLayout';

interface BaseFieldReadonlyProps {
    label?: ReactNode;
    value?: ReactNode;
    description?: ReactNode;
    required?: boolean;
    classNameWrapper?: string;
    placeholder?: string;
}

export function FieldReadonly<T extends ComponentType<any>>({
    label,
    value,
    description,
    required,
    classNameWrapper,
    as,
    ...props
}: BaseFieldReadonlyProps & { as?: T } & React.ComponentProps<T>) {
    const Comp = as || InputLayout;

    return (
        <div className={cn('space-y-2 flex flex-col gap-1', classNameWrapper)}>
            {label && (
                <div
                    className="text-sm font-medium text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 after:ml-1 after:text-destructive data-[required=true]:after:content-['*']"
                    data-required={required}
                >
                    {label}
                </div>
            )}
            <Comp value={value} readOnly {...props} />
            {description && (
                <div className={cn('text-[0.8rem] text-muted-foreground')}>
                    {description}
                </div>
            )}
        </div>
    );
}
