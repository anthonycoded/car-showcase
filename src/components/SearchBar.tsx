"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

type Props = {};

const SearchBar = (props: Props) => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer />
      </div>
    </form>
  );
};

export default SearchBar;