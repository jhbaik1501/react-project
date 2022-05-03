import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { css } from "styled-components";

export const useAnimationUp = (delay = 300) => {
	const { ref, inView, entry } = useInView({
		threshold: 1,
	});
	const elementOpacityStyle = { opacity: 0 };

	useEffect(() => {
		if (inView) {
			entry.target.classList.add("textUp");
			entry.target.style.setProperty("animation-delay", `${delay}ms`);
			// entry.target.classList.add("textUp");
		}
		return () => {
			// if (entry?.target) entry.target.classList.remove("textUp");
		};
	}, [inView]);

	return {
		ref,
		elementOpacityStyle,
	};
};

export const useAnimationObserver = (delay) => {
	const { ref, inView, entry } = useInView({
		threshold: 0.5,
	});
	const elementOpacityStyle = { opacity: 0 };
	useEffect(() => {
		if (inView) {
			if (entry.target) {
				entry.target.style.setProperty("animation-delay", `${delay}ms`);
			}
		}
	}, [inView]);

	return {
		ref,
		inView,
		elementOpacityStyle,
	};
};
