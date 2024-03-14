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

export default function Chart2() {
  return (
    <>
      <div></div>

      <LineChart
        className="border rounded-xl  p-4"
        data={data}
        index="date"
        categories={["PM"]}
        colors={["yellow"]}
        curveType="natural"
        showAnimation
        onValueChange={(v) => console.log(v)}
        yAxisWidth={20}
      />
      <div></div>
    </>
  );
}
