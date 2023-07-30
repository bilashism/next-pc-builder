import { createSlice } from "@reduxjs/toolkit";
const areAllComponentsSet = state => {
  // Check if all component properties have values
  const { isBuildCompleted, ...components } = state;
  return Object.values(components).every(value => value);
};
const initialState = {
  isBuildCompleted: false,

  cpu: undefined,
  motherboard: undefined,
  ram: undefined,
  power: undefined,
  storage: undefined,
  monitor: undefined
};

export const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    setBuildStatus: (state, action) => {
      state.isBuildCompleted = action.payload;
    },
    setComponent: (state, action) => {
      state[action.payload.categoryId] = action.payload;
      state.isBuildCompleted = areAllComponentsSet(state);
    }
  }
});
export const { setBuildStatus, setComponent } = pcBuilderSlice.actions;
export const pcBuilderReducer = pcBuilderSlice.reducer;
