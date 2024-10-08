import { getRecentSales, Sale } from "@/app/db/mockDb";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import BaseDataTable from "../DataTables/BaseDataTable";
import Link from "next/link";

const sales = getRecentSales();

const columns: ColumnDef<Sale>[] = [
  {
    accessorKey: "item.name",
    header: "Item Name",
  },
  {
    accessorKey: "item.price",
    header: "Price",
  },
  {
    accessorKey: "quanity",
    header: "Quanity",
  },
  {
    accessorKey: "item.vendor",
    header: "Vendor",
  },
];

const RecentSlaes = () => {
  return (
    <div className="">
      <div className="w-full card bg-base-200 shadow-xl">
        <div className="card-body flex flex-col">
          <div className="flex justify-between">
            <h2 className="card-title">Recent Sales</h2>
            <Link href={"./"} className="btn btn-primary">
              Sales
            </Link>
          </div>
          <BaseDataTable columns={columns} data={sales} />
        </div>
      </div>
    </div>
  );
};

export default RecentSlaes;
