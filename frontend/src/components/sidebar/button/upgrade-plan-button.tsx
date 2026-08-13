import { Sparkles } from "lucide-react";

export const UpgradePlanButton = () => {
  return (
    <button
      className="
                      flex
                      w-full
                      items-center
                      gap-2
                      rounded-md
                      px-3
                      py-2
                      text-sm
                      text-zinc-200
                      transition
                      hover:bg-white/10
                      cursor-pointer
                    "
    >
      <Sparkles className="size-4" />
      <span>Upgrade Plan</span>
    </button>
  );
};
