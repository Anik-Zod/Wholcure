"use client"
import { motion } from "framer-motion";

export const BouncingBackground = () => {
  // Define a few balls with different sizes and positions
  const balls = [
  // Original 5
  { size: "w-4 h-4", color: "bg-primary", top: "20%", left: "15%", delay: 0 },
  { size: "w-3 h-3", color: "g-primary", top: "40%", left: "80%", delay: 0.5 },
  { size: "w-5 h-5", color: "bg-primary", top: "70%", left: "20%", delay: 1 },
  { size: "w-2 h-2", color: "bg-primary", top: "25%", left: "85%", delay: 1.5 },
  { size: "w-6 h-6", color: "bg-primary", top: "85%", left: "60%", delay: 2 },
  
  // New 5 (Double Quantity)
  { size: "w-3 h-3", color: "bg-primary", top: "10%", left: "50%", delay: 0.3 },
  { size: "w-5 h-5", color: "bg-primary", top: "60%", left: "5%", delay: 0.8 },
  { size: "w-4 h-4", color: "bg-primary", top: "15%", left: "90%", delay: 1.2 },
  { size: "w-2 h-2", color: "bg-primary", top: "90%", left: "30%", delay: 1.7 },
  { size: "w-4 h-4", color: "bg-primary", top: "50%", left: "45%", delay: 2.2 },
];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
      {balls.map((ball, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[2px] ${ball.size} ${ball.color}`}
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [0, -40, 0], // The "Bounce" vertical movement
            x: [0, 15, 0],  // Slight horizontal sway
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4 + i, // Varied speeds
            repeat: Infinity,
            ease: "easeInOut",
            delay: ball.delay,
          }}
          style={{
            top: ball.top,
            left: ball.left,
          }}
        />
      ))}
    </div>
  );
};