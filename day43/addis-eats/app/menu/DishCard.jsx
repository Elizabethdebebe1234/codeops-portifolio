import Image from "next/image";

export default function DishCard({ dish }) {
  return (
    <article className="dish-card">
      <Image
        src={dish.image}
        alt={dish.name}
        width={400}
        height={260}
        sizes="(max-width: 768px) 100vw, 400px"
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div className="dish-card-content">
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <p>
          <strong>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "ETB",
            }).format(dish.price)}
          </strong>
        </p>
      </div>
    </article>
  );
}
