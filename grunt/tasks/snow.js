module.exports = function (grunt) {

	"use strict";

	var Fiber = require("fibers"),

		HttpClient = require("common-node").httpclient.HttpClient;

	grunt.registerMultiTask("snow", "Snow snow snow ...", function () {
		var done = this.async(),

			dest = this.file.dest,

			sources = grunt.file.expandFiles(this.file.src),

			snow = {
				add: function (filepath, content) {
					if (content) {
						filepath = dest + "/" + filepath.replace(/^\//, "");

						if (content instanceof Array) {
							content = content.join("\n");
						}

						if (content.data && content.type === "path") {
							grunt.file.copy(content.data, filepath);
						}
						else {
							grunt.file.write(filepath, content.data || content);
						}
					}
				},

				fetch: function (src) {
					if (/^https?:\/\//.test(src)) {
						var res = new HttpClient({
								method: "GET",
								url: src
							})
							.finish()
							.body.read();

						return {
							type: "buffer",
							data: res.buffer,
							toString: function () {
								return res.decodeToString();
							}
						};
					}
					else {
						return {
							type: "path",
							data: src,
							toString: function () {
								return grunt.file.read(src);
							}
						};
					}
				},

				find: function (minimatch) {
					return grunt.file.expandFiles(minimatch);
				}
			};

		Fiber(function () {
			sources.forEach(function (abspath) {
				var filename = abspath.replace(/^(.*?)\/([^\/]+)$/, "$2"),
					dirname = abspath.replace(/^(.*?)\/([^\/]+)$/,"$1"),
					Fn = Function;

				(new Fn("__filename", "__dirname", "require", "snow", grunt.file.read(abspath)))(filename, dirname, require, snow);
			});

			done(true);
		})
		.run();
	});

};