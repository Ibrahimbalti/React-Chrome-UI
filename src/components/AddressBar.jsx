import { FaLock, FaStar, FaEllipsisV, FaArrowLeft, FaArrowRight, FaRedoAlt } from "react-icons/fa";
import IconButton from "./IconButton";

export default function AddressBar({ url, setUrl }) {
  return (
    <div className="address-bar">
      {/* Navigation buttons */}
      <IconButton icon={<FaArrowLeft />} onClick={() => alert("Back")} />
      <IconButton icon={<FaArrowRight />} onClick={() => alert("Forward")} />
      <IconButton icon={<FaRedoAlt />} onClick={() => alert("Refresh")} />

      {/* Lock icon */}
      <IconButton icon={<FaLock />} onClick={() => alert("Secure site")} />

      {/* Address input */}
      <input
        className="address-input"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      {/* Bookmark and menu */}
      <IconButton icon={<FaStar />} onClick={() => alert("Bookmark")} />
      <IconButton icon={<FaEllipsisV />} onClick={() => alert("Menu")} />
    </div>
  );
}
