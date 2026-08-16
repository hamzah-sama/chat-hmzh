import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

export const Artifact = () => {
  const { selectedConversation } = useSelector(
    (state: RootState) => state.conversation,
  );
  return (
    <div className="hidden lg:flex flex-col overflow-hidden shrink-0 border-l w-50">
      {selectedConversation?._id}
    </div>
  );
};
