"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Modal from "./Modal";
// import React from "react";

const Navbar = ({menu}) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const TopMenuList = ["Transfer", "Withdraw", "Block", "Delete"];

  return (
    <nav>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Image
              src="/icons/menu.svg"
              alt="menu"
              width={0}
              height={0}
              className="nav-icons"
              onClick={menu}
            />
            <Link href="/">
              <Image
                src="/icons/logo.svg"
                alt="logo"
                width={0}
                height={0}
                className="logo"
              />
            </Link>
          </div>
          <div className="flex gap-5">
            <SearchBar />
            <div className="flex items-center flex-col gap-2">
              <Image
                src="/icons/app-grid.svg"
                alt="app-grid"
                width={0}
                height={0}
                className="nav-icons"
                onClick={handleModal}
              />
              {showModal && <Modal bgColor="black" items={TopMenuList} />}
            </div>
            <Image
              src="/icons/profile.svg"
              alt="profile image"
              width={0}
              height={0}
              className="nav-icons"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
