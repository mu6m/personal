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
			background-color: #648d64;
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
	@media (max-width: 60rem) {
	}
`;
export default function Page() {
	return (
		<About>
			<h1 className="header">
				<div className="overflow-background"></div>
				Email
			</h1>
			<div className="desc">
				<p>theledraa@gmail.com</p>
			</div>
		</About>
	);
}
