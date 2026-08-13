import api from "../../../utils/axios";

interface Props {
  title: string;
  selectedId: string | null;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
  id: string;
}

export const ConversationCard = ({
  id,
  title,
  selectedId,
  setSelectedId,
}: Props) => {
  const getConversation = async () => {
    try {
      const { data } = await api.get(`/chat/get-messages/${id}`);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      type="button"
      className={`w-full  transition-colors duration-150 text-white border-none cursor-pointer p-2 rounded-lg text-sm font-medium ${selectedId === id ? "bg-amber-50/5" : "hover:bg-amber-50/5"}`}
      onClick={() => {
        getConversation();
        setSelectedId(id);
      }}
    >
      <span>{title}</span>
    </button>
  );
};
