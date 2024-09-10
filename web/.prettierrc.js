/** @type {import("prettier").Config} */
const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-classnames",
    "prettier-plugin-merge",
  ],
  // Sort Imports Config
  importOrder: ["<THIRD_PARTY_MODULES>", "^@[^/]+/(.*)$", "^@/(.*)$", "^[./]"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  endingPosition: "absolute-with-indent",
  // Normal Config
  printWidth: 80,
  singleQuote: false,
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  bracketSpacing: true,
  endOfLine: "lf",
}

export default config
