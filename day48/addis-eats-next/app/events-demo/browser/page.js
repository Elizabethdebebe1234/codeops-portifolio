"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "addisEatsDay48BrowserDemo";

export default function BrowserDemoPage() {
  const [note, setNote] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const savedNote = window.localStorage.getItem(STORAGE_KEY);
      if (savedNote !== null) setNote(savedNote);
    } catch {
      setMessage("Browser storage is unavailable in this environment.");
    } finally {
      setLoaded(true);
    }
  }, []);

  function saveNote(event) {
    event.preventDefault();

    try {
      window.localStorage.setItem(STORAGE_KEY, note);
      setMessage("Practice note saved in this browser.");
    } catch {
      setMessage("Could not save the note in browser storage.");
    }
  }

  function clearNote() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      setNote("");
      setMessage("Practice note removed.");
    } catch {
      setMessage("Could not clear browser storage.");
    }
  }

  return (
    <main className="mx-auto max-w-2xl space-y-6 px-5 py-10">
      <h1 className="text-3xl font-bold">Browser Storage Demo</h1>
      <p>Browser APIs such as localStorage should be used on the client.</p>

      {!loaded ? <p>Loading saved note...</p> : (
        <form onSubmit={saveNote} className="space-y-4 rounded-xl border p-6">
          <label htmlFor="note" className="block font-medium">Practice note</label>
          <textarea id="note" rows={4} value={note}
            onChange={(event) => setNote(event.target.value)}
            className="w-full rounded-lg border p-3"
            placeholder="Write a note for this browser..." />
          <div className="flex flex-wrap gap-3">
            <button type="submit"
              className="min-h-11 rounded-lg bg-green-800 px-4 py-3 text-white">Save note</button>
            <button type="button" onClick={clearNote}
              className="min-h-11 rounded-lg border px-4 py-3">Clear note</button>
          </div>
        </form>
      )}

      <p role="status" aria-live="polite">{message}</p>
      <p className="text-sm">This is a local learning demo, not secure storage for passwords or secrets.</p>
    </main>
  );
}
