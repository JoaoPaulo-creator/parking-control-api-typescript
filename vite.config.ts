import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/controllers/**/*.spec.ts"],
    exclude: [...configDefaults.exclude, "**/node_modules/**, **/build/**"],
  },
});
