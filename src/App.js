import "./App.css";
import "../src/components/Null.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings"
import Music from "./components/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
               <Routes>
                  <Route path="/Profile" element={<Profile postData={props.postData}/>} />
                  <Route path="/Dialogs" element={<Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>} />
                  <Route path="/News" element={<News />} />
                  <Route path="/Settings" element={<Settings />} />
                  <Route path="/Music" element={<Music />} />
                  <Route path="/Dialogs/dialog_1" element={<Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>} />
                  <Route path="/Dialogs/dialog_2" element={<Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>} />
                  <Route path="/Dialogs/dialog_3" element={<Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>} />
                  <Route path="/Dialogs/dialog_4" element={<Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
};

export default App;
