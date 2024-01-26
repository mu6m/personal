"use client";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.scss";
import Nav from "@/components/Nav";
// import Footer from "@/components/Footer";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🖼️</text></svg>"
				></link>
				<title>Ledraa The Developer</title>
			</head>
			<body>
				<Toaster />
				<main>
					<Nav />
					{children}
					{/* <Footer /> */}
				</main>
			</body>
		</html>
	);
}
