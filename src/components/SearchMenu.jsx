import React from "react";

const SearchMenu = ({ handleChangeSearch, getMenus }) => {
  return (
    <div>
      <input onChange={handleChangeSearch} />
      <button onClick={getMenus}>cari</button>
    </div>
  );
};

export default SearchMenu;
