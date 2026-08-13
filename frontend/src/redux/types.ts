export type UserData = {
  _id: string;
  name: string;
  email: string;
  avatar: string;
};

export type UserState = {
  userData: UserData | null;
};

export type ConversationData = {
  createdAt: string;
  title: string;
  updatedAt: string;
  userId: string;
  _id: string;
};

export type ConversationState = {
  conversations: ConversationData[];
};
