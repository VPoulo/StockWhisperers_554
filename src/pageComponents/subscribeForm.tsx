import React, { useState } from "react";
import { validTicker } from "src/util/util";
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

  const formFull = () => {
    if (
      name.length > 0 &&
      email.length > 0 &&
      ticker.length > 0 &&
      buyOrSell.length > 0 &&
      targetPrice.length >= 0
    )
      return true;
    return false;
  };

  const updateParentState = (option: string) => {
    setBuyOrSell(option);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!formFull() || !validTicker(ticker.toUpperCase())) {
      handleOpenSubmitError();
    } else {
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
