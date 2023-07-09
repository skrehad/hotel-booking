import { useEffect, useState } from "react";

const useToken = (email) => {
  console.log("useToken", email);
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("useToken", data);

          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            setToken(data.accessToken);
          }
        })
        .catch((error) => console.log(error.message));
    }
  }, [email]);
  return [token];
};

export default useToken;
