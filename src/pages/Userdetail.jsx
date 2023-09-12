import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserDetail = () => {
  const [menu, setMenu] = useState({});
  const param = useParams();

  const getMenu = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param?.userId}`)
      .then((res) => {
        setMenu(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {

    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VybmFtZSI6Im11aHNpbjEiLCJ1c2VySWQiOjQsImJyYW5jaElkIjowLCJlbWFpbCI6IiIsInJvbGVOYW1lIjoiZW1wbG95ZWUifSwiaXNzIjoibXVkby1hcHAifQ.ix82FNh3k9EBPfBT7ZXfJSU_4BTxvYwyKeAlz5bJHss";

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    // axios
    //   .delete(`https://api.mudoapi.tech/menu/${param?.userId}`, config)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", color: "#000000" }}>Detail Menu</h1>
        <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "5px" }}>
          <h3>{menu?.name}</h3>
          <h4>{menu?.type}</h4>
          <img style={{ width: "300px" }} src={menu?.imageUrl} alt={menu?.name} />
          <p>{menu?.description}</p>
          <h2>Rp {menu?.price}</h2>
          {/* <button onClick={handleDelete} className="btn btn-danger" style={{ marginTop: "20px" }}>
            Hapus
          </button> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDetail;
