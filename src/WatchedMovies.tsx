import { useState } from "react";
import IconButton from "./Buttons";

interface WatchedMoviesProps {
}

function WatchedMovies({ children }: WatchedMoviesProps) {
  const [isOpenWatchedModal, setIsOpenWatchedModal] = useState(true);
  const onToggleWatchedModal = () => setIsOpenWatchedModal((isOpen) => !isOpen);

  return (
    <div className="">
      <IconButton
        type={isOpenWatchedModal ? "minus" : "plus"}
        onClick={onToggleWatchedModal}
      />
      {children[0]}
      {isOpenWatchedModal && children[1]}
    </div>
  );
}

export default WatchedMovies;
