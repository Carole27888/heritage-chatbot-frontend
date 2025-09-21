import { useEffect, useRef, useState } from "react";
import type { Message } from "../components/AIMessageType";

export const useAIBot = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);
  const [currentInput, setCurrentInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

 
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

 
  const onSubmit = async () => {
    if (!currentInput.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: currentInput.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentInput("");
    setIsTyping(true);

    try {
      
      const apiUrl =
        (window as any).aiChatConfig?.apiUrl ||
        "https://api.heritageinsurance.co.tz/ai/chat";

      if (!apiUrl) {
        throw new Error("aiChatConfig.apiUrl not found. Check PHP localization.");
      }

      console.log("Using Chat API URL:", apiUrl);
      console.log("Sending payload:", { messages: [...messages, userMessage] });

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      console.log("Response JSON:", data);

      // Handle both array format and { data: [...] } format
      if (Array.isArray(data)) {
        setMessages((prev) => [...prev, ...data]);
      } else if (data && Array.isArray(data.data)) {
        setMessages((prev) => [...prev, ...data.data]);
      } else {
        console.warn("Unexpected response format:", data);
      }
    } catch (err) {
      console.error("Chat API error:", err);
      alert("There was an error talking to the AI. Please try again later.");
    } finally {
      setIsTyping(false);
    }
  };

  
  const reportConversation = () => {
    setIsReportDialogOpen(false);
    console.log("Conversation reported!");
  };

  const clearConversation = () => {
    setMessages([]);
    setIsClearDialogOpen(false);
    setIsTyping(false);
    console.log("Conversation cleared!");
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setIsExpanded(false);
  };

  const inputIsFilled = currentInput.trim().length > 0;

  return {
    toggleChat,
    isOpen,
    isExpanded,
    chatOptionsProps: {
      isClearDialogOpen,
      setIsClearDialogOpen,
      isReportDialogOpen,
      setIsReportDialogOpen,
      clearConversation,
      reportConversation,
    },
    toggleExpand,
    messages,
    isTyping,
    messagesEndRef,
    onSubmit,
    inputIsFilled,
    currentInput,
    setCurrentInput,
  };
};
