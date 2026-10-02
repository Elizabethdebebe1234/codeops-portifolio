import { dishes } from "@/lib/dishes";

export function GET(request) {
  const category = new URL(request.url).searchParams.get("category");

  const filtered = category
    ? dishes.filter(
        (dish) => dish.category.toLowerCase() === category.toLowerCase(),
      )
    : dishes;

  return Response.json(filtered);
}
