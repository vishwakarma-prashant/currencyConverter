import { useEffect, useState } from "react";
import "./App.css";
import useCurrencyInfo from "./custom-hooks/useCurrencyInfo";
import { InputBox } from "./components/component";
function App() {
  const [amount, setAmount] = useState(0);
  const [selectCurrrency, setSelectCurrency] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");

  let currencyInfo = useCurrencyInfo(from);

  let currencyOptions = Object.keys(currencyInfo);
  // console.log(currencyOptions);
  // console.log(currencyInfo);

  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  return (
    <div className="w-4/12 max-h-max m-auto bg-gray-400 border-2 mt-10">
      <InputBox
        label={"From"}
        amount={amount}
        onAmountChange={(am) => setAmount(am)}
        selectCurrency={from}
        currencyOptions={currencyOptions}
        onCurrencyChange={(cur) => setFrom(cur)}
      />
      <InputBox
        amountDisable={false}
        label="To"
        amount={convertedAmount}
        selectCurrency={to}
        currencyOptions={currencyOptions}
        onCurrencyChange={(cur) => setTo(cur)}
      />
      <div className="flex justify-center items-center">
        <button
          onClick={convert}
          className="bg-orange-600 m-10 p-2 font-bold text-teal-50 w-1/3 m-auto"
        >
          Convert
        </button>
        <button
          onClick={() => {
            setTo(from);
            setFrom(to);
            convert()
            // setAmount(convertedAmount);
            // setConvertedAmount(amount);
          }}
          className="bg-amber-500 m-10 p-2 font-bold text-slate-900 w-1/3 m-auto"
        >
          swap
        </button>
      </div>
    </div>
  );
}

export default App;

/*
https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json
*/
