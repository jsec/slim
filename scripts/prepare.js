/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const isCi = process.env.CI !== undefined;

if (!isCi) {
    require('husky').install();
}
