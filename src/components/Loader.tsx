import { motion } from "framer-motion";
import heroLogo from '../assets/logo_in_banner.png';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          className="mb-4"
        >
          <div 
            className="w-48 h-32 bg-contain bg-center bg-no-repeat mx-auto"
            style={{ backgroundImage: `url(${heroLogo})` }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-primary text-lg font-medium"
        >
          Loading...
        </motion.div>

        <motion.div 
          className="w-48 h-1 bg-muted rounded-full mt-4 mx-auto overflow-hidden"
        >
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;