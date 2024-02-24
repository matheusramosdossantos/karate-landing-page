/**
 * @fileoverview File that provides a button element to the application.
 */

export default function Btn({ className, type, text, onClick, disabled }) {
  return (
    <>
      <button
        className={className}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
}
