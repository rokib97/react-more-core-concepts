import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setError(true);
          setIsLoading(false);
          return;
        }
        const value = await res.json();
        setData(value);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
