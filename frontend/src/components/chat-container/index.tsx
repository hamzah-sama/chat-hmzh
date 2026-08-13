interface Props {
  chatId: string | undefined;
}

export const ChatContainer = ({ chatId }: Props) => {
  return <div className="flex flex-col flex-1">{chatId}</div>;
};
