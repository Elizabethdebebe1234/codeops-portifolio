import { getDishes } from "./lib/dishes";

const siteUrl = (process.env.SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  "",
);

export default async function sitemap() {
  const dishes = getDishes();

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/menu`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...dishes.map((dish) => ({
      url: `${siteUrl}/menu/${dish.id}`,
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  ];
}
