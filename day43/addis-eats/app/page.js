import Image from "next/image";
import Script from "next/script";

export default function HomePage() {
  return (
    <>
      <main
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <section
          style={{
            textAlign: "center",
            padding: "40px 20px",
          }}
        >
          <Image
            src="/hero.jpg"
            alt="Traditional Ethiopian food served at Addis Eats"
            width={1200}
            height={700}
            sizes="100vw"
            preload
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />

          <h1 style={{ fontSize: "42px", marginTop: "30px" }}>
            Welcome to Addis Eats
          </h1>

          <p style={{ fontSize: "20px" }}>
            Discover delicious Ethiopian dishes.
          </p>
        </section>
      </main>

      <Script id="addis-eats-performance-script" strategy="lazyOnload">{`
        console.log("Addis Eats non-critical script loaded");
      `}</Script>
    </>
  );
}
