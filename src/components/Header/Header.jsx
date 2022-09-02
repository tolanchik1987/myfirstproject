import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { DiAtom } from "react-icons/di";

const slideInDownAnimation = keyframes`${fadeIn}`;

const AnimationDiv = styled.div`
   animation: 10s ${slideInDownAnimation};
`;

const Header = (props) => {
   return (
      <header className={classes.header}>
         <div>
            <img
               alt=""
               src="https://w1.pngwing.com/pngs/325/934/png-transparent-social-media-icons-vk-logo-social-networking-service-google-web-design-black-black-and-white.png"
            />
         </div>
         <AnimationDiv>
            <div className={classes.textBackground}>
               <h1>Моя социяльная сеть.<DiAtom /></h1>
            </div>
         </AnimationDiv>
         <div className={classes.loginBlock}>
            {props.isAuth ? (
               <div>
                  {props.login}{" "}
                  <input
                     type={"button"}
                     className={classes.btn_submit}
                     value={"Выход"}
                     onClick={props.logout}
                  />
               </div>
            ) : (
               <NavLink to={"/login"}>Login {props.login}</NavLink>
            )}
         </div>
      </header>
   );
};

export default Header;
