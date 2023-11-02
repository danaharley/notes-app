import { useContext } from "react";

import { NotesContext } from "./notes-provider";

const useNotes = () => {
  return useContext(NotesContext);
};

export default useNotes;
