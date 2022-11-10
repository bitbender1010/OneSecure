import axios from "axios";

const gToken = () => {
  let data = {
    username: "jay",
    password: "1234",
  };

  axios
    .post("https://authapitest.herokuapp.com/api/token/", data)
    .then((res: any) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default gToken;
