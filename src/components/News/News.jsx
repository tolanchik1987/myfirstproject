import React, { useState } from "react";
import classes from "./News.module.css";
import { NewsAPI } from "../../api/api";

const News = (props) => {
   const [news, setNews] = useState();

   const getNews = async () => {
      const data = await NewsAPI.getNews();
      const newsmap = data.articles.map((u) => u);
      setNews(newsmap.map((w) => w.title));
      return data;
   };
   getNews();
   return (
      <div className={classes.conteiner}>
         <div className={classes.wrapper}>
            <h2>NEWS</h2>
            <span>{news}</span>
         </div>
      </div>
   );
};

export default News;
