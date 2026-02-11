export default function TabButton({ children, onSelect, isActive }) {
  return (
    <button onClick={onSelect} className={isActive ? "active" : ""}>
      {children}
    </button>
  );
}
