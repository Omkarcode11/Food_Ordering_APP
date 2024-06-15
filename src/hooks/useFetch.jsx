import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";


function useFetch(str) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({status:false,message:""});

  async function getData() {
    setLoading(true);
    let data;
    try {
      data = await axios.get(BASE_URL+str);
      setMeals(data.data);
    } catch (err) {
      setError({status:true,message:err.message})
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { meals, loading ,error};
}

export default useFetch;
