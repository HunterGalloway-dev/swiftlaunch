import React from "react";

export type SupportedColumnType = string | Date | number;

const toString = (val: SupportedColumnType) => {
  if (typeof val.toString == "function") {
    return val.toString();
  } else {
    return val.toLocaleString();
  }
};

interface SwiftTableProps {
  headers: SupportedColumnType[];
  data: SupportedColumnType[][];
  colums: ((val: SupportedColumnType) => React.JSX.Element)[] | undefined;
}

const SwiftTable = ({ headers, data, colums }: SwiftTableProps) => {
  return (
    <div className="overflow-auto">
      <table className="table table-auto table-xs table-zebra">
        <thead className="bg-base-300">
          <tr>
            {headers.map((val, idx) => (
              <th key={idx}>{toString(val)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {row.map((data, dIdx) => (
                <td key={dIdx}>
                  {colums ? colums[dIdx](data) : toString(data)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SwiftTable;
