
"use client";

import { useEffect } from "react";
import { X, Send, Maximize2, Minimize2, MessageSquare } from "lucide-react";

import EmptyMessageComponent from "./EmptyMessageComponent";
import AIMessageContainer from "./AIMessageContainer";
import TypingComponent from "./TypingComponent";
import ChatOptions from "./ChatOptions";

import { useAIBot } from "../hooks/useAIBot";
import { AI_NAME } from "../config/constants";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader } from "../components/ui/card";

export function AIBot() {
  const {
    toggleChat,
    isOpen,
    isExpanded,
    chatOptionsProps,
    toggleExpand,
    messages,
    isTyping,
    messagesEndRef,
    onSubmit,
    inputIsFilled,
    currentInput,
    setCurrentInput,
  } = useAIBot();

  useEffect(() => {
    console.log("[AIBot mounted]");
    return () => console.log("[AIBot unmounted]");
  }, []);

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => {
            console.log("[AIBot] Floating button clicked");
            toggleChat();
          }}
          size="icon"
          className="fixed bottom-7 right-7 rounded-full shadow-lg z-50 aspect-square w-14 h-14 bg-blue-600 text-white hover:bg-blue-700"
          id="chat-button"
        >
          <MessageSquare className="h-8 w-8" />
        </Button>
      )}

      {/* Overlay + Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background blur — BUT keep scrolling */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            onClick={() => {
              console.log("[AIBot] Overlay clicked");
              toggleChat();
            }}
          />

          {/* Chat Window */}
          <Card
            className={`relative z-50 flex flex-col rounded-2xl shadow-xl transition-all duration-300 ${
              isExpanded
                ? "w-[90vw] max-w-2xl h-[80vh]"
                : "w-[90vw] max-w-md h-[500px]"
            }`}
          >
            {/* Header */}
            <CardHeader className="flex flex-row items-center justify-between bg-blue-600 text-white rounded-t-2xl p-4">
              <h3 className="font-semibold">{AI_NAME}</h3>
              <div className="flex items-center gap-2">
                <ChatOptions {...chatOptionsProps} />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleExpand}
                  className="text-white hover:bg-blue-700 rounded"
                >
                  {isExpanded ? (
                    <Minimize2 className="h-6 w-6" />
                  ) : (
                    <Maximize2 className="h-6 w-6" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleChat}
                  className="text-white hover:bg-blue-700 rounded"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 p-4 overflow-y-auto">
              {messages.length === 0 ? (
                <EmptyMessageComponent />
              ) : (
                messages.map((message, index) => (
                  <AIMessageContainer message={message} key={index} />
                ))
              )}
              {isTyping && <TypingComponent />}
              <div ref={messagesEndRef} />
            </CardContent>

            {/* Footer / Input */}
            <div className="p-3 border-t bg-gray-50 flex gap-2 rounded-b-2xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("[AIBot] Submit form", { currentInput });
                  onSubmit();
                }}
                className="flex w-full gap-2"
              >
                <Input
                  type="text"
                  value={currentInput}
                  onChange={(e) => {
                    console.log("[AIBot] Input changed", e.target.value);
                    setCurrentInput(e.target.value);
                  }}
                  placeholder="Type a message..."
                  autoComplete="off"
                  className="flex-1 bg-gray-200"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isTyping || !inputIsFilled}
                  className={`rounded-full ${
                    !inputIsFilled || isTyping
                      ? "bg-gray-400 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
