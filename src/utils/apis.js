import axios from "axios";

export const getData = ({ api }) => {
  let respon;

  axios
    .get(api)
    .then((res) => {
      respon = res;
    })
    .catch((err) => {
      respon = err;
    });

  return respon;
};
