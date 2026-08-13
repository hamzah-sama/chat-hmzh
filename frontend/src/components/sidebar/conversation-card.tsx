import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  title: string;
  id: string;
}

export const ConversationCard = ({ id, title }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSelected = location.pathname === `/${id}`;
  return (
    <button
      type="button"
      className={`w-full  transition-colors duration-150 text-white border-none cursor-pointer p-2 rounded-lg text-sm font-medium ${isSelected ? "bg-amber-50/5" : "hover:bg-amber-50/5"}`}
      onClick={() => {
        navigate(`/${id}`);
      }}
    >
      <span>{title}</span>
    </button>
  );
};
