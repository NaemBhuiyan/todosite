import { ADD_CATEGORY } from "../actionTypes";
const s = {
  catagories: [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ],
};
const catagoriesReducer = (state = s, action) => {
  console.log(state.catagories);
  switch (action.type) {
    case ADD_CATEGORY:
      console.log(action.id);
      return { catagories: [...state.catagories, action.id] };

    default:
      return state;
  }
};

export default catagoriesReducer;
