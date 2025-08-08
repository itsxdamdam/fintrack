import { headerBoxNames } from "@/app/data";
import { HeaderBoxProps } from "@/types";
import Image from "next/image";
import React from "react";

const HeaderBox = ({ title, status }: HeaderBoxProps) => {
  return (
    <header className="w-full">
      <div className="flex justify-between items-start">
        <div className="flex flex-col justify-between items-start gap-5">
          <div className="header-box-title">
            <h1 className="text-6xl font-bold">{title}</h1>
            <button>
              <Image
                src="/icons/caret-down.svg"
                alt="caret-down"
                width={0}
                height={0}
                className="caret"
              />
            </button>
            <div className="status">
              <div
                className={
                  status === "Active"
                    ? "bg-green-600 rounded-[100%] dot"
                    : "bg-red-600 rounded-[100%] dot"
                }
              ></div>
              {status}
            </div>
          </div>
          <div className="header-user-display ">
            <div className="flex relative">
              <Image
                src="/icons/profile-1.svg"
                alt="user image"
                width={0}
                height={0}
                className="user-icons z-10"
              />
              <Image
                src="/icons/profile-2.svg"
                alt="user image"
                width={0}
                height={0}
                className="user-icons absolute left-[40px] z-8"
              />
              <Image
                src="/icons/profile-3.svg"
                alt="user image"
                width={0}
                height={0}
                className="user-icons absolute left-[85px] z-5"
              />
              <Image
                src="/icons/profile-4.svg"
                alt="user image"
                width={0}
                height={0}
                className="user-icons absolute left-[125px] z-3"
              />
            </div>
            <div className="flex justify-between items-center text-2xl">
              {headerBoxNames.map((user, index) => {
                {
                  if (index < 3) {
                    return (
                      <p key={index}>
                        {user.name}
                        {index < 2 && ","}&nbsp;
                      </p>
                    );
                  }
                }
              })}
              <span>{`+${headerBoxNames.length - 3} others`}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-[#4B8B9F] rounded-4xl text-[#020303] px-7 py-3 font-semibold text-xl mr-2">
            Share
          </button>
          <button className="rounded-4xl text-[#020303] px-5 py-3 border-2 border-[#49656E]/20 font-bold text-xl">
            <Image
              src="/icons/Union.svg"
              alt="ellipsis"
              width={0}
              height={0}
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderBox;
