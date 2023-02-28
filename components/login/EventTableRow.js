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
      <EditEventModal
        key={event.id}
        event={event}
        shown={editModalShown}
        close={() => {
          toggleEditModalShown(false);
        }}
      />
      <ConfirmDeleteModal
        key={event.id}
        event={event}
        shown={confirmDeleteModalShown}
        close={() => {
          toggleConfirmDeleteModalShown(false);
        }}
      />
      <tr className={styles.tr}>
        <td className={styles.tdTitle}>{event.title.substring(0, 20)}</td>
        <td>{event.text.substring(0, 30)}...</td>
        <td>
          <p>{event.date}</p>
        </td>
        <td>{event.link.substring(0, 20)}</td>
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
      </tr>
    </>
  );
};

export default EventTableRow;
