import { createContext, useState } from "react";

import { Note } from "../lib/utils";

interface NotesContextProps {
  notes: Note[];
  query: string;
  setQuery: (value: string) => void;
  addNote: (note: Note) => void;
  archivedNote: (id: number | string) => void;
  deleteNote: (id: number | string) => void;
}

interface NotesProviderProps {
  children: React.ReactNode;
}

export const NotesContext = createContext<NotesContextProps>({
  notes: [],
  query: "",
  setQuery: () => {},
  addNote: () => {},
  archivedNote: () => {},
  deleteNote: () => {},
});

export const NotesProvider = ({ children }: NotesProviderProps) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [query, setQuery] = useState("");

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id: number | string) => {
    const delNote = notes.filter((note) => note.id !== id);
    setNotes(delNote);
  };

  const archivedNote = (id: number | string) => {
    const updateArchived = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }

      return note;
    });

    setNotes(updateArchived);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        query,
        setQuery,
        addNote,
        archivedNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
