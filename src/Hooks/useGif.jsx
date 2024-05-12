
import { useEffect, useState } from "react";
import axios from "axios";



const API_KEY = "6mHOWGzlOWIo5GKechqJP6bv8W81KxXt";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


export default function useGif(tag){
	const [gifs, setGifs] = useState("");
  const [loading, setLoading] = useState("false");


  async function fetchData(tag) {
    setLoading(true);

    const { data } = await axios.get( tag? `${url}&tag=${tag}`: url);

    const imageSrc = data.data.images.downsized_large.url;
    setGifs(imageSrc);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return{gifs,loading,fetchData};
}