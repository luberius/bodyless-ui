import Navbar from "../navigations/navbar";
import Sidebar from "../navigations/sidebar/Sidebar";

interface IProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<IProps> = ({ children }) => {
  return (
    <main className="grid grid-cols-main-lg max-w-screen min-h-screen p-6 gap-6 text-text dark:text-text-dark bg-base-primary dark:bg-base-primary-dark">
      <Sidebar />
      <div className="flex flex-col gap-6 flex-1">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default Dashboard;
