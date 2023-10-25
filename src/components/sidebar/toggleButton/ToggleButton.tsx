type ToggleButtonProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleButton = ({ setOpen }: ToggleButtonProps) => {
  return (
    <button onClick={() => setOpen((prev: boolean) => !prev)}>toggle</button>
  );
};

export default ToggleButton;
