import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import glob from 'fast-glob';
import nodeExternals from 'rollup-plugin-node-externals';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const entries = glob.sync(['src/index.ts', 'src/components/**/index.ts']);

const config = [
  {
    input: entries,
    preserveEntrySignatures: 'exports-only',
    output: [
      {
        dir: './lib/esm',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
      {
        dir: './lib/cjs',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        extract: false,
        modules: {
          localsConvention: 'camelCaseOnly',
          generateScopedName: 'WE-[folder]__[local]___[hash:base64:5]',
        },
        use: ['sass'],
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
        useTsconfigDeclarationDir: true,
      }),
      nodeExternals({
        exclude: [/^@webeach\//],
      }),
    ],
    external: ['react/jsx-runtime'],
  },
];

export default config;
