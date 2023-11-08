import React, { useState } from "react";
import { SubFormFull } from "src/util/util";
import {
  BuySellButtons,
  EmailField,
  NameField,
  TargetPrice,
  TickerField,
} from "./formFields";
import SubmitError from "./submitError";
import SWButton from "./swButton";
import SubmitSuccess from "./submitSuccess";

function SubscribeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ticker, setTicker] = useState("");
  const [buyOrSell, setBuyOrSell] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleOpenSubmitError = () => setSubmitError(true);
  const handleCloseSubmitError = () => setSubmitError(false);
  const handleOpenSubmitSuccess = () => setSubmitSuccess(true);
  const handleCloseSubmitSuccess = () => setSubmitSuccess(false);

  const updateParentState = (option: string) => {
    setBuyOrSell(option);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!SubFormFull(name, email, ticker, buyOrSell, targetPrice)) {
      handleOpenSubmitError();
    } else {
      fetch(`http://127.0.0.1:5000/insert`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          ticker: ticker,
          action: buyOrSell,
          price: targetPrice,
        }),
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
      handleOpenSubmitSuccess();
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formEvent = new Event("submit", {
      bubbles: true,
    }) as unknown as React.FormEvent<HTMLFormElement>;
    handleSubmit(formEvent);
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <div className="flex justify-center mt-8">
          <NameField setName={setName} />
          <EmailField setEmail={setEmail} />
        </div>
        <TickerField setTicker={setTicker} />
        <BuySellButtons
          buyOrSell={buyOrSell}
          updateParentState={updateParentState}
        />
        <TargetPrice setTargetPrice={setTargetPrice} />
        <div className="mt-4">
          <SWButton
            type="submit"
            buttonText="Submit"
            className="SW-Button mx-4 min-w-[150px]"
            onClick={handleButtonClick}
          />
          {submitError && <SubmitError onClose={handleCloseSubmitError} />}
          {submitSuccess && (
            <SubmitSuccess onClose={handleCloseSubmitSuccess} />
          )}
        </div>
      </form>
    </>
  );
}

export default SubscribeForm;
