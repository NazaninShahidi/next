import React from "react";

function Table({ headers, data, showNo }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-[15px] font-medium text-[#B6B6B6] h-[62px] bg-[#ffffff05] border border-[#ffffff0d] rounded-lg">
          <tr>
            {showNo && (
              <th
                scope="col"
                className="px-6 py-3 w-[30px] whitespace-nowrap md:whitespace-normal "
              >
                NO
              </th>
            )}
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 whitespace-nowrap md:whitespace-normal"
                colSpan={index === 0 && 3}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-[#ffffff05] border border-[#ffffff0d] text-[15px] font-medium text-[#B6B6B6]"
            >
              {/* <th scope="row" className="px-6 py-4 whitespace-nowrap ">
              {(currentPage - 1) * dataPerPage.value + i + 1}
              </th> */}
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-6 py-4 ${
                    cell.length < 20 ? "whitespace-nowrap" : ""
                  }`}
                  colSpan={cellIndex === 1 && 3}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
