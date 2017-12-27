/* eslint-env node */

const gulp = require("gulp");

// const server = require("gulp-server-livereload");
const taskTime = require("gulp-total-task-time");
const del = require("del");
const eslint = require("gulp-eslint");
// const replace = require("gulp-replace");
const rollup = require("rollup-stream");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const json = require("rollup-plugin-json");
const source = require("vinyl-source-stream");
const babel = require("gulp-babel");
const minify = require("gulp-minify");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const vinylPaths = require("vinyl-paths");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const htmlbeautify = require("gulp-html-beautify");
const nodeCleanup = require("node-cleanup");
const gutil = require("gulp-util");
const liveServer = require("live-server");
const yargs = require("yargs");
const path = require("path");
const fs = require("fs");
const git = require("gulp-git");
const jsdoc = require("gulp-jsdoc3");
const jsdocConfig = require("./.jsdoc.json");
const semver = require("semver");
const _ = require("lodash");
const jeditor = require("gulp-json-editor");
const map = require("map-stream");
const childProcess = require("child_process");
const GitHub = require("github-api");

const pkg = require("./package.json");
// const bower = require("./bower.json");
// const jsdocConfig = require("./.jsdoc.json");

// const server = gls.static("./dist", 8000);

taskTime.init();

const paths = {
	dist: "./dist",
	src: "./src",
	tmp: "./.tmp"
};

gulp.task("clean:dist", () =>
	del(`${paths.dist}/**`));

gulp.task("clean:tmp", () =>
	del(`${paths.tmp}/**`));

gulp.task("clean", gulp.parallel("clean:dist", "clean:tmp"));

// gulp.task("src-tmp", () => gulp.src(`${paths.src}/**/*`).pipe(gulp.dest(paths.tmp)));

gulp.task("lint", () => gulp.src(`${paths.src}/scripts/**/*.js`)
	.pipe(eslint({
		fix: true
	}))
	.pipe(eslint.format())
	.pipe(eslint.failAfterError()));

gulp.task("prepare:js", gulp.series("lint"));

gulp.task("prepare", gulp.series("clean", "prepare:js"));

gulp.task("rollup:browser", () => (
	rollup({
		input: `${paths.src}/youslam.js`,
		name: pkg.name,
		format: "iife",
		sourcemap: "inline",
		plugins: [
			resolve(),
			commonjs(),
			json({
				preferConst: true
			})

		]
	})
	.pipe(source("youslam.js"))
	.pipe(gulp.dest(pkg.browser.replace("/youslam.js", "")))
));

gulp.task("rollup:main", () => (
	rollup({
		input: `${paths.src}/youslam.js`,
		name: pkg.name,
		format: "cjs",
		plugins: [
			json({
				preferConst: true
			})
		]
	})
	.pipe(source("youslam.js"))
	.pipe(gulp.dest(pkg.main.replace("/youslam.js", "")))
));

gulp.task("rollup:module", () => (
	rollup({
		input: `${paths.src}/youslam.js`,
		name: pkg.name,
		format: "es",
		plugins: [
			json({
				preferConst: true
			})
		]
	})
	.pipe(source("youslam.js"))
	.pipe(gulp.dest(pkg.module.replace("/youslam.js", "")))
));

gulp.task("babel", () => gulp.src(pkg.browser)
	.pipe(babel({
		compact: false,
		plugins: [
			[
				"angularjs-annotate",
				{
					/* explicitOnly: true */
				}
			]
		]

	}))
	.pipe(gulp.dest(pkg.browser.replace("/youslam.js", ""))));

gulp.task("minify:js", () =>
	gulp.src(`${paths.dist}/youslam.js`)
	.pipe(minify({
		ext: {
			min: ".js"
		},
		noSource: true,
		mangle: false
	}))
	.pipe(gulp.dest(paths.dist)));

gulp.task("build:js", gulp.series(gulp.parallel(gulp.series("rollup:browser", "babel"), "rollup:main", "rollup:module"), "minify:js"));

gulp.task("dev:build:js", gulp.parallel(gulp.series("rollup:browser", "babel"), "rollup:main", "rollup:module"));

gulp.task("sass", () => gulp.src(`${paths.src}/main.scss`)
	.pipe(sourcemaps.init({
		largeFile: true
	}))
	.pipe(sass({
		outputStyle: "expanded",
		precision: 10,
		includePaths: ["./", "node_modules"]
	}).on("error", sass.logError))
	.pipe(sourcemaps.mapSources(sourcePath => `../src/${sourcePath}`))

	.pipe(sourcemaps.write(".", {
		charset: "utf-8",
		mapFile: function(mapFilePath) {
			return mapFilePath.replace("main", "youslam");
		}
	}))
	.pipe(gulp.dest(paths.tmp)));

gulp.task("rename", () => gulp.src(`${paths.tmp}/main.css`)
	.pipe(vinylPaths(del))
	.pipe(rename({
		basename: "youslam"
	}))
	.pipe(gulp.dest(paths.tmp)));

gulp.task("autoprefixer", () => gulp.src(`${paths.tmp}/youslam.css`)
	.pipe(sourcemaps.init({
		largeFile: true,
		loadMaps: true
	}))
	.pipe(autoprefixer({
		browsers: ["> 0.1%"],
		cascade: false
	}))
	.pipe(sourcemaps.write(".", {
		charset: "utf-8"
	}))
	.pipe(gulp.dest(paths.dist)));

gulp.task("minify:css", () => gulp.src(`${paths.dist}/youslam.css`)
	.pipe(sourcemaps.init({
		largeFile: true,
		loadMaps: true
	}))
	.pipe(cleanCSS({
		compatibility: "ie7",
		level: 2
	}))
	.pipe(sourcemaps.write(".", {
		charset: "utf-8"
	}))

	.pipe(gulp.dest(paths.dist)));

gulp.task("build:css", gulp.series(
	"sass", "rename", "autoprefixer", "minify:css"
));

gulp.task("dev:build:css", gulp.series("sass", "rename", "autoprefixer"));

gulp.task("beautify:html", () => gulp.src(`${paths.src}/**/*.html`)
	.pipe(htmlbeautify())
	.pipe(gulp.dest(paths.dist)));

gulp.task("build:html", gulp.series("beautify:html"));

gulp.task("dev:build:html", gulp.series("build:html"));

gulp.task("build:misc", () => gulp.src(`${paths.src}/{images/**/*,favicon.ico,robots.txt}`).pipe(gulp.dest(paths.dist)));

gulp.task("dev:build:misc", gulp.series("build:misc"));

gulp.task("build", gulp.series("prepare",
	gulp.parallel(
		"build:js", "build:html", "build:css", "build:misc"
	), "clean:tmp"));

gulp.task("dev:build", gulp.series("prepare", gulp.parallel(
	"dev:build:js", "dev:build:html", "dev:build:css", "dev:build:misc"
), "clean:tmp"));

gulp.task("watch", () => {
	gulp.watch(`${paths.src}/**/*.js`, gulp.series("dev:build:js")).on("change", (srcPath) => {
		gutil.log(`SRC: JS FILE CHANGED: ${srcPath}`);
	});

	gulp.watch(`${paths.src}/**/*.scss`, gulp.series("dev:build:css")).on("change", (srcPath) => {
		gutil.log(`SRC: SCSS FILE CHANGED: ${srcPath}`);
	});

	gulp.watch(`${paths.src}/**/*.html`, gulp.series("dev:build:html")).on("change", (srcPath) => {
		gutil.log(`SRC: HTML FILE CHANGED: ${srcPath}`);
	});

	gulp.watch(`${paths.src}/{images/**/*,favicon.ico,robots.txt}`, gulp.series("dev:build:misc")).on("change", (srcPath) => {
		gutil.log(`SRC: MISC FILE CHANGED: ${srcPath}`);
	});
});

gulp.task("server", () => {
	liveServer.start({
		port: 9000,
		root: "./dist",
		wait: 1000,
		open: false,
		logLevel: 2
	});
});

gulp.task("dev", gulp.series("dev:build", gulp.parallel("watch", "server")));

gulp.task("default", gulp.series("build"));

// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------

const branch = yargs.argv.branch || "master";

const rootDir = `${path.resolve(yargs.argv.rootDir || "./")}/`;
/**
 * @returns {string} current version
 */
const currVersion = () => JSON.parse(fs.readFileSync(`${rootDir}package.json`)).version;
/**
 * @returns {(string|undefined)} release type
 */
const preid = () => {
	if (yargs.argv.alpha) {
		return "alpha";
	}
	if (yargs.argv.beta) {
		return "beta";
	}
	if (yargs.argv.RC) {
		return "RC";
	}
	if (yargs.argv["pre-release"]) {
		return yargs.argv["pre-release"];
	}
	return undefined;
};
/**
 * @returns {string} release type
 */
const versioning = () => {
	if (preid()) {
		return "prerelease";
	}
	if (yargs.argv.minor) {
		return "minor";
	}
	if (yargs.argv.major) {
		return "major";
	}
	return "patch";
};

gulp.task("commit:build", () => (
	gulp.src("./dist/**/*.js").pipe(git.commit("Build: generated dist files"))
));

gulp.task("docs", () => {
	gulp.src(["README.md", "./src/**/*.js"], {
			read: false
		})
		.pipe(jsdoc(jsdocConfig));
});

gulp.task("commit:docs", () => (
	gulp.src("./docs/**", {
		cwd: rootDir
	}).pipe(git.commit("Build: generated docs files", {
		cwd: rootDir
	}))
));

gulp.task("bump", (cb) => {
	const newVersion = semver.inc(currVersion(), versioning(), preid());

	git.pull("origin", branch, {
		args: "--rebase",
		cwd: rootDir
	});

	const versionsToBump = _.map(["package.json", "bower.json", "manifest.json"], fileName => rootDir + fileName);

	gulp.src(versionsToBump, {
			cwd: rootDir
		})
		.pipe(jeditor({
			version: newVersion
		}))
		.pipe(gulp.dest("./", {
			cwd: rootDir
		}));

	const commitMessage = `Build: Bumps version to v${newVersion}`;

	gulp.src("./*.json", {
		cwd: rootDir
	}).pipe(git.commit(commitMessage, {
		cwd: rootDir
	})).on("end", () => {
		git.push(
			"origin", branch, {

				cwd: rootDir
			}, (err) => {
				if (err) {
					gutil.log(err);
				}
				else {
					cb();
				}
			}
		);
	});
});

let tag;

const tagVersion = function(newOptions) {
	let opts = newOptions;

	if (!newOptions) {
		opts = {};
	}

	if (!opts.key) {
		opts.key = "version";
	}

	if (typeof opts.prefix === "undefined") {
		opts.prefix = "v";
	}
	if (typeof opts.push === "undefined") {
		opts.push = true;
	}

	/**
	 *
	 *
	 * @param {any} file file to modify
	 * @param {any} cb callback
	 */
	function modifyContents(file, cb) {
		let version = opts.version;
		if (!opts.version) {
			if (file.isNull()) {
				cb(null, file);
			}
			if (file.isStream()) {
				cb(new Error("gulp-tag-version: streams not supported"));
			}

			const jsonFile = JSON.parse(file.contents.toString());
			version = jsonFile[opts.key];
		}
		tag = opts.prefix + version;

		const message = tag;

		gutil.log(`Tagging as: ${gutil.colors.cyan(tag)}`);
		git.tag(
			tag, message, {
				signed: "true",
				cwd: opts.cwd
			}, (err) => {
				if (err) {
					throw err;
				}

				git.tag(
					tag, "", {
						args: " -v",
						cwd: opts.cwd
					}, (innerErr) => {
						if (innerErr) {
							throw innerErr;
						}
						cb();
					}
				);
			}
		);
	}

	return map(modifyContents);
};

gulp.task("tag-and-push", (done) => {
	gulp.src("./", {
			cwd: rootDir
		})
		.pipe(tagVersion({
			version: currVersion(),
			cwd: rootDir
		}))
		.on("end", () => {
			git.push(
				"origin", branch, {
					args: "--tags",
					cwd: rootDir
				}, done
			);
		});
});

gulp.task("npm-publish", (done) => {
	childProcess.spawn("npm", ["publish", rootDir], {
		stdio: "inherit",
		shell: true
	}).on("close", done);
});

gulp.task("github", (cb) => {
	const GitHubAuth = JSON.parse(fs.readFileSync(`${rootDir}.githubauth`));

	const gh = new GitHub(GitHubAuth);

	const repo = gh.getRepo("nnmrts", "youslam");

	repo.listTags().then(() => {
		const tagName = `v${currVersion()}`;

		const targetCommitish = branch;

		const name = tagName;

		const body = "browser: [youslam.js](https://raw.githubusercontent.com/nnmrts/youslam/%t/dist/browser/youslam.js)\nnpm: [youslam.js](https://raw.githubusercontent.com/nnmrts/youslam/%t/dist/youslam.js)\nes module: [youslam.js](https://raw.githubusercontent.com/nnmrts/youslam/%t/dist/module/youslam.js)".replace(/%t/g, tagName);

		const prerelease = versioning() === "prerelease";

		return repo.createRelease({
			tag_name: tagName,
			target_commitish: targetCommitish,
			name,
			body,
			draft: false,
			prerelease
		}).then(() => {}).catch((e) => {
			gutil.log(e);

			cb(e);
		});
	}).catch((e) => {
		cb(e);
	});
});

gulp.task("release", gulp.series(
	"build", "commit:build", "docs", "commit:docs", "bump", "tag-and-push", "npm-publish", "github"
));

let cleanSignal;

gulp.task("kill-process", () =>
	process.kill(process.pid, cleanSignal));

nodeCleanup((exitCode, signal) => {
	if (signal) {
		cleanSignal = signal;

		// server.stop();

		gulp.series("clean:tmp", "kill-process");

		nodeCleanup.uninstall(); // don't call cleanup handler again
		return false;
	}
	return undefined;
}, {
	ctrl_C: "{^C}",
	uncaughtException: "Uh oh. Look what happened:"
});
