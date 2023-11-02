import Note from "../components/Note";
import EmptyState from "../components/empty-state";

import useNotes from "../hooks/useNotes";

const Archived = () => {
  const { notes, archivedNote, deleteNote } = useNotes();

  return (
    <div className="flex-1">
      <div className="m-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {notes && notes.length ? (
          notes
            .filter((note) => note.archived === true)
            .map((note) => (
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
          <EmptyState
            title="No Archived"
            subtitle="Archived you add appear here"
          />
        )}
      </div>
    </div>
  );
};

export default Archived;
