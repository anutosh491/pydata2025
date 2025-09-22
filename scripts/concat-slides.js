const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, '../src/slides');
const outputFile = path.join(__dirname, '../slides.md');

const files = fs
  .readdirSync(slidesDir)
  .filter((f) => f.endsWith('.md'))
  .sort();

const content = files
  .map((f) => fs.readFileSync(path.join(slidesDir, f), 'utf-8'))
  .join('\n\n---\n\n');

fs.writeFileSync(outputFile, content);
console.log(`✅ Concatenated ${files.length} slides into slides.md`);
