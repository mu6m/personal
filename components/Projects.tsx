"use client";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export default function Projects({ frontend, backend }: any) {
	const MainDiv = styled.div`
		margin-block: 2rem;
		display: flex;
		flex-direction: column;
		.project {
			display: flex;
			flex-direction: column;
			width: 100%;
			max-width: 30rem;
			overflow: hidden;
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
			margin-block: 1rem;
			.overflow-background {
				position: absolute;
				bottom: 1rem;
				left: -1rem;
				width: 20rem;
				height: 2rem;
				background-color: #648d64; /* Replace with your desired background color */
				z-index: -1; /* Place it behind the content */
			}
		}
		@media (max-width: 60rem) {
			padding-inline: 2rem;
			.header-project {
				font-size: 3rem;
				left: -1.6rem;
				.overflow-background {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 20rem;
					height: 2rem;
					background-color: #648d64; /* Replace with your desired background color */
					z-index: -1; /* Place it behind the content */
				}
			}
		}
	`;
	return (
		<MainDiv>
			<h2 className="header-project">
				<div className="overflow-background" />
				Fontend
			</h2>
			{frontend.map((item: any) => {
				return (
					<motion.a
						key={item.name}
						href={item.link}
						target="_blank"
						className="project"
						initial={{ scale: 0.9 }}
						whileInView={{ scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
					>
						<div className="image">
							<img src={item.images[0]} />
						</div>
						<div className="info">
							<h2>{item.name}</h2>
							<div className="tags">
								{item.using.map((tag: string, index: number) => {
									return (
										<div className="tag" key={tag}>
											{tag}
											{index !== item.using.length - 1 && <>{" + "}</>}
										</div>
									);
								})}
							</div>
							<p>{item.d}</p>
						</div>
					</motion.a>
				);
			})}
			<h2 className="header-project">
				<div className="overflow-background" />
				Backend
			</h2>
		</MainDiv>
	);
}
