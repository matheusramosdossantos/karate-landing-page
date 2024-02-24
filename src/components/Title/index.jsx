/**
 * @fileoverview File that provides a title to the containers of the application.
 */

export default function Title({ title, className, id, children }) {
  return (
    <>
      <h2 className={className} id={id}>
        {title}
      </h2>
      {children}
    </>
  );
}
