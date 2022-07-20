import React from "react";
import { useRef } from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

class Dialogs extends React.Component {
   constructor(props){
      super(props)
   }

   dialogElements = () => { this.props.dialogsPage.dialogsData.map((dialog, index) => (
      <DialogItem key={index} name={dialog.name} id={dialog.id} />
   ))};

   messagesElements = () => { this.props.dialogsPage.messageData.map((message, index) => (
      <Message key={index} message={message.message} />
   ))};

   buttonAddMessage() {
      this.props.addMessageCreator();
   };

   clearMessage() {
      if (this.newMessageElement.current.value == "Enter message") {
         this.newMessageElement.current.value = "";
      }
   };

   onChangeMessage() {
      this.props.updateNewMessageText(this.newMessageElement.current.value)
      this.newMessageElement.current.value = "";
   };
   render() {
      newMessageElement = useRef();
      return (
      <div className={classes.conteiner_dialogs}>
         <div className={classes.dialogs_item}>{this.dialogElements}</div>
         <div className={classes.messages}>
            {this.messagesElements}
            <div className={classes.addMessages}>
               <div>
                  <textarea
                     onClick={this.clearMessage}
                     className={classes.addMessage}
                     ref={this.newMessageElement}
                     cols="100"
                     rows="10"
                     value={this.props.dialogsPage.newMessageText}
                     onChange={this.onChangeMessage}
                  />
               </div>
               <div>
                  <button
                     className={classes.btnAddMessage}
                     onClick={this.buttonAddMessage}
                     type="button"
                  >
                     Add
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};}

export default Dialogs;

