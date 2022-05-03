import styled from "styled-components";

const Container = styled.div`
	display: flex;
	position: relative;
	align-items: flex-end;
	height: 100%;
	width: 100%;
`;
const ImageContainer = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;
const HoverDetail = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 85%;
	padding: 2rem;
	background: rgb(0 0 0 / 80%);
	opacity: 0;
	transition: all 200ms linear;
	color: white;
	font-size: 1.4rem;
	&:hover {
		opacity: 1;
	}
`;
const DetailBox = styled.div`
	border: 0.1rem solid rgb(0 0 0 / 80%);
	display: flex;
	height: 15%;
	flex-direction: column;
	justify-content: space-between;
	padding: 0.5rem;
	background: rgb(0 0 0 / 80%);
	color: white;
	z-index: 100;
	width: 100%;
	font-size: 1.4rem;
`;
const FlexBox = styled.div`
	display: flex;
`;
const JustifyBetween = styled(FlexBox)`
	justify-content: space-between;
`;

const ProjectCardTemplate = ({ title, division, hashtag, image, description, onClick }) => {
	return (
		<Container onClick={() => onClick()}>
			<ImageContainer>
				<img
					height={"120%"}
					src={image ?? "https://api.dsvp.kr/uploads/photo_1543918225_4cc71ea72d5a_1_4c51a33927.jpg"}
					alt="thumbnail"
				/>
			</ImageContainer>
			<HoverDetail>
				<span style={{ display: "flex", flexWrap: "wrap" }}>
					<pre>{description}</pre>
				</span>
			</HoverDetail>
			<DetailBox>
				<p>{title}</p>
				<JustifyBetween>
					<div style={{ whiteSpace: "nowrap", marginRight: "1rem" }}>
						<span>{division}</span>
					</div>
					<div style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
						<span>{hashtag}</span>
					</div>
				</JustifyBetween>
			</DetailBox>
		</Container>
	);
};
export default ProjectCardTemplate;
