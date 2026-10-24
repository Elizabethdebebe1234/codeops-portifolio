export default function ConfigDemoPage() {
  const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <main className="mx-auto max-w-2xl space-y-6 px-5 py-10">
      <h1 className="text-3xl font-bold">Environment Configuration</h1>

      <section className="space-y-3 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Public site URL</h2>
        <p>
          Next.js exposes environment variables prefixed with NEXT_PUBLIC_
          to browser code. Never put passwords or secret keys in these variables.
        </p>
        <p>
          Configured URL: <strong>{publicSiteUrl || "Not configured"}</strong>
        </p>
      </section>

      <section className="space-y-3 rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Important rules</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Use .env.local for local settings.</li>
          <li>Keep .env.local out of Git.</li>
          <li>Use NEXT_PUBLIC_ only for values safe to share publicly.</li>
          <li>Keep private API keys on the server and never display their values.</li>
          <li>Configure production variables in your hosting provider.</li>
        </ul>
      </section>
    </main>
  );
}
