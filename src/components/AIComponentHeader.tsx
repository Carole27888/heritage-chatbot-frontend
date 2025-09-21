import type { LucideIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

type AIComponentHeaderProps = {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
};

function AIComponentHeader({ Icon, title, subtitle }: AIComponentHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-3">
      
      <Avatar className="h-10 w-10 bg-blue-100">
        <AvatarFallback className="bg-blue-100">
          <Icon className="h-5 w-5 text-blue-600" />
        </AvatarFallback>
      </Avatar>

      
      <div>
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}

export default AIComponentHeader;
