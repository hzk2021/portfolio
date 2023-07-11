import { createContext } from "react";

interface indexState {
    index: number;
    projectCount: number;
    setIndex: Function;
};

let init : indexState = {
    index: 0,
    projectCount: 0,
    setIndex: () => {}
};

export const IndexContext = createContext(init);