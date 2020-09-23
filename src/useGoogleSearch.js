import React, { useEffect, useState } from "react";
import API_key from "./keys";

const CONTEXT_KEY = "508e46fb7bf6fc9d6";
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_key}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
