import { useRef, useState } from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
   const dialogElements = props.state.dialogsData.map((dialog) => (
      <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
   ));

   const messagesElements = props.state.messageData.map((message) => (
      <Message key={message.id} message={message.message} />
   ));

   const newMessageElement = useRef();

   const buttonAddMessage = () => {
      props.addMessage();
   };

   const clearMessage = () => {
      if (newMessageElement.current.value == "Enter message") {
         newMessageElement.current.value = "";
      }
   };

   const onChangeMessage = () => {
      props.updateNewMessageText(newMessageElement.current.value);
      newMessageElement.current.value = "";
   };

   return (
      <div className={classes.conteiner_dialogs}>
         <div className={classes.dialogs_item}>{dialogElements}</div>
         <div className={classes.messages}>
            {messagesElements}
            <div className={classes.addMessages}>
               <div>
                  <textarea
                     onClick={clearMessage}
                     className={classes.addMessage}
                     ref={newMessageElement}
                     cols="100"
                     rows="10"
                     value={props.state.newMessageText}
                     onChange={onChangeMessage}
                  />
               </div>
               <div>
                  <button
                     className={classes.btnAddMessage}
                     onClick={buttonAddMessage}
                     type="button"
                  >
                     Add
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dialogs;
