import styled from "styled-components";
import AnimatedScrollArrow from "../AnimatedScrollArrow";
import { Container, LogoBackgroundBg, Title, SubTitle, ProjectTitle } from "./MainTemplate.style";

import { useAnimationUp, useAnimationObserver } from "../../hooks/useAnimationUp.js";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { mainPageState } from "../../store/main";

const BigTitle = styled.h2`
	font-size: 10rem;
	margin-bottom: 1rem;
	font-weight: 800;
	@media (max-width: 1440px) {
		font-size: 8rem;
	}
	@media (max-width: 899px) {
		font-size: 6rem;
	}
	@media (max-width: 599px) {
		font-size: 4rem;
		margin-left: 0rem;
	}
`;
const NormalTitle = styled(Title)`
	padding: 1rem;
	margin-left: 20rem;
	font-weight: 800;
	font-size: 3.4rem;
	margin-bottom: 0;
	@media (max-width: 1440px) {
		font-size: 3.2rem;
		margin-left: 8rem;
	}
	@media (max-width: 769px) {
		margin-left: 4rem;
		font-size: 2.3rem;
	}
	@media (max-width: 599px) {
		margin-left: 2rem;
		font-size: 2rem;
		padding: 0;
	}
`;
const MediaSubTitle = styled(SubTitle)`
	@media (max-width: 1440px) {
		font-size: 1.8rem;
	}
	@media (max-width: 769px) {
		font-size: 1.6rem;
	}
`;

const ProjectSummary = styled.div`
	width: 45rem;
	background: white;
	border-radius: 20px;
	padding: 1rem 2rem;
	margin-bottom: 6rem;
	h4 {
		font-size: 1.7rem;
		padding: 1.5rem 0;
		font-weight: 600;
	}
	p {
		font-size: 1.2rem;
		padding: 0.5rem;
	}
	@media (max-width: 769px) {
		h4 {
			font-size: 1.5rem;
		}
		p {
			font-size: 1.1rem;
		}
		width: 100%;
	}
	@media (max-width: 599px) {
		/* padding: 0; */
		h4 {
			font-size: 1.3rem;
		}
		p {
			font-size: 1rem;
		}
	}
`;

const FirstScrollPage = ({ changePage }) => {
	const navigate = useNavigate();
	const setCurrentPage = useSetRecoilState(mainPageState);

	const { ref: bigTitleRef, elementOpacityStyle: bigTitleStyle, inView: isInBigTitle } = useAnimationObserver(100);
	const { ref: titleRef, elementOpacityStyle: titleStyle, inView: isInTitle } = useAnimationObserver(1100);
	const { ref: subTitleRef2, elementOpacityStyle: subTitleStyle2, inView: isInSubTitle } = useAnimationObserver(2000);
	const {
		ref: descriptionRef,
		elementOpacityStyle: descriptionStyle,
		inView: isInSubTitle2,
	} = useAnimationObserver(3000);

	const { ref: desc, elementOpacityStyle: descStyle, inView: descInView } = useAnimationObserver(4000);

	return (
		<Container style={{ justifyContent: "space-between", alignItems: "center", paddingBottom: "10rem" }}>
			<div style={{ width: "100%" }}>
				<BigTitle ref={bigTitleRef} className={isInBigTitle ? "textUp" : ""} style={{ ...bigTitleStyle }}>
					???????????????
				</BigTitle>

				<NormalTitle
					ref={titleRef}
					className={isInTitle ? "textUp" : ""}
					style={{ ...titleStyle, position: "relative", width: "100%" }}
				>
					<span className="textMotion_on">
						<span className="textMotion_target">
							<span className="textUnderline">??????????????? ???????????????</span>
						</span>
						13???
					</span>
				</NormalTitle>
				{/* <SubTitle ref={subTitleRef1} style={{ ...subTitleStyle1 }}></SubTitle> */}
				<NormalTitle
					ref={subTitleRef2}
					className={isInSubTitle ? "textUp" : ""}
					style={{ marginLeft: "2rem", ...subTitleStyle2 }}
				>
					43 ?????? ???????????????
				</NormalTitle>
			</div>

			<div
				style={{ width: "100%", display: "flex", justifyContent: "center", position: "relative", padding: "1rem 0" }}
			>
				<MediaSubTitle
					ref={descriptionRef}
					className={isInSubTitle2 ? "textUp" : ""}
					style={{ position: "relative", ...descriptionStyle }}
				>
					?????? 43?????? ???????????? ??????????????? ???????????? ????????? ????????????.
				</MediaSubTitle>
			</div>
			<ProjectSummary
				ref={desc}
				className={descInView ? "textUp" : ""}
				style={{
					...descStyle,
				}}
			>
				<h4>???????????? ?????? ????????? ??????????????? ??????????????????!</h4>
				<p>
					<ProjectTitle style={{ fontWeight: "600" }} onClick={() => navigate("/tarot")}>
						?????? ??????
					</ProjectTitle>{" "}
					- ?????? ????????? ?????? ?????? ??????????????? ????????? ???????????????!
				</p>
				<p>
					<ProjectTitle style={{ fontWeight: "600" }} onClick={() => navigate("/game")}>
						CSS??????
					</ProjectTitle>{" "}
					- CSS ????????? ??????????????? ??????????????? ?????? ?????????!
				</p>
				<p>
					<ProjectTitle style={{ fontWeight: "600" }} onClick={() => setCurrentPage(2)}>
						?????? ??????
					</ProjectTitle>{" "}
					- ???????????? ??????????????? ???????????? ??????????????? ???????????????!
				</p>
			</ProjectSummary>
			<AnimatedScrollArrow onClick={changePage}></AnimatedScrollArrow>
		</Container>
	);
};
export default FirstScrollPage;
