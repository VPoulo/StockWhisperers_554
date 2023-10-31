import SWButton from "./swButton";

export const UnsubForm = () => {
  return (
    <form action="">
      <div className="mt-4">
        <input
          className="pl-3 pr-3 py-3 rounded-lg text-xl outline-none text-black"
          placeholder="Email Address"
          type="email"
          name="email"
          required
        />
        <p className="text-left ml-32">
          <span className="text-red-500">*</span>Required
        </p>
      </div>
      <div className="flex justify-center mx-4 mt-5">
        <input
          className="w-auto min-w-[435px] rounded-lg p-3 outline-none
            text-black"
          name="stockTicker"
          type="text"
          placeholder="Enter stock ticker (APPL, NVDA, etc.)"
          required
        />
      </div>
      <p className="text-left ml-10">
        <span className="text-red-500">*</span>Required
      </p>
      <div className="mt-4">
        <SWButton
          type="submit"
          buttonText="Submit"
          className="SW-Button mx-4 min-w-[150px]"
        />
      </div>
    </form>
  );
};
<></>;
export default UnsubForm;
