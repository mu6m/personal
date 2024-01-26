"use client";
import Projects from "@/components/Projects";
import styled from "@emotion/styled";
import { projectList } from "@/lib/info";

const MainHero = styled.div`
	width: 100%;
	max-width: 60rem;
	min-height: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	.head-text {
		font-family: "Playfair Display", serif;
		font-weight: 800;
		font-style: italic;
		padding-inline: 2rem;
		font-size: 8rem;
		line-height: 8rem;
		margin-block: 2rem;
	}
	@media (max-width: 60rem) {
		h1 {
			max-width: 40rem;
			line-height: 7rem;
			font-size: 5rem;
		}
	}
`;
export default function Page() {
	return (
		<>
			<MainHero>{/* <h1 className="head-text">My Projects</h1> */}</MainHero>
			<Projects frontend={projectList.frontend} />
		</>
	);
}
