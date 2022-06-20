import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {
  
    const dialogElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);  
  
    const messagesElements = props.state.messageData.map(message => <Message message={message.message} />);

    return (
        <div className={classes.conteiner_dialogs}>
            <div className={classes.dialogs_item}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;