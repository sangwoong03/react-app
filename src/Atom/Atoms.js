import { atom } from "recoil";

const pageListReLoading = atom({
	key: "pageReLoading", //unique ID (with respect to other atoms/selectors)
	default: false, // default value (aka initial value)
});

const OnNav = atom({
	key: "onNav",
	default: "",
});

export { pageListReLoading, OnNav };
