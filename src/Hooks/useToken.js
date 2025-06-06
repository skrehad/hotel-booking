import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(
        `https://hotel-booking-backend-server-skrehad.vercel.app/jwt?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            setToken(data.accessToken);
          }
        })
        .catch((error) => toast.error(error.message));
    }
  }, [email]);
  return [token];
};

export default useToken;
