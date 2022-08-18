import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuth,logout} from "../redax/authReducer";


class HeaderConteiner extends Component {
   componentDidMount() {
      this.props.setAuth()
   }
   render() {
      return <Header {...this.props} />;
   }
}
const mapStateToProps = (state) => ({
   isAuth: state.authUser.isAuth,
   login: state.authUser.login,
});

export default connect(mapStateToProps, { setAuth, logout})(HeaderConteiner);
