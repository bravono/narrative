import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "elements",
  initialState: {
    index: 0,
    questionTypeIndex: 0,
  },
  reducers: {
    setIndex: (elements, action) => {
        elements.index = action.payload;
    },
    setQuestionTypeIndex: (elements, action) => {
        elements.questionTypeIndex = action.payload;
    },
    
  },
});

export const { setIndex, setQuestionTypeIndex } = slice.actions;
export default slice.reducer;
