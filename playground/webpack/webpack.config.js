import path from 'path'
import url from 'url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  stats: 'errors-only',
};
