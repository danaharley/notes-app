import React, { useState } from "react";

import Input from "../components/input";
import NoteForm from "../components/note-form";
import Note from "../components/Note";
import EmptyState from "../components/empty-state";

import useNotes from "../hooks/useNotes";

import { formObject, formatDate, generateId } from "../lib/utils";

const Index = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [archived, setArchived] = useState(false);

  const { notes, query, addNote, archivedNote, deleteNote } = useNotes();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = generateId();
    const createdAt = formatDate();

    const data = formObject({
      id,
      title,
      body,
      archived,
      createdAt,
    });

    addNote(data);

    setTitle("");
    setBody("");
    setArchived(false);
    setIsFocused(false);
  };

  const noteList = notes.filter(
    (note) =>
      note.archived === false &&
      note.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex-1">
      <div className="mx-4 mb-4 mt-7 flex justify-center">
        <div className="relative w-full md:max-w-lg">
          <Input
            className={`w-full bg-transparent px-3 py-2 shadow-sm ${
              isFocused && "invisible"
            }`}
            placeholder="Take a note.."
            onClick={() => setIsFocused(!isFocused)}
          />
          {isFocused && (
            <NoteForm
              title={title}
              body={body}
              archived={archived}
              characterLimit={50}
              onTitleChange={setTitle}
              onBodyChange={setBody}
              onArchivedChange={setArchived}
              onCancel={() => setIsFocused(!isFocused)}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
      <div className="m-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {noteList.length > 0 ? (
          noteList.map((note) => (
            <Note
              key={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              onArchived={() => archivedNote(note.id)}
              onDelete={() => deleteNote(note.id)}
            />
          ))
        ) : (
          <EmptyState title="No Notes" subtitle="Notes you add appear here" />
        )}
      </div>
    </div>
  );
};

export default Index;
