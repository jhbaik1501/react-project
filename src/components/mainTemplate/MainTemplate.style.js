import styled, { css } from "styled-components";
import { keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const textMark = keyframes`
	from{
		width:0;
	}
	to
	{
		width:40%;
	}
`;

const textDisappear = keyframes`
	from{
		transform:translateX(-101%);
	}
	to{
		transform:translateX(1000%);
	}
`;
const TextMarkAnimation = styled.span`
	width: 0;
	position: absolute;
	left: 0;
	bottom: -10%;
	height: 100%;
	z-index: 0;
	animation: ${textMark} 400ms ease-in-out ${({ delay }) => delay ?? 500}ms;
	animation-fill-mode: forwards;
	background: linear-gradient(transparent 60%, #4b6587 0);
	background-repeat: no-repeat !important;

	&::after {
		transform: translateX(-101%);
		background-color: #c7d8f0;
		animation: ${textDisappear} 700ms ease-in-out;
	}
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	background: #ebeae5;
	padding: 6rem;
	position: relative;
	display: flex;
	flex-direction: column;
	@media (max-width: 426px) {
		padding: 6rem 1rem;
	}
`;

const LogoBackgroundBg = styled.div`
	position: relative;
	img {
		width: 768px;
		height: auto;
		opacity: 0.6;
		position: absolute;
		left: 0;
		top: 0;
	}
`;

const Title = styled.h2`
	font-size: 3.6rem;
	font-weight: bold;
	margin-bottom: 2rem;
	margin-left: 2rem;
	padding: 1rem;
	@media (max-width: 426px) {
		font-size: 2rem;
		margin-bottom: 1rem;
		margin-left: 1rem;
	}
`;
const SubTitle = styled.h3`
	font-size: 2.6rem;
	font-weight: bold;
	margin-bottom: 2rem;
	margin-left: 2rem;
	@media (max-width: 426px) {
		font-size: 1.6rem;
		margin-bottom: 1rem;
		margin-left: 1rem;
	}
`;
const ProjectSection = styled.section`
	padding: 4rem;
	width: 100%;
	height: 80%;
	position: relative;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 426px) {
		width: 100%;
		height: 80%;
		padding: 1rem 2rem;
	}
`;
const SwiperItem = styled(SwiperSlide)`
	/* display: flex;
	justify-content: center;
	align-items: center; */
`;
const ProjectItem = styled.div`
	/* flex-basis: 25%; */
	width: 22rem;
	height: 100%;

	max-height: 600px;
	transition: all 300ms ease-in-out;
	cursor: pointer;
	box-shadow: 2px 2px 10px 2px #22222280;
	&:hover {
		transform: scale(0.95);
		box-shadow: 6px 5px 19px 2px #50505080;
	}
	@media (max-width: 426px) {
		width: 80%;
		height: 65%;
	}
`;

const ProjectTitle = styled.span`
	/* font-size: 1.2rem; */
	transition: all 200ms ease-in-out;
	cursor: pointer;
	&:hover {
		color: rgb(35 123 239);
	}
`;
export {
	Container,
	LogoBackgroundBg,
	ProjectSection,
	SwiperItem,
	ProjectItem,
	Title,
	SubTitle,
	TextMarkAnimation,
	ProjectTitle,
};
