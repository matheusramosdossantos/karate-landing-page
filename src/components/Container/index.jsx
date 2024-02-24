/**
 * @fileoverview File that provides a container to the application.
 */

export default function Container({ children, className }) {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
}
