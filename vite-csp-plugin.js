import { promises as fs, createHash } from 'fs';
import { resolve } from 'path';

export default function viteCSPPlugin() {
  return {
    name: 'vite:csp-hash',
    enforce: 'post',
    async writeBundle(outputOptions, bundle) {
      const hashes = {};
      const outputDir = outputOptions.dir || 'dist';

      for (const [filename, fileinfo] of Object.entries(bundle)) {
        if (fileinfo.type === 'asset' && (filename.endsWith('.js') || filename.endsWith('.css'))) {
          const filePath = resolve(outputDir, fileinfo.fileName);

          try {
            const content = await fs.readFile(filePath, 'utf8');
            const hash = createHash('sha256').update(content).digest('base64');
            hashes[filename] = `sha256-${hash}`;
          } catch (err) {
            console.error(`Failed to read file ${filePath}: ${err}`);
          }
        }
      }

      if (Object.keys(hashes).length > 0) {
        const hashesPath = resolve(outputDir, 'hashes.json');
        try {
          await fs.writeFile(hashesPath, JSON.stringify(hashes, null, 2));
          console.log(`CSP hashes written to ${hashesPath}`);
        } catch (err) {
          console.error(`Failed to write hashes file: ${err}`);
        }
      } else {
        console.log('No hashes generated.');
      }
    }
  };
}
