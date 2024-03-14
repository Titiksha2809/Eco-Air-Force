import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { useEffect, useState } from "react";
// const data = await fetch("http://127.0.0.1:8000/current/").then((res) =>
//   res.json()
// );
// console.log(data.air_quality_index);

const DynamicColoredComponent = ({ data }) => {
  // Define color ranges, corresponding colors, and icons
  const colorRanges = [
    {
      range: { min: 0, max: 80 },
      icon: <CheckCircledIcon color="green" />,
    },
    {
      range: { min: 81, max: 120 },
      icon: <ExclamationTriangleIcon color="orange" />,
    },
    {
      range: { min: 121, max: Infinity },
      icon: <ExclamationTriangleIcon color="red" />,
    },
    // You can add more ranges, colors, and icons as needed
  ];

  // Function to determine color and icon based on data.aqi
  const getColorAndIcon = (aqi) => {
    for (const { range, color, icon } of colorRanges) {
      if (aqi >= range.min && aqi <= range.max) {
        return { color, icon };
      }
    }
    // Default to 'green' and CheckCircledIcon if no range matches
    // return { color: "green", icon: <CheckCircledIcon /> };
  };

  // Get the dynamic color and icon based on data.aqi
  const { color, icon } = getColorAndIcon(data);

  return icon; // Render the dynamically chosen icon
};

const DashboardCards = () => {
  const [airData, setAirData] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/latest-data/");
      const data = await response.json();
      setAirData(data[29].carbon_monoxide);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(airData[0]);
  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 3000);
    // console.log("fetching data");
    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // empty dependency array means this effect runs once after the initial render

  return (
    <>
      <div className="grid px-8 mt-8 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AQI</CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <CheckCircledIcon color="green" />
                  {/* <DynamicColoredComponent data={data.air_quality_index} /> */}
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Safe</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* {data.air_quality_index.toFixed(3)} */}50
            </div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 ">
            <CardTitle className="text-sm font-medium">
              Carbon Monoxide (CO)
            </CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <ExclamationTriangleIcon color="red" />
                  {/* <DynamicColoredComponent data={data.carbon_monoxide} /> */}
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Not Safe</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* {data.carbon_monoxide.toFixed(3)} */}
              {airData}
            </div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Particulate Matter 2.5(PM)
            </CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <ExclamationTriangleIcon color="orange" />
                  {/* <DynamicColoredComponent data={data.particulate_matter} /> */}
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Take precautions</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* {data.particulate_matter.toFixed(3)} */}50
            </div>
            <p className="text-xs text-muted-foreground">
              +1.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Nitrgen Dioxide (NO2)
            </CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <CheckCircledIcon color="green" />
                  {/* <DynamicColoredComponent data={data.nitrogen_dioxide} /> */}
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Safe</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* {data.nitrogen_dioxide.toFixed(3)} */}22
            </div>
            <p className="text-xs text-muted-foreground">+9% from last month</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DashboardCards;
