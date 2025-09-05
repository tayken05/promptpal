"use client"

import { useState } from "react"

type GenResult = {
  role: string
  context: string
  task: string
  constraints: string
  outputFormat: string
  examples: string[]
  fullPrompt: string
}

export default function ComposerPage() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<GenResult | null>(null)

  async function generate() {
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input })
      })
      if (!res.ok) throw new Error("Request failed")
      const data = (await res.json()) as GenResult
      setResult(data)
    } catch (e) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
      {/* LEFT: Input */}
      <section>
        <h1 className="text-2xl font-semibold">Composer</h1>
        <p className="mt-2 text-sm opacity-70">
          Type plain instructions. Click Generate to see a structured prompt (mocked for now).
        </p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., Write an Instagram caption for my new vanilla soap, premium tone."
          className="mt-4 w-full h-40 border rounded-xl p-3"
        />

        <button
          onClick={generate}
          disabled={loading || !input.trim()}
          className="mt-3 px-4 py-2 rounded-xl bg-black text-white disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate (mock)"}
        </button>
      </section>

      {/* RIGHT: Output */}
      <section className="border rounded-2xl p-4">
        <h2 className="font-semibold">Structured Prompt</h2>

        {error && <p className="text-red-600 mt-2">{error}</p>}

        {!result && !error && (
          <p className="mt-2 text-sm opacity-70">Nothing yet — generate to see the mocked result.</p>
        )}

        {result && (
          <div className="mt-3 space-y-2 text-sm">
            <p><strong>Role.</strong> {result.role}</p>
            <p><strong>Context.</strong> {result.context}</p>
            <p><strong>Task.</strong> {result.task}</p>
            <p><strong>Constraints.</strong> {result.constraints}</p>
            <p><strong>Output format.</strong> {result.outputFormat}</p>
            <div>
              <strong>Examples.</strong>
              <ul className="list-disc ml-5">
                {result.examples.map((ex, i) => <li key={i}>{ex}</li>)}
              </ul>
            </div>

            <div className="mt-3">
              <strong>Copy-ready prompt</strong>
              <pre className="mt-1 whitespace-pre-wrap bg-gray-50 p-3 rounded-xl">
                {result.fullPrompt}
              </pre>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
