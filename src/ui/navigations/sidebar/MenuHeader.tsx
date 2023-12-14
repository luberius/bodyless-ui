interface MenuItemHeaderProps {
  label: string;
}

const MenuItemHeader: React.FC<MenuItemHeaderProps> = ({ label }) => {
  return (
    <div className="px-2 pt-4 text-text/80 dark:text-text-dark/80 text-xs uppercase select-none cursor-default">
      {label}
    </div>
  );
};

export default MenuItemHeader;
