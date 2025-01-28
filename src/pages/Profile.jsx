import React, { useState } from "react";
import { Link } from "react-router";
import message from "../assets/images/message.png";
import search from "../assets/images/search.png";
import redCircle from "../assets/images/redCircle.png";
import backArrow from "../assets/images/backArrow.png";
import cover from "../assets/images/cover.png";
import profilePhoto from "../assets/images/profilePhoto.png";
import connection1 from "../assets/images/connection1.png";
import connection2 from "../assets/images/connection2.png";
import connection3 from "../assets/images/connection3.png";
import connection4 from "../assets/images/connection4.png";
import connection5 from "../assets/images/connection5.png";
import addSign from "../assets/images/addSign.png";
import SubNavBar from "../components/SubNavBar";
import ExtendedProfile from "../components/ExtendedProfile";
import { useNavigate } from "react-router";
import ChatWindow from "../components/ChatWindow";

const similarConnections = [
  {
    name: "Diufn Tiunfd",
    description: "Travelling and Inspiration",
    image: connection1,
  },
  {
    name: "Korem ipsum",
    description: "Travelling and Inspiration",
    image: connection2,
  },
  {
    name: "Worem ipsum",
    description: "Travelling and Inspiration",
    image: connection3,
  },
  {
    name: "Norem ipsum",
    description: "Travelling and Inspiration",
    image: connection4,
  },
  {
    name: "Vorem ipsum",
    description: "Travelling and Inspiration",
    image: connection5,
  },
];

const SimilarConnectionsCard = ({ name, description, image }) => {
  return (
    <div className="w-[358px] shadow-2xs flex justify-center p-4">
      <div className="w-[334px] h-[65px] flex flex-row items-center shadow-lg justify-center p-3 rounded-2xl">
        <div className="flex justify-center p-2 gap-x-2 shadow-md">
          <img src={image} alt={image} className="w-[52px] h-[47px]" />
          <div className="flex flex-col items-start justify-center">
            <h3 className="font-inter font-medium text-xl">{name}</h3>
            <p className="font-normal font-inter text-base">{description}</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex items-center">
            <img
              src={addSign}
              alt="addSign"
              className="w-[21.88px] h-[21.88px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Profile() {
  const navigate = useNavigate();
  const [showExtendedProfile, setShowExtendedProfile] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleDownloadClick = () => {
    setShowExtendedProfile(true);
  };

  const handleBackClick = () => {
    if (showExtendedProfile) {
      setShowExtendedProfile(false);
    } else {
      navigate(-1); // Navigate to the previous page
    }
  };

  return (
    <div>
      <SubNavBar />
      <div className="bg-light-blue flex w-[1440px] h-[52px] items-center gap-x-4 flex-row justify-between pr-5">
        <div className="flex justify-items-start gap-x-4">
          <img
            src={backArrow}
            alt="backArrow"
            className="w-[29.07px] h-[36.89px] cursor-pointer pr-2"
            onClick={handleBackClick}
          />
        </div>
        <div
          className="flex justify-items-end gap-x-4 justify-center items-center cursor-pointer"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <div>
            <img
              src={redCircle}
              alt="redCircle"
              className="w-[26px] h-[17px] absolute top-[62px]"
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
        <div
          className={`flex flex-col gap-y-5 items-center px-10 ${
            showExtendedProfile ? "w-full" : isChatOpen ? "w-2/4" : "w-3/4"
          }`}
        >
          <div className={showExtendedProfile ? "w-full" : ""}>
            <img
              src={cover}
              alt="Cover"
              className={`flex-1 items-center justify-center transition-all duration-300 ${
                showExtendedProfile ? "w-full" : "w-[966px]"
              } h-[210px] bg-cover -mb-20 p-2`}
            />
            <div className="flex flex-row items-end space-x-2 px-6">
              <img
                src={profilePhoto}
                alt="profilePhoto"
                className="w-[205px] h-[198px] rounded-full border-3 border-white"
              />
              <div className="pb-2">
                <div className="flex flex-row justify-start items-center gap-x-3">
                  <h1 className="text-3xl font-bold">Yami Kabarkasa</h1>
                  <span className="bg-[#C8D5F7] rounded-lg w-[49px] h-[18px] text-xs font-extrabold font-inter justify-center items-center flex text-[#2F4A8C]">
                    PRO
                  </span>
                </div>
                <p className="text-gray-600">username@yami2911</p>
                <p className="text-gray-600">Travelling influencer</p>
                <p className="text-gray-600">🇮🇳 India, Delhi</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-14 items-start w-full">
            <div className="flex flex-col text-left">
              <span className="font-inter text-base font-light">Followers</span>
              <span className="font-inter text-base font-bold text-[#3C6BDF]">
                60.07 k
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-inter text-base font-light">Views</span>
              <span className="font-inter text-base font-bold text-[#3C6BDF]">
                39.8 K
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-inter text-base font-light">
                Growth Rate
              </span>
              <span className="font-inter text-base font-bold text-[#23930C]">
                78 %
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-inter text-base font-light">
                Engagement Rate
              </span>
              <span className="font-inter text-base font-bold text-[#23930C]">
                0.45 %
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-inter text-base font-semibold text-black/75">
              Bio:{" "}
            </span>
            <span className="font-inter text-base font-normal">
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </span>
            <div className="flex flex-row justify-start items-center gap-x-4 mt-10">
              <button
                type="button"
                className="bg-[#0B1B45] w-[214px] h-[45px] text-white rounded-xl"
                onClick={handleDownloadClick}
              >
                Download Profile
              </button>
              <div>
                <img
                  src={message}
                  alt="message"
                  className="w-[47px] h-[45px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-1/2 shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4">
          <div className="flex flex-col items-start w-1/2 pr-4 py-4">
            <ChatWindow />
          </div>
          <div className="flex flex-col items-start w-1/2 pr-4 py-4">
            <div className="text-[32px] font-inter font-semibold mb-2 text-center ">
              People with similar connections
            </div>
            <div className="">
              {similarConnections.map((connection, index) => (
                <SimilarConnectionsCard
                  key={index}
                  name={connection.name}
                  description={connection.description}
                  image={connection.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {showExtendedProfile && (
        <div>
          <ExtendedProfile />
        </div>
      )}
    </div>
  );
}
