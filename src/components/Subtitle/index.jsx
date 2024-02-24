/**
 * @fileoverview File that provides a subtitle to the containers of the application.
 */

export default function Subtitle({ subtitle, className }) {
  return (
    <>
      <h2 className={className}>{subtitle}</h2>
    </>
  );
}
