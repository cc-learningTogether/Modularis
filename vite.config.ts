import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig(({ command, mode }) => {
  if (command === "serve") {
    // Dev config
    return {
      plugins: [react(), tailwindcss()],
      root: path.resolve(__dirname, "dev"),
      build: {
        outDir: path.resolve(__dirname, "dist"),
      },
    };
  } else {
    // Build config
    return {
      plugins: [react(), tailwindcss(), dts()],
      build: {
        lib: {
          entry: path.resolve(__dirname, "src/index.ts"),
          name: "@binarynest/modularis",
          formats: ["es", "umd"],
          fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
          external: ["react", "react-dom", "tailwindcss"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
              tailwindcss: "tailwindcss",
            },
          },
        },
      },
    };
  }
});
