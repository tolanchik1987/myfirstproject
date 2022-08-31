import React, { useState } from "react";
import classes from "./Post.module.css";

const Post = (props) => {
   const [increment, setIncrement] = useState(0);

   const btnIncrement = () => {
      setIncrement(increment + 1);
   };

   const btnDecrement = () => {
      setIncrement(increment - 1);
   };

   return (
      <div className={classes.item}>
         <img
            alt=""
            src="https://publicdomainvectors.org/tn_img/Male-Avatar-2.webp"
         />
         {props.message}
         <div>
            <button onClick={btnIncrement}>
               <img
                  alt=""
                  src="https://pngimg.com/uploads/like/like_PNG14.png"
               />
               Like
            </button>
            <button onClick={btnDecrement}>
               <img
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEVMopz///87nJVGoJnf7euDurZBnpe11dM4m5SVxcFDn5jw9/b7/f3D3dt1tbDI4N6lzcq92tjQ5eOKv7trsKvY6ejk8O/t9fRtsaxeqqV2tbCs0c5TpqCSw79hrKadyMVHoZVxAAALZUlEQVR4nN2d2aKjIAyGFVqkLqdqa/fl/d9y1G4uoAQD6PxXMxc9+gmEEEjw/P9dnqXnxNGhyPNtkpVKtnlxOMaWnmya8Jhn6e7kEc5JKfZW+U/O2e20S7MiMvwGBglX2WbvlVQhpZ5YlIYlrLffZCtzLWqGMNo+T6xik6B1QEtO/thszbQmPmFcPB+MKMI1FBJyfub4bYlMGGWXkg4K16Bk6wy5KTEJo2BPGLjtOqKMnAJMSDzC5G863hfykqC9FxLh6s6R8N6QhDwPOK+GQpg9CCbeSyH522K83HTC+EoJOl6t8u8G023rVMLoyZgZvlqMplMZpxHGzwlTgyIjm8g4hTBOjbbflzEMHBEG1AZfzXibMHloE+Y3Q/ZFKLJfWSaM1twiXynK75rDUY/wyvHnvzGFLLNGeHjY7KA/kT8df1WDMHXQgC9RomFVwYSHsy0LKpJGM0IJAwMeKEQ0hDqrMML44mYENsU3BglXnmkfTUXscTRFGFieA2WiDNJTAYQ79z30I54aIIz3Lm1oV+SCTni8ubWhXbGHqhOnSLiCxz8Ni3qK9kaNMJ/PEPyKhmqhKiXC7UyMaEeswCJM5glYmtQch3Au06BAXGFiHCecMaAS4ihhNmfAcmIc7ahjhLMdgx/xMXMzQpjPHbC0qCOTxjBhMX/AcmIcnvoHCaM5LJZGRW+DDtwQYTwzX1QmutclPC0DsByKaz3C+5yWS8MiVx3CWc/0XQ34b1LC1ZIAPS+URhllhLHrVwaKPqCEl6VYmY/YE0YYzHDJOyKZEy4mPCwPUDoUxYTnpfXRSvRPnfC5nJmwKfHOlIhwEf62SETUT0WEN9dvqithPxUQXpfZRysRwZmNPuFxqX20ElMh/FuiHf0o7G8u9ghnGv1VFe/FNHqErl9xouhpjHDBZuYl0nXeOoTxIiIzg7oNEyp4M1XCS1dsRh+GZEOE0bjHzZJVT8U2PTs+hdLUEOFmvC2I5JBg8ZjLCGbtoE2LUGWylxH6/l19yVUlPLFmd2dDgvYO2oqftgjvCsNJTqgUnKMVF93vNtc6Se+lPN8Gcl3vwKO6rLXGaBIqjMJBQn8//LUp4+ddkB/gB0UzafqbWDJCpWXhEOFq4BNR4u0S7WyfCBR+bzngTUKlvjBEWPu0otP7Zd/cKW26yxEBgJ53FhNm0wkzRteH9BE2Ug9pScdO0zNDtpDQUXPftEF4VvvxEOGB0GoLIV5lm/XjRjnxzn/3oEBJKlR7vfdnbXinP8KhQaRKGHM6tEkySSCPmfyWGD9ClalilJCYI1RsgZca68QfoeIfcEYYg2K4pE+oOpLdEYKmxN8i6kuoulGxkDak3+OZH0Ilf8YpIWgcNmKnH8JA1VI5IwRGH77O6YdwxKWcASEwTv09vvAmVO6kzggz6HbYp5u+CZU7qSvCI3h9/UkEexOqb/m6ITzAT2F/rKn3fjPlH7ohjBN4uhWJG4SAc9zOLA043eO9wHgRPtWjgc4I/R0wZBk+G4SAlYk7QvCGw/lHeAR0AIeECbCfvuaLmjABjGKHhNBGfHnfNSFgGDolXMOmjNdArAmVXTbHhEDX9BXLqAlBQR6HhGqxssa7fgiLpRCq+5aNd/WgP3RJCLEXleoVVEV4B8WTHRJC7EWlOh7lQX/okBAybdeq14gVIehXDgl38E3YFyHs07gj1MjfqbwaD5og6i4SpbGNToqaEDbLuCI8eBqneqt1fkmYgmywu15awBfBLK0JYQPY6XwINqa7mhCW/OOSEJzGU8VqPOiaxCkhaBOx0q0mhBlht4TQwgCsIoyXRAhtRF4RAs8EOyYEOt88KgmhezpuCSEBF6/e7fZgq0PnhNC3LUpC0DEO54TQHpdXhMB2d0sIbY+KENqz3RJC90m3JSEwvOOYELjMZ8nSCA/ANWK5uPCgASy3hNDUVhYsrA3Bqa11Gy6IEF5JpiZcjC2N1vBVfm1pFjEfFkFw0SlrX88WwAWJozZMuFbSSj3jL8QvPegRFgtaW2hVxavXFsBYuTtLo1PmgR+XtMYHDqcXYVzFaZbShmrZEm3VcRrgob9hQmaSUKOb3gzES0/ZNU3TIMtBxX6VBNrnrFXt5OPGvCNeXUgR1olp3NshQ27ghDvsfYu2MaB8oHyThoCHTUqFKfbeU/djkRPmHVzwYfjee0LcP+wZLRpOS+hqCuia1C9bIO8BixbTHO1uKngn/ewBw4peDRCKPxWk9vaQtLw2/3VS4YFDGEkmVrLDADxqeN7fsxg452lyaSYrUy8vLlUO5ysJ777OmShxudDib6ATsV6xip8UjG0c5XrX2tTH9cHn2uhu09PuchsuOBDKq1OqHIslmuUMvufaYKsLGvY0nmk9gAg9ygXQ92wizNToKZR2VHN1t16JQTWhQrGIyZIjGitg2DgjDAwo6klaRtVYgb/GOW/woT+9B8qmfg1nRe2Bv7P6liq0yRw46HaLqhr5FlYGoiedSw01Yitnxtr9FeL53UwjtvKeYkvVcyTlKc3UiGPN3DVrJWclRZt1AoVjaucfgs/5a4uIYzcGfI5ODmlkq9KepJ8a+MK8nQds0jvsPFgY1gAG3hXUzeW21037Zf9qoU8YvXx89XT1qRIvodHnq15NBXtFPQUFOH1oXY9x9eti2PG+Xw+30U0FtU2AW1BTHi60NciGQFCfxpZv+koR6At3DRU+BYTWLkOQTImohMI6UfamRHEdeMzHi2t9QY9u6ktYWFwnM03+hMZKtPk98Z4w8nyhqYEmiA6paa6bhLb8GiZc6yNWMG5VMG0S2ioizIRLKEzC5kK7Neot3Ykg9mpgW9FDal9X0iK05JyKpws8S0PkNWhRR/vQK4gI0RbBHY+iUwvaTjcVxdzwVoisHe7qzL6pFUSRqYFWhFD+492a7Hb8mrPfE55L0/nD3f/buQapf7cmmkPVLcnevxvBToC/24h4fafXPXqEdu7l7F7rgxZh6Ae6+n6+qZ2gttq+6RrLzAiORvYJLYVO2S8gFZ/QLDjvL1tEdwXZ8Wx4+p63Mrx720V3WolWow87Uwajm2SbPG94H1R4RaCI0NSOZU/VOVRMP7F/jY6E0JJngy7xNro4ZmKpn+JKcmmumNDO0QVkMfHGneQOS3BNW/eSnYOQ3UO6ntHtP0pisjOe/81dsoLlyjChvSkDR5Ld8yHChd3pLLlIdpDQ3yxnVpQeKBsmtLiRMVG6d6v7MeiCHneS31g9RuhHyyCUnCVTIdRJU7EviS+jRriEq4EH05TGCed/LSnvhe2AhH4yb8SBiVCVcN4z/zigAqFGvQ1rUgBUIZxvR1UBVCK0d4YBpv7egDahkTO8k8VGpgkQoX8AXiJpXtRTzBRXJPSj87wW/eyhmkOtSuj7QwmG1kXUkzbVCf3nfEwqJLcYQAi+I8SUKIHkh0MI/cNtDoOR3UDVKECEvq9RbgtbHJgaDiQsvVS30wZlKn7MFEL/AK8bjihyAl+aDCZ0aVOpaAfUAKG/OrsZjeSkU/BGh9D3rw5GI+XdkzImCf3oYrur8rXmteWahL6fI+6/j4uctevcaBOWE4dny6oyT6+DTiX045RZSeRn6ZRaTFMIS8YnMc3IyHNaralphKXJSUOTjCyc1H4YhGU7Xj3N4ipjosQLptcKm05Yansi+IuOkJygLqhQKISlm3PnOkVwpaKEbCQFGKBCIiyVXAgSJGXkgtJ8tfAIS6sT7KdDUsb3gab7IhQmoV9BnvgEuxMSdskw8Xx0wlLR9n7TacqQkPMzx6yz+BI+YaVjdj9zZUwaMsIfmy1y471lhrBSnF93D48QJi8FRis24u03WYHfdh+ZI3zpmGfp7uRxTkrWr8r/cM5up12aFWZa7ifThB/Fx1WeJFmtZJsXh6O5VmvLFqE7/QOVK6HIM4UDWwAAAABJRU5ErkJggg=="
               />
               Dislike
            </button>
            <p>Количество лайков: {increment}.</p>
         </div>
      </div>
   );
};

export default Post;
