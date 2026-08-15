interface Props {
  chatId: string | undefined;
}

export const Artifact = ({ chatId }: Props) => {
  return (
    <div className="hidden lg:flex flex-col overflow-hidden shrink-0 border-l w-50">
      {chatId}
    </div>
  );
};
