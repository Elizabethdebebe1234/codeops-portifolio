import { notFound } from "next/navigation";
import { getDish } from "../../lib/dishes";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = await getDish(id);

  if (!dish) {
    return {
      title: "Dish Not Found",
      description: "The requested dish could not be found.",
    };
  }

  return {
    title: dish.name,

    description: `${dish.name} — ${dish.price} ETB. ${dish.summary}`,

    alternates: {
      canonical: `/menu/${dish.id}`,
    },

    openGraph: {
      title: `${dish.name} · Addis Eats`,
      description: `${dish.name} — ${dish.price} ETB. ${dish.summary}`,
      siteName: "Addis Eats",
      type: "website",
    },
  };
}

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = await getDish(id);

  if (!dish) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: dish.name,
    description: dish.summary,
    image: dish.image,
    offers: {
      "@type": "Offer",
      price: dish.price,
      priceCurrency: "ETB",
    },
  };

  return (
    <main className="mx-auto max-w-4xl p-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        <h1 className="mb-4 text-3xl font-bold">{dish.name}</h1>

        <img
          src={dish.image}
          alt={dish.name}
          className="mb-6 h-72 w-full rounded-xl object-cover"
        />

        <p className="mb-4 text-gray-600">{dish.summary}</p>

        <p className="mb-6 text-xl font-semibold">{dish.price} ETB</p>

        <a
          href="/menu"
          className="inline-block rounded-lg bg-orange-600 px-5 py-3 text-white hover:bg-orange-700"
        >
          Back to Menu
        </a>
      </article>
    </main>
  );
}
