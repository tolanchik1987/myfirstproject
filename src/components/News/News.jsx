import React, { useState } from "react";
import classes from "./News.module.css";
import { NewsAPI } from "../../api/api";

const News = (props) => {
   const [news, setNews] = useState();

   const getNews = async () => {
      const data = await NewsAPI.getNews();
      return setNews(data.articles.map((w,i) => {return <b key={i}>{w.content}<br/></b>}));
   };
   getNews();
   return (
      <div className={classes.conteiner}>
         <div className={classes.wrapper}>
            <h2>NEWS</h2>
            <span className={classes.title}>{news}</span>
         </div>
      </div>
   );
};

export default News;
