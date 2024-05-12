import React from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";


export default function Random() {
    const {gifs,loading,fetchData} = useGif();

    return (
        <div className="w-1/2 h-[450px]  bg-green-500 flex flex-col gap-y-6 mt-[100px] rounded-lg border border-black items-center mx-auto">
            <h1 className="font-bold underline text-2xl  uppercase p-[25px] mt-[20px]">Random GIF</h1>
			{
				loading ? (<Spinner/>) :  (
<div className="w-full max-w-[450px] overflow-hidden">

						<img src={gifs} alt="gifs" className="w-full"/>
</div>
			)
			}

            <button className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]" onClick={()=> fetchData()}>Generate</button>
        </div>
    );
}
