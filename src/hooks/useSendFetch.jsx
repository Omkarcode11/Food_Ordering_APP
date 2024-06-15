import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";

function useSendFetch() {
  let [loading, setLoading] = useState(false);
  let [data, setData] = useState("");
  let [error, setError] = useState({ status: false, message: "" });

  async function sendData(str, data) {
    setLoading(true);
    try {
      let res = await axios.post(BASE_URL + str, data);
      setData(res.data);
    } catch (err) {
      setError({ status: true, message: err.message });
    } finally {
      setLoading(false);
    }
  }

   useEffect(()=>{


   },[])
  return { loading, sendData, error,data };
}

export default useSendFetch;
