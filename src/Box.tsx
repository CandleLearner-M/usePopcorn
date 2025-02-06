import { useState } from "react";
import IconButton from "./Buttons";

type BoxProps = {
  children: [React.ReactNode, React.ReactNode];
  className?: string;
};

function Box({ className, children }: BoxProps) {
  const [isOpen, setisOpen] = useState(true);
  const onToggleMovieModal = () => setisOpen((isOpen) => !isOpen);


    return (
      <div className={className}>
        <IconButton
          type={isOpen ? "minus" : "plus"}
          onClick={onToggleMovieModal}
        />
        {children[0]}
        {isOpen && children[1]}
      </div>
    );
}

export default Box;
