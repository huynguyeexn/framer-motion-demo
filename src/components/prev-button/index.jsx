import { useNavigate } from "react-router-dom";

const PrevButton = () => {
  const navigate = useNavigate();

  return (
    <div className="prev">
      <div to="/base" onClick={() => navigate(-1)}>
        <button>Prev</button>
      </div>
    </div>
  );
};

export default PrevButton;
