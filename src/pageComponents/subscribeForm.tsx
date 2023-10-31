import { useState } from "react";
import SWButton from "./swButton";

const buy: string = "Buy";
const sell: string = "Sell";
let buyOrSell: string = "";

export const SubscribeForm = () => {
  const [activeOption, setCurrentOption] = useState("Reset");
  const updateParentState = (option: string) => {
    setCurrentOption(option);
    buyOrSell = option;
  };
  const buttonStyleSelector = (toChange: string) => {
    return activeOption === toChange ? "SW-Button-Active " : "SW-Button ";
  };

  return (
    <>
      <form action="">
        <div className="flex justify-center mt-8">
          <div>
            <input
              className="mr-2 pl-3 pr-3 py-3 rounded-lg text-xl outline-none
                  text-black"
              placeholder="Name"
              type="text"
              name="name"
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
              name="email"
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
            name="stockTicker"
            type="text"
            placeholder="Enter stock ticker (APPL, NVDA, etc.)"
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
            className="-ml-1 mt-1.5 w-auto min-w-[100px] rounded-lg p-3 outline-none
              text-black"
            name="stockTicker"
            type="number"
            min={0}
            placeholder="Enter target price"
            required
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
          />
        </div>
      </form>
    </>
  );
};

export default SubscribeForm;
