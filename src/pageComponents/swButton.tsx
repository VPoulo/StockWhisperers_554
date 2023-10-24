interface ButtonProps {
  className?: string;
  id?: string;
  text?: string;
}

export const SWButton = (props: ButtonProps) => {
  return (
    <button className={props.className} id={props.id}>
      <div className="-mt-1">{props.text}</div>
    </button>
  );
};

export default SWButton;
