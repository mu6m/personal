export const projectList = {
	frontend: [
		{
			name: "Payall",
			images: [
				"/images/projects/screencapture-payall-dev-vercel-app-2024-01-23-17_18_02.png",
			],
			using: ["Nextjs", "sass", "styled components", "typescript"],
			d: "a concept payment company website heavily inspired by a design i saw on behance so instead of it being just an idea turned it into a website",
			link: "https://payall-dev.vercel.app/",
		},
		{
			name: "CoinSav",
			images: [
				"/images/projects/screencapture-coin-sav-vercel-app-2024-02-03-20_30_22.png",
			],
			using: ["Remixjs", "sass", "styled components", "typescript"],
			d: "",
			link: "https://coin-sav.vercel.app/",
		},
	],
	backend: [
		{
			name: "Store Api",
			images: [],
			using: ["bunjs", "prisma", "jwt", "elysia", "websocket"],
			d: "an online store api made using bunjs for handling cart requests and keeping cart items synced between devices aimed for fast performance",
			link: "https://github.com/mu6m/store-api",
		},
		{
			name: "Next Drive",
			images: [],
			using: ["Nextjs", "graphql", "hasura", "jwt", "express"],
			d: "a self hosted file storage with folder upload and multiple files support",
			link: "https://github.com/mu6m/next-drive",
		},
		{
			name: "Recipe Api",
			images: [],
			using: ["bunjs", "python", "elysia", "prisma", "postgres"],
			d: "an api that can search and sort recipes it has 8300+ recipes",
			link: "https://recipe-api-gest.onrender.com/",
		},
	],
	others: [
		{
			name: "Clip It",
			images: [],
			using: ["Rust", "ffmpeg"],
			d: "a program that uses ffmpeg to record a clip ( 15 minutes long ) at highest resolution possible",
			link: "https://github.com/mu6m/clip-it",
		},
		{
			name: "Window Timer",
			images: [],
			using: ["Rust", "WinApi"],
			d: "a program that helps you keep track of the time you spent on each window opened",
			link: "https://github.com/mu6m/window-timer",
		},
	],
};
