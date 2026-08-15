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
import { ConversationMenu } from "./conversation-menu";
import { ConversationList } from "./conversation-list";

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
                <ConversationList
                  id={conversation._id}
                  title={conversation.title}
                  updatedAt={conversation.updatedAt}
                  onOpenChange={onOpenChange}
                />
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};
