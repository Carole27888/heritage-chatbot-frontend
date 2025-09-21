

function TypingComponent() {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] rounded-lg px-4 py-2 bg-gray-200">
        <div className="flex space-x-1">
          <div
            className="h-2 w-2 rounded-full bg-gray-500 animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="h-2 w-2 rounded-full bg-gray-500 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="h-2 w-2 rounded-full bg-gray-500 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TypingComponent;
