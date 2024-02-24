/**
 * @fileoverview File that provides a img element to the application.
 */

export default function Img({ className, src, alt, children }) {
  return (
    <>
      <img className={className} src={src} alt={alt} />
      {children}
    </>
  );
}
