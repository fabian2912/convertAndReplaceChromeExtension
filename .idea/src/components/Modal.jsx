import classes from './Modal.module.css';

function Modal({children, onClose}) { // i.e. props.children and props.onClose destructured
    return (
        <>
            <div className={classes.backdrop} onClick={onClose} />
            <dialog open className={classes.modal}>
                    {/* note re 'open', it's the same as open={true} since true is a default value anyways */}
                {children} 
                    {/* i.e. props.children destructured */}
            </dialog>
        </>
    );
}

export default Modal;