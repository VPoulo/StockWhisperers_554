interface ButtonProps {
  buttonText: string;
  onUpdate?: (data: string) => void;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const SWButton = ({
  buttonText,
  onUpdate,
  className,
  id,
  type,
}: ButtonProps) => {
  const handleClick = () => {
    if (onUpdate) {
      onUpdate(buttonText);
    }
  };
  return (
    <button className={className} id={id} onClick={handleClick} type={type}>
      <div className="-mt-1">{buttonText}</div>
    </button>
  );
};

export default SWButton;
