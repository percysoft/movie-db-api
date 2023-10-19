import { useEffect, useState } from "react";

export const useInfiniteScroll = (callback: () => void) => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    if (
      !isFetching &&
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
    ) {
      window.scrollTo(0, window.scrollY - 100);
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
      setIsFetching(false);
      callback();
    }
  }, [isFetching, callback]);
};
