import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Mic, Info, PieChart } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
}

const chatSuggestions = [
  "Tell me about yourself?",
  "What are your skills?",
  "What are you working on in the moment?",
  "How can i contact you?",
  "Whats you tech background and experience?",
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "ai",
      text: "Hi there! I'm Dimitar's AI Portfolio Assistant.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY < 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const input = userMessage.text.toLowerCase();

      const responseMap: { [key: string]: string[] } = {
        yourself: [
          "I'm a Full Stack Developer who loves building fast, scalable, and user-centric applications using React, Next.js, and TypeScript.",
          "I create modern web applications with a strong focus on clean code, performance, and real-world value.",
          "I specialize in full stack development and AI-driven features, always looking to solve meaningful problems.",
        ],
        skills: [
          "I'm skilled in React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Supabase, and more.",
          "Frontend, backend, UI/UX, AI—my stack includes React, Tailwind, Express.js, and tools like GitHub, Docker, and Figma.",
          "My skill set spans full stack development, database design, AI automation, and responsive design with accessibility in mind.",
        ],
        working: [
          "I'm currently developing an AI tourism app and an AI chat widget you can embed in websites.",
          "Right now, I'm focused on building intelligent AI assistants and refining my portfolio with new tech.",
          "Working on local AI agents for task automation and enhancing my web apps with voice and chat features.",
        ],
        contact: [
          "You can reach me at dimihbt@yahoo.com or connect with me on LinkedIn.",
          "Feel free to send me an email or find my work on GitHub and my personal site.",
          "Let's collaborate! Just drop me a message at dimihbt@yahoo.com or check out my LinkedIn profile.",
        ],
        background: [
          "I have several years of experience building full stack apps using React, Node.js, and modern databases.",
          "My background includes building MVPs, e-commerce platforms, and integrating AI tools into real apps.",
          "I’ve worked on production-grade apps, using both SQL and NoSQL solutions, and I love combining AI with frontend development.",
        ],
      };

      let matchedCategory = Object.keys(responseMap).find((key) =>
        input.includes(key)
      );

      // fallback if no keyword matched
      if (!matchedCategory) {
        matchedCategory = "yourself"; // default
      }

      const possibleAnswers = responseMap[matchedCategory];
      const randomResponse =
        possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: randomResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSendMessage();
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className={`fixed z-50 bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-red-500 rotate-90 " : "bg-blue-500 hover:bg-blue-600"
        } ${isVisible ? "opacity-100 " : "opacity-0"}`}
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <MessageCircle className="text-white" size={24} />
        )}
      </button>

      <div
        className={`fixed z-40 bottom-6 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 pointer-events-none"
        }`}
        style={{ height: "500px", maxHeight: "calc(100vh - 100px)" }}
      >
        <div className="bg-blue-500 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-1.5 bg-white rounded-full mr-3">
                <PieChart size={18} className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold">AI Portfolio Assistant</h3>
                <div className="flex items-center text-xs">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1.5"></span>
                  <span>Online | Instant replies</span>
                </div>
              </div>
            </div>
            <button className="text-white/80 hover:text-white">
              <Info size={18} />
            </button>
          </div>
        </div>

        <div className="flex flex-col h-[calc(100%-132px)] bg-gray-50">
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white rounded-tr-none"
                      : "bg-white shadow-sm rounded-tl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <div
                    className={`text-xs mt-1 ${
                      message.sender === "user"
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white shadow-sm p-3 rounded-2xl rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="px-4 py-2 bg-white border-t border-gray-100">
            <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-2">
              {chatSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs whitespace-nowrap hover:bg-blue-100 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-1">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                ref={inputRef}
                placeholder="Ask about frontend jobs, skills, projects..."
                className="flex-1 bg-transparent border-none focus:outline-none py-2 text-sm"
              />
              <div className="flex items-center space-x-1">
                <button className="p-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Mic size={18} />
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === ""}
                  className={`p-2 rounded-full ${
                    inputValue.trim() !== ""
                      ? "text-blue-500 hover:bg-blue-50"
                      : "text-gray-400"
                  } transition-colors`}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
