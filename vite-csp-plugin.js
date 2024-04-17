import { writeFileSync, readFileSync } from 'fs';
import { createHash } from 'crypto';


export default function viteCSPPlugin() {
  const hashes = {};

  return {
    name: 'vite:csp-hash',
    enforce: 'post',
    generateBundle(options, bundle) {
      Object.values(bundle).forEach((chunk) => {
        if (chunk.type === 'asset' && (chunk.fileName.endsWith('.js') || chunk.fileName.endsWith('.css'))) {
          const content = readFileSync(chunk.fileName, 'utf8');
          const hash = createHash('sha256').update(content).digest('base64');
          hashes[chunk.fileName] = `sha256-${hash}`;
        }
      });
      writeFileSync('/home/ethanp/portfolio-fresh/hashes.json', JSON.stringify(hashes, null, 2));
    }
  };
}
