import { useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { sideBarState } from "../store/sidebar";

export const useClickOutSide = (ref, openProps, containRef) => {
	const [isSidebarOpen, setSideBar] = useRecoilState(sideBarState);
	const isOpen = useRef(openProps);

	const handleOutSide = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			if (e.path.includes(containRef.current) || isOpen.current) {
				setSideBar((prev) => {
					isOpen.current = !prev;
					return !prev;
				});
				return;
			}
		}
	};
	useEffect(() => {
		document.addEventListener("click", handleOutSide);
		return () => {
			document.removeEventListener("click", handleOutSide);
		};
	}, []);
	return {
		isSidebarOpen,
	};
};
