import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeUp = keyframes`
	from{
		opacity:0;
		transform: translateY(15%);
	}
	to{
		opacity:1;
		transform: translateY(0);
	}
`;
const CardContainer = styled.div`
	position: relative;
	width: 80%;
	height: 43vh;
	background: #fefefe;
	border-radius: 10px;
	transition: all 200ms ease-in-out;
	box-shadow: 3px 5px 14px 3px rgb(0 0 0 / 30%);
	opacity: 0;
	transform: translateY(10%);
	animation: ${fadeUp} 1000ms ease-in-out ${({ index }) => index * 600}ms;
	animation-fill-mode: forwards;
	cursor: pointer;
	&:hover {
		opacity: 0.9;
		box-shadow: 1px 1px 20px 12px rgb(0 0 0 / 30%);
		& > div > img {
			/* transform: scale(1.05); */
		}
		& > .detail_profile {
			display: flex;
			opacity: 1;
			transform: scale(1.03);
		}
	}
	@media (max-width: 1920px) {
		width: 100%;
	}
	@media (max-width: 1440px) {
		height: 24rem;
	}
	@media (max-width: 899px) {
		width: 100%;
		height: 40vh;
	}
	@media (max-width: 599px) {
		width: 80%;
		height: 50vh;
		margin-left: 2.5rem;
		/* height: 60%; */
	}
`;
const DetailProfile = styled.div`
	position: absolute;
	left: 0;
	top: 0;

	/* display: none; */
	opacity: 0;
	background: rgb(0, 0, 0, 0.8);
	z-index: 10;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	padding: 1rem;
	color: white;
	transition: all 150ms linear;
	&:hover {
		/* transform: scale(1.1); */
	}
	@media (max-width: 1440px) {
		padding: 0.8rem;
	}
	@media (max-width: 1280px) {
		padding: 0.8rem;
	}
`;

const ImageContainer = styled.div`
	width: 100%;
	height: 60%;
	display: flex;
	justify-content: center;
	overflow: hidden;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;
const ProfileImg = styled.img`
	transition: all 200ms ease-in-out;
	width: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;
const PreviewProfile = styled.div`
	overflow: hidden;
	padding: 1rem;
`;

const Name = styled.p`
	font-weight: 600;
	font-size: 1.6rem;
`;
const Email = styled.p`
	font-size: 1.2rem;
	font-weight: bold;
`;

const ProfileCard = ({ modalOpen, user, index }) => {
	return (
		<CardContainer index={index}>
			<ImageContainer className="profile_img">
				<ProfileImg src={user.imgsrc} border="0" />
			</ImageContainer>
			<PreviewProfile index={index}>
				<div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
					<Name>{user.username}</Name>
					<Email>{user.email}</Email>
					<p style={{ fontSize: "1.1rem" }}>기술스택: {user.skill}</p>
				</div>
			</PreviewProfile>

			<DetailProfile onClick={modalOpen} className="detail_profile">
				<p style={{ fontSize: "1.1rem", letterSpacing: "1px", wordSpacing: "1.2px" }}>
					{user.details.slice(0, 210)}
					{user.details.length >= 210 ? "..." : ""}
				</p>
			</DetailProfile>
		</CardContainer>
	);
};
export default ProfileCard;
