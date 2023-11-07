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
