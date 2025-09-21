import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"
import { Trash2, MoreVertical } from "lucide-react"

type ChatOptionsProps = {
  clearConversation: () => void
}

export default function ChatOptions({ clearConversation }: ChatOptionsProps) {
  return (
    <AlertDialog>
      {/* Trigger (3 dots) */}
      <AlertDialogTrigger asChild>
        <button className="h-8 w-8 flex items-center justify-center hover:bg-blue-700 rounded text-white">
          <MoreVertical className="h-5 w-5" />
        </button>
      </AlertDialogTrigger>

      {/* AlertDialog content */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Clear Conversation</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to clear this conversation? This action cannot
            be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={clearConversation}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Clear
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
