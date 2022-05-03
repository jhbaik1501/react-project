import styled from "styled-components";
import { Container, Title, SubTitle, ProjectSection } from "./MainTemplate.style";
import AnimatedScrollArrow from "../AnimatedScrollArrow";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import { modalState } from "../../store/modal";
import ProfileCard from "../../components/profile/ProfileCard";
import Modal from "../../components/modal/modal";
import ModalPortal from "../../components/modal/Portal";
import { useState } from "react";

import { useAnimationObserver } from "../../hooks/useAnimationUp.js";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

const ModalContent = styled.div`
	background: white;
	width: 45rem;
	height: 45rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media (max-width: 899px) {
		width: 100vw;
		height: 100vh;
	}
`;
const ModalCloseWrapper = styled.div`
	height: 2.4rem;
	padding: 0 1rem;
	button {
		float: right;
		border: none;
		border-radius: 100%;
		width: 3rem;
		height: 3rem;
		cursor: pointer;
		background: white;
		font-size: 1.5rem;
		&:hover {
			background: whitesmoke;
		}
	}
`;

const ThirdScrollPage = ({ currentPage, changePage }) => {
	const { ref, elementOpacityStyle, inView } = useAnimationObserver();
	const [modal, setModal] = useRecoilState(modalState);
	const [currentUser, setCurrentUser] = useState(null);
	const users = [
		{
			id: 1,
			username: "김동환",
			email: "@gmail.com",
			imgsrc: "https://ifh.cc/g/5XfYoD.jpg",
			skill: "C++, Python, React, Pytorch, RaspberryPi, Unity, Unreal ",
			details:
				"안녕하세요 ! 저는 부산에서 거주중인 새로운 도전을 두려워하지 않는 개발자 김동환입니다 저는 멈춰있는 시간을 낭비라고 생각하기 때문에 이번에도 소마활동을 통해 새로운 도전을 해나갈 계획을 새우고 있습니다 ! 이번에 제가 제작한 타로카드를 통해 여러분의 소마의 앞날을 점쳐보세요 그리고 좋은 결과는 받아들이고 나쁜 결과는 피해가시며 소마와 함께하는 행복한 한 해가 되기를 기도하겠습니다 ! 감사합니다 : )",
		},
		{
			id: 2,
			username: "백종현",
			email: "jhbaik1501@gmail.com",
			imgsrc: "https://ifh.cc/g/G7Z4WO.jpg",
			skill: "Node.js(Express), Java Spring",
			details:
				"프로젝트 경험이 많지는 않습니다. 하지만, 어느정도 협업은 해본 적이 있고, 소프트웨어 개발에 큰 관심을 갖고 있으며, 주어진 일은 책임감 있게 맡아서 할 수 있습니다. 소프트웨어 개발에 많은 열정을 가지고 있어 같이 프로젝트를 한다면 누구보다 열심히, 그리고 재미있게 참여할 수 있을 것입니다! ",
		},
		{
			id: 3,
			username: "은승균",
			email: "dmstmdrbs98@gmail.com",
			skill: "React, TypeScript, Recoil, Vue, HTML, CSS ",
			imgsrc: require("../../assets/images/esg_profile.jpg"),
			details:
				"프론트 엔드 개발에 관심이 많고, 컴포넌트 재사용과 성능 향상에 대한 관심이 많습니다. 소마 활동을 통해 프로젝트를 진행하면서 이러한 부분에 대해서 고민을 하면서 진행을 해보려고 합니다.",
		},
		{
			id: 4,
			username: "이수민",
			email: "brandy2145@gmail.com",
			imgsrc: "https://ifh.cc/g/6LLxST.jpg",
			skill: "Javascript, React, C++, C, Django",
			details:
				"소마를 통해 프로젝트에 집중하고 몰입하여 사용자들이 직접 사용하는 결과물을 내고 싶습니다. 아직 부족한 점이 많지만, 함께 배워가며 성장하고 싶고, 편하게 소통하며 즐겁게 프로젝트 진행하고 싶습니다. 이번 활동이 대학생활의 뜻깊은 경험이 될 수 있도록 최선을 다해 참여하겠습니다:)",
		},
		{
			id: 5,
			username: "최현오",
			email: "soonitoon@gmail.com",
			imgsrc: "https://ifh.cc/g/jaDcD9.jpg",
			skill: "HTML & CSS & Javascript, Typescript, React, Python3",
			details:
				"주요 프로젝트 경험: AI 요가 자세 지도 서비스 ‘우아건’, 충북대학교 공지사항 알림 서비스 ‘충림이’ 취미: 피아노 연습, 소설책 읽기, 고양이랑 놀기, 멋진 카페 가기 간단 소개: 안녕하세요, 프론트엔드 개발자를 희망하는 최현오입니다. 심리학과 학생으로 대학에 입학하여 엉뚱하게도 개발자의 길을 걸어가고 있습니다. 멋진 분들과 많은 경험을 하고 싶어 소마 13기 연수생에 지원하게 되었습니다. 앞으로 많은 교류와 성장을 바라고 있습니다.  감사합니다 :D",
		},
	];

	// SwiperCore.use([Navigation, Pagination, Autoplay]);
	const swiperOptions = {
		spaceBetween: 0,
		slidesPerView: 1,
		autoplay: { delay: 3000 },
		navigation: true,

		breakpoints: {
			1280: {
				autoplay: false,
				slidesPerView: 5,
				spaceBetween: 30,
			},
			900: {
				autoplay: { delay: 3000 },
				slidesPerView: 3,
				spaceBetween: 30,
			},
			600: {
				autoplay: { delay: 3000 },
				slidesPerView: 2,
				spaceBetween: 10,
			},
		},
	};

	return (
		<>
			<Container style={{ padding: 0 }}>
				<Title ref={ref} style={{ marginTop: "3rem", ...elementOpacityStyle }} className={inView ? "textUp" : ""}>
					43팀을 소개합니다
				</Title>
				<ProjectSection>
					<Swiper
						{...swiperOptions}
						style={{
							position: "relative",
							width: "100%",
							padding: "4rem 0",
						}}
						touchMoveStopPropagation={true}
					>
						{users.map((user, i) => (
							<SwiperSlide style={{}}>
								<ProfileCard
									key={user.id}
									modalOpen={() => {
										setCurrentUser(user);
										setModal(true);
									}}
									user={user}
									index={i + 1}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</ProjectSection>
				<AnimatedScrollArrow
					style={{ bottom: "6rem", left: "48%" }}
					rotate="true"
					onClick={changePage}
				></AnimatedScrollArrow>
			</Container>
			<ModalPortal>
				<Modal
					isOpen={modal && currentUser}
					onClose={() => {
						setTimeout(() => {
							setCurrentUser(null);
						}, 300);
						setModal(false);
					}}
				>
					<ModalContent>
						<ModalCloseWrapper>
							<button
								onClick={() => {
									setTimeout(() => {
										setCurrentUser(null);
									}, 300);
									setModal(false);
								}}
							>
								X
							</button>
						</ModalCloseWrapper>
						{/* 상단 */}
						<div style={{ height: "40%", display: "flex", gap: "2rem", border: "0.1rem solid #dbdbdb" }}>
							{/* 좌상단 */}
							<div style={{ width: "40%" }}>
								<div style={{ width: "100%", height: "100%" }}>
									<img src={currentUser?.imgsrc} alt="유저이미지" style={{ height: "100%", width: "100%" }} />
								</div>
							</div>
							{/* 우상단 */}
							<div
								style={{
									width: "60%",
									height: "100%",
									display: "flex",
									flexDirection: "column",
									alignItems: "left",
									textAlign: "left",
									fontSize: "1.4rem",
								}}
							>
								<span style={{ padding: "1rem", borderBottom: "0.1rem solid #dbdbdb" }}>{currentUser?.username}</span>
								<span style={{ padding: "1rem", borderBottom: "0.1rem solid #dbdbdb" }}>{currentUser?.email}</span>
								<span style={{ padding: "1rem", borderBottom: "0.1rem solid #dbdbdb" }}>{currentUser?.skill}</span>
							</div>
						</div>
						{/* 하단 */}
						<div
							style={{
								flex: 1,
								display: "flex",
								flexDirection: "column",
								padding: "1rem",
								textAlign: "left",
								fontSize: "18px",
								border: "0.1rem solid #dbdbdb",
							}}
						>
							<p style={{ letterSpacing: "1.1px", lineHeight: "1.5rem" }}>{currentUser?.details}</p>
						</div>
					</ModalContent>
				</Modal>
			</ModalPortal>
		</>
	);
};
export default ThirdScrollPage;
