"use client";

import { getVendors, Vendor } from "@/app/db/mockDb";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import BaseDataTable from "../DataTables/BaseDataTable";
import Link from "next/link";
import { convertNumberToCurrency } from "@/app/lib/util";

const sales = getVendors();

const columns: ColumnDef<Vendor>[] = [
  {
    accessorKey: "name",
    header: "Item Name",
  },
  {
    accessorKey: "shop",
    header: "Price",
  },
  {
    accessorKey: "sales",
    header: "Sales",
  },
  {
    accessorKey: "earnings",
    header: "Earnings",
    cell: ({ row }) => (
      <p>{convertNumberToCurrency(row.getValue("earnings"))}</p>
    ),
  },
];

const TopVendors = () => {
  return (
    <div className="">
      <div className="w-full card bg-base-200 shadow-xl">
        <div className="card-body flex flex-col">
          <div className="flex justify-between">
            <h2 className="card-title">Top Vendors</h2>
            <Link href={"./"} className="btn btn-primary">
              Vendors
            </Link>
          </div>
          <BaseDataTable columns={columns} data={sales} />
        </div>
      </div>
    </div>
  );
};

export default TopVendors;
