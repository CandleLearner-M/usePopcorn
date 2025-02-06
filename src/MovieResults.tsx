import { useState } from "react";
import IconButton from "./Buttons";

type MovieResultsProps = {
  children: React.ReactNode;
};

function MovieResults({ children }: MovieResultsProps) {
  const [isOpenMovieModal, setIsOpenMovieModal] = useState(true);
  const onToggleMovieModal = () => setIsOpenMovieModal((isOpen) => !isOpen);

  return (
    <div className="films">
      <IconButton
        type={isOpenMovieModal ? "minus" : "plus"}
        onClick={onToggleMovieModal}
      />
      {isOpenMovieModal && children}
    </div>
  );
}

export default MovieResults;
