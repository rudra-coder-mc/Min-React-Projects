import React, { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  console.log(currency);
  const [data, setData] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_geGYjy7DIL6jK3d6qvibRIyQedNQfIEYC5uQnSy2&base_currency=${currency}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.data))
      .catch((error) => console.error(error));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
};

export default useCurrencyInfo;
