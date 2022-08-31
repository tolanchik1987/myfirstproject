import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/redax/reduxStore";

import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";

const slideInDownAnimation = keyframes`${bounceInDown}`;

const AnimationDiv = styled.div`
   animation: 1s ${slideInDownAnimation};
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <React.StrictMode>
      <AnimationDiv>
         <Provider store={store}>
            <App />
         </Provider>
      </AnimationDiv>
   </React.StrictMode> 
);

reportWebVitals();
