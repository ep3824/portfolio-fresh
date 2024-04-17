import { promises as fs } from 'fs';
import { createHash } from 'crypto';
import { resolve, join } from 'path';

export default function viteCSPPlugin() {
  return {
    name: 'vite:csp-hash',
    enforce: 'post',
    async generateBundle(options, bundle) {
      const hashes = {};
      const outputDir = options.dir || 'dist';  // Ensure this is correctly set in your Vite config

      for (const [filename, fileinfo] of Object.entries(bundle)) {
        if (fileinfo.type === 'asset' && (filename.endsWith('.js') || filename.endsWith('.css'))) {
          const filePath = resolve(outputDir, filename);
          try {
            const content = await fs.readFile(filePath, 'utf8');
            const hash = createHash('sha256').update(content).digest('base64');
            hashes[filename] = `sha256-${hash}`;
          } catch (err) {
            console.error(`Failed to read file ${filePath}: ${err}`);
          }
        }
      }

      // Writing hashes to a JSON file
      if (Object.keys(hashes).length > 0) {
        const hashesPath = join(outputDir, 'hashes.json');
        await fs.writeFile(hashesPath, JSON.stringify(hashes, null, 2));
        console.log(`CSP hashes written to ${hashesPath}`);
      } else {
        console.log('No hashes generated.');
      }
    }
  };
}
