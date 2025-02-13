import { useState } from "react";

type TextExpanderProp = {
  children: string;
  visibleWordsCount: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  className?: string;
  buttonColor?: string;
  isExpanded?: boolean;
};
export default function TextExpander({
  children,
  visibleWordsCount,
  collapseButtonText = "Show Less",
  expandButtonText = "Show More",
  className = "",
  buttonColor = "gray",
  isExpanded = false,
}: TextExpanderProp) {
  const [textIsExpanded, setTextIsExpanded] = useState(isExpanded);

  const displayText = textIsExpanded
    ? children
    : children.split(" ").slice(0, visibleWordsCount).join(" ") + "...";

  return (
    <p className={className}>
      <span>{displayText}</span>
      <span
        onClick={() => setTextIsExpanded((stat) => !stat)}
        style={{ cursor: "pointer", marginLeft: "5px", color: buttonColor }}
      >
        {textIsExpanded ? collapseButtonText : expandButtonText}
      </span>
    </p>
  );
}
