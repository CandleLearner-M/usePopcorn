import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import TextExpander from "./TextExpander";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <TextExpander visibleWordsCount={10} isExpanded={true} buttonColor="pink">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni itaque libero, laborum natus expedita perferendis numquam molestias facilis a illo minima delectus ducimus nostrum ex odio ad! Quia, placeat quis. adipisicing elit. Magni itaque libero, laborum natus expedita perferendis numquam molestias facilis a illo minima delectus ducimus nostrum ex odio ad! Quia, placeat quis. adipisicing elit. Magni itaque libero, laborum natus expedita perferendis numquam molestias facilis a illo minima delectus ducimus nostrum ex odio ad! Quia, placeat quis. adipisicing elit. Magni itaque libero, laborum natus expedita perferendis numquam molestias facilis a illo minima delectus ducimus nostrum ex odio ad! Quia, placeat quis.
    </TextExpander> */}
  </StrictMode>
);
