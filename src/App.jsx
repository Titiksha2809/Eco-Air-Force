import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <h1 className="bg-primary text-primary-foreground dark:bg-background dark:text-foreground inline m-2 p-5">
        Hello world
      </h1>
      <Button>Click me</Button>
    </>
  );
}

export default App;
