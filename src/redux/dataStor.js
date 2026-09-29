import { createSlice } from "@reduxjs/toolkit";

export const dataStore = createSlice({
  name: "dataStore",
  initialState: {
    search: false,
    fileDirectory: false,
    navData: [],
    activeData:{name:"home.jsx", id: 1},
  
  },
  reducers: {
    searchReducer: (state,action ) => {
      state.search = action.payload;
    },
    fileDirectoryReducer: (state,action ) => {
      state.fileDirectory = action.payload;
    },
    navDataReducer: (state,action ) => {
      state.navData = action.payload;
    },
    activeDataReducer: (state,action ) => {
      state.activeData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  searchReducer,
  navDataReducer,
  fileDirectoryReducer,
  activeDataReducer,
} = dataStore.actions;

export default dataStore.reducer;
