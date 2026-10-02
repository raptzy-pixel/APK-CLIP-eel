# RAPIUZY AI CLIPPER

A futuristic Next.js + Tailwind UI for turning long-form video transcripts into multiple short-form clip ideas with OpenAI.

## What is included

- Mobile-first neon blue/purple UI matching the supplied reference.
- Splash/loading screen.
- YouTube URL validation + metadata preview through the YouTube oEmbed endpoint.
- Automatic public-caption extraction when YouTube exposes caption tracks.
- Manual transcript fallback.
- OpenAI-powered multi-clip timestamp/hook/subtitle analysis.
- Subtitle style and background music selector UI.
- Processing progress animation.
- Results grid with viral-potential scores.
- History and profile screens stored locally in the browser.
- Server-only `OPENAI_API_KEY`.

## Important deployment note

Vercel serverless functions are not a suitable place to download and render arbitrary YouTube videos into MP4 files. This project therefore generates **clip decisions and previews**, while the "Open source" action opens the original YouTube video at the selected timestamp.

For real MP4 rendering/downloads, connect the generated timestamps to a separate media worker (for example Cloud Run, AWS Batch, Modal, or a dedicated FFmpeg service) and store the resulting MP4 in object storage.

## Run locally

```bash
npm install
cp .env.example .env.local
# put your OpenAI key in .env.local
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Add `OPENAI_API_KEY` in Project Settings -> Environment Variables.
4. Redeploy.
5. Do not expose the key through `NEXT_PUBLIC_*`.

## OpenAI model

The API route defaults to `gpt-4.1-mini`. You can change `OPENAI_MODEL` in the route if your account uses another model.
