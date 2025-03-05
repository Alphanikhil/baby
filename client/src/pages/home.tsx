import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useState } from "react";
import Welcome from "@/components/animations/welcome";
import BearCouple from "@/components/animations/bear-couple";

export default function Home() {
  const [_, setLocation] = useLocation();
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);
  const buttonTexts = [
    "Now I'm here!",
    "Hehe fool, I'm here!",
    "Ok fine, now you can click"
  ];

  const moveButton = () => {
    if (hoverCount < 2) {
      setButtonPosition({
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
      });
      setHoverCount(hoverCount + 1);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <Welcome />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center relative z-10"
      >
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Welcome Bubu 💝
        </h1>
        <p className="text-xl text-pink-500 mb-8 max-w-md mx-auto">
          I have something special just for you 🤫 ... Hold my Hand and Lets Goo..!
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={moveButton}
          onClick={() => setLocation("/quiz")}
          className="bg-pink-400 text-white px-8 py-3 rounded-full shadow-lg 
                   hover:bg-pink-500 transition-colors text-lg font-medium"
          style={{ transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)` }}
        >
          {buttonTexts[hoverCount] || "Click Here Bubu"}
        </motion.button>
      </motion.div>

      <div className="fixed bottom-8 left-8">
        <BearCouple position="left" />
      </div>
      <div className="fixed top-8 right-8">
        <BearCouple position="right" />
      </div>

      {/* Background hearts */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <img 
          src="/love-bg.png" 
          alt="Love background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
