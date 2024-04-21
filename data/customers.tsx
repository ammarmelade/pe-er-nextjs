import { atom } from "jotai";

const customerListAtom = atom<string[][]>([
    ['Joe', 'Bob'], 
    ['Matt', 'Bear', 'Soul', 'Flux', 'Fonder', 'Windscreen'], 
    ['Rain']
]);

export default customerListAtom;