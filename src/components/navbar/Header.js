import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { sideBarState } from "../../store/sidebar";
import Sidebar from "./Sidebar";

const HeaderContainer = styled.header`
	height: 6rem;
	width: 6rem;
	z-index: 1001;
	position: fixed;
	top: 0;
	right: 0;
`;
const SideBarBtn = styled.div`
	cursor: pointer;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	align-items: center;
	justify-content: center;
`;
const SideBarDash = styled.div`
	width: 3rem;
	height: 0.4rem;
	background: ${({ light, isClicked }) => (isClicked ? "#4b6587" : light ? "#f7f6f2" : "#4b6587")};

	transition: all 200ms linear;
	&:nth-of-type(2) {
		visibility: ${({ isClicked }) => (isClicked ? "hidden" : "visible")};
		opacity: ${({ isClicked }) => (isClicked ? "0" : "1")};
	}
	&:nth-of-type(1) {
		transform: ${({ isClicked }) =>
			isClicked ? "rotate(45deg) translate(0.4rem, 0.7rem)" : "rotate(0) translate(0,0)"};
	}
	&:nth-of-type(3) {
		transform: ${({ isClicked }) =>
			isClicked ? "rotate(-45deg) translate(0.4rem, -0.7rem) " : "rotate(0) translate(0,0)"};
	}
`;
const Header = () => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useRecoilState(sideBarState);
	const headerRef = useRef(null);
	return (
		<>
			<HeaderContainer ref={headerRef}>
				<SideBarBtn id="sidebar-btn">
					<SideBarDash
						key="1"
						isClicked={isOpen}
						light={location.pathname === "/tarot" || location.pathname === "/game"}
					/>
					<SideBarDash
						key="2"
						isClicked={isOpen}
						light={location.pathname === "/tarot" || location.pathname === "/game"}
					/>
					<SideBarDash
						key="3"
						isClicked={isOpen}
						light={location.pathname === "/tarot" || location.pathname === "/game"}
					/>
				</SideBarBtn>
			</HeaderContainer>
			<Sidebar isOpen={isOpen ?? false} headerRef={headerRef}></Sidebar>
		</>
	);
};
export default Header;
