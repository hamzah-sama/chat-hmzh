import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "./ui/alert-dialog";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleAction?: () => void;
  label: string;
  text?: string;
  title: string;
}
export const Alert = ({
  open,
  setOpen,
  handleAction,
  label,
  text = "Are you sure ? this action cannot be undone",
  title,
}: Props) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{text}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            variant="destructive"
            size="default"
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction onClick={handleAction}>{label}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
