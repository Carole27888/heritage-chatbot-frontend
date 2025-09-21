
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type AITextFormattingProps = {
  text: string;
};

const AITextFormatting: React.FC<AITextFormattingProps> = ({ text }) => {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
    </div>
  );
};

export default AITextFormatting;
