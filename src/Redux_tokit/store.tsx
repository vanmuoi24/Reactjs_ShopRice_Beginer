import { configureStore } from "@reduxjs/toolkit";
import todoreucer from "./Rootreducer";

const store = configureStore({
  reducer: {
    todo: todoreucer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
