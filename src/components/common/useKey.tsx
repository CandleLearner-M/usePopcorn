import { useEffect } from "react";

export function useKey(actionFunc: () => void, key: string) {
  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (e.code === key) actionFunc();
    };
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [key, actionFunc]);
}
