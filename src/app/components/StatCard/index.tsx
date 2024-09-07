import { LucideIcon } from "lucide-react";
import React from "react";
import StatPercentBadge from "../StatPercentBadge";

interface StatCard {
  title: string;
  value: string;
  desc: string;
  percent: number;
  icon: LucideIcon | undefined;
}

const StatCard = ({ title, value, desc, percent, icon: Icon }: StatCard) => {
  return (
    <div className="stats shadow bg-base-200">
      <div className="stat p-2">
        <div className="stat-figure text-primary">
          {Icon ? <Icon /> : <></>}
        </div>
        <div className="stat-title">{title}</div>
        <div className="stat-value">
          <h5 className="text-base">
            {value}
            <StatPercentBadge percent={percent} />
          </h5>
        </div>
        <div className="stat-desc">{desc}</div>
      </div>
    </div>
  );
};

export default StatCard;
