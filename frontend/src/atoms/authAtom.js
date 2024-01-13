import { atom } from "recoil";  //state management library-recoil has atoms and selectors; recoil was built specifically for react
								//wrapped in recoilroot; atoms represnt a piece of state. componnents that need to read from and to an atom must use userecoilstate()
								//selector is derived state -output of a function that modifies the state in any given way

const authScreenAtom = atom({
	key: "authScreenAtom",
	default: "login",
});

export default authScreenAtom;
