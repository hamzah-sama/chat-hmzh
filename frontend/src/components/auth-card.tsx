import { GoogleButton } from "./google-button";

export const AuthCard = () => {
  return (
    <div className="w-85 bg-[#13151c] border border-white/8 rounded-2xl p-7 flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-[17px] font-semibold text-slate-100 tracking-tight">
          Welcome to chat-hmzh
        </h2>
        <p className="text-[13px] text-slate-500">
          Please login to continue, ask anything then
        </p>
        <GoogleButton />
      </div>
    </div>
  );
};
