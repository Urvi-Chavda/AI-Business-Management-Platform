function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  onClick,
}) {
  const variantClass =
    variant === "secondary"
      ? "custom-button secondary-button"
      : variant === "outline"
        ? "custom-button outline-button"
        : "custom-button primary-button";

  return (
    <button
      type={type}
      className={`${variantClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;