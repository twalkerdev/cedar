import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['./src/**/*.test.ts'],
      testTimeout: 3_000,
      watch: true,
      globals: true,
      typecheck: {
        enabled: true,
        include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)', '**/*.test.ts'],
      },
      //npx vitest --coverage.enabled --coverage.provider=istanbul --coverage.all
      //coverage: {provider: "istanbul", enabled: true}
      //fakeTimers
    },
  }),
);
