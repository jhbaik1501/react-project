import { atom } from "recoil";

const mainPageState = atom({
	key: "mainPageState",
	default: 0,
});

export { mainPageState };
