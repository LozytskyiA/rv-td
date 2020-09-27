import { LOAD_POSTS } from "../types";

const initialState = {
  allPosts: [],
  favoritesPosts: []
};

export const postReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case LOAD_POSTS: return {
      ...state,
      allPosts: payload,
      favoritesPosts: payload.filter(post => post.booked)
    }

    default: return state
  }
}