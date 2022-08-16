import React, { useState } from "react";
import Webcam from "react-webcam";
import verifyImages from "./axios/verifyImages";
import "./App.css";

function App() {
  const webcamRef = React.useRef(null);

  const onVerify = () => {
    const imageSrc1 = webcamRef.current.getScreenshot();
    setImage1(imageSrc1);
    setTimeout(() => {
      const imageSrc2 = webcamRef.current.getScreenshot();
      setImage2(imageSrc2);
      verifyImages({ liveimage1: imageSrc1, liveimage2: imageSrc2 });
    }, 2000);
  };

  const [liveimage1, setImage1] = useState("");
  const [liveimage2, setImage2] = useState("");

  return (
    <div class="flex flex-col ">
      <div className="max-w-6xl mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg">
        <div className="ml-6 pt-1">
          <h1 className="text-3xl font-bold text-blue-700 leading-tight text-center">
            Bio ID ware
          </h1>
          <p className="mb-6 text-xl text-gray-700 leading-normal text-center">
            This demo detects if a person is real or fake using Bio ID API
          </p>
          <div class="mx-auto w-4/5">
            <Webcam
              audio={false}
              height={200}
              mirrored
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={480}
              videoConstraints={{
                facingMode: "user",
              }}
            />
          </div>
          <div class="flex flex-wrap justify-center">
            {liveimage1 && (
              <img
                height={150}
                width={300}
                src={liveimage1}
                class="p-1 bg-white border rounded"
                alt="imageI"
              />
            )}
            {liveimage2 && (
              <img
                height={150}
                width={300}
                src={liveimage2}
                class="p-1 bg-white border rounded"
                alt="imageI"
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={onVerify}
        class="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto"
      >
        Try To see if User is Real
      </button>
    </div>
  );
}

export default App;
