import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgRoot = path.resolve(__dirname, "..");
const destDir = path.join(pkgRoot, "dist", "cliplab");

fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(path.join(pkgRoot, "src", "cliplab", "LICENSE"), path.join(destDir, "LICENSE"));
fs.copyFileSync(path.join(pkgRoot, "src", "cliplab", "PROVENANCE.md"), path.join(destDir, "PROVENANCE.md"));
