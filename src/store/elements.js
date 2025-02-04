import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "elements",
  initialState: {
    index: 0,
    questionTypeIndex: 0,
    ringTotal: 0,
    seenCheckbox: false,
    seenRank: false,
    scrollSpeed: 0.3,
    addAChoice: false,
  },
  reducers: {
    setIndex: (elements, action) => {
      elements.index = action.payload;
    },
    setQuestionTypeIndex: (elements, action) => {
      elements.questionTypeIndex = action.payload;
    },
    setRingTotal: (elements, action) => {
      elements.ringTotal = action.payload;
    },

    setSeenCheckbox: (elements, action) => {
      elements.seenCheckbox = action.payload;
    },
    setSeenRank: (elements, action) => {
      elements.seenRank = action.payload;
    },
    setScrollSpeed: (elements, action) => {
      elements.scrollSpeed = action.payload;
    },

    UpdateAddAChoice: (elements, action) => {
     elements.addAChoice = action.payload;
    }
  },
});

export const {
  setIndex,
  setQuestionTypeIndex,
  setRingTotal,
  setSeenCheckbox,
  setSeenRank,
  setScrollSpeed,
  UpdateAddAChoice,
} = slice.actions;
export default slice.reducer;
