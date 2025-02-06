import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const IconButton = ({ type }: { type: "plus" | "minus" }) => {
  return (
    <button className="button">
      <FontAwesomeIcon icon={type === "plus" ? faPlus : faMinus} />
    </button>
  );
};

export default IconButton;