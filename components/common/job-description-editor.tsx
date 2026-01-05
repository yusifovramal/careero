import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function JobDescriptionEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
  });
  return (
    <div className="w-full border rounded-lg">
      <EditorContent editor={editor} />
    </div>
  );
}

export default JobDescriptionEditor;
