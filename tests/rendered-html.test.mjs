import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("SoriTTS 정적 페이지를 생성한다", async () => {
  const html = await readFile(
    new URL("../dist/client/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /<html[^>]*lang="ko"/i);
  assert.match(html, /SoriTTS — 내 PC에서 만드는 한국어 음성/);
  assert.match(html, /목소리는 선명하게/);
  assert.match(html, /Windows용 다운로드/);
  assert.match(html, /https:\/\/lahuman\.github\.io\/sori\.tts\/og-v2\.png/);
  assert.doesNotMatch(
    html,
    /codex-preview|Your site is taking shape|SkeletonPreview/,
  );

  if (process.env.GITHUB_ACTIONS === "true") {
    assert.match(html, /(?:href|src)="\/sori\.tts\/_next\//);
    await access(new URL("../dist/client/_next/", import.meta.url));
  }
});

