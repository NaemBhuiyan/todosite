import { v4 as uuid } from "uuid";
import { ADD_POST, EDIT_POST, DELETE_POST } from "../actionTypes";

const initialState = {
    posts: [
      {
        id: uuid(),
        title: "Good morning",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        categories: [{ value: "Simple", label: "Simple" }],
      },
      {
        id: uuid(),
        title: "Good after Noon",
        content:
          "Deserunt quasi voluptates perspiciatis ad, aspernatur odio nisi natus. ",
        categories: [{ value: "featured", label: "Featured" }],
      },
      {
        id: uuid(),
        title: "Good night",
        content:
          "Reprehenderit esse facere fuga. Quos officia sapiente voluptatibus unde facilis distinctio amet non!",
        categories: [{ value: "Fashion", label: "Fashion" }],
      },
    ],
  },
  postReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST:
        return {
          posts: [
            ...state.posts,
            {
              id: uuid(),
              title: action.title,
              content: action.content,
              categories: action.categories,
            },
          ],
        };

      case DELETE_POST:
        return {
          posts: [...state.posts.filter((post) => post.id !== action.id)],
        };
      case EDIT_POST:
        return {
          posts: [
            ...state.posts.map((post) => {
              if (post.id === action.id) {
                post.title = action.title;
                post.content = action.content;
                post.categories = Array.isArray(action.categories)
                  ? [...action.categories]
                  : [];
              }
              return post;
            }),
          ],
        };

      default:
        return state;
    }
  };
export default postReducer;
