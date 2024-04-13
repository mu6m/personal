"use client";

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function NavItem({ text, path, route }: any) {
	if (path === route) {
		return <motion.div className="item selected">{text}</motion.div>;
	} else {
		return (
			<motion.a
				whileHover={{
					scale: 1.1,
					cursor: "pointer",
					boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
					backdropFilter: "blur(3.3px)  opacity(100%)",
					transition: { duration: 0.2 },
				}}
				whileTap={{ scale: 0.9 }}
				className="item"
				href={route}
			>
				{text}
			</motion.a>
		);
	}
}
export default function Nav() {
	const pathname = usePathname();
	const MainNav = styled.nav`
		z-index: 10;
		position: fixed;
		max-width: 30rem;
		width: 100%;
		display: flex;
		padding-inline: 0.8rem;
		padding-block: 0.4rem;
		font-weight: bold;
		align-items: center;
		justify-content: space-between;
		align-content: center;
		top: 1rem;

		background: rgba(255, 255, 255, 0.2);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(60px);

		.item {
			padding-inline: 1rem;
			padding-block: 0.5rem;
			border-radius: 16px;
		}
		.selected {
			background: rgba(255, 255, 255, 0.2);
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			border-radius: 16px;
			border: 1px solid rgba(255, 255, 255, 0.3);
			pointer-events: none;
		}
		@media (max-width: 60rem) {
			max-width: 20rem;
			.item {
				font-size: 0.8rem;
			}
		}
	`;
	const navObj = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Projects",
			link: "/projects",
		},
		{
			name: "About",
			link: "/about",
		},
		{
			name: "Contact",
			// link: "/contact",
			link: "/#contact",
		},
	];
	return (
		<MainNav>
			{navObj.map((item) => {
				return (
					<NavItem
						key={item.name}
						path={pathname}
						route={item.link}
						text={item.name}
					/>
				);
			})}
		</MainNav>
	);
}
