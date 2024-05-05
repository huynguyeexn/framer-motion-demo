import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PrevButton = () => {
  const navigate = useNavigate();

  return (
    <div className="prev">
      <div to="/base" onClick={() => navigate(-1)}>
        <motion.button
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 10px #ffffff",
            boxShadow: "0px 0px 10px #ffffff",
          }}
        >
          Prev
        </motion.button>
      </div>
    </div>
  );
};

export default PrevButton;
