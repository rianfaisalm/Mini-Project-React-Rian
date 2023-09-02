import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";

const UserDetail = () => {
  const [menu, setMenu] = useState({});
  const param = useParams();

  console.log(param.userId);

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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VybmFtZSI6Im11aHNpbjEiLCJ1c2VySWQiOjQsImJyYW5jaElkIjowLCJlbWFpbCI6IiIsInJvbGVOYW1lIjoiZW1wbG95ZWUifSwiaXNzIjoibXVkby1hcHAifQ.ix82FNh3k9EBPfBT7ZXfJSU_4BTxvYwyKeAlz5bJHss";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`https://api.mudoapi.tech/menu/${param?.userId}`, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h1>Halaman Detail</h1>
        <h1>{menu?.name}</h1>
        <p>{menu?.description}</p>
        <img style={{ width: "200px" }} src={menu?.imageUrl} />
        <button onClick={handleDelete}>delete</button>
      </div>
    </>
  );
};

export default UserDetail;
