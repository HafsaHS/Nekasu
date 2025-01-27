import React from "react";
import NavbarWithSimpleLinks from "../components/NavBar";
import message from "../assets/images/message.png";
import search from "../assets/images/search.png";
import redCircle from "../assets/images/redCircle.png";
import { Link } from "react-router";
import { Select, Option } from "@material-tailwind/react";
import TableInfluencer from "../components/TableInfluencer";
import FilterSort from "../components/FilterSort";

export default function AddInfluencer() {
  return (
    <div>
      <NavbarWithSimpleLinks />
      <div className="bg-light-blue flex w-[1440px] h-[52px] items-center gap-x-4 flex-row justify-end pr-5">
        <div>
          <img
            src={redCircle}
            alt="redCircle"
            className="w-[26px] h-[17px] absolute top-20"
          />
        </div>
        <div>
          <img
            src={message}
            alt="message"
            className="w-[47px] h-[45px]"
            aria-relevant="redCircle"
          />
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
      <div className="bg-white w-[1440px] h-[42px] shadow-lg flex justify-between p-5 items-center">
        User(S): 1000+
        <FilterSort />
      </div>
      <TableInfluencer />
    </div>
  );
}
