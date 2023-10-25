import SWButton from "./swButton";

export const UnsubForm = () => {
  return (
    <form action="">
      <div className="mt-4">
        <p className="text-left">
          <span className="text-red-500">*</span>Required
        </p>
        <input
          className="pl-3 pr-3 py-3 rounded-lg text-xl outline-none text-black"
          placeholder="Email Address"
          type="email"
          name="email"
          required
        />
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
};
<></>;
export default UnsubForm;
