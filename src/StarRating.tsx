import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFilled } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CSSProperties } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const startContainerStyle = {
  display: "flex",
  gap: "5px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

interface StarRatingProps {
  maxRating?: number;
  color?: string;
  size?: string;
}

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = "25px",
}: StarRatingProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleHover = function (num: number) {
    setHoverRating(num);
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...startContainerStyle, color, fontSize: size }}>
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            key={index}
            onRate={() => setRating(index + 1)}
            onHoverIn={() => handleHover(index + 1)}
            onHoverOut={() => handleHover(0)}
            isFilled={
              hoverRating ? hoverRating >= index + 1 : index + 1 <= rating
            }
          />
        ))}
      </div>
      <p style={textStyle}>{hoverRating || rating || ""}</p>
    </div>
  );
}

const starStyle = {
  position: "relative",
  width: "25px",
  height: "25px",
  display: "block",
  cursor: "pointer",
} satisfies CSSProperties;

const iconStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  transition: "opacity 0.1s ease",
} satisfies CSSProperties;

interface StarProps {
  onRate: () => void;
  isFilled: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
}

function Star({ onRate, isFilled, onHoverIn, onHoverOut }: StarProps) {
  return (
    <span
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      <FontAwesomeIcon
        icon={faStar}
        style={{ ...iconStyle, opacity: isFilled ? 0 : 1 }}
      />
      <FontAwesomeIcon
        icon={faStarFilled}
        style={{ ...iconStyle, opacity: isFilled ? 1 : 0 }}
      />
    </span>
  );
}

export default StarRating;
