import { ArrowDown, ArrowUp, Box, DollarSign } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full h-full">
      <div className="grid lg:grid-cols-2 gap-4 p-4">
        <div className="stats shadow bg-base-200 ">
          <div className="stat">
            <div className="stat-figure text-primary">
              <DollarSign />
            </div>
            <div className="stat-title">Revenue </div>
            <div className="stat-value space-x-10">
              $4,231
              <div className="ml-2 badge badge-error bg-opacity-35 text-error">
                <ArrowDown className="w-4" />
                25%
              </div>
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>

        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-primary">
              <DollarSign />
            </div>
            <div className="stat-title">Exspense</div>
            <div className="stat-value">
              $2070.77
              <div className="ml-2 badge badge-success bg-opacity-35 text-success">
                <ArrowUp className="w-4" />
                25%
              </div>
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>

        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-primary">
              <DollarSign />
            </div>
            <div className="stat-title">Profit</div>
            <div className="stat-value">
              $2,250.23
              <div className="ml-2 badge badge-success bg-opacity-35 text-success">
                <ArrowUp className="w-4" />
                25%
              </div>
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>

        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-primary">
              <Box />
            </div>
            <div className="stat-title">Sales</div>
            <div className="stat-value">
              95
              <div className="ml-2 badge badge-success bg-opacity-35 text-success">
                <ArrowUp className="w-4" />
                25%
              </div>
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default Dashboard;
