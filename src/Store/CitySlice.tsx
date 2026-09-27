import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CityState{
    value:string;
}
const initialState:CityState={
    value:"cairo"
}
export const CitySlice = createSlice({
  name: 'City',
  initialState,
  reducers: {
    SetCity: (state,action: PayloadAction<string>) => {
      
      state.value =action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { SetCity } = CitySlice.actions

export default CitySlice.reducer