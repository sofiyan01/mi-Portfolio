import { motion } from "framer-motion";

const BounceLoader = () => (
  <div className="flex justify-center items-center min-h-[200px] space-x-2">
    {[0, 0.2, 0.4].map((delay, i) => (
      <motion.span
        key={i}
        className="w-3 h-3 bg-blue-500 rounded-full"
        animate={{ y: ["0%", "-50%", "0%"] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default BounceLoader;
