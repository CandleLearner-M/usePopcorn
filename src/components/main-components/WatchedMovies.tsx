import { useState } from "react";
import IconButton from "./../common/Buttons";

interface WatchedMoviesProps {
  children: [React.ReactNode, React.ReactNode];
}

function WatchedMovies({ children }: WatchedMoviesProps) {
  const [isOpenWatchedModal, setIsOpenWatchedModal] = useState(true);
  const onToggleWatchedModal = () => setIsOpenWatchedModal((isOpen) => !isOpen);

  return (
    <div className="">
      <IconButton
        type={isOpenWatchedModal ? "minus" : "plus"}
        className=""
        onClick={onToggleWatchedModal}
      />
      {children[0]}
      {isOpenWatchedModal && children[1]}
    </div>
  );
}

export default WatchedMovies;
