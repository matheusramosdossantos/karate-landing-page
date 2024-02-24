/**
 * @fileoverview File that provides a form element to the application.
 */

export default function Form({ className, children, onSubmit }) {
  return (
    <>
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </>
  );
}
