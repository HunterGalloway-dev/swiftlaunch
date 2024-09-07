"use client";

import { Circle } from "lucide-react";
import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
} from "recharts";

const chartData = [
  { month: "January", Revenue: 186, Cost: 80 },
  { month: "February", Revenue: 305, Cost: 200 },
  { month: "March", Revenue: 237, Cost: 120 },
  { month: "April", Revenue: 73, Cost: 190 },
  { month: "May", Revenue: 209, Cost: 130 },
  { month: "June", Revenue: 214, Cost: 140 },
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

const ProfitMarginsChart = () => {
  return (
    <div className="w-full card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Profit Margins</h2>
        <ResponsiveContainer className={"w-full"} height={200}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <Tooltip content={CustomTooltip} />
            <XAxis
              dataKey="month"
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Area
              dataKey="Cost"
              type="natural"
              fill=""
              fillOpacity={0.4}
              className="fill-primary stroke-primary stroke-2"
              stroke=""
              stackId="b"
            />
            <Area
              dataKey="Revenue"
              type="natural"
              fill=""
              className="fill-accent stroke-accent stroke-2"
              fillOpacity={0.4}
              stroke=""
              stackId="a"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProfitMarginsChart;
