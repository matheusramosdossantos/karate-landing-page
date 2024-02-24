/**
 * @fileoverview File that provides a li element to the application.
 */

export default function Li({ className, text }) {
  return (
    <>
      <li className={className}>{text}</li>
    </>
  );
}
