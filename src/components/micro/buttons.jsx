export default function Button({ className, children, ...props }) {
  return (
    <button {...props} className={`px-6 py-3 rounded-lg ${className}`}>
      {children}
    </button>
  );
}
