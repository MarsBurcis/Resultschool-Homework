import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
  input: "./index.js",
  output: {
    file: "./build/bundle.js",
    format: "iife", // используем iife, чтобы работать прямо в браузере
    sourcemap: true,
  },
  plugins: [
    serve({
      open: true, // автоматически откроет браузер
      contentBase: ["build"], // сервер будет отдавать всё из этой папки
      port: 3000,
    }),
    livereload("build"), // автообновление при изменениях
  ],
};
