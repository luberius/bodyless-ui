import clsx from "clsx";

interface IProps {
  value?: string | number;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  testId?: string;
  password?: boolean;
}

const Input = ({
  value,
  placeholder,
  onChange,
  testId,
  className,
  password,
}: IProps) => {
  return (
    <input
      type={password ? "password" : "text"}
      className={clsx(
        "border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 w-full bg-gray-100 dark:bg-gray-800 outline-none focus:ring focus:border-gray-500 dark:focus:border-gray-700",
        className,
      )}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      data-test={testId}
    />
  );
};

export default Input;
