import { headerBoxNames } from "@/app/data";
import { HeaderBoxProps } from "@/types";
import Image from "next/image";
import React from "react";

const HeaderBox = ({ title, status }: HeaderBoxProps) => {
  return (
    <header>
      <div className="flex justify-between items-start flex-wrap md:flex-nowrap">
        <div className="flex flex-col justify-between items-start gap-5">
          <div className="header-box-title gap-1">
            <h1 className="text-5xl font-bold">{title}</h1>
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
              <span
                className={
                  status === "Active"
                    ? "bg-green-600 rounded-[100%] dot"
                    : "bg-red-600 rounded-[100%] dot"
                }
              ></span>
              {status}
            </div>
          </div>
          <div className="header-user-display gap-3">
            <div className="flex items-center">
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
                className="user-icons ml-[-15px] z-8"
              />
              <Image
                src="/icons/profile-3.svg"
                alt="user image"
                width={0}
                height={0}
                className="user-icons  ml-[-15px] z-5"
              />
              <Image
                src="/icons/profile-4.svg"
                alt="user image"
                width={0}
                height={0}
                className="user-icons  ml-[-15px] z-3"
              />
            </div>
            <div className="flex items-center text-xl gap-2">
              {headerBoxNames.map((user, index) => {
                {
                  if (index < 3) {
                    return (
                      <p key={index}>
                        {user.name}
                        {index < 2 && ","}
                      </p>
                    );
                  }
                }
              })}
              <span>{`+${headerBoxNames.length - 3} others`}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <button className="bg-[#4B8B9F] rounded-4xl text-[#020303] px-7 py-3 font-medium text-lg">
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
