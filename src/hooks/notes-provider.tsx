import { createContext, useState } from "react";

import { Note } from "../lib/utils";

const initialState = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 6,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

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
  const [notes, setNotes] = useState<Note[]>(initialState);
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
