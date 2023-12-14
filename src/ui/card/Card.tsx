import clsx from "clsx";

interface IProps {
  noPadding?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<IProps> = ({ noPadding, children, className }) => {
  return (
    <div
      className={clsx(
        "rounded-lg shadow-lg bg-base-secondary dark:bg-base-secondary-dark overflow-auto",
        !noPadding && "p-7 ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
