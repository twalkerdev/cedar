import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['./src/**/*.test.ts'],
      testTimeout: 3_000,
      watch: true,
      typecheck: {
        enabled: true,
        include: ['**/*.{test,spec}-d.?(c|m)[jt]s?(x)'],
      },
      //npx vitest --coverage.enabled --coverage.provider=istanbul --coverage.all
      //coverage: {provider: "istanbul", enabled: true}
      //fakeTimers
    },
  }),
);
