import { configureStore } from "@reduxjs/toolkit";
import { dataStore } from "./dataStor";

export default configureStore({
  reducer: {
    dataStor: dataStore.reducer,
  },
});
