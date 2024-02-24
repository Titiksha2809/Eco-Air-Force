import "./App.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import Chart from "./components/Chart";
import Alerts from "./components/Alerts";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="bg-background">
        <Navbar />
        <DashboardCards />
        <div className="mx-8 mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-4">
            <Chart />
          </div>
          <div className="col-span-3">
            <Alerts />
          </div>
        </div>
        <div className="m-8">
          <a
            href="https://en.wikipedia.org/wiki/Air_quality_index#India"
            className={buttonVariants({ variant: "destructive" })}
            target="_blank"
          >
            <span className="flex gap-2 items-center">
              Check Safe AQI Levels <ExternalLinkIcon />
            </span>
          </a>
        </div>
      </main>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
