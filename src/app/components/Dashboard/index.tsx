import { DollarSign } from "lucide-react";
import React from "react";
import RevenueChart from "../RevenueChart";
import ProfitMarginsChart from "../ProfitMarginsChart";
import StatCard from "../StatCard";
import RecentSales from "../RecentSales";
import TopVendors from "../TopVendors";

const Dashboard = () => {
  return (
    <div className="w-full h-full p-3">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Revenue"
          value="$4,231"
          desc="25% more than last month"
          percent={25}
          icon={DollarSign}
        />

        <StatCard
          title="Exspense"
          value="$2,070.77"
          desc="13% more than last month"
          percent={13}
          icon={DollarSign}
        />

        <StatCard
          title="Profit"
          value="$2,250.23"
          desc="31% more than last month"
          percent={31}
          icon={DollarSign}
        />
        <StatCard
          title="Sales"
          value="95"
          desc="34% more than last month"
          percent={34}
          icon={DollarSign}
        />
      </div>

      <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        <div className="md:col-span-2 lg:col-span-3">
          <RevenueChart />
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <ProfitMarginsChart />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <RecentSales />
        <TopVendors />
      </div>
    </div>
  );
};

export default Dashboard;
