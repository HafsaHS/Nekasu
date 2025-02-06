import React, { useState } from "react";
import { Link } from "react-router";
import message from "../assets/images/message.png";
import search from "../assets/images/search.png";
import backArrow from "../assets/images/backArrow.png";
import cover from "../assets/images/cover.png";
import profilePhoto from "../assets/images/profilePhoto.png";
import connection1 from "../assets/images/connection1.png";
import connection2 from "../assets/images/connection2.png";
import connection3 from "../assets/images/connection3.png";
import connection4 from "../assets/images/connection4.png";
import connection5 from "../assets/images/connection5.png";
import redCircleBig from "../assets/images/redCircleBig.png";
import redCircle from "../assets/images/redCircle.png";
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
    <div className="w-full md:w-80 shadow-2xs flex items-center justify-center p-2">
      <div className="w-full md:w-80 h-16 flex flex-row items-center shadow-lg justify-center p-3 rounded-2xl">
        <div className="flex justify-center p-2 gap-x-2 shadow-md">
          <img src={image} alt={image} className="w-10 h-10 md:w-12 md:h-12" />
          <div className="flex flex-col items-start justify-center">
            <h3 className="font-inter font-medium text-lg md:text-xl">
              {name}
            </h3>
            <p className="font-normal font-inter text-sm md:text-base">
              {description}
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex items-center">
            <img
              src={addSign}
              alt="addSign"
              className="w-5 h-5 md:w-6 md:h-6 cursor-pointer items-center justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactsCard = ({ name, description, image }) => {
  return (
    <div className="w-full md:w-[358px] shadow-2xs flex items-center justify-center p-2">
      <div className="w-full md:w-[334px] h-[65px] flex flex-row items-center shadow-lg justify-between p-3 rounded-2xl relative">
        <div className="flex justify-center p-2 gap-x-2">
          <img
            src={image}
            alt={image}
            className="w-[40px] h-[35px] md:w-[52px] md:h-[47px]"
          />
          <div className="flex flex-col items-start justify-center">
            <h3 className="font-inter font-medium text-lg md:text-xl">
              {name}
            </h3>
            <p className="font-normal font-inter text-sm md:text-base">
              {description}
            </p>
          </div>
        </div>
        <div
          className="absolute right-2 top-1 w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-no-repeat bg-cover flex items-center justify-center text-white font-bold rounded-full"
          style={{
            backgroundImage: `url(${redCircleBig})`,
          }}
        >
          4
        </div>
      </div>
    </div>
  );
};

export default function Profile() {
  const navigate = useNavigate();
  const [showExtendedProfile, setShowExtendedProfile] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatExpanded, setIsChatExpanded] = useState(false);

  const handleDownloadClick = () => {
    setShowExtendedProfile(true);
  };

  const handleBackClick = () => {
    if (showExtendedProfile) {
      setShowExtendedProfile(false);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen">
      <SubNavBar />
      <div className="bg-light-blue flex w-full h-12 md:h-14 items-center gap-x-2 md:gap-x-4 flex-row justify-between px-2 md:px-5">
        <div className="flex justify-items-start px-4 md:px-14">
          <img
            src={backArrow}
            alt="backArrow"
            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
            onClick={handleBackClick}
          />
        </div>
        <div
          className="flex justify-items-end gap-x-2 md:gap-x-4 justify-center items-center cursor-pointer"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <div className="relative">
            <img
              src={redCircle}
              alt="redCircle"
              className="w-4 h-3 md:w-6 md:h-4 absolute top-[-8px] md:top-[-12px]"
            />
            <img
              src={message}
              alt="message"
              className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
              aria-relevant="redCircle"
            />
          </div>

          <Link
            to="/"
            className="hidden md:flex bg-blue-1 w-72 h-10 justify-center items-center rounded-md text-white font-inter font-bold text-[15px]"
          >
            <img src={search} alt="search" className="flex w-10 h-8" />
            Search influencer here !!
          </Link>
          <div className="rounded-full bg-pink-1 w-8 h-8 md:w-10 md:h-10 flex justify-center items-center text-white text-sm md:text-base">
            R T
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {!isChatExpanded && (
          <div
            className={`flex flex-col gap-y-3 md:gap-y-5 items-center px-4 md:px-10 ${
              showExtendedProfile
                ? "w-full"
                : isChatOpen
                ? "w-full md:w-2/4"
                : "w-full md:w-3/4"
            }`}
          >
            <div className={showExtendedProfile ? "w-full" : "w-full"}>
              <img
                src={cover}
                alt="Cover"
                className={`w-full h-32 md:h-52 object-cover transition-all duration-300 -mb-16 md:-mb-20`}
              />
              <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0 md:space-x-2 px-2 md:px-6">
                <img
                  src={profilePhoto}
                  alt="profilePhoto"
                  className="w-32 h-32 md:w-52 md:h-48 rounded-full border-3 border-white"
                />
                <div className="pb-2 text-center md:text-left">
                  <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-y-1 md:gap-y-0 md:gap-x-3">
                    <h1 className="text-2xl md:text-3xl font-bold">
                      Yami Kabarkasa
                    </h1>
                    <span className="bg-[#C8D5F7] rounded-lg w-[49px] h-[18px] text-xs font-extrabold font-inter justify-center items-center flex text-[#2F4A8C]">
                      PRO
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    username@yami2911
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Travelling influencer
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    🇮🇳 India, Delhi
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-x-14 items-start w-full mt-16 md:mt-0">
              <div className="flex flex-col text-center md:text-left">
                <span className="font-inter text-sm md:text-base font-light">
                  Followers
                </span>
                <span className="font-inter text-sm md:text-base font-bold text-[#3C6BDF]">
                  60.07 k
                </span>
              </div>
              <div className="flex flex-col text-center">
                <span className="font-inter text-sm md:text-base font-light">
                  Views
                </span>
                <span className="font-inter text-sm md:text-base font-bold text-[#3C6BDF]">
                  39.8 K
                </span>
              </div>
              <div className="flex flex-col text-center">
                <span className="font-inter text-sm md:text-base font-light">
                  Growth Rate
                </span>
                <span className="font-inter text-sm md:text-base font-bold text-[#23930C]">
                  78 %
                </span>
              </div>
              <div className="flex flex-col text-center">
                <span className="font-inter text-sm md:text-base font-light">
                  Engagement Rate
                </span>
                <span className="font-inter text-sm md:text-base font-bold text-[#23930C]">
                  0.45 %
                </span>
              </div>
            </div>

            <div className="flex flex-col px-4 md:px-0">
              <span className="font-inter text-sm md:text-base font-semibold text-black/75">
                Bio:{" "}
              </span>
              <span className="font-inter text-sm md:text-base font-normal">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus.
              </span>
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-y-2 md:gap-y-0 md:gap-x-4 mt-6 md:mt-10">
                <button
                  type="button"
                  className="bg-[#0B1B45] w-full md:w-[214px] h-[45px] text-white rounded-xl"
                  onClick={handleDownloadClick}
                >
                  Download Profile
                </button>
                <div
                  onClick={() => setIsChatOpen(!isChatOpen)}
                  className="flex cursor-pointer"
                >
                  <img
                    src={message}
                    alt="message"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className={`flex flex-col md:flex-row shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] p-2 md:p-4 ${
            isChatOpen
              ? isChatExpanded
                ? "w-full"
                : "w-full md:w-2/4"
              : "w-full md:w-1/4"
          }`}
        >
          {isChatOpen && (
            <ChatWindow
              isChatExpanded={isChatExpanded}
              setIsChatExpanded={setIsChatExpanded}
            />
          )}
          <div
            className={`flex flex-col items-start ${
              isChatOpen ? "w-full md:w-1/2" : "w-full"
            } px-2 md:px-4 py-2 md:py-4`}
          >
            {isChatOpen ? (
              <div className="flex flex-col items-center w-full">
                {similarConnections.map((connection, index) => (
                  <ContactsCard
                    key={index}
                    name={connection.name}
                    description={connection.description}
                    image={connection.image}
                  />
                ))}
              </div>
            ) : (
              <>
                <div className="text-xl md:text-[32px] font-inter font-semibold mb-2 text-center w-full">
                  People with similar connections
                </div>
                <div className="flex flex-col items-center w-full">
                  {similarConnections.map((connection, index) => (
                    <SimilarConnectionsCard
                      key={index}
                      name={connection.name}
                      description={connection.description}
                      image={connection.image}
                    />
                  ))}
                </div>
              </>
            )}
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
