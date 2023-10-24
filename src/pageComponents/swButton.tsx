interface ButtonProps {
  className?: string;
  id?: string;
  text?: string;
}

export const SWButton = (props: ButtonProps) => {
  return (
    <button className={props.className} id={props.id}>
      {props.text}
    </button>
  );
};

export default SWButton;
