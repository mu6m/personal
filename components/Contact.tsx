"use client";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const About = styled.div`
	max-width: 40rem;
	margin-block: 10rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	.header {
		font-family: "Playfair Display", serif;
		font-size: 5rem;
		position: relative;
		margin-block: 1rem;
		.overflow-background {
			position: absolute;
			bottom: 1rem;
			left: -1rem;
			width: 23rem;
			height: 2rem;
			background-color: #69648d;
			z-index: -1;
		}
	}
	.desc {
		p {
			max-width: 30rem;
		}
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		gap: 1rem;
		margin-block: 3rem;
	}
	.contact {
		display: flex;
		flex-direction: column;
		justify-self: center;
		align-self: center;
		text-align: center;

		// border: 2px solid #a196e9;
		background-color: #524a8599;
		border-radius: 10px;
		max-width: 10rem;
		font-weight: bold;
		padding-inline: 2rem;
		padding-block: 0.7rem;
		min-width: 5rem;
		width: 100%;
		margin-block: 1rem;
	}
	@media (max-width: 60rem) {
		.header {
			font-size: 3.5rem;
			.overflow-background {
				height: 1rem;
				width: 20rem;
				bottom: 0.7rem;
				left: 0;
			}
		}
		.desc {
			p {
				padding-inline: 2rem;
			}
		}
	}
`;
export default function Contact() {
	return (
		<About id="contact">
			<h1 className="header">
				<div className="overflow-background"></div>
				Get In Touch
			</h1>
			<div className="desc">
				<p>
					I am actively seeking new opportunities that can help me grow both
					personally and professionally.
				</p>
				<p>
					I am not afraid to take on new roles or responsibilities, even if they
					are outside of my comfort zone.
				</p>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					width: "100%",
					gap: "2rem",
					justifyContent: "center",
				}}
			>
				<motion.a
					whileHover={{
						scale: 1.1,
						cursor: "pointer",
						transition: { duration: 0.2 },
					}}
					style={{
						backgroundColor: "#6c9a80",
					}}
					whileTap={{ scale: 0.9 }}
					className="contact"
					href="mailto:theledraa@gmail.com"
				>
					Email Me
				</motion.a>
				<motion.a
					whileHover={{
						scale: 1.1,
						cursor: "pointer",
						transition: { duration: 0.2 },
					}}
					style={{
						backgroundColor: "#6488ea",
					}}
					whileTap={{ scale: 0.9 }}
					className="contact"
					href="https://twitter.com/theledraa"
				>
					Twitter
				</motion.a>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					width: "100%",
					gap: "2rem",
					justifyContent: "center",
				}}
			>
				<motion.a
					whileHover={{
						scale: 1.1,
						cursor: "pointer",
						transition: { duration: 0.2 },
					}}
					style={{
						backgroundColor: "#50b8e7",
					}}
					whileTap={{ scale: 0.9 }}
					className="contact"
					href="https://www.linkedin.com/in/ledraa/"
				>
					Linkedin
				</motion.a>
				<motion.a
					whileHover={{
						scale: 1.1,
						cursor: "pointer",
						transition: { duration: 0.2 },
					}}
					style={{
						backgroundColor: "#0e1111",
					}}
					whileTap={{ scale: 0.9 }}
					className="contact"
					href="https://github.com/mu6m"
				>
					Github
				</motion.a>
			</div>
		</About>
	);
}
