import React, { useState } from "react";
import SWButton from "./swButton";

const buy: string = "Buy";
const sell: string = "Sell";

function SubscribeForm() {
  const formName = "name";
  const formEmail = "email";
  const formTicker = "ticker";
  const formTargetPrice = "targetPrice";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ticker, setTicker] = useState("");
  const [buyOrSell, setBuyOrSell] = useState("");
  const [targetPrice, setTargetPrice] = useState(0);

  const updateParentState = (option: string) => {
    setBuyOrSell(option);
  };
  const buttonStyleSelector = (toChange: string) => {
    return buyOrSell === toChange ? "SW-Button-Active " : "SW-Button ";
  };

  const handleInputUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputID: string
  ) => {
    const updateValue = e.target.value;
    if (inputID === formName) {
      setName(updateValue);
      console.log("Name: " + updateValue);
    } else if (inputID === formEmail) {
      setEmail(updateValue);
      console.log("Email: " + updateValue);
    } else if (inputID === formTicker) {
      setTicker(updateValue);
      console.log("Ticker: " + updateValue);
    } else if (inputID === formTargetPrice) {
      setTargetPrice(parseInt(updateValue, 10));
      console.log("Target price: " + updateValue + " | " + targetPrice);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("button clicked");
    const formEvent = new Event("submit", {
      bubbles: true,
    }) as unknown as React.FormEvent<HTMLFormElement>;
    handleSubmit(formEvent);
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <div className="flex justify-center mt-8">
          <div>
            <input
              className="mr-2 pl-3 pr-3 py-3 rounded-lg text-xl outline-none
                  text-black"
              placeholder="Name"
              type="text"
              name={formName}
              onChange={(event) => handleInputUpdate(event, formName)}
              required
            />
            <p className="text-left ml-4">
              <span className="text-left text-red-500">*</span>Required
            </p>
          </div>
          <div>
            <input
              className="ml-2 pl-3 pr-3 py-3 rounded-lg text-xl outline-none 
                  text-black"
              placeholder="Email Address"
              type="email"
              name={formEmail}
              onChange={(event) => handleInputUpdate(event, formEmail)}
              required
            />
            <p className="text-left ml-4">
              <span className="text-left text-red-500">*</span>Required
            </p>
          </div>
        </div>
        <div className="mx-4 mt-5">
          <input
            className="mt-5 w-auto min-w-[435px] rounded-lg p-3 outline-none
            text-black"
            name={formTicker}
            type="text"
            placeholder="Enter stock ticker (APPL, NVDA, etc.)"
            onChange={(event) => handleInputUpdate(event, formTicker)}
            required
          />
          <p className="text-left ml-12">
            <span className="text-red-500">*</span>Required
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <SWButton
            onUpdate={updateParentState}
            buttonText={buy}
            className={
              buttonStyleSelector(buy) +
              `mx-4 w-auto min-w-[200px] h-10 transition ease-in-out
              duration-300`
            }
            type="button"
          />
          <SWButton
            onUpdate={updateParentState}
            buttonText={sell}
            className={
              buttonStyleSelector(sell) +
              `mx-4 w-auto min-w-[200px] h-10 transition ease-in-out 
              duration-300`
            }
            type="button"
          />
        </div>
        <div className="flex justify-center -ml-9 mt-5">
          <div className="text-5xl mr-4">$</div>
          <input
            className="-ml-1 mt-1.5 w-auto min-w-[100px] rounded-lg p-3 
            outline-none text-black"
            name={formTargetPrice}
            type="number"
            min={0}
            placeholder="Enter target price"
            required
            onChange={(event) => handleInputUpdate(event, formTargetPrice)}
          />
        </div>
        <p className="mr-24">
          <span className="text-red-500">*</span>Required
        </p>
        <div className="flex"></div>
        <div className="mt-4">
          <SWButton
            type="submit"
            buttonText="Submit"
            className="SW-Button mx-4 min-w-[150px]"
            onClick={handleButtonClick}
          />
        </div>
      </form>
    </>
  );
}

export default SubscribeForm;
