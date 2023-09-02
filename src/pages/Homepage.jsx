import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

const Homepage = () => {
  const [menus, setMenus] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const navigate = useNavigate();
  const getMenus = () => {
    // const searchLower = search.toLo
    // query param, search param
    axios
      .get(
        `https://api.mudoapi.tech/menus?perPage=5&page=${currentPage}&name=${search}`
      )
      .then((res) => {
        console.log(res);
        const data = res?.data?.data?.Data;
        setCurrentPage(res.data.data.currentPage);
        setNextPage(res.data.data.nextPage);
        setMenus(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleChangeSearch = (e) => {
    //convert ke lowecase
    setSearch(e.target.value);
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete(`https://api.mudoapi.tech/menu/${id}`, config)
      .then((res) => {
        console.log(res);
        getMenus();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenus();
  }, [search, currentPage]);

  return (
    <>
      <Navbar />
      <div>
        <h1>ini homepage</h1>
        <div>
          <input onChange={handleChangeSearch} />
          {/* <button onClick={getMenus}>cari</button> */}
        </div>
        {menus.map((item, key) => (
          <div key={key} style={{ marginBottom: "40px" }}>
            <h3> {item.name}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleDetail(item.id)}>Detail</button>
            <button onClick={() => handleDelete(item.id)}>delete</button>
          </div>
        ))}
        <div>
          {currentPage > 1 ? (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Prev page
            </button>
          ) : null}

          {nextPage !== 0 ? (
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Next page
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Homepage;
