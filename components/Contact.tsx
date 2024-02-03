"use client";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const About = styled.div`
	max-width: 40rem;
	margin-top: 10rem;
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
		gap: 0.5rem;
	}
	.contact {
		display: flex;
		flex-direction: column;
		justify-self: center;
		align-self: center;

		border: 2px solid #a196e9;
		background-color: #524a8599;
		border-radius: 10px;
		max-width: 10rem;
		font-weight: bold;
		padding-inline: 2rem;
		padding-block: 0.7rem;
		margin-block: 2rem;
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
		<About>
			<h1 className="header">
				<div className="overflow-background"></div>
				Get In Touch
			</h1>
			<div className="desc">
				<p>
					I am actively seeking new opportunities that can help me grow both
					personally and professionally. I am committed to expanding my
					knowledge and experience to grow as a developer. I am not afraid to
					take on new roles or responsibilities, even if they are outside of my
					comfort zone.
				</p>
			</div>
			<motion.a
				whileHover={{
					scale: 1.1,
					backgroundColor: "#69648dff",
					cursor: "pointer",
					transition: { duration: 0.2 },
				}}
				whileTap={{ scale: 0.9 }}
				className="contact"
				href="mailto:abdulhamidledra@gmail.com"
			>
				Contact Me
			</motion.a>
		</About>
	);
}
