import { FlatCompat } from "@eslint/eslintrc";
import antfu from '@antfu/eslint-config'


const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = antfu(
    {
      formatters: true,
      react: true,
    },
    ...compat.config({
      extends: [
        'plugin:@next/next/recommended',
      ],
    }),
)

export default eslintConfig;
