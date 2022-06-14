
import classes from "./Dialogs.module.css";
import PersonNameDialog from "./PersonNameDialog/PersonNameDialog";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={classes.conteiner_dialogs}>
            <PersonNameDialog />
            <Messages />
        </div>
    );
};

export default Dialogs;