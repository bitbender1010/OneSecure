import axios from "axios";

const gToken = () => {
  let data = {
    username: "jay",
    password: "1234",
  };

  axios
    .post("https://authapitest.herokuapp.com/api/token/", data)
    .then((res: any) => {
      const token =  res.data.access
    })
    .catch((err) => {
      console.log(err);
    });
};




export default gToken;
