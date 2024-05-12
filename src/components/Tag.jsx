
import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";



export default function Tag() {

  const [tag, setTag] = useState("");



 const {gifs,loading,fetchData} = useGif(tag);



  return (
    <div className="w-1/2 h-[450px]  bg-blue-500 flex flex-col mt-[35px]  gap-y-6 rounded-lg border border-black items-center mx-auto mb-[30px]">
      <h1 className="font-bold underline text-2xl  uppercase p-[25px] mt-[20px]">
        {tag} Random GIF
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full max-w-[450px] overflow-hidden">
          <img src={gifs} alt="gifs" className="w-full" />
        </div>
      )}

      <input
        type="text"
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center "
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
        onClick={()=> fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
}
