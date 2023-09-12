import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
  const [menus, setMenus] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const navigate = useNavigate();

  const getMenus = () => {
    axios
      .get(
        `https://api.mudoapi.tech/menus?perPage=6&page=${currentPage}&name=${search}`
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
    setSearch(e.target.value.toLowerCase()); // Konversi ke huruf kecil agar pencarian case-insensitive
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
  
  const cardStyle = {
    width: "18rem",
    margin: "0 auto",
    border: "2px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };
  
  const imageStyle = {
    height: "10rem",
    objectFit: "cover", // Mengatur gambar agar mengisi dengan benar
    borderRadius: "10px 10px 0 0", // Menyesuaikan radius sudut atas
  };

  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: "20px", fontSize: "36px", color: "black" }}>
          Wellcome!!
        </h1>
        <h1 style={{ marginBottom: "20px", fontSize: "36px", color: "black" }}>
          INI FOOD MARKET
        </h1>
        <div>
          <input
            onChange={handleChangeSearch}
            placeholder="Cari Menu"
            style={{
              padding: "10px",
              margin: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
          {menus.map((item, key) => (
            <div
            key={key}
            className="col-lg-4 col-md-6 col-sm-12 col-12"
            style={{ marginBottom: "20px", flex: "0 0 33.33%" }} // Atur lebar card
          >
            <div className="card" style={cardStyle}>
                <img
                  className="card-img-top"
                  alt="..."
                  style={imageStyle}
                  src={item?.imageUrl} 
                />
                <div className="card-body">
                  <h5 className="card-title">{item.type}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{item.name}</h6>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      onClick={() => handleDetail(item.id)}
                      className="btn btn-primary"
                      style={{ marginRight: "10px" }}
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn btn-danger"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {currentPage > 1 ? (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="btn btn-primary"
              style={{ margin: "10px" }}
            >
              Prev Page
            </button>
          ) : null}

          {nextPage !== 0 ? (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="btn btn-primary"
              style={{ margin: "10px" }}
            >
              Next Page
            </button>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
