import { Dropdown, DropdownItem } from "../dropdown";
import DropdownToggle from "../dropdown/DropdownToggle";
import DarkModeToggle from "../buttons/DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="bg-base-secondary dark:bg-base-secondary-dark w-full text-text dark:text-text-dark p-4 rounded-lg shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">Console</div>
        <div className="flex gap-4">
          <DarkModeToggle />
          <Dropdown>
            <DropdownToggle toggle>
              <div className="rounded-full border overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=3" alt="profile" width={32} height={32} />
              </div>
            </DropdownToggle>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
