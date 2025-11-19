export default function notfound() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <h1 className="sm:mt-2 font-primary text-primary-500 text-center mb-4 uppercase text-base sm:text-7xl font-extrabold tracking-wide">
        404
      </h1>

      <p className="text-2xl text-primary-900 font-primary">
        La page que vous recherchez semble introuvable. (404)
      </p>
    </section>
  );
}
