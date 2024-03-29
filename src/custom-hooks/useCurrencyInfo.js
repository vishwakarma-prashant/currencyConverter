import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  let [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => setData(res[currency]));
    // console.log(data)
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
