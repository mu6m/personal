"use client";
import styled from "@emotion/styled";

const About = styled.div`
	max-width: 40rem;
	margin-top: 10rem;
	width: 100%;
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
			background-color: #648d64; /* Replace with your desired background color */
			z-index: -1; /* Place it behind the content */
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
	@media (max-width: 60rem) {
	}
`;
export default function Page() {
	return (
		<About>
			<h1 className="header">
				<div className="overflow-background"></div>
				About Me
			</h1>
			<div className="desc">
				<p>
					Hey there, I'm Abdulhamid a proficient developer who loves tackling a
					wide variety of tech projects.
				</p>
				<p>
					With a comprehensive skillset ranging from web to databases and system
					administration.
				</p>
				<p>
					I'm always up for embracing new challenges and staying up to date with
					the latest trends and technologies.
				</p>
				<p>
					If you're in need of a versatile developer with a can-do attitude,
					feel free to connect with me.
				</p>
				<p> Let's create something amazing together!</p>
			</div>
		</About>
	);
}
