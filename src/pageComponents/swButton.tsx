import React from "react";

interface ButtonProps {
  buttonText: string;
  onUpdate?: (data: string) => void;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: any;
}

export const SWButton = ({
  buttonText,
  onUpdate,
  onClick,
  className,
  id,
  type,
}: ButtonProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onUpdate) {
      onUpdate(buttonText);
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className={className} id={id} onClick={handleClick} type={type}>
      <div className="-mt-1">{buttonText}</div>
    </button>
  );
};

export default SWButton;
