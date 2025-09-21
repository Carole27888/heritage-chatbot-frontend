
export const useTriggerAI = () => {
  return {
    triggerAI: () => {
      const chatButton = document.getElementById("chat-button");
      if (chatButton) {
        chatButton.click();
      }
    },
  };
};
