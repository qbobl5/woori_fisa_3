export default function ProductDetailsLayout({children}) {
  return (
      <section>
          {children}
          <div className="p-4 bg-blue-500">ProductDetail layout css style</div>
      </section>
  );
}