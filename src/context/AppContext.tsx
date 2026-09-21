'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Astrologer, ASTROLOGERS } from '@/data/astrologers';
import { ZodiacSign, ZODIAC_SIGNS } from '@/data/horoscope';

interface ToastState {
  title: string;
  message: string;
  icon: string;
  visible: boolean;
}

interface AppContextType {
  coins: number;
  addCoins: (amt: number) => void;
  isWalletModalOpen: boolean;
  setIsWalletModalOpen: (open: boolean) => void;
  isWheelModalOpen: boolean;
  setIsWheelModalOpen: (open: boolean) => void;
  isSpotlightOpen: boolean;
  setIsSpotlightOpen: (open: boolean) => void;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (open: boolean) => void;
  activeChatAstro: Astrologer | null;
  isChatModalOpen: boolean;
  startChatConsultation: (astro: Astrologer) => void;
  closeChatModal: () => void;
  scanMode: 'palm' | 'face';
  setScanMode: (mode: 'palm' | 'face') => void;
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
  selectedSign: ZodiacSign;
  setSelectedSign: (sign: ZodiacSign) => void;
  toast: ToastState;
  showToast: (title: string, message: string, icon?: string) => void;
  hideToast: () => void;
  scrollToSection: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [coins, setCoins] = useState<number>(120);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isWheelModalOpen, setIsWheelModalOpen] = useState(false);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeChatAstro, setActiveChatAstro] = useState<Astrologer | null>(null);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [scanMode, setScanMode] = useState<'palm' | 'face'>('palm');
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [selectedSign, setSelectedSign] = useState<ZodiacSign>(ZODIAC_SIGNS[0]);
  const [toast, setToast] = useState<ToastState>({
    title: '',
    message: '',
    icon: '✨',
    visible: false,
  });

  const showToast = (title: string, message: string, icon = '✨') => {
    setToast({ title, message, icon, visible: true });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, visible: false }));
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  // Keyboard shortcut for Cmd+K / Ctrl+K and Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSpotlightOpen(true);
      }
      if (e.key === 'Escape') {
        setIsWalletModalOpen(false);
        setIsWheelModalOpen(false);
        setIsSpotlightOpen(false);
        setIsChatModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const addCoins = (amt: number) => {
    setCoins((prev) => prev + amt);
  };

  const startChatConsultation = (astro: Astrologer) => {
    if (coins < 10) {
      showToast('⚠️ Coin Balance Low', 'Please recharge wallet to start chat.', '🪙');
      setIsWalletModalOpen(true);
      return;
    }
    setActiveChatAstro(astro);
    setIsChatModalOpen(true);
  };

  const closeChatModal = () => {
    setIsChatModalOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppContext.Provider
      value={{
        coins,
        addCoins,
        isWalletModalOpen,
        setIsWalletModalOpen,
        isWheelModalOpen,
        setIsWheelModalOpen,
        isSpotlightOpen,
        setIsSpotlightOpen,
        isMobileNavOpen,
        setIsMobileNavOpen,
        activeChatAstro,
        isChatModalOpen,
        startChatConsultation,
        closeChatModal,
        scanMode,
        setScanMode,
        currentLanguage,
        setCurrentLanguage,
        selectedSign,
        setSelectedSign,
        toast,
        showToast,
        hideToast,
        scrollToSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
