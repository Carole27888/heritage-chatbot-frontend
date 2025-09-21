
import type { AIClaimFileUploadProps } from "./AIClaimFileUpload";
import type { AIQuoteComponentProps } from "./PDFComponent";
import type { PurchaseLinkProps } from "./PurchaseLink";


export type QuoteParams = {
  insuranceLabel: string;
  isComprehensive: boolean;
  value?: number | null;
  seats?: number | null;
  plateNumber: string;
};


export type MessageType = "user" | "assistant" | "pdf" | "link" | "upload";


export type Message = {
  role: MessageType;
  content: string;
  timestamp: string | number;
  tool_calls?: unknown[]; 
  data?:
    | AIQuoteComponentProps
    | QuoteParams
    | AIClaimFileUploadProps
    | PurchaseLinkProps;
};
