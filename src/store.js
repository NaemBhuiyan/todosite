import { createStore } from "redux";

import reducer from "./redux/reducers/index";

const store = createStore(reducer);

export default store;
