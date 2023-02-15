"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {
        //include: ["src/tests/**/*.spec.ts"],
        exclude: [...config_1.configDefaults.exclude, "**/node_modules/**"],
    },
});
