import * as React from "react";
import ReactDOM from "react-dom/client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import PropTypes from "prop-types"; // Optional: for runtime type checking

const defaultData = [
  {
    profileAndAccounts: "John Doe",
    subscribers: 12000,
    followers: 15000,
    engagementRate: 4.5,
    estimatedReach: 13000,
    avgReelsPlayers: 9000,
  },
  {
    profileAndAccounts: "Jane Smith",
    subscribers: 8000,
    followers: 11000,
    engagementRate: 6.3,
    estimatedReach: 9500,
    avgReelsPlayers: 7200,
  },
  {
    profileAndAccounts: "Mike Johnson",
    subscribers: 20000,
    followers: 25000,
    engagementRate: 5.8,
    estimatedReach: 22000,
    avgReelsPlayers: 18000,
  },
  {
    profileAndAccounts: "Emily Davis",
    subscribers: 5000,
    followers: 7000,
    engagementRate: 3.9,
    estimatedReach: 6000,
    avgReelsPlayers: 4000,
  },
  {
    profileAndAccounts: "Chris Brown",
    subscribers: 15000,
    followers: 18000,
    engagementRate: 5.2,
    estimatedReach: 16000,
    avgReelsPlayers: 11000,
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("profileAndAccounts", {
    id: "profileAndAccounts",
    cell: (info) => info.getValue(),
    header: () => <span>Profile and Accounts</span>,
    size: 250,
  }),
  columnHelper.accessor("subscribers", {
    id: "subscribers",
    cell: (info) => info.getValue().toLocaleString(),
    header: () => <span>Subscribers</span>,
    size: 150,
  }),
  columnHelper.accessor("followers", {
    id: "followers",
    cell: (info) => info.getValue().toLocaleString(),
    header: () => <span>Followers</span>,
    size: 150,
  }),
  columnHelper.accessor("engagementRate", {
    id: "engagementRate",
    cell: (info) => `${info.getValue()}%`,
    header: () => <span>Engagement Rate</span>,
    size: 180,
  }),
  columnHelper.accessor("estimatedReach", {
    id: "estimatedReach",
    cell: (info) => info.getValue().toLocaleString(),
    header: () => <span>Estimated Reach</span>,
    size: 180,
  }),
  columnHelper.accessor("avgReelsPlayers", {
    id: "avgReelsPlayers",
    cell: (info) => info.getValue().toLocaleString(),
    header: () => <span>Avg Reels Players</span>,
    size: 180,
  }),
];

function Table({ initialData = defaultData }) {
  const [data] = React.useState(initialData);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    defaultColumn: {
      minSize: 100,
      maxSize: 400,
    },
  });

  return (
    <div className="p-2">
      <table
        className="min-w-full border-collapse border"
        style={{ width: table.getTotalSize() }}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="h-[59px] border border-gray-200 bg-gray-50 p-2 text-center font-inter font-semibold text-base"
                  style={{
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    width: header.getSize(),
                  }}
                  colSpan={header.colSpan}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="w-[1398px] h-[126px] text-center">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border border-gray-200 p-2 w-[1398px] h-[126px] font-inter font-normal text-base non-italic"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-200 bg-gray-50 p-2 text-left"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
      {/* <div className="h-4" />
      {/* <button
        onClick={rerender}
        className="border rounded px-4 py-2 hover:bg-gray-50"
      >
        Rerender
      </button> */}
    </div>
  );
}

// Optional: Runtime prop validation
// Table.propTypes = {
//   initialData: PropTypes.arrayOf(
//     PropTypes.shape({
//       profileAndAccounts: PropTypes.string,
//       subscribers: PropTypes.number,
//       followers: PropTypes.number,
//       engagementRate: PropTypes.number,
//       estimatedReach: PropTypes.string,
//       avgReelsPlayers: PropTypes.number,
//     })
//   ),
// };

// function App() {
//   return (
//     <div className="container mx-auto p-4 flex justify-center items-center">
//       <Table />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// if (!rootElement) throw new Error("Failed to find the root element");

// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

export default Table;
