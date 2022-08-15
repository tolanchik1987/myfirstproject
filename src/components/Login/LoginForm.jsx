import React from "react";
import classes from "./Login.module.css";
import { useForm } from "react-hook-form";
import { updateAction } from "../redax/formReducer";
import { connect } from "react-redux"

function LoginForm (props) {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isValid ,},
   } = useForm({
      mode: "onChange",
   });
   const onSubmit = (data) => {
      
      console.log(data.login, data.password, data.rememberMy);
      updateAction(data)
      reset();
   };

   return (
      <div className={classes.wrapper_formLogin}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.formLogin_conteiner}>
               <h1>Sing in</h1>
               <div className={classes.loginConteiner}>
                  <label htmlFor="login">Login</label>
                  <input
                     name={"login"}
                     placeholder={"enter login"}
                     {...register("login", {
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
                  {errors?.login && (
                     <span> {errors?.login?.message || "Error!"} </span>
                  )}
               </div>
               <div className={classes.loginConteiner}>
                  <label htmlFor="password">Password</label>
                  <input
                     name={"password"}
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
               </div>
               <div className={classes.checkbox_rememberMy}>
                  <input
                     type={"checkbox"}
                     name={"rememberMy"}
                     {...register("rememberMy")}
                  />
                  <label htmlFor="rememberMy">Remember my</label>
               </div>
                  <input
                     type={"submit"}
                     className={classes.btn_submit}
                     disabled={!isValid}
                  />
            </div>
         </form>
      </div>
   );
}

//  const Login = (props) => {
//    return (
//       <div>
//          <LoginForm  />
//       </div>
//    )
   
// }

export default connect(({ login, password, rememberMy}) => ({ login, password, rememberMy }), updateAction)(LoginForm);