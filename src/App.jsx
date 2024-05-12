import React from "react";
import Random from "./components/Random";
import "./index.css"
import Tag from "./components/Tag";

export default function App() {
  return (
  <div className="w-full h-screen flex flex-col
   background relative overflow-x-hidden ">
	<h1 className="bg-white rounded-lg absolute w-11/12  text-center mt-[35px] ml-[57px]  py-2 px-10 text-4xl font-bold">Random GIFS</h1>
	<div className="flex flex-col mt-[30px]">
		<Random/>
		<Tag/>
	</div>
  </div>
  );
}
