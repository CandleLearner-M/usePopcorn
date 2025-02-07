import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StarRating from "./StarRating";
// import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating maxRating={10} color="red" size={20} className="test" defaultRating={3} />
    <StarRating maxRating={5} color="blue" size={20} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Great']} />
  </StrictMode>
);
