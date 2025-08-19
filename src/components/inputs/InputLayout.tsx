import { cn } from "@/shared/utils/tailwind";
import { Input } from "../ui/input";

export interface InputLayoutProps extends React.ComponentProps<"input"> {
  RightIcon?: React.ReactNode;
  LeftIcon?: React.ReactNode;
  classNameInput?: string;
}

export const layoutInput = `
            bg-input border-border flex items-center px-4 py-2 min-h-13 w-full rounded-md  border text-base transition-colors
            file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground
            placeholder:text-muted-foreground
            focus-within:ring-2 focus-within:ring-ring focus-within:border-ring
            disabled:cursor-not-allowed disabled:opacity-50 
            md:text-sm gap-2
        `;
export const InputLayout: React.FC<InputLayoutProps> = ({
  RightIcon,
  LeftIcon,
  className,
  classNameInput,
  placeholder,
  ...propsInput
}) => {
  return (
    <label className={cn(layoutInput, className)}>
      {LeftIcon}
      <Input
        type="text"
        id="username"
        placeholder={placeholder}
        className={cn("flex-1 focus-visible:outline-none", classNameInput)}
        {...propsInput}
      />
      {RightIcon}
    </label>
  );
};
