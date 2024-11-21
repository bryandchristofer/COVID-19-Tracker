const saveNotesToLocalStorage = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

const getNotesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("notes") || "[]");
};

export { saveNotesToLocalStorage, getNotesFromLocalStorage };
