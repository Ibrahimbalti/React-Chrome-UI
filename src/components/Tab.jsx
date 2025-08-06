export default function Tab({ title, active, onClick }) {
  return (
    <div
      className={`tab ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
}
