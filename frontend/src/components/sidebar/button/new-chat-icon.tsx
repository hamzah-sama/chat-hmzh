import { PenBoxIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Hint } from "../../hint";
import { Button } from "../../ui/button";

export const NewChatIcon = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hint label="New chat">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
          <PenBoxIcon size={17} />
        </Button>
      </Hint>
    </>
  );
};
