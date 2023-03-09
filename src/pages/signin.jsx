import React from "react";
import Image from "next/image";
import fblogo from "../../Assets/fb_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
const signin = () => {
  return (
    <div
      style={{ background: "#F0F2F5", height: "100vh" }}
      className="flex justify-around items-center"
    >
      <div className="">
        <Image src={fblogo} alt="fb_logo" height={50} />
        <div className="p-3">
          <h1 style={{ fontFamily:"fontRegular", fontSize: "24px" }}>
            Recent Login
          </h1>
          <p className="text-gray-600">Click your picture or add an account</p>
          <div className="max-w-lg rounded-lg w-4/6 h-4/5 border bg-white border-gray-400 mt-5">
            <div
              className="p-5 flex items-center justify-center bg-slate-100 rounded-t-lg rounded-r-lg"
              style={{ height: "150px" }}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                style={{ fontSize: 40, color: "blue" }}
              />
            </div>
            <div className=" p-5 text-center">
              <h1
                style={{
                  fontFamily: "fontRegular",
                  color: "#1976F2",
                  fontSize: "20px",
                }}
              >
                Add Account
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-lg rounded shadow-lg w-60 h-10 bg-white">
        <h1>Sign in</h1>
      </div>
    </div>
  );
};

export default signin;
