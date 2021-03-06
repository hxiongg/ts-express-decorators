const {buildApi} = require("@typedproject/ts-doc");
const execa = require("execa");
const path = require("path");
const fs = require("fs");
const sourcemaps = require("gulp-sourcemaps");
const gulp = require("gulp");
const clean = require("gulp-clean");
const ts = require("gulp-typescript");

const {tsdoc, packagesDir} = require("../../repo.config");

/**
 *
 * @param stream
 * @returns {Promise<any>}
 */
const toPromise = stream =>
  new Promise((resolve, reject) =>
    stream
      .on("end", resolve)
      .on("finish", resolve)
      .on("error", reject)
  );

module.exports = {
  async clean(g = gulp) {
    const stream = g.src(path.join(process.cwd(), "docs", "api"), {read: false, allowEmpty: true}).pipe(clean());

    return toPromise(stream);
  },

  async buildApi() {
    await module.exports.compile();
    await module.exports.clean();
    await buildApi(tsdoc);
  },

  async build() {
    await module.exports.buildApi();
    await execa("vuepress", ["build", "docs"], {stdio: "inherit"});
  },

  async compile() {
    const tsProject = ts.createProject("./tsconfig.compile.json", {
      "declaration": true,
      "noResolve": false,
      "preserveConstEnums": true
    });

    const stream = tsProject.src()
      .pipe(sourcemaps.init())
      .pipe(tsProject())
      .once("error", function() {
        this.once("finish", () => {
          throw new Error("fails with errors");
        });
      })
      .pipe(sourcemaps.write(".", {sourceRoot: "./"}))
      .pipe(gulp.dest(packagesDir));

    return toPromise(stream);
  },

  async serve() {
    await module.exports.buildApi();
    await execa("vuepress", ["dev", "docs"], {stdio: "inherit"});
  },

  async publish() {
    const pkg = JSON.parse(fs.readFileSync("./package.json", {encoding: "utf8"}));
    const {
      version,
      repository: {url}
    } = pkg;
    const {GH_TOKEN} = process.env;
    const repository = url.replace("https://", "");

    const vuePressPath = "./docs/.vuepress/dist";

    await module.exports.build();

    await execa.shell("git init", {
      cwd: vuePressPath
    });

    await execa.shell("git add -A", {
      cwd: vuePressPath
    });

    await execa.shell(`git commit -m 'Deploy documentation v${version}'`, {
      cwd: vuePressPath
    });

    await execa.shell(`git push -f https://${GH_TOKEN}@${repository} master:gh-pages`, {
      cwd: vuePressPath
    });
  }
};