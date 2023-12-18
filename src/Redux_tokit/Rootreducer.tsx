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
export const upqualitycard = createAction<number>("upqualitycard ");
export const downqualitycard = createAction<list>("downqualitycard");

const todoreucer = createReducer(initState, (buider) => {
  buider.addCase(addtocard, (state, action) => {
    const post = action.payload;
    state.cardlist.push(post);
  });
  buider.addCase(upqualitycard, (state, action) => {
    console.log(action);
    const filterindex = state.cardlist.map((list, index) => {
      if (list.id === action.payload) {
      }
    });
  });
});
export default todoreucer;
