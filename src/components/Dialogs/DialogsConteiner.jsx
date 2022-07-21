import { connect } from "react-redux";
import {
   addMessageCreator,
   updateNewMessageText,
} from "../redax/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
   };
};

const DialogsConteiner = connect(mapStateToProps, {
   addMessageCreator,
   updateNewMessageText,
})(Dialogs);

export default DialogsConteiner;
