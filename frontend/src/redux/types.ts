export type UserData = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export type UserState = {
  userData: UserData | null;
};
