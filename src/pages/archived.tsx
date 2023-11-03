import Note from "../components/Note";
import EmptyState from "../components/empty-state";

import useNotes from "../hooks/useNotes";

const Archived = () => {
  const { notes, query, archivedNote, deleteNote } = useNotes();

  const archivedNotes = notes.filter(
    (note) =>
      note.archived === true &&
      note.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex-1">
      <div className="m-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note) => (
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
            subtitle="Archived notes you added appear here"
          />
        )}
      </div>
    </div>
  );
};

export default Archived;
