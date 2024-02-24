/**
 * @fileoverview File that provides a input element to the application.
 */

export default function Input({
  className,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  disabled,
  checked,
  maxLength,
}) {
  return (
    <>
      <input
        className={className}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        disabled={disabled}
        checked={checked}
        maxLength={maxLength}
      />
    </>
  );
}
