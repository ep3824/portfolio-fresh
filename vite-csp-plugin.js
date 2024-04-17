import { readFileSync } from 'fs';
import { createHash } from 'crypto';
import { resolve } from 'path';

export function viteCSPPlugin() {
  return {
    name: 'vite:csp-hash',
    enforce: 'post',
    generateBundle(options, bundle) {
      const hashes = {};
      for (const [filename, fileinfo] of Object.entries(bundle)) {
        if (fileinfo.type === 'asset' && (filename.endsWith('.js') || filename.endsWith('.css'))) {
          const filePath = resolve(options.dir, filename);
          try {
            const content = readFileSync(filePath, 'utf8');
            const hash = createHash('sha256').update(content).digest('base64');
            hashes[filename] = `sha256-${hash}`;
          } catch (err) {
            console.error(`Failed to read file ${filePath}: ${err}`);
          }
        }
      }
      console.log(hashes); // This will log the hashes
    }
  };
}
