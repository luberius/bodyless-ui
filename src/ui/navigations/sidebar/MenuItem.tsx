import clsx from "clsx";

type MenuItemProps = {
  label: string;
  icon?: React.ElementType;
  isActive: boolean;
  onClick: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ label, icon: Icon, isActive, onClick }) => {
  return (
    <div
      className={clsx("flex items-center px-3 py-2 space-x-3 cursor-pointer rounded-lg text-sm", {
        "bg-primary-300 dark:bg-accent text-white": isActive,
        "text-text dark:text-text-dark hover:bg-primary-100 dark:hover:bg-base-primary/5":
          !isActive,
      })}
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{label}</span>
    </div>
  );
};

export default MenuItem;
