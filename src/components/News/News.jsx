import React, { useState } from "react";
import classes from "./News.module.css";
import { NewsAPI } from "../../api/api";

const News = (props) => {
   const [news, setNews] = useState();

   const getNews = async () => {
      const data = await NewsAPI.getNews();
      return setNews(
         data.articles.map((w, i) => {
            return (
               <p key={i}>
                  <b style={{ textAlign: "center" }}>{w.title}</b>
                  <br />
                  {w.description}
                  <br />
               </p>
            );
         })
      );
   };
   getNews();
   return (
      <div className={classes.conteiner}>
         <div className={classes.wrapper}>
            <h2>NEWS</h2>
            <span className={classes.title}>{news}</span>
            <p>
               <b style={{ textAlign: "center" }}>
                  {"lorem5 fdgfd gsdf gdsf gdf"}
               </b>
               <br />
               {
                  "w.descrigadfgfdgadf gfdag dafgadfg fadg adfg adfg adf gadf gadf gfd ga gl hkjfjjjjjjjjjjjjjjjjjj jkafg la gljkdfgakdfgldjfg jdflgkflhfdagaldfkj hdkfljghdfjkhalgjkhdfljk ghladfhgljdfh ljahldfjhg ljdfhglorem  ption"
               }
               <br />
            </p>
            <p>
               <b style={{ textAlign: "center" }}>
                  {"lorem5 fdgfd gsdf gdsf gdf"}
               </b>
               <br />
               {
                  "w.descrigadfgfdgadf gfdag dafgadfg fadg adfg adfg adf gadf gadf gfd ga gl hkjfjjjjjjjjjjjjjjjjjj jkafg la gljkdfgakdfgldjfg jdflgkflhfdagaldfkj hdkfljghdfjkhalgjkhdfljk ghladfhgljdfh ljahldfjhg ljdfhglorem  ption"
               }
               <br />
            </p>
            <p>
               <b style={{ textAlign: "center" }}>
                  {"lorem5 fdgfd gsdf gdsf gdf"}
               </b>
               <br />
               {
                  "w.descrigadfgfdgadf gfdag dafgadfg fadg adfg adfg adf gadf gadf gfd ga gl hkjfjjjjjjjjjjjjjjjjjj jkafg la gljkdfgakdfgldjfg jdflgkflhfdagaldfkj hdkfljghdfjkhalgjkhdfljk ghladfhgljdfh ljahldfjhg ljdfhglorem  ption"
               }
               <br />
            </p>
         </div>
      </div>
   );
};

export default News;
