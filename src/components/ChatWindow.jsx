import { Expand } from "lucide-react";
import React from "react";
import profilePhoto from "../assets/images/profilePhoto.png";
import nekasuLogo from "../assets/images/nekasuLogo.png";

const ChatWindow = ({ isChatExpanded, setIsChatExpanded }) => {
  return (
    <div
      className="w-full border rounded-lg bg-white h-full flex flex-col"
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
      <button onClick={() => setIsChatExpanded(!isChatExpanded)}>
        {isChatExpanded ? (
          <svg
            width="33"
            height="31"
            viewBox="0 0 33 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9829 12.8114L2.663 13.9666C2.01883 14.0464 1.43345 13.5902 1.35746 12.949L1.1655 11.4002C1.08566 10.7561 1.54192 10.1707 2.1831 10.0947L8.78844 9.26904L7.96963 2.66284C7.88979 2.01867 8.34605 1.4333 8.98723 1.35731L10.539 1.16149C11.1832 1.08165 11.7685 1.53792 11.8445 2.17909L12.9997 11.499C13.0834 12.1462 12.6271 12.7316 11.9829 12.8114Z"
              fill="black"
            />
            <path
              d="M20.5742 17.4031L29.8942 16.2479C30.5383 16.1681 31.1237 16.6243 31.1997 17.2655L31.3917 18.8143C31.4715 19.4584 31.0152 20.0438 30.3741 20.1198L23.7679 20.9386L24.5867 27.5448C24.6665 28.189 24.2103 28.7744 23.5691 28.8504L22.0182 29.053C21.374 29.1329 20.7886 28.6766 20.7127 28.0354L19.5575 18.7155C19.4738 18.0683 19.9301 17.4829 20.5742 17.4031Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="34"
            height="31"
            viewBox="0 0 34 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.49459 6.16001L15.8145 5.00484C16.4587 4.925 17.0441 5.38127 17.1201 6.02244L17.312 7.57119C17.3919 8.21536 16.9356 8.80074 16.2944 8.87673L9.6891 9.70239L10.5079 16.3086C10.5878 16.9528 10.1315 17.5381 9.49031 17.6141L7.93856 17.8099C7.29438 17.8898 6.70901 17.4335 6.63302 16.7923L5.47785 7.4724C5.39415 6.82523 5.85042 6.23985 6.49459 6.16001Z"
              fill="black"
            />
            <path
              d="M27.8767 24.931L18.5568 26.0862C17.9126 26.166 17.3272 25.7098 17.2512 25.0686L17.0593 23.5198C16.9794 22.8757 17.4357 22.2903 18.0768 22.2143L24.683 21.3955L23.8642 14.7893C23.7844 14.1451 24.2407 13.5597 24.8818 13.4837L26.4327 13.2811C27.0769 13.2012 27.6623 13.6575 27.7383 14.2987L28.8934 23.6186C28.9771 24.2658 28.5209 24.8512 27.8767 24.931Z"
              fill="black"
            />
          </svg>
        )}
      </button>
      {/* Header */}
      <div className="bg-blue-100 p-3 flex items-center gap-2 rounded-t-lg">
        <img
          src={profilePhoto}
          alt="profilePhoto"
          className="w-[55px] h-[55px] border-white border-[3px] rounded-full"
        />
        <div>
          <p className="font-semibold font-inter text-xl">Yami Kabarkasa</p>
          <p className="text-[#4E704B] text-base font-light">Active</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-3 flex flex-col flex-grow justify-between">
        {/* Incoming Message */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-start gap-2">
            <img
              src={profilePhoto}
              alt="profilePhoto"
              className="w-[35px] h-[35px] border-white border-[3px] rounded-full"
            />
            <div className="bg-[#91EB9C] p-2 rounded-lg max-w-[70%]">
              <p className="font-inter text-base font-normal">Hii</p>
            </div>
          </div>

          {/* Incoming Message */}
          <div className="flex items-start gap-2">
            <img
              src="https://via.placeholder.com/30"
              alt="Profile"
              className="w-7 h-7 rounded-full"
            />
            <div className="bg-[#91EB9C] p-2 rounded-lg max-w-[70%]">
              <p className="font-inter text-base font-normal">
                I am Yami Kabarkasa
              </p>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex justify-end flex-row-reverse ">
            <img
              src={nekasuLogo}
              alt="nekasuLogo"
              className="w-[35px] h-[35px] border-white border-[3px] rounded-full"
            />
            <div className="bg-[#91EB9C] p-2 rounded-lg max-w-[70%] text-right">
              <p className="font-inter text-base font-normal">
                Hello Yami Kabarkasa
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#91EB9C] p-2 rounded-lg max-w-[70%] text-right">
              <p className="font-inter text-base font-normal">
                Nice to meet you
              </p>
            </div>
          </div>
        </div>

        {/* Incoming Message */}
        <div className="flex flex-col space-y-2 items-start justify-end">
          <div className="flex items-start gap-2">
            <div className="bg-[#91EB9C] p-2 rounded-lg w-full">
              <p>...</p>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-[#D9D9D9] p-2 rounded-lg w-full flex items-center gap-2">
            <span className="text-xl">🥰</span>
            <input
              className="font-inter text-base font-normal bg-[#D9D9D9] w-full"
              value={"Type your message here ..."}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
