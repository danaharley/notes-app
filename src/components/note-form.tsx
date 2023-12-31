import React from "react";

import Input from "./input";
import TextArea from "./textarea";
import Button from "./button";

interface NoteFormProps {
  title: string;
  body: string;
  archived: boolean;
  characterLimit: number;
  onTitleChange: (value: string) => void;
  onBodyChange: (value: string) => void;
  onArchivedChange: (value: boolean) => void;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({
  title,
  body,
  archived,
  characterLimit = 50,
  onTitleChange,
  onBodyChange,
  onArchivedChange,
  onCancel,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="absolute inset-x-0 top-0 z-10 rounded border bg-background p-2 shadow-md"
    >
      {title && title.length && (
        <div className="absolute -top-3 rounded-xl bg-primary px-2 py-0.5 shadow">
          <p className="text-xs text-background">
            Characters left: {characterLimit - title.length}/{characterLimit}
          </p>
        </div>
      )}
      <div className="flex flex-col">
        <Input
          placeholder="Title..."
          className="border-0 bg-transparent px-3 py-2 placeholder:font-semibold"
          value={title}
          onChange={(e) => {
            title = e.target.value;

            if (title.length <= characterLimit) onTitleChange(title);
          }}
          maxLength={characterLimit}
        />

        <TextArea
          placeholder="Content"
          value={body}
          onChange={(e) => onBodyChange(e.target.value)}
        />

        <div className="mt-3 flex items-center space-x-2 px-3">
          <Input
            type="checkbox"
            id="archived"
            className="h-4 w-4 accent-transparent"
            checked={archived}
            onChange={(e) => onArchivedChange(e.target.checked)}
          />
          <label htmlFor="archived" className="text-sm italic text-zinc-400">
            Archived
          </label>
        </div>

        <div className="mt-3 space-x-2.5 self-end p-2">
          <Button
            onClick={onCancel}
            className="px-3 py-2 text-sm font-semibold text-primary ring-hover hover:bg-hover md:px-4 md:py-2.5"
          >
            Cancel
          </Button>
          <Button className="bg-primary px-3 py-2 text-sm font-semibold text-background ring-hover hover:bg-hover hover:text-primary md:px-4 md:py-2.5">
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;
