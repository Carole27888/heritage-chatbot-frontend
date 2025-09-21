
import type { Message } from "./AIMessageType";
import PDFQuoteComponent, { type AIQuoteComponentProps } from "./PDFComponent";
import AIPurchaseLinkComponent, { type PurchaseLinkProps } from "./PurchaseLink";
import AIClaimFileUpload, { type AIClaimFileUploadProps } from "./AIClaimFileUpload";

import type { JSX } from "react";
import { Card, CardContent } from "../components/ui/card";

// Helper → format HH:mm
function getHourAndMinutes(timestamp: number | string) {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}


const specialRoleComponents: Record<string, (message: Message) => JSX.Element> = {
  pdf: (message) => (
    <PDFQuoteComponent {...(message.data as AIQuoteComponentProps)} />
  ),
  link: (message) => (
    <AIPurchaseLinkComponent {...(message.data as PurchaseLinkProps)} />
  ),
  upload: (message) => (
    <AIClaimFileUpload {...(message.data as AIClaimFileUploadProps)} />
  ),
};

function AIMessageContainer({ message }: { message: Message }) {
  const defaultRoles = ["user", "assistant"];
  const allowedRoles = [...defaultRoles, ...Object.keys(specialRoleComponents)];

  if (!allowedRoles.includes(message.role)) return null;
  if (message.role === "assistant" && message.tool_calls) return null;

  // Render special components (pdf, link, upload)
  if (specialRoleComponents[message.role]) {
    return (
      <div className="flex justify-start">
        <div className="max-w-[80%]">
          {specialRoleComponents[message.role](message)}
        </div>
      </div>
    );
  }

  // Regular user/assistant messages
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <Card
        className={`max-w-[80%] mt-2 ${
          isUser
            ? "bg-blue-600 text-white rounded-lg"
            : "bg-muted text-foreground rounded-lg"
        }`}
      >
        <CardContent className="p-3">
          <p className="whitespace-pre-wrap break-words text-sm">
            {message.content}
          </p>
          <p className="text-xs opacity-70 mt-1 text-right">
            {getHourAndMinutes(message.timestamp)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default AIMessageContainer;
