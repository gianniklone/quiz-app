import { motion } from "framer-motion";

interface NextButtonProps {
  onClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 hover:scale-105 transition block mx-auto"
    >
      Prossima domanda
    </motion.button>
  );
};

export default NextButton;
