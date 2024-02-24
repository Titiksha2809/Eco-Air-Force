import "./App.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import Chart from "./components/Chart";
import Alerts from "./components/Alerts";
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
      </main>
    </ThemeProvider>
  );
}

export default App;
