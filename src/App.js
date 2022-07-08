import "./App.css";
import "../src/components/Null.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
               <Routes>
                  <Route
                     path="/"
                     element={
                        <Profile
                           state={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}
                           btnIncrement={props.btnIncrement}
                        />
                     }
                  />
                  <Route
                     path="/Profile"
                     element={
                        <Profile
                           state={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}
                           btnIncrement={props.btnIncrement}
                        />
                     }
                  />
                  <Route
                     path="/Dialogs"
                     element={
                        <Dialogs
                           state={props.state.dialogsPage}
                           addMessage={props.addMessage}
                           updateNewMessageText={props.updateNewMessageText}
                        />
                     }
                  />
                  <Route path="/News" element={<News />} />
                  <Route path="/Settings" element={<Settings />} />
                  <Route path="/Music" element={<Music />} />
                  <Route
                     path="/Dialogs/dialog_1"
                     element={
                        <Dialogs
                           state={props.state.dialogsPage}
                           addMessage={props.addMessage}
                           updateNewMessageText={props.updateNewMessageText}
                        />
                     }
                  />
                  <Route
                     path="/Dialogs/dialog_2"
                     element={
                        <Dialogs
                           state={props.state.dialogsPage}
                           addMessage={props.addMessage}
                           updateNewMessageText={props.updateNewMessageText}
                        />
                     }
                  />
                  <Route
                     path="/Dialogs/dialog_3"
                     element={
                        <Dialogs
                           state={props.state.dialogsPage}
                           addMessage={props.addMessage}
                           updateNewMessageText={props.updateNewMessageText}
                        />
                     }
                  />
                  <Route
                     path="/Dialogs/dialog_4"
                     element={
                        <Dialogs
                           state={props.state.dialogsPage}
                           addMessage={props.addMessage}
                           updateNewMessageText={props.updateNewMessageText}
                        />
                     }
                  />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
};

export default App;
