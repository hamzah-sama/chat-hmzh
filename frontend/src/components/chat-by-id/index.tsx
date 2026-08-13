import { useParams } from "react-router-dom";
import { ChatContainer } from "../chat-container";
import { Artifact } from "../artifact";

export const ChatById = () => {
  const { chatId } = useParams();

  return (
    <>
      <ChatContainer chatId={chatId} />
      <Artifact chatId={chatId} />
    </>
  );
};
