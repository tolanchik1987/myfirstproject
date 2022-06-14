import classes from "./Messages.module.css";


const Messages = (props) => {
    return (
        <div className={classes.messages}>
            <div className={classes.message}>
                Counting objects: 100% (42/42), done.
            </div>
            <div className={classes.message}>
                Delta compression using up to 4 threads
            </div>
            <div className={classes.message}>
                Writing objects: 100% (27/27), 94.08 KiB | 1.40 MiB/s, done.
            </div>
        </div>
    );
};

export default Messages;