import { createSlice } from "@reduxjs/toolkit";

export const dataStore = createSlice({
  name: "dataStore",
  initialState: {
    search: false,
    fileDirectory: false,
    navData: [],
    activeData: { name: "home.jsx", id: 1 },
    fileNavActiveData: [{ name: "home.jsx", id: 1 }],
  },
  reducers: {
    searchReducer: (state, action) => {
      state.search = action.payload;
    },
    fileDirectoryReducer: (state, action) => {
      state.fileDirectory = action.payload;
    },
    navDataReducer: (state, action) => {
      state.navData = action.payload;
    },
    activeDataReducer: (state, action) => {
      state.activeData = action.payload;
    },
    fileNavActiveDataReducer: (state, action) => {
      if (
        !state.fileNavActiveData.find((item) => item.id === action.payload.id)
      ) {
        state.fileNavActiveData = [action.payload, ...state.fileNavActiveData];
      }
    },
    deleteReducer: (state, action) => {
      state.fileNavActiveData = state.fileNavActiveData.filter(
        (item) => item.id !== action.payload,
      );

      if (state.fileNavActiveData.length === 0) {
        state.fileNavActiveData = [{ name: "home.jsx", id: 1 }];

        state.activeData = {
          name: "home.jsx",
          id: 1,
        };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  searchReducer,
  navDataReducer,
  fileDirectoryReducer,
  activeDataReducer,
  fileNavActiveDataReducer,
  deleteReducer,
} = dataStore.actions;

export default dataStore.reducer;
