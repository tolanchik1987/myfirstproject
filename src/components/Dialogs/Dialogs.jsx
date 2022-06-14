import classes from "./Dialogs.module.css";


const Dialogs = (props) => {
    return (
        <div className={classes.conteiner_dialogs}>
            <div className={classes.dialogs_item}>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Stas
                </div>
                <div className={classes.dialog}>
                    Nastya
                </div>
                <div className={classes.dialog}>
                    Sveta
                </div>
            </div>
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
        </div>
    );
};

export default Dialogs;