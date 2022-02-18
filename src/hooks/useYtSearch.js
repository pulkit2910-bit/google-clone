import { useState, useEffect } from "react";

const useYtSearch = (term, setLoading) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      fetch(
        `https://youtube-v31.p.rapidapi.com/search?q=${term}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
            "x-rapidapi-key":
              "4d14269acemsh25772768c61ae02p17dd71jsn433a92d0f8c4",
          },
        }
      )
      .then(res => res.json())
      .then((result) => {
          setData(result);
          setLoading(false);
      })
      .catch((err) => {
          console.error(err);
      });
    };

    fetchData();

  }, [term]);
  
  return { data };

};

export default useYtSearch;
