import SearchBox from "./menu/SearchBox";
import Link from "next/link";

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Addis Eats Menu</h1>

        <Link
          href="/signin"
          className="rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-800"
        >
          Sign In
        </Link>
      </div>

      <p className="mb-8 text-gray-600">
        Search for your favorite Ethiopian dishes.
      </p>

      <SearchBox />
    </main>
  );
}
