import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost, addMessage, updateNewPostText } from "./components/redax/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireTree = (state) => {
   root.render(
      <React.StrictMode>
         <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}/>
      </React.StrictMode>
   );
};
