import { useEffect, useRef, useState } from "react";

interface Props {
  title: string | undefined;
}

export const ProjectName = ({ title }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [openInput, setOpenInput] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    const trimmedName = name.trim();
    if (trimmedName === "" || trimmedName === title) return;
    setOpenInput(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    } else if (event.key === "Escape") {
      setOpenInput(false);
    }
  };

  useEffect(() => {
    if (openInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openInput]);
  return openInput ? (
    <input
      type="text"
      ref={inputRef}
      value={name}
      onKeyDown={handleKeyDown}
      onChange={(e) => setName(e.target.value)}
      onFocus={(e) => e.currentTarget.select()}
      onBlur={() => setOpenInput(false)}
      className="text-sm bg-transparent text-foreground outline-none focus:ring-1 focus:ring-inset focus:ring-ring max-w-40 truncate font-medium p-1 pl-2"
    />
  ) : (
    <span className="flex items-center">{title}</span>
  );
};
