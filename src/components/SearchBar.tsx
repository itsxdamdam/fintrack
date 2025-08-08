import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const SearchBar: React.FC = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  const handleIconClick = () => {
    setShowInput((prev) => !prev);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="flex gap-2">
      {showInput && (
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search..."
          className="px-2 border rounded border-gray-300"
          autoFocus
        />
      )}
      <Image
        src="/icons/search.svg"
        alt="search"
        width={0}
        height={0}
        className="nav-icons"
        onClick={handleIconClick}
      />
    </div>
  );
};

export default SearchBar;
