import React from "react";
import NavbarWithSimpleLinks from "../components/MainNavBar";
import message from "../assets/images/message.png";
import search from "../assets/images/search.png";
import redCircle from "../assets/images/redCircle.png";
import { Link } from "react-router";
import { Select, Option } from "@material-tailwind/react";
import TableInfluencer from "../components/TableInfluencer";
import FilterSort from "../components/FilterSort";
import SubNavBar from "../components/SubNavBar";

export default function AddInfluencer() {
  return (
    <div className="min-h-screen">
      <SubNavBar />
      <div className="bg-light-blue flex w-full h-12 md:h-14 items-center gap-x-2 md:gap-x-4 flex-row justify-between px-2 md:px-5">
        <div className="w-4 md:w-0"></div>
        <div className="flex items-center gap-x-2 md:gap-x-4">
          <div className="relative">
            <img
              src={redCircle}
              alt="redCircle"
              className="absolute w-4 md:w-auto top-[-8px] md:top-[-12px] right-0"
            />
            <img
              src={message}
              alt="message"
              className="w-8 h-8 md:w-10 md:h-10"
              aria-relevant="redCircle"
            />
          </div>
          <Link
            to="/"
            className="hidden md:flex bg-blue-1 w-[200px] md:w-[292px] h-[34px] md:h-[38px] justify-center items-center rounded-md text-white font-inter font-bold text-[14px] md:text-[15px]"
          >
            <img
              src={search}
              alt="search"
              className="w-[30px] md:w-[38px] h-[24px] md:h-[30px]"
            />
            <span className="hidden md:inline">Search influencer here !!</span>
          </Link>

          <div className="rounded-full bg-pink-1 w-8 h-8 md:w-12 md:h-[46px] flex justify-center items-center text-white text-sm md:text-base">
            R T
          </div>
        </div>
      </div>

      <Link
        to="/"
        className="md:hidden flex bg-blue-1 mx-2 my-2 h-[34px] justify-center items-center rounded-md text-white font-inter font-bold text-[14px]"
      >
        <img src={search} alt="search" className="w-[30px] h-[24px]" />
        Search influencer here !!
      </Link>

      <div className="bg-white w-full h-auto md:h-10 shadow-lg flex flex-col md:flex-row justify-between p-3 md:p-5 items-start md:items-center gap-y-2 md:gap-y-0">
        <div className="text-sm md:text-base">User(S): 1000+</div>
        <div className="w-full md:w-auto">
          <FilterSort />
        </div>
      </div>

      {/* Table section */}
      <div className="overflow-x-auto">
        <TableInfluencer />
      </div>
    </div>
  );
}
