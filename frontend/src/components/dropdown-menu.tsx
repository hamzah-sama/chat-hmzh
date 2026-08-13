import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

interface Props<T extends HTMLElement> {
  children: ReactNode;
  trigger: (ref: RefObject<T | null>, onClick: () => void) => ReactNode;
  offset?: number;
}

export const DropdownMenu = <T extends HTMLElement>({
  trigger,
  children,
  offset = 10,
}: Props<T>) => {
  const [open, setOpen] = useState(false);

  const [position, setPosition] = useState({
    left: 0,
    bottom: 0,
  });

  const triggerRef = useRef<T>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    setPosition({
      left: rect.right + offset,
      bottom: window.innerHeight - rect.bottom,
    });
  };

  const handleToggle = () => {
    updatePosition();
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        triggerRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }

      setOpen(false);
    };

    const handleResize = () => {
      updatePosition();
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  return (
    <>
      {trigger(triggerRef, handleToggle)}

      {open && (
        <div
          ref={menuRef}
          style={{
            left: position.left,
            bottom: position.bottom,
          }}
          className="
            fixed
            z-999
            w-48
            rounded-lg
            border
            border-white/10
            bg-zinc-900
            p-1
            shadow-xl
          "
        >
          {children}
        </div>
      )}
    </>
  );
};
