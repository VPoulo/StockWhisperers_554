import { useState } from "react";
import { EmailField, TickerField } from "./formFields";
import SWButton from "./swButton";
import { validTicker } from "src/util/util";

function UnsubForm() {
  const [email, setEmail] = useState("");
  const [ticker, setTicker] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleOpenSubmitError = () => setSubmitError(true);
  const handleCloseSubmitError = () => setSubmitError(false);
  const handleOpenSubmitSuccess = () => setSubmitSuccess(true);
  const handleCloseSubmitSuccess = () => setSubmitSuccess(false);

  const formFull = () => {
    if (email.length > 0 && ticker.length > 0) return true;
    return false;
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
        />
      </div>
    </form>
  );
}
export default UnsubForm;
