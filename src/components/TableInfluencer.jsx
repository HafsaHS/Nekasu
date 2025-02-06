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
    profileAndAccounts: {
      name: "Yorem Ipsum",
      title: "Fashion and Style",
      avatar: "https://placehold.co/400x400?text=YI",
    },
    subscribers: 3500,
    followers: 8000,
    engagementRate: 6.5,
    estimatedReach: 9500,
    avgReelsPlayers: 1200,
  },
  {
    profileAndAccounts: {
      name: "Alice Green",
      title: "Beauty Blogger",
      avatar: "https://placehold.co/400x400?text=AG",
    },
    subscribers: 8500,
    followers: 12000,
    engagementRate: 7.8,
    estimatedReach: 15000,
    avgReelsPlayers: 2000,
  },
  {
    profileAndAccounts: {
      name: "John Doe",
      title: "Tech Enthusiast",
      avatar: "https://placehold.co/400x400?text=JD",
    },
    subscribers: 11000,
    followers: 18000,
    engagementRate: 5.0,
    estimatedReach: 25000,
    avgReelsPlayers: 2500,
  },
  {
    profileAndAccounts: {
      name: "Emma Stone",
      title: "Fitness Expert",
      avatar: "https://placehold.co/400x400?text=ES",
    },
    subscribers: 7500,
    followers: 9500,
    engagementRate: 8.3,
    estimatedReach: 14000,
    avgReelsPlayers: 1500,
  },
  {
    profileAndAccounts: {
      name: "Oliver Brown",
      title: "Travel Vlogger",
      avatar: "https://placehold.co/400x400?text=OB",
    },
    subscribers: 9200,
    followers: 11000,
    engagementRate: 4.5,
    estimatedReach: 14000,
    avgReelsPlayers: 1700,
  },
  {
    profileAndAccounts: {
      name: "Sophia Lee",
      title: "Fashion Designer",
      avatar: "https://placehold.co/400x400?text=SL",
    },
    subscribers: 15000,
    followers: 25000,
    engagementRate: 9.2,
    estimatedReach: 35000,
    avgReelsPlayers: 3000,
  },
  {
    profileAndAccounts: {
      name: "Noah Davis",
      title: "Food Critic",
      avatar: "https://placehold.co/400x400?text=ND",
    },
    subscribers: 4300,
    followers: 7000,
    engagementRate: 5.7,
    estimatedReach: 9500,
    avgReelsPlayers: 1000,
  },
  {
    profileAndAccounts: {
      name: "Mia Johnson",
      title: "Photographer",
      avatar: "https://placehold.co/400x400?text=MJ",
    },
    subscribers: 6000,
    followers: 8500,
    engagementRate: 6.0,
    estimatedReach: 11000,
    avgReelsPlayers: 1300,
  },
  {
    profileAndAccounts: {
      name: "James Miller",
      title: "Music Artist",
      avatar: "https://placehold.co/400x400?text=JM",
    },
    subscribers: 20000,
    followers: 35000,
    engagementRate: 10.1,
    estimatedReach: 50000,
    avgReelsPlayers: 4500,
  },
  {
    profileAndAccounts: {
      name: "Chloe Williams",
      title: "Lifestyle Blogger",
      avatar: "https://placehold.co/400x400?text=CW",
    },
    subscribers: 5400,
    followers: 9000,
    engagementRate: 7.0,
    estimatedReach: 12000,
    avgReelsPlayers: 1400,
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("profileAndAccounts", {
    id: "profileAndAccounts",
    cell: (info) => {
      const { name, title, avatar } = info.getValue();
      return (
        <div className="flex items-left space-x-3">
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full shadow-lg"
          />
          <div>
            <p className="text-black font-inter font-normal text-base text-left ">
              {name}
            </p>
            <p className="text-sm text-black/50 font-inter font-normal text-left italic">
              {title}
            </p>
          </div>
        </div>
      );
    },
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
        <tbody className="w-full h-32 text-center">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="shadow-lg"
              onClick={() => (window.location.href = "/profile")}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border border-gray-200 p-2 w-auto h-32 font-inter font-normal text-base non-italic"
                >
                  <a href="profile">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </a>
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
