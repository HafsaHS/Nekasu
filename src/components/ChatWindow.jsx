import React from "react";
import sendArrow from "../assets/images/sendArrow.png";
import profilePhoto from "../assets/images/profilePhoto.png";
import nekasuLogo from "../assets/images/nekasuLogo.png";

const ChatWindow = () => {
  return (
    <div className="w-[419px] border rounded-lg shadow-lg bg-white h-[494px]">
      {/* Header */}
      <div className="bg-blue-100 p-3 flex items-center gap-2 rounded-t-lg">
        <img
          src={profilePhoto}
          alt="profilePhoto"
          className="w-[55px] h-[55px] rounded-full"
        />
        <div>
          <p className="font-semibold">Yami Kabarkasa</p>
          <p className="text-green-600 text-sm">Active</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-3 space-y-2">
        {/* Incoming Message */}
        <div className="flex items-start gap-2">
          <img
            src={profilePhoto}
            alt="profilePhoto"
            className="w-[35px] h-[35px] rounded-full"
          />
          <div className="bg-green-200 p-2 rounded-lg max-w-[70%]">
            <p>Hii</p>
          </div>
        </div>

        {/* Incoming Message */}
        <div className="flex items-start gap-2 m-10">
          <div className="bg-green-200 p-2 rounded-lg max-w-[70%]">
            <p>I am Yami Kabarkasa</p>
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="flex justify-end">
          <div className="bg-green-200 p-2 rounded-lg max-w-[70%] text-right">
            <p>Hello Yami Kabarkasa</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-green-200 p-2 rounded-lg max-w-[70%] text-right">
            <p>Nice to meet you</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          {/* Incoming Message */}
          <div className="flex items-start gap-2">
            <div className="bg-green-200 p-2 rounded-lg max-w-[70%]">
              <p>...</p>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-gray-200 p-2 rounded-lg w-full justify-between flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🥰</span>
              <p>Its great meating you</p>
            </div>
            <img src={sendArrow} alt="sendArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
