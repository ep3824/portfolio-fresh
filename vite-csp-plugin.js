import { writeFileSync, readFileSync } from 'fs';
import { createHash } from 'crypto';
import { resolve } from 'path';



export default function viteCSPPlugin() {
  return {
    name: 'vite:csp-hash',
    enforce: 'post',
    generateBundle(options, bundle) {
      const hashes = {};
      Object.values(bundle).forEach((chunk) => {
        if (chunk.type === 'asset' && (chunk.fileName.endsWith('.js') || chunk.fileName.endsWith('.css'))) {
          const filePath = resolve(options.dir || 'dist', chunk.fileName); // Adjust based on actual output directory
          const content = readFileSync(filePath, 'utf8');
          const hash = createHash('sha256').update(content).digest('base64');
          hashes[chunk.fileName] = `sha256-${hash}`;
        }
      });
      writeFileSync('/home/ethanp/portfolio-fresh/hashes.json', JSON.stringify(hashes, null, 2));
    }
  };
}