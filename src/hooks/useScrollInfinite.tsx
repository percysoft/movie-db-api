import { useEffect, useState } from "react";

export const useInfiniteScroll = (callback: () => void) => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    if (
      !isFetching &&
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight 
    ) {
      window.scrollTo(0, window.scrollY - 5);

      setIsFetching(true);
    }
  };

  const addScrollListener = () => {
    window.addEventListener("scroll", handleScroll);
  };

  const removeScrollListener = () => {
    window.removeEventListener("scroll", handleScroll);
  };

  useEffect(() => {
    addScrollListener();
    return () => removeScrollListener();
  }, []);

  useEffect(() => {
    if (isFetching) {
      callback();
      setIsFetching(false);
    }
  }, [isFetching, callback]);
};
