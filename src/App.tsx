import "./App.css";
import Dashboard from "./ui/layouts/Dashboard";
import Button from "./ui/buttons/Button";

function App() {
  return (
    <>
      <Dashboard>
        <div className="flex gap-2">
          <Button>Welcome</Button>
          <Button type="secondary">Welcome</Button>
          <Button disabled>Welcome</Button>
          <Button type="secondary" disabled>
            Welcome
          </Button>
        </div>
      </Dashboard>
    </>
  );
}

export default App;
