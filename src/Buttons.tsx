import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

type IconButtonProps = {
  type: "plus" | "minus";
  onClick?: () => void;
}

const IconButton = ({ type, onClick }: IconButtonProps) => {
  return (
    <button className="button" onClick={onClick}> 
      <FontAwesomeIcon icon={type === "plus" ? faPlus : faMinus} />
    </button>
  );
};

export default IconButton;