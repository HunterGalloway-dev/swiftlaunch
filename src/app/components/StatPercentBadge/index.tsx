import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

interface StatPercentBadgeProps {
  percent: number;
}

const StatPercentBadge = ({ percent }: StatPercentBadgeProps) => {
  let badgeClassName = "";
  let Icon = ArrowUp;

  if (percent < 0) {
    Icon = ArrowDown;
    badgeClassName = "badge-error bg-opacity-35 text-error";
  } else {
    badgeClassName = "badge-success bg-opacity-35 text-success";
  }

  return (
    <div className={`badge badge-xs w-13 ${badgeClassName}`}>
      <Icon className="w-full h-full" />
      <p>{percent}%</p>
    </div>
  );
};

export default StatPercentBadge;
