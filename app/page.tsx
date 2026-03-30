import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-xl font-bold">Srihas G</h1>
        <div className="space-x-4">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="flex flex-col items-center text-center py-20">
        <h2 className="text-4xl font-bold">Welcome to my portfolio 👋</h2>
        <p className="mt-4 text-gray-600">
          Click above to learn more about me and my work.
        </p>
      </section>
    </div>
  );
}