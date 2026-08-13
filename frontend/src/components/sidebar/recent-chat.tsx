import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../utils/axios";
import { setConversation } from "../../redux/conversation-slice";
import type { RootState } from "../../redux/store";
import { ConversationCard } from "./conversation-card";

export const RecentChat = () => {
  const dispatch = useDispatch();
  const { conversations } = useSelector(
    (state: RootState) => state.conversation,
  );

  useEffect(() => {
    const getConversation = async () => {
      try {
        const { data } = await api.get("/chat/get-conversation");

        dispatch(setConversation(data));
      } catch (error) {
        console.error(error);
      }
    };

    getConversation();
  }, []);

  return (
    <div className="px-2 pt-4 pb-1">
      <div className="text-[14px] font-medium text-slate-100/40 tracking-tight pl-2 ">
        Recents
      </div>
      <div className="flex flex-col pt-2">
        {conversations.map((conversation) => (
          <ConversationCard
            title={conversation.title}
            key={conversation._id}
            id={conversation._id}
          />
        ))}
      </div>
    </div>
  );
};
