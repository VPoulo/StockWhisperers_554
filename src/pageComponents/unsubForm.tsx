import { useState } from "react";
import { EmailField, TickerField } from "./formFields";
import SWButton from "./swButton";
import { UnsubFormFull } from "src/util/util";
import SubmitError from "./submitError";
import SubmitSuccess from "./submitSuccess";

function UnsubForm() {
  const [email, setEmail] = useState("");
  const [ticker, setTicker] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleOpenSubmitError = () => setSubmitError(true);
  const handleCloseSubmitError = () => setSubmitError(false);
  const handleOpenSubmitSuccess = () => setSubmitSuccess(true);
  const handleCloseSubmitSuccess = () => setSubmitSuccess(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!UnsubFormFull(email, ticker)) {
      handleOpenSubmitError();
    } else {
      fetch(`http://127.0.0.1:5000/delete`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          ticker: ticker,
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
    <form action="">
      <div className="mt-4">
        <EmailField setEmail={setEmail} />
        <TickerField setTicker={setTicker} />
      </div>

      <div className="mt-4">
        <SWButton
          type="submit"
          buttonText="Submit"
          className="SW-Button mx-4 min-w-[150px]"
          onClick={handleButtonClick}
        />
        {submitError && <SubmitError onClose={handleCloseSubmitError} />}
        {submitSuccess && <SubmitSuccess onClose={handleCloseSubmitSuccess} />}
      </div>
    </form>
  );
}
export default UnsubForm;
