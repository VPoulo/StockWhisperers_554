import { AllTickers } from "./allTickers";

export function handleInputUpdate(
  e: React.ChangeEvent<HTMLInputElement>,
  setVar: React.Dispatch<React.SetStateAction<string>>
) {
  const updateValue = e.target.value;
  setVar(updateValue);
}

export function buttonStyleSelector(buyOrSell: string, toChange: string) {
  return buyOrSell === toChange ? "SW-Button-Active " : "SW-Button ";
}

export function validTicker(tickerToCheck: string): boolean {
  return AllTickers.includes(tickerToCheck);
}

export function isEmail(email: string): boolean {
  const regexp = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
  return regexp.test(email);
}

export function targetPriceIsNumber(price: string): boolean {
  try {
    parseInt(price, 10);
  } catch (error) {
    return false;
  }
  return true && parseInt(price, 10) >= 0;
}

export function isBuyOrSell(buyOrSell: string): boolean {
  return buyOrSell === "Buy" || buyOrSell === "Sell";
}
