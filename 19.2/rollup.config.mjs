import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import copy from "rollup-plugin-copy";

export default {
  input: "./index.js",
  output: {
    file: "./build/bundle.js",
    format: "cjs",
  },
  plugins: [
    copy({
      targets: [{ src: "index.html", dest: "build" }],
    }),
    serve({
      open: true,
      contentBase: ["build"],
      port: 3000,
    }),

    livereload("build"),
  ],
};
