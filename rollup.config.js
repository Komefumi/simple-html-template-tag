import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import pkg from "./package.json" assert { type: "json" };

const name = pkg.main.replace(/\.js$/, "");

/**
 * @param {import('rollup').RollupOptions} config
 * @returns {import('rollup').RollupOptions}
 */
const bundle = (config) => ({
  ...config,
  input: "src/index.ts",
  // This means local modules are regarded internal
  // But others (e.g. from npm) are regarded as external
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: `${name}.js`,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: "es",
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: "es",
    },
  }),
];
