import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFilled } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CSSProperties } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  height: 100,
  gap: "20px",
};

const startContainerStyle = {
  display: "flex",
  gap: "3px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
} satisfies CSSProperties;

interface StarRatingProps {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  messages?: string[];
  defaultRating?: number;
}

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 30,
  className = "",
  messages = [],
  defaultRating = 0
}: StarRatingProps) {
  const [rating, setRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleHover = function (num: number) {
    setHoverRating(num);
  };

  return (
    <div style={containerStyle} className={className}>
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
      <p style={{ ...textStyle, color, fontSize: `${size}px` }}>
        {messages.length === maxRating
          ? messages[hoverRating - 1] || messages[rating - 1 ]
          : hoverRating || rating || ""}
      </p>
    </div>
  );
}

const starStyle = {
  display: "block",
  cursor: "pointer",
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
      <FontAwesomeIcon icon={isFilled ? faStarFilled : faStar} />
    </span>
  );
}

export default StarRating;
