import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type IconButtonProps = {
  type: "plus" | "minus"| "arrow";
  onClick?: () => void;
  className: string;
}

function IconButton  ({ type, onClick, className }: IconButtonProps) {
  return (
    <button className={className} onClick={onClick}> 
      <FontAwesomeIcon icon={type === "plus" ? faPlus : type === "minus"? faMinus: faArrowLeft} />
    </button>
  );
};

export default IconButton;