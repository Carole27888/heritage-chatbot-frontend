
import type { LucideIcon } from "lucide-react";
import { Button } from "../components/ui/button";

type AIComponentButtonProps = {
  Icon: LucideIcon;
  text: string;
  onClick?: () => void;
  link?: string;
};

function AIComponentButton({ Icon, text, onClick, link }: AIComponentButtonProps) {
  const Content = () => (
    <>
      <Icon className="h-4 w-4" />
      <span>{text}</span>
    </>
  );

  if (link) {
    return (
      <Button asChild className="w-full flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Content />
        </a>
      </Button>
    );
  }

  return (
    <Button
      onClick={onClick}
      className="w-full flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700"
    >
      <Content />
    </Button>
  );
}

export default AIComponentButton;
