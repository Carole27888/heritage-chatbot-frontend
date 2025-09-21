import { CURRENCY } from "../config/constants";
import { formatCurrency } from "../functions/numberFunctions";
import { Download, FileText } from "lucide-react";

import AIComponentButton from "./AIComponentButton";
import AIComponentEntry from "./AIComponentEntry";
import AIComponentHeader from "./AIComponentHeader";

import { Card, CardContent } from "../components/ui/card";

export type AIQuoteComponentProps = {
  registrationNumber: string;
  quotationNumber: number;
  total: number;
  vehicleType: string;
  cover: string;
  url: string;
};

const PDFQuoteComponent = (quotation: AIQuoteComponentProps) => {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        {/* Header */}
        <AIComponentHeader
          Icon={FileText}
          title={`Quotation for ${quotation.registrationNumber}`}
          subtitle={`Quotation #${quotation.quotationNumber}`}
        />

        {/* Quote details */}
        <div className="bg-muted/50 rounded-md p-3 mb-3">
          <AIComponentEntry
            title="Total Amount"
            content={formatCurrency(quotation.total, CURRENCY)}
          />
          <AIComponentEntry title="Vehicle" content={quotation.vehicleType} />
          <AIComponentEntry title="Cover Type" content={quotation.cover} />
        </div>

        {/* Download Button */}
        <AIComponentButton
          Icon={Download}
          text="Download Quotation"
          link={quotation.url}
        />

        {/* Info text */}
        <p className="text-xs text-muted-foreground mt-2 text-center">
          This quotation will not be saved to your account (WordPress version).
        </p>
      </CardContent>
    </Card>
  );
};

export default PDFQuoteComponent;
