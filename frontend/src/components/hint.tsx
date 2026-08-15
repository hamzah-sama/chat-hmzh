import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

interface Props {
  children: React.ReactElement<{ children?: React.ReactNode }>;
  label: string;
}

export const Hint = ({ label, children }: Props) => {
  const childContent = (children.props as { children?: React.ReactNode }).children;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={children}>
          {childContent}
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
