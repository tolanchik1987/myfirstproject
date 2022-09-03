import React from "react";
import classes from "./Music.module.css";
import music from "../../assets/audio/music.mp3";

const Music = (props) => {
   return (
      <div className={classes.conteiner}>
         Music
         <div>
            <audio autoPlay="autoplay" controls>
               <source src={music} type="audio/mpeg"></source>   
            </audio>
         </div>
      </div>
   );
};

export default Music;
