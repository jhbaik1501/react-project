import styled, { keyframes } from "styled-components";

const animatedMouse = keyframes`
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
     opacity: 0;
    -webkit-transform: translateY(6px);
    -ms-transform: translateY(6px);
    transform: translateY(6px);
  }
`;
const mouseScroll = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  } 
`;

const ScrollIndicator = styled.div`
	position: absolute;
	margin: auto;
	left: 50%;
	bottom: 1vh;
	transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	z-index: 900;
	cursor: pointer;
	transform: ${({ rotate }) => (rotate === "true" ? "rotate(180deg)" : "")};
	span {
		display: block;
		width: 0.4rem;
		height: 0.4rem;
		-ms-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		transform: rotate(45deg);
		border-right: 0.2rem solid #222;
		border-bottom: 0.2rem solid #222;
		margin: 0 0 0.6rem 0.4rem;
	}
`;
const MouseDiv = styled.div`
	height: 2.5rem;
	width: 1.6rem;
	border-radius: 0.8rem;
	-webkit-transform: none;
	-ms-transform: none;
	transform: none;
	border: 0.2rem solid #222;
	position: absolute;
	bottom: 3rem;
	left: -0.1rem;
	margin-bottom: 0.5rem;
`;
const InnerMouseDiv = styled.div`
	-webkit-animation: ${animatedMouse} 1.2s ease infinite;
	-moz-animation: ${animatedMouse} 1.2s ease infinite;
	animation: ${animatedMouse} 1.2s ease infinite;
	height: 0.5rem;
	width: 0.2rem;
	display: block;
	margin: 0.2rem auto;
	background: #222;
	position: relative;
`;

const CommonArrow = styled.span`
	-webkit-animation: ${mouseScroll} 1s infinite;
	-moz-animation: ${mouseScroll} 1s infinite;
	animation: ${mouseScroll} 1s infinite;
`;
const Arrow1 = styled(CommonArrow)`
	animation-delay: 0.1s;
	-webkit-animation-delay: 0.1s;
	-moz-animation-delay: 0.1s;
	-webkit-animation-direction: alternate;
	animation-direction: alternate;
	margin-top: 6px;
`;
const Arrow2 = styled(CommonArrow)`
	animation-delay: 0.2s;
	-webkit-animation-delay: 0.2s;
	-moz-animation-delay: 0.2s;
	-webkit-animation-direction: alternate;
	animation-direction: alternate;
`;
const Arrow3 = styled(CommonArrow)`
	animation-delay: 0.3s;
	-webkit-animation-delay: 0.3s;
	-moz-animation-delay: 0.3s;
	-webkit-animation-direction: alternate;
	animation-direction: alternate;
`;

const AnimatedScrollArrow = ({ onClick, rotate, style }) => {
	return (
		<ScrollIndicator onClick={onClick} rotate={rotate} style={{ ...style }}>
			<MouseDiv style={{}}>
				<InnerMouseDiv></InnerMouseDiv>
			</MouseDiv>
			<div style={{ marginLeft: "1.5px" }}>
				<Arrow1></Arrow1>
				<Arrow2></Arrow2>
				<Arrow3></Arrow3>
			</div>
		</ScrollIndicator>
	);
};
export default AnimatedScrollArrow;
