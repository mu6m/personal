const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});
const nextConfig = {
	experimental: {
		appDir: true,
	},
};
module.exports = nextConfig;
// module.exports = withMDX({
// 	// Append the default value with md extensions
// 	reactStrictMode: false,
// 	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
// });
