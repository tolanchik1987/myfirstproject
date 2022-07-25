import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../redax/authReducer";

class HeaderConteiner extends Component {
   componentDidMount() {
      axios
         .get("https://social-network.samuraijs.com/api/1.0//auth/me", {
            withCredentials: true,
         })
         .then((respons) => {
            if (respons.data.resultCode === 0) {
               const { id, email, login } = respons.data.data;
               this.props.setAuthUserData(id, email, login);
            }
         });
   }
   render() {
      return <Header {...this.props} />;
   }
}
const mapStateToProps = (state) => ({
   isAuth: state.authUser.isAuth,
   login: state.authUser.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderConteiner);
