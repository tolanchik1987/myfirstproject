import React from "react";
import classes from "./Login.module.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login, logout } from "../redax/authReducer";
import { Navigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { wobble } from "react-animations";

const flashAnimation = keyframes`${wobble}`;

const BouncyDiv = styled.div`
   animation: 1s ${flashAnimation};
`;

function LoginForm(props) {
   const {
      register,
      handleSubmit,
      reset,
      formState,
      formState: { errors, submittedData, isValid },
   } = useForm({
      mode: "onChange",
   });

   const onSubmit = (data) => {
      props.login(
         data.email,
         data.password,
         data.rememberMe,
         data.captcha,
      );
      let q = document.getElementById("showPassword");
      q.checked = false;
      let x = document.getElementById("password");
      x.type = "password";
   };

   React.useEffect(() => {
      if (formState.isSubmitSuccessful) {
         reset({ email: "", password: "", rememberMe: false, captcha: "" });
      }
   }, [formState, submittedData, reset]);

   if (props.isAuth) {
      return <Navigate replace to={"/profile"} />;
   }

   const showPassword = () => {
      let x = document.getElementById("password");
      if (x.type === "password") {
         x.type = "text";
      } else {
         x.type = "password";
      }
   };

   return (
      <div className={classes.wrapper_formLogin}>
         <BouncyDiv>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className={classes.formLogin_conteiner}>
                  <h1>Sing in</h1>
                  <span>{props.messageError}</span>

                  <div className={classes.loginConteiner}>
                     <label htmlFor="email">Login</label>
                     <input
                        name={"email"}
                        placeholder={"enter email"}
                        {...register("email", {
                           required: "Это поле обязательно!",
                           minLength: {
                              value: 5,
                              message: "Минимум 5 символов!",
                           },
                           maxLength: {
                              value: 40,
                              message: "Максимум 20 символов!",
                           },
                        })}
                     />
                     {errors?.email && (
                        <span> {errors?.email?.message || "Error!"} </span>
                     ) }
                  </div>
                  <div className={classes.loginConteiner}>
                     <label htmlFor="password">Password</label>
                     <input
                        name={"password"}
                        id={"password"}
                        type={"password"}
                        className={classes.inputPassword}
                        placeholder={"enter password"}
                        {...register("password", {
                           required: "Это поле обязательно!",
                           minLength: {
                              value: 5,
                              message: "Минимум 5 символов!",
                           },
                           maxLength: {
                              value: 40,
                              message: "Максимум 20 символов!",
                           },
                        })}
                     />
                     {errors?.password && (
                        <span> {errors?.password?.message || "Error"}</span>
                     )}
                     {props.captchaUrl && (
                        <div className={classes.loginConteiner}>
                           <label htmlFor="captcha">Captcha</label>
                           <img src={props.captchaUrl} alt="" />
                           <input
                              name={"captcha"}
                              placeholder={"enter captcha"}
                              {...register("captcha", {
                                 required: "Это поле обязательно!",
                              })}
                           />
                        </div>
                      )}
                     <div className={classes.checkbox_showPassword}>
                        <input
                           type="checkbox"
                           id={"showPassword"}
                           onClick={showPassword}
                        />
                        Show Password
                     </div>
                  </div>
                  <div className={classes.checkbox_rememberMy}>
                     <input
                        type={"checkbox"}
                        name={"rememberMe"}
                        {...register("rememberMe")}
                     />
                     <label htmlFor="rememberMe">Remember my</label>
                  </div>
                  <input
                     type={"submit"}
                     name={"submit"}
                     className={classes.btn_submit}
                     disabled={!isValid}
                  />
               </div>
            </form>
         </BouncyDiv>
      </div>
   );
}

const mapSateToProps = (state) => ({
   isAuth: state.authUser.isAuth,
   messageError: state.authUser.messages,
   captchaUrl: state.authUser.captchaUrl,
});

export default connect(mapSateToProps, { login, logout})(
   LoginForm
);
