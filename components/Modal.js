'use client';
import styles from '../styles/Modal.module.css';

const Modal = ({ children, shown, close }) => {
  return shown ? (
    <div
      className={styles.modalBackdrop}
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <button className={styles.closeBtn} onClick={close}>
          X
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;