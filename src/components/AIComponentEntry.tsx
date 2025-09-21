import { Label } from "../components/ui/label";

type AIComponentEntryProps = {
  title: string;
  content: string;
};

const AIComponentEntry = ({ title, content }: AIComponentEntryProps) => {
  return (
    <div className="flex w-full justify-between mb-1 gap-3">
      <Label className="text-xs text-muted-foreground">{title}:</Label>
      <span className="text-xs font-medium">{content}</span>
    </div>
  );
};

export default AIComponentEntry;
