import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import {
  CloudUpload,
  Eye,
  File,
  Menu,
  Plus,
  Search,
  Upload,
} from "lucide-react";
import React from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
}

const DataTable = <TData, TValue>({
  columns,
  data,
  className,
}: DataTableProps<TData, TValue>) => {
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,

    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    onColumnVisibilityChange: setColumnVisibility,

    onRowSelectionChange: setRowSelection,
    state: {
      columnFilters,
      sorting,
      columnVisibility,
      rowSelection,
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <label className="input input-sm input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={
                (table.getColumn("name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
            />
            <Search className="w-4 h-4" />
          </label>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn btn-xs btn-ghost">
              <Eye className="w-4 h-4" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content rounded-box menu menu-xs bg-base-300 z-[1] w-32 shadow"
            >
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <div key={column.id}>
                      <label className="label cursor-pointer p-0">
                        <input
                          key={column.id}
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-xs"
                          checked={column.getIsVisible()}
                          onChange={(e) =>
                            column.toggleVisibility(e.target.checked)
                          }
                        />
                        <span className="label-text">{column.id}</span>
                      </label>
                    </div>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <button className="btn btn-sm btn-primary">
            <Plus className="w-4 h-4" /> Item
          </button>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-xs bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li className="disabled">
                <p>Batch Actions</p>
              </li>
              <li>
                <a>
                  <Upload className="w-4 h-4" /> File Import
                </a>
              </li>
              <li>
                <a>
                  <CloudUpload className="w-4 h-4" />
                  Cloud Import
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rounded-md border-solid">
        <table className={`table ${className} bg-base-300`}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td>No Results</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex items-center justify-end space-x-2 py-4">
          <button
            className="btn  btn-sm btn-outline"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
          <button
            className="btn  btn-sm btn-outline"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
