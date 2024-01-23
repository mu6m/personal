import { ImageResponse } from "@vercel/og";

export const config = {
	runtime: "edge",
};

const font = fetch(
	new URL("/public/fonts/Inter-Black.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler() {
	const fontData = await font;

	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					height: "100%",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					letterSpacing: "-.02em",
					fontWeight: 700,
					background: "white",
				}}
			>
				<div
					style={{
						left: 42,
						top: 42,
						position: "absolute",
						display: "flex",
						alignItems: "center",
					}}
				>
					<span
						style={{
							width: 24,
							height: 24,
							background: "black",
						}}
					/>
					<span
						style={{
							marginLeft: 8,
							fontSize: 20,
						}}
					>
						payall
					</span>
				</div>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						padding: "20px 50px",
						margin: "0 42px",
						fontSize: 25,
						width: "auto",
						maxWidth: 550,
						textAlign: "center",
						backgroundColor: "black",
						color: "white",
						lineHeight: 1.4,
						whiteSpace: "pre-wrap",
					}}
				>
					made by A. L.
				</div>
			</div>
		),
		{
			width: 1200,
			height: 600,
			emoji: "twemoji",
			fonts: [
				{
					name: "Inter",
					data: fontData,
				},
			],
		}
	);
}
