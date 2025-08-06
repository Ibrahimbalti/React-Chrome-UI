export default function IconButton({ icon, onClick }) {
  return (
    <button className="icon-btn" onClick={onClick}>
      {icon}
    </button>
  );
}
