import { FaMinus, FaSquare, FaTimes } from "react-icons/fa";

export default function WindowControls() {
  return (
    <div className="window-controls">
      <button className="win-btn" title="Minimize">
        <FaMinus size={10} />
      </button>
      <button className="win-btn" title="Maximize">
        <FaSquare size={10} />
      </button>
      <button className="win-btn" title="Close">
        <FaTimes size={10} />
      </button>
    </div>
  );
}
