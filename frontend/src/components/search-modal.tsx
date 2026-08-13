import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

import { MessageSquareIcon } from "lucide-react";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchModal = ({ open, onOpenChange }: SearchModalProps) => {
  const { conversations } = useSelector(
    (state: RootState) => state.conversation,
  );
  const navigate = useNavigate();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 sm:max-w-150 ">
        <DialogTitle className="sr-only">Search conversations</DialogTitle>

        <Command>
          <CommandInput placeholder="Search conversations..." />

          <CommandList>
            <CommandEmpty>No conversations found.</CommandEmpty>

            <CommandGroup heading="Conversations">
              {conversations.map((conversation) => (
                <CommandItem
                  key={conversation._id}
                  value={conversation.title}
                  onSelect={() => {
                    navigate(`/${conversation._id}`);

                    onOpenChange(false);
                  }}
                  className="cursor-pointer hover:bg-muted-foreground/50"
                >
                  <MessageSquareIcon className="mr-2 size-4 shrink-0" />

                  <div className="min-w-0">
                    <p className="truncate">{conversation.title}</p>

                    <p className="text-xs text-muted-foreground">
                      {new Date(conversation.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};
