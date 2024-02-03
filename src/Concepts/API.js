import axios from "axios";
import { useState } from "react";

export const GetResponse = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        console.log(response.data);
        setData(JSON.stringify(response.data.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <button onClick={getData}>Get API DATA</button>
      <p>{data}</p>
    </div>
  );
};
