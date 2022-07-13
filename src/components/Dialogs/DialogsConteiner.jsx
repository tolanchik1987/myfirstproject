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

const mapDispatchToProps = (dispatch) => {
   return {
      addMessageCreator: () => {
         dispatch(addMessageCreator());
      },
      updateNewMessageText: (text) => {
         dispatch(updateNewMessageText(text));
      },
   };
};

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsConteiner;
