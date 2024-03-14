import { CalendarIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
const Navbar = () => {
  let d = new Date();
  let time = d.toLocaleDateString();
  console.log(time);
  return (
    <nav className=" text-primary bg-background border-b flex justify-between items-center w-full p-4">
      <p className="text-3xl font-bold text-primary">Air Quality Monitor</p>
      <div className="flex justify-end gap-2">
        <a href="https://github.com/mspatel18/AQI-dashboard" target="_blank">
          <Button variant="outline">
            <GitHubLogoIcon className="h-4 w-4" />
          </Button>
        </a>
        <div
          className={
            "w-30 flex items-center  whitespace-nowrap rounded-md text-sm border p-2 justify-start text-left font-normal"
          }
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          <p className="">{time}</p>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
