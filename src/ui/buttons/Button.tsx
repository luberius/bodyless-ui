import clsx from "clsx";

interface IProps {
  type?: "primary" | "secondary" | "border";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  testId?: string;
  icon?: React.ElementType;
  iconRight?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
}

const Button: React.FC<IProps> = ({
  type = "primary",
  children,
  onClick,
  className,
  testId,
  icon: Icon,
  iconRight,
  disabled,
  iconOnly,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex gap-2 items-center",
        "text-sm px-4 py-2 rounded-lg",
        !disabled &&
          type === "primary" &&
          "bg-primary-300 dark:bg-accent border border-primary-300 dark:border-accent hover:bg-primary-400 dark:hover:bg-accent-500 dark:hover:border-accent-500 text-text-dark",
        !disabled &&
          type === "secondary" &&
          "border text-primary-300 dark:text-accent border-primary-300 dark:border-accent hover:bg-primary-300 dark:hover:bg-accent hover:text-text-dark dark:hover:text-text-dark",

        disabled && type === "primary" && "bg-gray-300 dark:bg-gray-700 text-gray-500",
        disabled &&
          type === "secondary" &&
          "border text-gray-400 border-gray-400 dark:text-gray-600 dark:border-gray-600",
        className
      )}
      disabled={disabled}
      data-test={testId}
    >
      {Icon && !iconRight && <Icon className="w-5 h-5" />}
      {!iconOnly && children}
      {Icon && iconRight && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default Button;
