import { Container, Title, ProjectSection, SwiperItem, ProjectItem, SubTitle } from "./MainTemplate.style";

import AnimatedScrollArrow from "../AnimatedScrollArrow";
import ProjectCard from "../projectCard/ProjectCardTemplate";
import { useAnimationUp, useAnimationObserver } from "../../hooks/useAnimationUp.js";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useSetRecoilState } from "recoil";
import { mainPageState } from "../../store/main";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
const SecondScrollPage = ({ changePage }) => {
	const testRef = useRef();

	// useAnimationObserver(testRef, 3000);

	const navigate = useNavigate();
	const { ref, elementOpacityStyle, inView: titleInView } = useAnimationObserver();
	const { ref: swiperRef, elementOpacityStyle: swiperOpacityStyle, inView: swiperInView } = useAnimationObserver(800);

	const setMainPageState = useSetRecoilState(mainPageState);

	const swiperOptions = {
		spaceBetween: 50,
		slidesPerView: 1,
		navigation: true,
		pagination: { clickable: true },
		loop: true,
		autoplay: {
			delay: 3000,
		},

		breakpoints: {
			1440: {
				autoplay: false,
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 50,
			},
			425: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
	};
	const swiperSlideStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
	return (
		<Container>
			<Title ref={ref} className={titleInView ? "textUp" : ""} style={{ ...elementOpacityStyle }}>
				구경하기
			</Title>
			<ProjectSection ref={swiperRef} className={swiperInView ? "textUp" : ""} style={{ ...swiperOpacityStyle }}>
				<Swiper
					{...swiperOptions}
					style={{
						position: "relative",
						width: "100%",
						height: "100%",
					}}
					// touchMoveStopPropagation={true}
					// touchStartPreventDefault={true}
					touchMoveStopPropagation={true}
				>
					<SwiperSlide style={swiperSlideStyle}>
						<ProjectItem>
							<ProjectCard
								onClick={() => navigate("/tarot")}
								title="타로 카드 운세"
								division="게임"
								hashtag="#타로 #소마운세 #게임"
								image="https://ksr-ugc.imgix.net/assets/033/734/655/0991f92aee687c9e63ad49fca28e3cb4_original.png?ixlib=rb-4.0.2&crop=faces&w=1552&h=873&fit=crop&v=1622568426&auto=format&frame=1&q=92&s=f06d6398d16962369e0a78d0c6ce2cc7"
								description={`소프트웨어 마에스트로 기간동안\n내 운세가 어떤지 알아보세요!\n\n카드 한장을 뽑아 앞으로의 운세를\n알아볼 수 있습니다.\n\n\n재미로 바라봐 주세요 :)`}
							></ProjectCard>
						</ProjectItem>
					</SwiperSlide>
					<SwiperSlide style={swiperSlideStyle}>
						<ProjectItem>
							<ProjectCard
								onClick={() => {
									navigate("/game");
								}}
								title="Flexbox CSS게임"
								division="게임"
								hashtag="#CSS연습 #Flex"
								description={`게임을 통해 CSS를 연습해보세요!\n\nCSS 속성으로 타겟 박스를 움직이\n며 Flex 속성에 익숙해져보세요!`}
							></ProjectCard>
						</ProjectItem>
					</SwiperSlide>
					<SwiperSlide style={swiperSlideStyle}>
						<ProjectItem>
							<ProjectCard
								onClick={() => setMainPageState(2)}
								title="팀원 소개"
								division="소개"
								hashtag="#43팀 #미니프로젝트"
								image="https://i.pinimg.com/564x/47/b7/28/47b728e138e1caaf8c1b07d77612bd88.jpg"
								description={`43팀의 팀원을 소개합니다!\n\n열정이 넘치는 팀원들로 이루어졌\n습니다. 미니 프로젝트의 주인공들\n을 만나보세요! `}
							></ProjectCard>
						</ProjectItem>
					</SwiperSlide>
				</Swiper>
			</ProjectSection>
			<AnimatedScrollArrow onClick={changePage}></AnimatedScrollArrow>
		</Container>
	);
};
export default SecondScrollPage;
