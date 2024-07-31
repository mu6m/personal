"use client";
import Projects from "@/components/Projects";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { projectList } from "@/lib/info";
import Contact from "@/components/Contact";

const MainHero = styled.div`
	width: 100%;
	max-width: 50rem;
	margin-top: 20vh;
	margin-bottom: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	margin-bottom: 5rem;
	.containText {
		max-width: 30rem;
		h1 {
			padding-top: 2rem;
			min-height: 15rem;
			font-family: "Playfair Display", serif;
			font-weight: 800;
			font-style: italic;
			padding-inline: 2rem;
			font-size: 6rem;
			line-height: 6rem;
			margin-bottom: 2rem;
			background: radial-gradient(circle, #5fdead 1px, transparent 20%);
			background-size: 70rem;
			background-repeat: none;
			background-position: center;
		}
	}
	p {
		font-size: 1rem;
		font-style: italic;
		font-weight: light;
		text-align: center;
		max-width: 27rem;
	}
	@media (max-width: 60rem) {
		.containText {
			h1 {
				text-align: left;
				max-width: 30rem;
				line-height: 6rem;
				font-size: 6rem;
			}
		}
		p {
			font-size: 0.8rem;
			max-width: 19rem;
		}
	}
`;
const Other = styled.a`
	text-decoration: underline;
	text-underline-offset: 5px;
	white-space: pre;
	cursor: pointer;
	margin-bottom: 2rem;
	&:hover {
		text-decoration-style: dashed;
	}
`;
export default function Page() {
	const MotionHero = motion(MainHero);
	return (
		<>
			<MotionHero
				variants={{
					animate: {
						transition: {
							staggerChildren: 0.1,
						},
					},
				}}
			>
				<motion.div
					className="containText"
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						backgroundSize: ["30rem", "70rem"],
						transition: {
							backgroundSize: {
								duration: 0.7,
							},
							duration: 0.8,
						},
					}}
				>
					<motion.h1>Hi I'm Ledraa</motion.h1>
				</motion.div>
				<motion.p
					initial={{
						y: "50%",
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
						transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.4 },
					}}
				>
					my passion is creating free and opensource software for everyone to
					use, from simple webapps to complex services my goal is to create
					accessible and reliable software for everyone.
				</motion.p>
			</MotionHero>

			<Projects
				frontend={projectList.frontend.slice(0, 10)}
				backend={projectList.backend.slice(0, 10)}
				others={projectList.others.slice(0, 10)}
			/>
			<Other href="/projects">View All Projects</Other>
			<Contact />
		</>
	);
}
