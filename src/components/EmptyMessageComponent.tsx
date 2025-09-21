
"use client";

import { AI_NAME, COMPANY_NAME } from "../config/constants";
import { Card, CardContent } from "../components/ui/card";

function EmptyMessageComponent() {
  return (
    <Card className="m-5 w-full">
      <CardContent className="flex flex-col items-start justify-center p-4">
        <p className="text-sm text-muted-foreground text-center w-full">
          Hi, I’m {AI_NAME}, your virtual assistant.
        </p>

        <p className="text-xs text-muted-foreground mt-3">
          Ask me anything about {COMPANY_NAME}.
        </p>

        <p className="text-xs text-muted-foreground mt-2">For example:</p>

        <ul className="text-xs text-muted-foreground mt-2 list-disc pl-4">
          <li>Get a quotation</li>
          <li>Help with purchasing</li>
          <li>Learn about products</li>
          <li>File a claim</li>
          <li>Check an existing policy</li>
        </ul>
      </CardContent>
    </Card>
  );
}

export default EmptyMessageComponent;
