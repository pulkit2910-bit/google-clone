import { useState, useEffect } from "react";

const baseURL = `https://google-search3.p.rapidapi.com/api/v1`;

const useGoogleSearch = (endpoint, type, setLoading) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      fetch(`${baseURL}/${type}/${endpoint}`, {
        method: "GET",
        headers: {
          "x-user-agent": "desktop",
          "x-proxy-location": "IN",
          "x-rapidapi-host": "google-search3.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_rapidAPI_KEY,
        },
      })
        .then(res => res.json())
        .then(result => {
            setData(result);
            setLoading(false);
        })
    };

    fetchData();
  }, [endpoint]);

  return { data };
};

export default useGoogleSearch;
