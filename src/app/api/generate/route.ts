import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json().catch(() => ({}))
    const userInput = (body?.input ?? "").toString().trim()

    const mock = {
        role: "Helpful prompt engineer",
        context: userInput
            ? `User wants a stronger prompt based on: ${userInput}`
            : "No details provided — showing a generic structure.",
        task: "Rewrite into a clear 6-part prompt the user can copy",
        constraints: "Be concise, avoid inventing facts, include tone if given",
        outputFormat: "Single copy-ready prompt block",
        examples: [
            "Example A: Short demo of desired tone and structure.",
            "Example B: Another brief demo the model can mimic."
        ],
        fullPrompt: `You are a helpful prompt engineer.

Context:
${userInput || "(no details provided)"}

Task:
Rewrite the user's request into a clear, structured prompt with role, context, task, constraints, output format, and 1–2 short examples.

Constraints:
- Be concise and specific
- Do not invent facts
- Include tone/platform if the user hinted them

Output format:
Return a single copy-ready prompt.

Examples:
1) Example A: Short demo of desired tone and structure.
2) Example B: Another brief demo the model can mimic.`
    }

    return NextResponse.json(mock)
}
