"use client";

import { Circle } from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
} from "recharts";

const chartData = [
  { month: "January", Sales: 186, Revenue: 80 },
  { month: "February", Sales: 305, Revenue: 200 },
  { month: "March", Sales: 237, Revenue: 120 },
  { month: "April", Sales: 73, Revenue: 190 },
  { month: "May", Sales: 209, Revenue: 130 },
  { month: "June", Sales: 214, Revenue: 140 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<string, string>) => {
  if (active && payload && payload.length) {
    console.log(payload);
    return (
      <div className="text-sm">
        <h1 className="bg-base-300 px-2 py-1 rounded-t-md">{label}</h1>
        <div className="bg-base-100 bg-opacity-80 rounded-b-md">
          <div className="label">
            <Circle size={15} className={`${payload[0].className}`} />{" "}
            <p className="font-bold">{`${payload[0].name}: $${payload[0].value}`}</p>
          </div>
          <div className="label">
            <Circle size={15} className={`${payload[1].className}`} />
            <p className="font-bold">
              {`${payload[1].name}: $${payload[1].value}`}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const RevenueChart = () => {
  return (
    <div className="w-full card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Revenue and Slaes</h2>
        <ResponsiveContainer className={"w-full"} height={200}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Tooltip
              content={CustomTooltip}
              cursor={{ fill: "transparent " }}
            />
            <Bar
              dataKey="Sales"
              stackId="a"
              fill="var(--color-desktop)"
              className="fill-primary text-primary"
              radius={[0, 0, 4, 4]}
              activeBar={<Rectangle stroke="bg-warning" />}
            />
            <Bar
              dataKey="Revenue"
              stackId="a"
              className="fill-accent text-accent"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
