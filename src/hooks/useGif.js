import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function useGif(tag) {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    try {
      setLoading(true);
      const { data } = await axios.get(
        tag
          ? `https://api.giphy.com/v1/gifs/random?api_key=RQk6MMZpvHh6MktrT21MThoXBYSAGU5j&tag=${tag}`
          : `https://api.giphy.com/v1/gifs/random?api_key=RQk6MMZpvHh6MktrT21MThoXBYSAGU5j`
      );
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (tag) {
      fetchData(tag);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);

  return { gif, loading, fetchData };
}

 
