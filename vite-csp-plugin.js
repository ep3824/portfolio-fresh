import { promises as fs} from 'fs';
import { resolve } from 'path';
import { createHash } from 'crypto';

export default function viteCSPPlugin() {
  return {
    name: 'vite:csp-hash',
    enforce: 'post',
    async writeBundle(outputOptions, bundle) {
      const hashes = {};
      const outputDir = outputOptions.dir || 'dist';

      console.log("All bundle filenames:", Object.keys(bundle)); // Log all files in the bundle

      for (const [filename, fileinfo] of Object.entries(bundle)) {
        console.log("this is the file type:", fileinfo.type);
        if (fileinfo.type === 'asset' && (filename.endsWith('.js') || filename.endsWith('.css'))) {
          const filePath = resolve(outputDir, fileinfo.fileName);
          console.log("Processing file:", filename); // Log the filename being processed
          console.log("File path:", filePath); // Log the full file path

          try {
            const content = await fs.readFile(filePath, 'utf8');
            const hash = createHash('sha256').update(content).digest('base64');
            hashes[filename] = `sha256-${hash}`;
            console.log(`Hashed ${filename}: ${hashes[filename]}`); // Log each hash generated
          } catch (err) {
            console.error(`Failed to read or hash file ${filePath}: ${err}`);
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
