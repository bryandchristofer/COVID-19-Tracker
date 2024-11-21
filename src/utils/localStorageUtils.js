// Retrieve notes from localStorage
export const getNotes = () => {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
};

// Save a note to localStorage
export const saveNote = (note) => {
  const existingNotes = getNotes();
  const updatedNotes = [...existingNotes, { ...note, id: Date.now() }];
  localStorage.setItem("notes", JSON.stringify(updatedNotes));
};
