import { Header } from "../components/ui/navbar";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full max-w-[80%] mx-auto">
        {/* Hero section placeholder */}
        <section className="px-6 md:px-[100px] py-24 flex flex-col items-center justify-center">
          <h1>Equipment hire. Simplified.</h1>
          <p className="body-l mt-6 max-w-2xl">
            Connected to Australia's best hire suppliers. One place.
          </p>
          <p className="body-l mt-2 max-w-2xl">
            Every solution.
          </p>
          <div className="flex space-x-4 mt-6">
            <button className="text-white bg-black text-sm p-2 rounded-lg px-6 hover:text-yellow-500 transition duration-500">Get a Quote</button>
            <button className="border-2 border-gray-300 rounded-lg p-2 px-6 text-sm">Login</button>
          </div>
          <Image src="/images/homeSection1.png" alt="Hero" width={1000} height={1000} className="w-full h-[600px] object-cover mt-14 rounded-lg" />
        </section>
        {/* How it works section placeholder */}
        <section className="px-6 md:px-[100px] py-24 flex flex-col items-center justify-center">
          <h2>How it works</h2>
          <div className="flex justify-between gap-20 mt-12 w-full">
            <div className="flex-1">
              <span className="w-9 h-9 border-2 border-black rounded-full flex items-center justify-center text-sm font-medium">1</span>
              <p className="uppercase text-2xl font-semibold mt-4">You tell us what you need</p>
              <p className="text-sm text-gray-500 mt-2">Share your equipment requirements, project timeline, and location. We'll understand your specific needs and help you find the perfect solution.</p>
              <Image src="/images/section2-1.jpeg" alt="Hero" width={1200} height={1200} className="w-full h-[580px] object-cover mt-6 rounded-lg" />
            </div>
            <div className="flex-1 flex flex-col gap-8">
              <div>
                <span className="w-9 h-9 border-2 border-black rounded-full flex items-center justify-center text-sm font-medium">2</span>
                <p className="uppercase text-2xl font-semibold mt-4">We source & manage the hire </p>
                <p className="text-sm text-gray-500 mt-2">We compare multiple suppliers to secure competitive rates, handle all negotiations and paperwork on your behalf.</p>
                <Image src="/images/section2-2.jpeg" alt="Hero" width={1000} height={1000} className="w-full h-[200px] object-cover mt-6 rounded-lg" />
              </div>
              <div>
                <span className="w-9 h-9 border-2 border-black rounded-full flex items-center justify-center text-sm font-medium">3</span>
                <p className="uppercase text-2xl font-semibold mt-4">Delivered fast</p>
                <p className="text-sm text-gray-500 mt-2">Sit back while we coordinate delivery and setup. Your equipment arrives on time, ready to use.</p>
                <Image src="/images/section2-3.jpeg" alt="Hero" width={1000} height={1000} className="w-full h-[200px] object-cover mt-6 rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
