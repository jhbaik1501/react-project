import React, { useState } from "react";
import FirstTemplate from "../../components/mainTemplate/MainTeamTemplate";
import SecondTemplate from "../../components/mainTemplate/MainProjectTemplate";
import ThirdTemplate from "../../components/mainTemplate/MainProfileTemplate";
import ReactPageScroller from "react-page-scroller";
import { useRecoilState } from "recoil";
import { mainPageState } from "../../store/main";
import { useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

const MainView = () => {
	const [currentPage, setCurrentPage] = useRecoilState(mainPageState);

	useEffect(() => {
		return () => {
			setCurrentPage(0);
		};
	}, []);

	const handlePageChange = (number) => setCurrentPage(number);

	const getPagesNumber = () => {
		const pageNumbers = [];
	};
	return (
		<>
			{/* <Header /> */}
			<ReactPageScroller pageOnChange={handlePageChange} customPageNumber={currentPage}>
				<FirstTemplate currentPage={currentPage} changePage={() => handlePageChange(1)} />
				<SecondTemplate currentPage={currentPage} changePage={() => handlePageChange(2)} />
				<ThirdTemplate currentPage={currentPage} changePage={() => handlePageChange(0)} />
			</ReactPageScroller>
		</>
	);
};
export default MainView;
