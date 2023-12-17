import { createAction, createReducer } from "@reduxjs/toolkit";
import { list } from "./Type";
import { initListproduct } from "./Listproduct";

interface Productlist {
  postlist: list[];
}
const initState: Productlist = {
  postlist: initListproduct,
};

const todoreucer = createReducer(initState, (buider) => {});
export default todoreucer;
