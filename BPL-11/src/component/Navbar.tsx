// import { SiBitcoinsv } from "react-icons/si";
import React from "react";

// import { useState } from "react";
import logo from "../assets/logo.png";
import { AiFillDollarCircle } from "react-icons/ai";


export default function Navbar({coin} :{coin:number}) {

  return (
    <nav className="container border-b items-center border-gray-200 bg-white mx-auto flex justify-between">
      <a href="#" className="flex items-center">
        <img src={logo} alt="logo" className=" object-contain" />
      </a>
      <div className="flex gap-5 items-center px-4 py-4">
        {/* Navigation */}
        <ul className="flex gap-8">
          <li>
            <a
              href="#"
              className="font-medium text-gray-900 transition hover:text-blue-600"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="font-medium text-gray-500 transition hover:text-blue-600"
            >
              Fixture
            </a>
          </li>

          <li>
            <a
              href="#"
              className="font-medium text-gray-500 transition hover:text-blue-600"
            >
              Teams
            </a>
          </li>

          <li>
            <a
              href="#"
              className="font-medium text-gray-500 transition hover:text-blue-600"
            >
              Schedules
            </a>
          </li>
        </ul>

        {/* Button */}
        <h2 className="btn flex gap-1 rounded-full border font-bold border-gray-300 bg-white px-5 py-2 text-gray-700 shadow-sm transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600">
          {/* <SiBitcoinsv /> */}
          <AiFillDollarCircle className="text-yellow-500 text-2xl" />
          Coin {coin}
        </h2>
      </div>
    </nav>
  );
}
