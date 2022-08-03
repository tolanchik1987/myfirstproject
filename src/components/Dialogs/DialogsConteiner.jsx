import { connect } from "react-redux";
import AuthRedirectHOC from "../../hoc/AuthRedirect";
import {
   addMessageCreator,
   updateNewMessageText,
} from "../redax/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
      isAuth: state.authUser.isAuth,
   };
};

const AuthRedirectComponent=AuthRedirectHOC(Dialogs)

const DialogsConteiner = connect(mapStateToProps, {
   addMessageCreator,
   updateNewMessageText,
})(AuthRedirectComponent);

export default DialogsConteiner;
