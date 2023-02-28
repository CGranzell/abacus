import React, { useState } from 'react';
import styles from '../../styles/login/EventTableRow.module.css';
import { MdEdit, MdDelete } from 'react-icons/md';
import EditEventModal from './EditEventModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const EventTableRow = ({ event }) => {
  // Modal För Att Uppdatera Event
  const [editModalShown, toggleEditModalShown] = useState(false);
  // Modal för confirm delete
  const [confirmDeleteModalShown, toggleConfirmDeleteModalShown] =
    useState(false);

  return (
    <>
      
      <tr className={styles.tr}>
     
        <td className={styles.tdTitle}>{event.title.substring(0, 20)}</td>
        <td className={styles.tdTitle}>{event.text.substring(0, 30)}...</td>
        <td className={styles.tdTitle}>
          <p>{event.date}</p>
        </td>
        <td className={styles.tdTitle}> {event.link.substring(0, 20)}</td>
        <td className={styles.tdBtns}>
          <div className={styles.wrapperBtns}>
            <MdEdit
              onClick={toggleEditModalShown}
              className={styles.iconEdit}
            />
            <MdDelete
              onClick={toggleConfirmDeleteModalShown}
              className={styles.iconDelete}
            />
          </div>
        </td>
        <td>
      <EditEventModal
        // key={key}
        event={event}
        shown={editModalShown}
        close={() => {
          toggleEditModalShown(false);
        }}
      />
      <ConfirmDeleteModal
        // key={key}
        event={event}
        shown={confirmDeleteModalShown}
        close={() => {
          toggleConfirmDeleteModalShown(false);
        }}
      />
      </td>
      </tr>
    </>
  );
};

export default EventTableRow;
