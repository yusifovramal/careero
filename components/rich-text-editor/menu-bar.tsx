import { Editor } from "@tiptap/react";

interface MenuBarProps {
  editor: Editor | null;
}

function MenuBar({ editor }: MenuBarProps) {
  if (!editor) {
    return null;
  }

  return (
    <div className="border border-border rounded-t-lg p-2 bg-card flex flex-wrap gap-1 items-center">
        
    </div>
  );
}

export default MenuBar;
