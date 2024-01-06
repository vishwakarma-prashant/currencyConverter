function InputBox({
  label = "a",
  className = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div
      className={`bg-grey-900 flex flex-row justify-between items-center m-2 ${className}`}
    >
      <div className="px-2 m-2 flex justify-center items-start flex-col">
        <label className="my-1 text-l font-bold">{label}</label>
        <input
          type="number"
          placeholder="enter num"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className=" outline-none text-center Fbg-gray-400"
        />
      </div>
      <div className="px-2 m-2 flex justify-center items-start flex-col">
        <label className="my-1 text-l font-bold">Currency Type</label>
        <select
          name=""
          id=""
          value={selectCurrency}
          className="px-9  outline-none Fbg-gray-400 "
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((val) => {
            return (
              <option
                key={val + Math.floor(Math.random() * 999 + 1)}
                value={val}
              >
                {val}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
