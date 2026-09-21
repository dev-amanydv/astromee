import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import ToastNotification from "@/components/ui/ToastNotification";
import WalletModal from "@/components/modals/WalletModal";
import ChatModal from "@/components/modals/ChatModal";
import WheelModal from "@/components/modals/WheelModal";
import SpotlightModal from "@/components/modals/SpotlightModal";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  title: "Astromee | Premier Vedic Astrology & Cosmic Destiny Platform",
  description: "Unlock Your Destiny with India's Top Astrologers at ₹1 / Min",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between selection:bg-amberGold-200 selection:text-amberGold-800 subtle-grid-bg font-sans">
        <AppProvider>
          <ToastNotification />
          {children}
          <WalletModal />
          <ChatModal />
          <WheelModal />
          <SpotlightModal />
        </AppProvider>
      </body>
    </html>
  );
}
