"use client";
import Projects from "@/components/Projects";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { projectList } from "@/lib/info";
import Contact from "@/components/Contact";

const MainHero = styled.div`
	width: 100%;
	max-width: 60rem;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	margin-bottom: 5rem;
	h1 {
		font-family: "Playfair Display", serif;
		font-weight: 800;
		font-style: italic;
		padding-inline: 2rem;
		font-size: 8rem;
		line-height: 8rem;
		margin-bottom: 2rem;
		background: radial-gradient(circle, #5fdead 1px, transparent 20%);
		background-size: 70rem;
		background-repeat: none;
		background-position: center;
	}
	p {
		font-size: 1rem;
		font-style: italic;
		font-weight: light;
		text-align: center;
		max-width: 27rem;
	}
	@media (max-width: 60rem) {
		h1 {
			max-width: 40rem;
			line-height: 5rem;
			font-size: 3.8rem;
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
				<motion.h1
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
					Hi I'm Abdulhamid Ledraa
				</motion.h1>
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
					And I'm passionate about making web application that are engaging,
					accessible and fast.
				</motion.p>
			</MotionHero>

			<Projects
				frontend={projectList.frontend.slice(0, 3)}
				backend={projectList.backend.slice(0, 3)}
				others={projectList.others.slice(0, 3)}
			/>
			<Other href="/projects">View All Projects</Other>
			<Contact />
		</>
	);
}
