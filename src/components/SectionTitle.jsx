export default function SectionTitle({ id, title, children }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 id={`${id}-heading`} className="font-display text-4xl font-semibold sm:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-4 leading-relaxed text-muted">{children}</p>}
    </div>
  );
}
