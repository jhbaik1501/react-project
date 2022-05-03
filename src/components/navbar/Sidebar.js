import { useRef, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import { useClickOutSide } from "../../hooks/useClickOutSide";
import { mainPageState } from "../../store/main";
import SWMLogo from "../../assets/images/swm_logo.png";

const SidebarContainer = styled.nav`
	width: 24rem;
	height: 100vh;
	padding: 3rem;
	background: #f7f6f2;
	position: fixed;
	top: 0;
	right: 0;
	transition: all 150ms linear;
	transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(24rem)")};
	z-index: 1000;
	box-shadow: ${({ isOpen }) => (isOpen ? "-4px 0px 5px 0px #00000014" : "none")};
	padding-top: 8rem;

	img {
		position: absolute;
		top: 2rem;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`;

const SidebarItem = styled.li`
	font-size: 2rem;
	padding: 0 5px;
	padding-left: 0;
	margin: 1rem 0;
	font-weight: 600;
	transition: color 150ms linear;
	cursor: pointer;

	&:hover {
		color: #4b6587;
	}
`;
const Sidebar = ({ isOpen, headerRef }) => {
	const sideBarRef = useRef(null);
	const { isSidebarOpen } = useClickOutSide(sideBarRef, isOpen, headerRef);
	const location = useLocation();
	const navigate = useNavigate();
	const setPage = useSetRecoilState(mainPageState);

	const onClickItem = (page) => setPage(page);
	const onClickNavigate = (path) => navigate(path);
	return (
		<SidebarContainer ref={sideBarRef} isOpen={isOpen}>
			<a href="https://www.swmaestro.org/">
				<img src={SWMLogo} alt="swm_logo" width={"100rem"} />
			</a>

			<ul>
				{location.pathname === "/" && (
					<>
						<SidebarItem onClick={() => onClickItem(0)}>팀소개</SidebarItem>
						<SidebarItem onClick={() => onClickItem(1)}>프로젝트 소개</SidebarItem>
						<SidebarItem onClick={() => onClickItem(2)}>팀원 소개</SidebarItem>
						<ul style={{ position: "absolute", bottom: "2rem" }}>
							<SidebarItem onClick={() => onClickNavigate("/tarot")}>타로 운세</SidebarItem>
							<SidebarItem onClick={() => onClickNavigate("/game")}>CSS게임</SidebarItem>
						</ul>
					</>
				)}
				{location.pathname !== "/" && (
					<>
						<SidebarItem onClick={() => onClickNavigate("/")}>홈</SidebarItem>
					</>
				)}
				{location.pathname !== "/" && location.pathname !== "/tarot" && (
					<SidebarItem onClick={() => onClickNavigate("/tarot")}>타로 운세</SidebarItem>
				)}
				{location.pathname !== "/" && location.pathname !== "/game" && (
					<SidebarItem onClick={() => onClickNavigate("/game")}>CSS게임</SidebarItem>
				)}
			</ul>
		</SidebarContainer>
	);
};
export default Sidebar;
