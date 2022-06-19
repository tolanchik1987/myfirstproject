import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const dialogsData = [
   {id: "dialog_1", name: "Andrey"},
   {id: "dialog_2", name: "Stas"},
   {id: "dialog_3", name: "Nastya"},
   {id: "dialog_4", name: "Sveta"}
]

const messageData = [
   {message: "1. Counting objects: 100% (42/42), done." },
   {message: "2 .Delta compression using up to 4 threads" },
   {message: "3. Writing objects: 100% (27/27), 94.08 KiB | 1.40 MiB/s, done." },
   {message: "4. Попробуйте новую кроссплатформенную оболочку PowerShell" }
]

const postData = [
   {id: 1, message: "How i You?", likeCount: 15},
   {id: 2, message: "Whot is your name?", likeCount: 35}
]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <App dialogsData={dialogsData} messageData={messageData} postData={postData}/>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();