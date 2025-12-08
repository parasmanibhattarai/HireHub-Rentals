import { Header } from "../components/ui/navbar";


export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero section placeholder */}
        <section className="px-6 md:px-[100px] py-24">
          <h1>Equipment hire. Simplified.</h1>
          <p className="body-l mt-6 max-w-2xl">
            Connected to Australia's best hire suppliers. One place.
          </p>
          <p className="body-l mt-6 max-w-2xl">
            Every solution.
          </p>
        </section>
      </main>
    </>
  );
}
