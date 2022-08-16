import axios from "axios";

const verifyImages = ({ liveimage1, liveimage2 }) =>
  axios
    .post(
      `https://bws.bioid.com/extension/livedetection`,
      { liveimage1, liveimage2 },
      {
        headers: {
          Accept: "application/json",
        },
        auth: {
          username: "38c9ce68-e1ef-4356-b3b6-13d5819b8384",
          password: "qVUP6JTY6SLQTocG7FBD5rja",
        },
      }
    )
    .then((res) => {
      console.log({ res });
    });

export default verifyImages;
