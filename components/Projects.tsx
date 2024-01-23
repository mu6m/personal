"use client";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export default function Projects() {
	const MainDiv = styled.div`
		margin-block: 2rem;
		display: flex;
		flex-direction: column;
		.project {
			display: flex;
			flex-direction: column;
			width: 100%;
			max-width: 30rem;
			border-radius: 16px;
			border: 1px solid rgba(255, 255, 255, 0.3);
			overflow: hidden;
			box-shadow: 0 4px 8px rgba(95, 222, 173, 0.2);
			.image {
				overflow: hidden;
				max-height: 15rem;
				object-fit: cover;
				width: 100%;
				img {
					width: 100%;
				}
			}
			.info {
				display: flex;
				flex-direction: column;
				padding: 1rem;
				h2 {
					font-size: 3rem;
					font-weight: 800;
				}
				p {
					font-size: 0.9rem;
				}
				.tags {
					margin-block: 0.3rem;
					display: flex;
					align-content: center;
					align-items: center;
					gap: 0.5rem;
					.tag {
						display: flex;
						justify-content: center;
						align-content: center;
						align-items: center;
						font-size: 0.8rem;
						font-weight: light;
						font-style: italic;
					}
				}
			}
		}
		.header-project {
			font-family: "Playfair Display", serif;
			font-size: 5rem;
			position: relative;
			left: -5rem;
		}
		@media (max-width: 60rem) {
			.header-project {
				left: -1rem;
			}
		}
	`;
	const MotionDiv = motion(MainDiv);
	const frontend = [
		{
			name: "Payall",
			images: [
				"/images/projects/screencapture-payall-dev-vercel-app-2024-01-23-17_18_02.png",
			],
			using: ["nextjs", "sass", "styled components"],
			d: "a consept payment company website heavily inspired by behance",
			link: "https://payall-dev.vercel.app/",
		},
	];
	return (
		<MotionDiv>
			<motion.h2 className="header-project">Fontend</motion.h2>
			{frontend.map((item) => {
				return (
					<motion.a
						key={item.name}
						href={item.link}
						target="_blank"
						className="project"
						whileHover={{
							scale: 1.03,
							boxShadow: "0 4px 8px rgba(95, 222, 173, 0.8)",
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 0.9 }}
						initial={{ overflow: "hidden", opacity: 0, x: "100%" }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4 }}
					>
						<div className="image">
							<img src={item.images[0]} />
						</div>
						<div className="info">
							<h2>{item.name}</h2>
							<div className="tags">
								{item.using.map((tag, index) => {
									return (
										<>
											<div className="tag" key={tag}>
												{tag}
											</div>
											{index !== item.using.length - 1 && <>{" + "}</>}
										</>
									);
								})}
							</div>
							<p>{item.d}</p>
						</div>
					</motion.a>
				);
			})}
			<motion.h2 className="header-project">Backend</motion.h2>
		</MotionDiv>
	);
}
