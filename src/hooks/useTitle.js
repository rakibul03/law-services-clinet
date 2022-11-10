import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Bite Legal`;
  }, [title]);
};

export default useTitle;
