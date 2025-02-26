export default function Button({ children, className, variant = "default", onClick }) {
    const baseStyles = "px-2 py-1 sm:px-4 sm:py-2 rounded text-white font-bold transition-colors";
    const variants = {
      default: "bg-blue-600 hover:bg-blue-700",
      outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
      link: "text-blue-600 underline hover:text-blue-700",
    };
  
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }