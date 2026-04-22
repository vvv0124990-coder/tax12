import { mkdir, copyFile, cp } from "node:fs/promises";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { build } from "esbuild";

const projectRoot = resolve(import.meta.dirname, "..");
const entryFile = resolve(projectRoot, "src", "main.tsx");
const outFile = resolve(projectRoot, "file-app.js");
const distDir = resolve(projectRoot, "dist");
const distIndexFile = resolve(distDir, "index.html");
const rootIndexFile = resolve(projectRoot, "index.html");
const downloadsDir = resolve(projectRoot, "downloads");
const distDownloadsDir = resolve(distDir, "downloads");
const reviewFormsScript = resolve(projectRoot, "scripts", "generate-review-forms.py");
const bundledPython = "C:\\Users\\Administrator\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe";

function runReviewFormGenerator() {
  const attempts = [
    { command: bundledPython, args: [reviewFormsScript] },
    { command: "python", args: [reviewFormsScript] },
    { command: "py", args: ["-3", reviewFormsScript] },
  ];

  for (const attempt of attempts) {
    const result = spawnSync(attempt.command, attempt.args, {
      stdio: "inherit",
      shell: false,
    });

    if (!result.error && result.status === 0) {
      return;
    }
  }

  throw new Error("검토서식 PDF 생성에 필요한 Python 실행 환경을 찾지 못했습니다.");
}

runReviewFormGenerator();

await build({
  entryPoints: [entryFile],
  bundle: true,
  format: "iife",
  platform: "browser",
  target: "es2020",
  outfile: outFile,
});

await mkdir(distDir, { recursive: true });
await copyFile(rootIndexFile, distIndexFile);
await copyFile(outFile, resolve(distDir, "file-app.js"));
await copyFile(resolve(projectRoot, "file-app.css"), resolve(distDir, "file-app.css"));
await cp(downloadsDir, distDownloadsDir, { recursive: true, force: true });
