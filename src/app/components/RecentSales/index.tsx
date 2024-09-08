import React from "react";
import SwiftTable, { SupportedColumnType } from "../SwiftTable";
import Link from "next/link";
import { DollarSign } from "lucide-react";

const RecentSales = () => {
  const headers = ["Product", "Price", "Quanity", "Vendor", "Date", "Type"];
  const data = [
    ["Shoe", "$51", 3, "Caroline", new Date(Date.now()), "cash"],
    ["T-Shirt", "$23", 1, "Caroline", new Date(Date.now()), "cash"],
    ["T-Shirt", "$21", 5, "Caroline", new Date(Date.now()), "cash"],
    ["Urn", "$72", 2, "Caroline", new Date(Date.now()), "cash"],
    ["Necklace", "$24", 1, "Caroline", new Date(Date.now()), "cash"],
  ];

  const bold = (val: SupportedColumnType) => (
    <p className="font-extrabold">{val as string}</p>
  );
  const base = (val: SupportedColumnType) => (
    <p className="">{val as string}</p>
  );
  const img = (val: SupportedColumnType) => (
    <>
      <div className="avatar placeholder">
        <div className="ring-primary ring-1 text-neutral-content w-6 rounded-full">
          <span className="text-xs">P</span>
        </div>
      </div>
      {(" " + val) as string}
    </>
  );
  const date = (val: SupportedColumnType) => (
    <p>{(val as Date).toLocaleDateString()}</p>
  );
  const status = (val: SupportedColumnType) => {
    const badgeClass =
      val === "square"
        ? "badge-primary text-primary"
        : "badge-success text-success";
    val = val as string;
    return (
      <div
        className={`badge badge-sm badge-primary bg-opacity-20 ${badgeClass}`}
      >
        {val.charAt(0).toUpperCase() + val.slice(1)}
      </div>
    );
  };

  const exampleColumns = [img, bold, base, base, date, status];

  return (
    <div className="card bg-base-200">
      <div className="card-body p-3">
        <div className="flex justify-between items-center">
          <h5 className="card-title">Recent Sales</h5>
          <Link href="/dashboard" className="btn btn-sm btn-neutral">
            <DollarSign size={12} />
            Sales
          </Link>
        </div>
        <SwiftTable headers={headers} data={data} colums={exampleColumns} />
      </div>
    </div>
  );
};

export default RecentSales;
