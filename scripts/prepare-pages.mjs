import { access, rename, rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];

if (!repository || !/^[A-Za-z0-9._-]+$/.test(repository)) {
  process.exit(0);
}

const clientRoot = fileURLToPath(new URL("../dist/client/", import.meta.url));
const prefixedRoot = join(clientRoot, repository);
const prefixedAssets = join(prefixedRoot, "_next");

try {
  await access(prefixedAssets);
} catch (error) {
  if (error?.code === "ENOENT") {
    process.exit(0);
  }

  throw error;
}

await rename(prefixedAssets, join(clientRoot, "_next"));
await rm(prefixedRoot, { recursive: true });

