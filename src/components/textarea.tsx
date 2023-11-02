import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        className="min-h-[5rem] bg-transparent px-3 py-2 text-zinc-500 outline-none placeholder:font-semibold placeholder:italic placeholder:text-zinc-400/50"
        {...rest}
      />
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
