import { readFileSync } from 'fs';
import { createHash } from 'crypto';
import { resolve } from 'path';

export default function viteCSPPlugin() {
  return {
    name: 'vite:csp-hash',
    enforce: 'post',
    generateBundle(options, bundle) {
      const hashes = {};
      // Use options.dir to determine where the files are output
      const outputDir = options.dir || 'dist';  // Default to 'dist' if not specified

      Object.entries(bundle).forEach(([filename, fileinfo]) => {
        if (fileinfo.type === 'asset' && (filename.endsWith('.js') || filename.endsWith('.css'))) {
          const filePath = resolve(outputDir, filename);
          try {
            const content = readFileSync(filePath, 'utf8');
            const hash = createHash('sha256').update(content).digest('base64');
            hashes[filename] = `sha256-${hash}`;
          } catch (err) {
            console.error(`Failed to read file ${filePath}: ${err}`);
          }
        }
      });
      console.log(hashes); // This will log the hashes
    }
  };
}
