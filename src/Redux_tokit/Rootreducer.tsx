import { createAction, createReducer } from "@reduxjs/toolkit";
import { list } from "./Type";
import { card, initListproduct } from "./Listproduct";

interface Productlist {
  postlist: list[];
  cardlist: list[];
}
const initState: Productlist = {
  postlist: initListproduct,
  cardlist: card,
};

export const addtocard = createAction<list>("addtocard");
export const deleteitemcard = createAction<number>("deleteitemcard ");

const todoreucer = createReducer(initState, (buider) => {
  buider.addCase(addtocard, (state, action) => {
    const post = action.payload;
    state.cardlist.push(post);
  });

  buider.addCase(deleteitemcard, (state, action) => {
    const postId = action.payload;
    const updatedCartList = state.cardlist.filter((item) => item.id !== postId);
    state.cardlist = updatedCartList;
  });
});
export default todoreucer;
