import { LineChart } from "@tremor/react";
import React, { useState, useEffect } from "react";
const data = [
  {
    name: "Page A",
    PM: 4,
    CO: 24,
    date: "24-02-24",
  },
  {
    name: "Page B",
    PM: 30,
    CO: 13,
    date: "25-02-24",
  },
  {
    name: "Page C",
    PM: 20,
    CO: 98,
    date: "26-02-24",
  },
  {
    name: "Page D",
    PM: 27,
    CO: 39,
    date: "27-02-24",
  },
  {
    name: "Page E",
    PM: 18,
    CO: 48,
    date: "28-02-24",
  },
  {
    name: "Page F",
    PM: 23,
    CO: 38,
    date: "29-02-24",
  },
  {
    name: "Page G",
    PM: 34,
    CO: 43,
    date: "01-03-24",
  },
];

export default function Chart() {
  const [airData, setAirData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/latest-data/");
      const data = await response.json();
      setAirData(data);
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
      <div></div>

      <LineChart
        className="border rounded-xl  p-4"
        data={airData}
        index="data"
        categories={["carbon_monoxide"]}
        colors={["indigo"]}
        curveType="natural"
        showAnimation
        onValueChange={(v) => console.log(v)}
        yAxisWidth={20}
        minValue={800}
      />
      <div></div>
    </>
  );
}
