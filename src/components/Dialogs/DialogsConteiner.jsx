import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirectHOC from "../../hoc/withAuthRedirect";
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

export default compose(
   connect(mapStateToProps, {
      addMessageCreator,
      updateNewMessageText,
   }),
   withAuthRedirectHOC
)(Dialogs);
