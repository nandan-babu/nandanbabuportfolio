const fs = require('fs');
const path = require('path');
const https = require('https');

// Extract source json files
try {
  // Remove BOM if present from powershell Out-File -Encoding utf8
  let jsonStr = fs.readFileSync('kage_source.json', 'utf8');
  if (jsonStr.charCodeAt(0) === 0xFEFF) {
    jsonStr = jsonStr.slice(1);
  }
  const data = JSON.parse(jsonStr);

  const files = data.files || data;
  for (const [filePath, content] of Object.entries(files)) {
    // If content has a 'content' property (like from some registry formats)
    let fileContent = typeof content === 'object' && content !== null && 'content' in content ? content.content : content;
    const fullPath = path.resolve(__dirname, filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, fileContent, 'utf8');
    console.log(`Wrote ${filePath}`);
  }
} catch (e) {
  console.error("Error reading JSON", e);
}

const binaries = [
  "public/landing-pages/secret-pathways-assets/generated/kage-sanmon-preview.webp",
  "public/landing-pages/secret-pathways-assets/generated/kage-approach.webp",
  "public/landing-pages/secret-pathways-assets/generated/kage-lantern-court.webp",
  "public/landing-pages/secret-pathways-assets/generated/kage-moonwater.webp",
  "public/landing-pages/secret-pathways-assets/foreground/png/temple-wall.webp",
  "public/landing-pages/secret-pathways-assets/foreground/png/pine-tree.webp",
  "public/landing-pages/secret-pathways-assets/foreground/png/tall-grass.webp",
  "public/landing-pages/secret-pathways-assets/foreground/png/sakura-branch.webp",
  "public/landing-pages/secret-pathways-assets/foreground/png/maple-leaves.webp",
  "public/landing-pages/secret-pathways-assets/foreground/png/stone-lantern.webp",
  "public/landing-pages/secret-pathways-assets/foreground/png/garden-bush.webp",
  "public/landing-pages/secret-pathways-assets/foreground/png/basalt-stones.webp",
  "public/landing-pages/secret-pathways-assets/foreground/png/hill.webp",
  "public/landing-pages/secret-pathways-assets/foreground/png/shrine-ruins.webp"
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
};

(async () => {
  for (const binPath of binaries) {
    const url = `https://threeui.com/${binPath.replace('public/', '')}`;
    const dest = path.resolve(__dirname, binPath);
    try {
      await download(url, dest);
      console.log(`Downloaded ${binPath}`);
    } catch (e) {
      console.error(`Error downloading ${binPath}:`, e);
    }
  }
})();
