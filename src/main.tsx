
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

console.log(" Heritage Chatbot JS loaded");

//  both root IDs
const rootElement = 
  document.getElementById("ai-chat-root") || 
  document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log(" React render call completed");
} else {
  console.error(" Could not find #ai-chat-root or #root in DOM");
}
