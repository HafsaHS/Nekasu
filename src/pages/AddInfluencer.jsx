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
    <div>
      <SubNavBar />
      <div className="bg-light-blue flex w-full h-14 items-center gap-x-4 flex-row justify-end pr-5">
        <div>
          <img src={redCircle} alt="redCircle" className="absolute top-16" />
        </div>
        <div>
          <img src={message} alt="message" aria-relevant="redCircle" />
        </div>

        <Link
          to="/"
          className="flex bg-blue-1 w-[292px] h-[38px] justify-center items-center rounded-md text-white font-inter font-bold text-[15px]"
        >
          <img src={search} alt="search" className="flex w-[38px] h-[30px]" />
          Search influencer here !!
        </Link>
        <div className="rounded-full bg-pink-1 w-12 h-[46px] flex justify-center items-center text-white">
          R T
        </div>
      </div>
      <div className="bg-white w-full h-10 shadow-lg flex justify-between p-5 items-center">
        User(S): 1000+
        <FilterSort />
      </div>
      <TableInfluencer />
    </div>
  );
}
