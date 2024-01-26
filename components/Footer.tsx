"use client";

import styled from "@emotion/styled";

const FooterDiv = styled.footer`
	max-width: 30rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: #2e4f31;
	box-shadow: 0 0 0 100vmax #2e4f31;
	clip-path: inset(0 -100vmax);
	gap: 2rem;
	padding-block: 2rem;
	p {
		font-style: italic;
		font-weight: lighter;
		font-size: 0.8rem;
	}
	.footcols {
		margin-bottom: 1rem;
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		.footcol {
			display: flex;
			flex-direction: column;
			* {
				text-align: left;
			}
			gap: 1rem;
			.logo {
				display: flex;
				align-items: center;
				gap: 1rem;
				svg {
					width: 5rem;
					fill: #feffff !important;
				}
			}
			.light-head {
				font-size: 1.7rem;
				font-weight: bold;
			}
		}
	}
	p {
		text-align: center;
	}
	* {
		color: #feffff;
	}
	@media (max-width: 60rem) {
		.footcols {
			display: flex;
			justify-content: center;
			.footcol {
				display: none;
			}
			.company-info {
				display: flex;
				justify-content: center;
			}
		}
	}
`;

export default function Footer() {
	return (
		<FooterDiv>
			<p>made by Abdulhamid Ledraa the year is {new Date().getFullYear()}</p>
		</FooterDiv>
	);
}
