import { FaSearch, FaMicrophone } from "react-icons/fa";
import { MdCameraAlt } from "react-icons/md";

export default function SearchBoxWithShortcuts() {
  const shortcuts = [
    { icon: "G", title: "Gmail" },
    { icon: "Y", title: "YouTube" },
    { icon: "F", title: "Facebook" },
    { icon: "T", title: "Twitter" },
    { icon: "I", title: "Instagram" },
    { icon: "N", title: "Netflix" },
  ];

  return (
    <div>
      {/* Search Box */}
      <div className="search-box">
        <FaSearch className="search-icon-left" />
        <input className="search-input" placeholder="Search Google or type a URL" />
        <div className="search-icons-right">
          <FaMicrophone title="Search by voice" />
          <MdCameraAlt title="Search by image" />
        </div>
      </div>

      {/* Shortcuts */}
      <div className="shortcuts">
        {shortcuts.map((s, idx) => (
          <div key={idx} className="shortcut-tile">
            <div className="shortcut-icon">{s.icon}</div>
            <div className="shortcut-title">{s.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
