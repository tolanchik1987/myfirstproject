
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";



const DialogItem = (props) => {
    return(
        <div className={classes.dialog}>
            <NavLink to={"/Dialogs/" + props.id}  className = { navData => navData.isActive ? classes.activeLink : classes.notactive }>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return(
        <div className={classes.message}>
            {props.message}
        </div>
    );
};

const Dialogs = (props) => {

    const dialogsData = [
        {id: "dialog_1", name: "Andrey"},
        {id: "dialog_2", name: "Stas"},
        {id: "dialog_3", name: "Nastya"},
        {id: "dialog_4", name: "Sveta"}
    ]

    const messageData = [
        {message: "1. Counting objects: 100% (42/42), done." },
        {message: "2 .Delta compression using up to 4 threads" },
        {message: "3. Writing objects: 100% (27/27), 94.08 KiB | 1.40 MiB/s, done." },
        {message: "4. Попробуйте новую кроссплатформенную оболочку PowerShell" }
    ]

    const dialogElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);  

    const messagesElements = messageData.map(message => <Message message={message.message} />);

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