import React from "react";
import NavbarWithSimpleLinks from "../components/NavBar";
import { Link } from "react-router";
import message from "../assets/images/message.png";
import search from "../assets/images/search.png";
import redCircle from "../assets/images/redCircle.png";
import vector from "../assets/images/vector.png";
import cover from "../assets/images/cover.png";
import profilePhoto from "../assets/images/profilePhoto.png";
import connection1 from "../assets/images/connection1.png";
import connection2 from "../assets/images/connection2.png";
import connection3 from "../assets/images/connection3.png";
import connection4 from "../assets/images/connection4.png";
import connection5 from "../assets/images/connection5.png";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import addSign from "../assets/images/addSign.png";

const SimilarConnectionsCard = ({ name, description }) => {
  name = "Diufn Tiunfd";
  description = "Travelling and Inspiration";
  return (
    <div className="w-[358px] h-[414px] shadow-2xs flex justify-center p-4">
      <div className="w-[334px] h-[65px] flex flex-row items-center shadow-lg justify-center p-3 rounded-2xl">
        <div className="flex justify-center p-2 gap-x-2">
          <img
            src={connection1}
            alt="connection1"
            className="w-[52px] h-[47px]"
          />
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
          {/* <div className="w-[358px] h-[414px] shadow-lg">
            <Card className="w-[334px] h-[65px] flex-row flex-start">
              <CardHeader
                shadow={true}
                floated={false}
                className="flex justify-center"
              >
                <img
                  src={connection1}
                  alt="connection1"
                  className="w-[52px] h-[47px]"
                />
              </CardHeader>
              <CardBody className="flex flex-row justify-center">
                <div className="flex flex-col flex-start">
                  <Typography className="font-inter font-medium text-xl">
                    Diufn Tiunfd
                  </Typography>
                  <Typography className="font-normal font-inter text-base">
                    Travelling and Inspiration
                  </Typography>
                </div>

                <div className="flex flex-row justify-between items-center">
                  <img
                    src={addSign}
                    alt="addSign"
                    className="w-[21.88px] h-[21.88px]"
                  />
                </div>
              </CardBody>
            </Card>
          </div> */}
          <SimilarConnectionsCard />
        </div>
      </div>
    </div>
  );
}
