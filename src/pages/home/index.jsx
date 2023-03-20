import React from "react";
import fb from '../../../Assets/fb-logo.png'
import profile from '../../../Assets/profile.jpeg'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus,faUserCircle,faMessage,faBell, faArrowDown, faCircleDown } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <div>
      <div className="bg-white flex flex-1 items-center justify-between h-16 px-5 static">
        <div className="">
          <Image
            className="object-contain aspect-square"
            src={fb}
            alt="fb-round"
            height={50}
          />
        </div>
        <div className="sm:w-6/6 md:w-2/6 lg:w-2/6">
          <form className="flex items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        <div className="flex justify-between space-x-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300">
            <FontAwesomeIcon
              icon={faMessage}
              style={{ fontSize: 22 ,color: "black" }}
            />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300">
            <FontAwesomeIcon
              icon={faBell}
              style={{ fontSize: 22, color: "black"}}
            />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 relative">
            
            <Image src={profile}  alt="profile-img" className="rounded-full w-16 h-12 object-cover aspect-auto"/>
            <div className="absolute bg-white w-5 h-5 flex items-center justify-center rounded-full bottom-0 top-8 left-7">
            <FontAwesomeIcon
              icon={faCircleDown}
              style={{ fontSize: 14, color: "gray"}}
            />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between flex-1">
        <div>Left</div>
        <div>center</div>
        <div>right</div>
      </div>
    </div>
  );
}

export default Home;
