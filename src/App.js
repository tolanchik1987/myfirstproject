import React from "react";
import "./App.css";
import "../src/components/Null.css";
import Navbar from "./components/Navbar/Navbar";
// import News from "./components/News/News";
// import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import DialogsConteiner from "./components/Dialogs/DialogsConteiner";
import UsersConteiner from "./components/Users/UsersConteiner";
import ProfileConteiner from "./components/Profile/ProfileConteiner";
import HeaderConteiner from "./components/Header/HeaderConteiner";
// import LoginForm from "./components/Login/LoginForm";
import { connect } from "react-redux";
import { useEffect } from "react";
import { initialize } from "./components/redax/appReducer";
import Preloader from "./components/common/preloader/Preloader";
const Music = React.lazy(() => import("./components/Music/Music"));
const News = React.lazy(() => import("./components/News/News"));
const LoginForm = React.lazy(() => import("./components/Login/LoginForm"));
const DialogsConteiner = React.lazy(() =>
   import("./components/Dialogs/DialogsConteiner")
);
const Settings = React.lazy(() => import("./components/Settings/Settings"));

const App = (props) => {
   useEffect(() => {
      props.initialize();
   });

   if (!props.initialized) {
      return <Preloader />;
   }
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <HeaderConteiner />
            <Navbar />
            <div className="app-wrapper-content">
               <Routes>
                  <Route
                     path="/login"
                     element={
                        <React.Suspense fallback="loading...">
                           <LoginForm />
                        </React.Suspense>
                     }
                  />
                  <Route path="/" element={<ProfileConteiner />} />
                  <Route path="/profile" element={<ProfileConteiner />} />
                  <Route
                     path="/profile/:profileId"
                     element={<ProfileConteiner />}
                  />
                  <Route
                     path="/dialogs"
                     element={
                        <React.Suspense fallback="loading...">
                           <DialogsConteiner />
                        </React.Suspense>
                     }
                  />
                  <Route
                     path="/news"
                     element={
                        <React.Suspense fallback="loading...">
                           <News />
                        </React.Suspense>
                     }
                  />
                  <Route
                     path="/settings"
                     element={
                        <React.Suspense fallback="loading...">
                           <Settings />
                        </React.Suspense>
                     }
                  />

                  <Route
                     path="/music"
                     element={
                        <React.Suspense fallback="loading...">
                           <Music />
                        </React.Suspense>
                     }
                  />
                  <Route path="/users" element={<UsersConteiner />} />
                  <Route
                     path="/dialogs/dialog_1"
                     element={<DialogsConteiner />}
                  />
                  <Route
                     path="/dialogs/dialog_2"
                     element={
                        <React.Suspense fallback="loading...">
                           <DialogsConteiner />
                        </React.Suspense>
                     }
                  />
                  <Route
                     path="/dialogs/dialog_3"
                     element={
                        <React.Suspense fallback="loading...">
                           <DialogsConteiner />
                        </React.Suspense>
                     }
                  />
                  <Route
                     path="/dialogs/dialog_4"
                     element={
                        <React.Suspense fallback="loading...">
                           <DialogsConteiner />
                        </React.Suspense>
                     }
                  />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
};

const mapStateToProps = (state) => ({
   initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initialize })(App);
// export default App;
