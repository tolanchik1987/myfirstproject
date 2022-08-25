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
import { connect } from "react-redux";
import { useEffect } from "react";
import { initialize } from "./components/redax/appReducer";
import Preloader from "./components/common/preloader/Preloader";

const App = (props) => {
   useEffect(()=>{
      props.initialize()
   })

   if (!props.initialized){ 
      return <Preloader />
   }
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
                     path="/profile/:profileId"
                     element={<ProfileConteiner />}
                  />
                  <Route
                     path="/dialogs"
                     element={<DialogsConteiner />}
                  />
                  <Route path="/news" element={<News />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/users" element={<UsersConteiner />} />
                  <Route
                     path="/dialogs/dialog_1"
                     element={<DialogsConteiner />}
                  />
                  <Route
                     path="/dialogs/dialog_2"
                     element={<DialogsConteiner />}
                  />
                  <Route
                     path="/dialogs/dialog_3"
                     element={<DialogsConteiner />}
                  />
                  <Route
                     path="/dialogs/dialog_4"
                     element={<DialogsConteiner />}
                  />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
};

const mapStateToProps = (state) => ({
   initialized: state.app.initialized
})

export default connect(mapStateToProps, { initialize })(App);
// export default App;
