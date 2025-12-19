"use strict";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(
    require("@11ty/eleventy-plugin-inclusive-language"),
    {
      words:
        "simply,obviously,basically,of course,clearly,everyone knows,however,easy",
    },
  );

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("_headers");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("example");
  eleventyConfig.addPassthroughCopy("api/images");
  eleventyConfig.addPassthroughCopy("api/scripts");
  eleventyConfig.addPassthroughCopy("api/styles");

  /* Markdown Plugins */
  const markdown = require("markdown-it")({
    html: true,
    linkify: true,
    typographer: true,
  });

  markdown.use(require("markdown-it-anchor"), {
    slugify: require("uslug"),
    permalink: true,
    permalinkBefore: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#",
  });

  markdown.use(require("markdown-it-attrs"), {
    leftDelimiter: "{:",
    rightDelimiter: "}",
  });

  markdown.use(require("markdown-it-prism"));

  markdown.use(require("markdown-it-emoji"));

  eleventyConfig.setLibrary("md", markdown);

  eleventyConfig.setUseGitIgnore(false);

  return {
    passthroughFileCopy: true,
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
