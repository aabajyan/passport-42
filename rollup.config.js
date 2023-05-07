/** @type {import('rollup').RollupOptions} */
export default {
  input: "lib/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    sourcemap: true,
    exports: "auto",
  },
};
