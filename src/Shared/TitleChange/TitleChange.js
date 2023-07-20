import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Hotel Booking`;
  }, [title]);
};
export default useTitle;
