# Transcribe Calculus Notes Images to Markdown

## Goal
Generate one Markdown file per day from the PNG images in each `Day NN` folder, preserving all text, formulas, graphs, and structural information from the handwritten notes.

## Scope
- Process all 20+ day folders (`Day 01` through `Day 20 Final`)
- ~180 PNG images total
- One Markdown output file per day folder

## Approach

### 1. Output Structure
- Create a `transcriptions/` directory in the repo root
- Name files `Day-01.md`, `Day-02.md`, ... `Day-20-Final.md` (or match existing folder naming)
- Each file contains the full transcription of all images in that day's folder

### 2. Transcription Method
- Use a vision-capable model (e.g., a multimodal agent) to process each PNG image
- Apply the prompt template from `ImagePrompt.md` as the system prompt for each image
- For each image, generate clean Markdown with LaTeX math formatting (e.g., `$...$` for inline, `$$...$$` for display math)
- Preserve headings, definitions, examples, and graph descriptions
- For graphs/diagrams, describe axes, curves, labels, and key values in text form (as exact markup reproduction of a graph is not feasible in plain Markdown without Mermaid/PlantUML, but we can describe them accurately)

### 3. Execution Strategy
- Use Agent Manager (or Task agents) to parallelize transcription across multiple sessions
- Batch images per day folder to keep related pages grouped under one agent session
- Each agent receives a day folder, processes all its PNGs sequentially using the vision model, and writes the resulting Markdown file to `transcriptions/`

### 4. Output Format per Day
```markdown
# Day N: [Topic]

## Page 1
<transcribed content from 1.png>

## Page 2
<transcribed content from 2.png>

...
```

### 5. Quality Checks
- Verify all PNGs in each folder are accounted for
- Ensure no text is omitted
- Verify LaTeX renders correctly for common calculus notation
- Run a quick review pass on the generated files

## Open Questions
- None identified. Ready to execute.
