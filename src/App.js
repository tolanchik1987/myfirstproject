import "./App.css";
import "../src/components/Null.modul.css";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
   return (
      <div className="app-wrapper">
         <Header />
         <Navbar />
         <Profile />
      </div>
   );
};

export default App;
