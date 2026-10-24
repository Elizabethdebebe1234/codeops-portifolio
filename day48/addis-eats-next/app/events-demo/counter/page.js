"use client";

import { useEffect, useRef, useState } from "react";

export default function CounterDemoPage() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [throttleCount, setThrottleCount] = useState(0);
  const lastClickTime = useRef(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [search]);

  function handleThrottledClick() {
    const now = Date.now();

    if (now - lastClickTime.current < 1000) return;

    lastClickTime.current = now;
    setThrottleCount((previous) => previous + 1);
  }

  return (
    <main className="mx-auto max-w-2xl space-y-8 px-5 py-10">
      <h1 className="text-3xl font-bold">State, Debounce and Throttle</h1>

      <section className="space-y-4 rounded-xl border p-6">
        <h2 className="text-xl font-bold">1. State counter</h2>
        <p className="text-2xl">Count: {count}</p>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => setCount((c) => c + 1)}
            className="min-h-11 rounded-lg bg-green-800 px-4 py-3 text-white">Increase</button>
          <button onClick={() => setCount((c) => c - 1)}
            className="min-h-11 rounded-lg border px-4 py-3">Decrease</button>
          <button onClick={() => setCount(0)}
            className="min-h-11 rounded-lg border px-4 py-3">Reset</button>
        </div>
      </section>

      <section className="space-y-3 rounded-xl border p-6">
        <h2 className="text-xl font-bold">2. Debounced search</h2>
        <p>Wait 400 milliseconds after typing stops before updating the result.</p>
        <label htmlFor="search" className="block">Search text</label>
        <input id="search" value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="min-h-11 w-full rounded-lg border px-3" />
        <p>Typing now: {search || "(empty)"}</p>
        <p>Debounced value: {debouncedSearch || "(empty)"}</p>
      </section>

      <section className="space-y-3 rounded-xl border p-6">
        <h2 className="text-xl font-bold">3. Throttled button</h2>
        <p>Only one click per second is counted.</p>
        <button onClick={handleThrottledClick}
          className="min-h-11 rounded-lg bg-green-800 px-4 py-3 text-white">
          Try rapid clicks
        </button>
        <p>Accepted clicks: {throttleCount}</p>
      </section>
    </main>
  );
}
