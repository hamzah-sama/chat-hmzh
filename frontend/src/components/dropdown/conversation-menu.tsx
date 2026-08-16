import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { EllipsisVertical, PenIcon, Trash2Icon } from "lucide-react";
import { Alert } from "../alert";
import { useState, type ComponentProps } from "react";
import api from "../../../utils/axios";
import { useDispatch } from "react-redux";
import { deleteConversation } from "../../redux/conversation-slice";
import { useNavigate, useParams } from "react-router-dom";

const RenderElement = (props: ComponentProps<"span">) => {
  return (
    <span
      {...props}
      className="ml-auto rounded-md p-1 transition-all duration-150 hover:scale-110 hover:bg-muted-foreground hover:text-foreground"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <EllipsisVertical size={12} />
    </span>
  );
};

interface Props {
  conversationId: string;
  onRename: () => void;
}

export const ConversationMenu = ({ conversationId, onRename }: Props) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { chatId } = useParams();

  const handleDelete = async () => {
    try {
      await api.delete("/chat/delete-conversation", {
        data: {
          conversationId,
        },
      });

      dispatch(deleteConversation(conversationId));
    } catch (error) {
      console.error("Delete conversation failed:", error);
    } finally {
      if (chatId === conversationId) {
        navigate("/");
      }
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger render={<RenderElement />} />

        <DropdownMenuContent className="w-40" align="start">
          <DropdownMenuItem
            className="flex justify-between"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
          >
            Delete
            <Trash2Icon size={14} className="text-destructive" />
          </DropdownMenuItem>

          <DropdownMenuItem
            className="flex justify-between"
            onClick={(e) => {
              e.stopPropagation();
              onRename();
            }}
          >
            Rename
            <PenIcon size={14} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Alert
        open={open}
        setOpen={setOpen}
        handleAction={() => {
          handleDelete();
          setOpen(false);
        }}
        label="Delete"
        title="Delete conversation"
        text="Are you sure want to delete this conversation? This action cannot be undone"
      />
    </>
  );
};
