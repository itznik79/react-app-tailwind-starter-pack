import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  console.log(API_KEY, "hiiiii")

  async function fetchData(tag) {
    setLoading(true);
    
    const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);

    console.log(API_KEY, "chal ja")
  }
  
  
  useEffect( () => {
    fetchData('car');
  },[] )

  return {gif, loading, fetchData};
};

export default useGif;
