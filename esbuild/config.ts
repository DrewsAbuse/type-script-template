import path from 'path';
import {build} from 'esbuild';
import type {BuildOptions} from 'esbuild';

const DEV = 'dev';
const PROD = 'prod';
const MODE = process.env.MODE || DEV;

const resolveRoot = (...segments: string[]) => path.resolve(__dirname, '..', ...segments);

export const config: BuildOptions = {
  outdir: resolveRoot('build'),
  platform: 'node',
  entryPoints: [resolveRoot('src', 'index.ts')],
  allowOverwrite: true,
  bundle: true,
  tsconfig: resolveRoot('tsconfig.json'),
  minify: MODE === PROD,
  sourcemap: MODE === DEV,
  metafile: true,
};

build(config).catch(() => process.exit(1));
