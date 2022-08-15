import "./App.css";
import "../src/components/Null.css";

import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsConteiner from "./components/Dialogs/DialogsConteiner";
import UsersConteiner from "./components/Users/UsersConteiner";
import ProfileConteiner from "./components/Profile/ProfileConteiner";
import HeaderConteiner from "./components/Header/HeaderConteiner";
import LoginForm from "./components/Login/LoginForm";

const App = (props) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <HeaderConteiner />
            <Navbar />
            <div className="app-wrapper-content">
               <Routes>
                  <Route path="/login" element={<LoginForm />} /> 
                  <Route path="/" element={<ProfileConteiner />} />
                  <Route path="/profile" element={<ProfileConteiner />} />
                  <Route
                     path="/Profile/:profileId"
                     element={<ProfileConteiner />}
                  />
                  <Route
                     path="/Dialogs"
                     element={<DialogsConteiner />}
                  />
                  <Route path="/News" element={<News />} />
                  <Route path="/Settings" element={<Settings />} />
                  <Route path="/Music" element={<Music />} />
                  <Route path="/Users" element={<UsersConteiner />} />
                  <Route
                     path="/Dialogs/dialog_1"
                     element={<DialogsConteiner />}
                  />
                  <Route
                     path="/Dialogs/dialog_2"
                     element={<DialogsConteiner />}
                  />
                  <Route
                     path="/Dialogs/dialog_3"
                     element={<DialogsConteiner />}
                  />
                  <Route
                     path="/Dialogs/dialog_4"
                     element={<DialogsConteiner />}
                  />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
};

export default App;
