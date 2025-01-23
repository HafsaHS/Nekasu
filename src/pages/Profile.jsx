import React from "react";
import NavbarWithSimpleLinks from "../components/NavBar";
import { Link } from "react-router";
import message from "../assets/images/message.png";
import search from "../assets/images/search.png";
import redCircle from "../assets/images/redCircle.png";
import vector from "../assets/images/vector.png";
import cover from "../assets/images/cover.png";
import profilePhoto from "../assets/images/profilePhoto.png";

export default function Profile() {
  return (
    <div>
      <NavbarWithSimpleLinks />
      <div className="bg-light-blue flex w-[1440px] h-[52px] items-center gap-x-4 flex-row justify-between pr-5">
        <div className="flex justify-items-start gap-x-4">
          <img src={vector} alt="vector" className="w-[29.07px] h-[36.89px]" />
        </div>
        <div className="flex justify-items-end gap-x-4 justify-center items-center">
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
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col gap-y-5">
          <div className="">
            <img
              src={cover}
              alt="Cover"
              className="flex-1 items-center justify-center w-[966px] h-[210px] bg-cover -mb-20 p-2"
            />
            <div className="flex flex-row items-end space-x-2 px-6">
              <img
                src={profilePhoto}
                alt="profilePhoto"
                className="w-[205px] h-[198px] rounded-full border-3 border-white"
              />
              <div className="pb-2">
                <h1 className="text-3xl font-bold">Yami Kabarkasa</h1>
                <p className="text-gray-600">username@yami2911</p>
                <p className="text-gray-600">Travelling influencer</p>
                <p className="text-gray-600">🇮🇳 India, Delhi</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-14 px-6">
            <div className="flex flex-col text-center">
              <span className="font-inter text-base font-light">Followers</span>
              <span className="font-inter text-base font-bold text-[#3C6BDF]">
                60.07 k
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-inter text-base font-light">Followers</span>
              <span className="font-inter text-base font-bold text-[#3C6BDF]">
                60.07 k
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-inter text-base font-light">Followers</span>
              <span className="font-inter text-base font-bold text-[#3C6BDF]">
                60.07 k
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-inter text-base font-light">Followers</span>
              <span className="font-inter text-base font-bold text-[#3C6BDF]">
                60.07 k
              </span>
            </div>
          </div>
          <div className="flex flex-col px-6">
            <span className="font-inter text-base font-semibold text-black/75">
              Bio:{" "}
            </span>
            <span className="font-inter text-base font-normal">
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </span>
          </div>
        </div>
        <div className="col-span-1 p-4">
          <div className="text-[32px] font-inter font-semibold mb-2 w-[290px] h-78px]">
            People with similar connections
          </div>
          <ul>
            <li className="mb-4">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Similar Connection"
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Connection Name</h3>
                  <p className="text-gray-600">Connection Bio</p>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Similar Connection"
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Connection Name</h3>
                  <p className="text-gray-600">Connection Bio</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
