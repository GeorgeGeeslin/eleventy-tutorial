module.exports = function (eleventyConfig) {
    // Specify a folder that will be pass through to the output folder with no processing steps involved
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("admin");
}