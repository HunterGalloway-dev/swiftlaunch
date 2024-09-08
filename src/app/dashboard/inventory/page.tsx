"use client";

import DataTable from "@/app/components/DataTable";
import { convertNumberToCurrency } from "@/app/lib/util";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { ArrowUpDown, Edit, Ellipsis, Menu, Trash } from "lucide-react";
import React from "react";

export interface Payment {
  id: string;
  sku: string;
  name: string;
  category: string;
  vendor: string;
  cost: number;
  price: number;
  stock: number;
  createdAt: Date;
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        className="checkbox checkbox-xs"
        checked={
          table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()
        }
        onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        className="checkbox checkbox-xs"
        checked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(e.target.checked)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "sku",
    header: "SKU#",
    cell: ({ row }) => <p className="text-gray-600">{row.getValue("sku")}</p>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div>
          <button
            className="btn btn-xs btn-ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <span className="badge badge-sm">{row.getValue("category")}</span>
    ),
  },

  {
    accessorKey: "price",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      return <div>{convertNumberToCurrency(amount)}</div>;
    },
  },
  {
    accessorKey: "cost",
    header: "Cost",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("cost"));

      return <div>{convertNumberToCurrency(amount)}</div>;
    },
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => {
      const cnt = parseInt(row.getValue("stock"));

      let className = "text-success bg-success";
      if (cnt <= 5) {
        className = "text-warning bg-warning";
      }

      if (cnt == 0) className = "text-error bg-error";

      return (
        <span className={`badge badge-sm bg-opacity-40 ${className}`}>
          {row.getValue("stock")}
        </span>
      );
    },
  },
  {
    accessorKey: "vendor",
    header: "Vendor",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const sale = row.original;

      return (
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn btn-xs btn-ghost">
            <Ellipsis size={16} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu menu-xs bg-base-300 z-[1] w-32 shadow"
          >
            <li className="disabled">
              <a>Actions</a>
            </li>
            <li className="">
              <a>
                <Edit className="w-4 h-4" /> Edit
              </a>
            </li>
            <li>
              <a className="text-error">
                <Trash className="w-4 h-4" /> Delete
              </a>
            </li>
          </ul>
        </div>
      );
    },
  },
];

const data: Payment[] = [
  {
    id: "1",
    sku: "SKU1",
    name: "Drawer",
    category: "Furniture",
    vendor: "Caroline",
    cost: 10,
    price: 30,
    stock: 9,
    createdAt: new Date(Date.now()),
  },
  {
    id: "1",
    sku: "SKU2",
    name: "Chair",
    category: "Furniture",
    vendor: "Caroline",
    cost: 10,
    price: 30,
    stock: 6,
    createdAt: new Date(Date.now()),
  },
  {
    id: "1",
    sku: "SKU3",
    name: "Desk",
    category: "Furniture",
    vendor: "Donna",
    cost: 10,
    price: 30,
    stock: 5,
    createdAt: new Date(Date.now()),
  },
  {
    id: "1",
    sku: "SKU4",
    name: "Necklace",
    category: "Jewelery",
    vendor: "Ronna",
    cost: 10,
    price: 30,
    stock: 0,
    createdAt: new Date(Date.now()),
  },
];

const Sales = () => {
  return (
    <div className="p-4">
      <DataTable columns={columns} data={data} className="table-xs text-xs" />
    </div>
  );
};

export default Sales;
