import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

// Radera Event
const deleteEvent = async (id) => {
  const eventDoc = doc(db, 'events', id);
  await deleteDoc(eventDoc);
};

<button
  onClick={() => {
    deleteEvent(event.id);
  }}
>
  Delete Event
</button>;

// Updatera Event
const updateEvent = async (id, title) => {
  const eventDoc = doc(db, 'events', id);
  const newFields = { title: newTitle };
  await updateDoc(eventDoc, newFields);
};

<form
  onSubmit={() => {
    updateEvent(event.id, event.title);
  }}
>
  <input
    type="text"
    value={newTitle}
    onChange={(e) => {
      setNewTitle(e.target.value);
    }}
  />
  <button type="submit">Change name</button>
</form>;



  // Skapa event
  const [newName, setNewName] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const createEvent = async () => {
      await addDoc(eventsCollectionRef, {title: newName, text: newTitle})
  }

  <div>

  <input type="text" placeholder='namn' onChange={(e) => {setNewName(e.target.value)}}/>
  <input type="text" placeholder='text' onChange={(e) => {setNewTitle(e.target.value)}}/>
  <button onClick={createEvent}>Skapa Event</button>
  </div>