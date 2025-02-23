import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import flow from 'rollup-plugin-flow';
// import visualizer from 'rollup-plugin-visualizer';
import autoExternal from 'rollup-plugin-auto-external';
// import globals from 'rollup-plugin-node-globals';
import json from 'rollup-plugin-json';

const commonPlugins = [
  autoExternal({
    packagePath: path.resolve('./packages/web/package.json'),
  }),
  json({
    exclude: ['node_modules/**'],
    preferConst: true,
  }),
  resolve({
    extensions: ['.mjs', '.js', '.jsx', '.json'],
  }),
  flow({ pretty: true }),
  postcss({ modules: true }),
  babel({
    exclude: 'node_modules/**',
    externalHelpers: true,
    runtimeHelpers: true,
  }),
  url(),
  commonjs({ include: '**/node_modules/**' }),
];

const configBase = {
  external: ['react', 'react-virtualized', 'styled-components'],
  plugins: commonPlugins,
};

const cjsConfig = Object.assign({}, configBase, {
  output: {
    format: 'cjs',
    file: 'packages/web/dist/cjs/index.js',
  },
});

export default cjsConfig;
