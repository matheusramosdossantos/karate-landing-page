/**
 * @fileoverview File that provides a label element to the application.
 */

export default function Label({ className, htmlFor, id, text, value }) {
  return (
    <>
      <label className={className} htmlFor={htmlFor} id={id} value={value}>
        <p>{text}</p>
      </label>
    </>
  );
}
