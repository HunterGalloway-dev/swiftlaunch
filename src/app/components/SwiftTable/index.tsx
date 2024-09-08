import React from "react";

interface SwiftTableProps {
  headers: any[];
  data: any[][];
  colums: ((val: any) => React.JSX.Element)[] | undefined;
}

const SwiftTable = ({ headers, data, colums }: SwiftTableProps) => {
  return (
    <div className="overflow-auto">
      <table className="table table-auto table-xs table-zebra">
        <thead className="bg-base-300">
          <tr>
            {headers.map((val, idx) => (
              <th key={idx}>{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {row.map((data, dIdx) => (
                <td key={dIdx}>{colums ? colums[dIdx](data) : data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SwiftTable;
