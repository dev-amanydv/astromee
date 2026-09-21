'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '@/context/AppContext';

interface ChatMessage {
  id: string;
  sender: 'user' | 'astro';
  text: string;
}

const DEFAULT_WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  sender: 'astro',
  text: 'Namaste 🙏 Welcome to Astromee Consultation. I am ready with your chart. Please share your specific question regarding Love, Marriage, or Career!',
};

function formatTimer(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export default function ChatModal() {
  const { activeChatAstro, isChatModalOpen, closeChatModal } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([DEFAULT_WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChatModalOpen) {
      setTimeLeft(300);
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isChatModalOpen, activeChatAstro]);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  if (!isChatModalOpen || !activeChatAstro) return null;

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const userText = inputValue.trim();
    setInputValue('');

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), sender: 'user', text: userText },
    ]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'astro',
          text: "I have analyzed your transit chart. Jupiter's aspect on your 10th house indicates major progress in career and auspicious relationship clarity soon!",
        },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div
      id="chatModal"
      className="fixed inset-0 z-50 bg-darkSlate-950/60 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-4"
    >
      <div className="cosmic-card w-full max-w-2xl h-[90vh] sm:h-[620px] max-h-[95vh] rounded-3xl border-2 border-amberGold-300 flex flex-col justify-between overflow-hidden bg-white shadow-2xl">
        <div className="bg-gradient-to-r from-amberGold-50 to-white p-3 sm:p-4 border-b border-amberGold-200 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            <img
              id="chatAstroImg"
              src={activeChatAstro.image}
              alt={activeChatAstro.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl object-cover border-2 border-amberGold-400 shadow-xs shrink-0"
            />
            <div className="min-w-0">
              <h4 id="chatAstroName" className="font-serif font-bold text-sm text-darkSlate-900 truncate">
                {activeChatAstro.name}
              </h4>
              <p className="text-[10px] sm:text-[11px] text-emerald-700 font-bold flex items-center gap-1.5 truncate">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0"></span>
                <span className="hidden sm:inline">Live Secure Consultation Connected</span>
                <span className="sm:hidden">Live Connected</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="bg-white px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs text-amberGold-800 font-black border border-amberGold-300 shadow-xs">
              ⏱️ <span id="chatTimer">{formatTimer(timeLeft)}</span>
            </div>
            <button
              onClick={closeChatModal}
              className="text-darkSlate-400 hover:text-darkSlate-800 p-1.5 sm:p-2 rounded-full hover:bg-sunshine-100"
            >
              <i className="fa-solid fa-xmark text-base sm:text-lg"></i>
            </button>
          </div>
        </div>

        <div
          id="chatMessages"
          ref={chatMessagesRef}
          className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-sunshine-50/40"
        >
          {messages.map((msg) =>
            msg.sender === 'user' ? (
              <div
                key={msg.id}
                className="gold-gradient-bg text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] ml-auto font-medium text-xs shadow-xs"
              >
                {msg.text}
              </div>
            ) : (
              <div
                key={msg.id}
                className="bg-white p-3.5 rounded-2xl rounded-tl-none max-w-[80%] border border-amberGold-200 text-darkSlate-800 shadow-xs leading-relaxed"
              >
                {msg.text}
              </div>
            )
          )}
        </div>

        <div className="p-3.5 bg-white border-t border-amberGold-200 flex items-center gap-3">
          <input
            type="text"
            id="chatInput"
            placeholder="Type your message or question here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 bg-sunshine-50 border border-amberGold-200 rounded-full py-2.5 px-4 text-xs text-darkSlate-900 focus:outline-none focus:border-amberGold-500 focus:bg-white"
          />
          <button
            onClick={handleSend}
            className="w-10 h-10 rounded-full gold-gradient-bg text-white font-bold flex items-center justify-center active:scale-95 shadow-md shadow-amberGold-500/20"
          >
            <i className="fa-solid fa-paper-plane text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
