import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { localEndpoint, remoteEndpoint, apiEndpoint } from "../config.json";
import moment from "moment";

const slice = createSlice({
  name: "surveys",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    lastId: 0,
    currentIndex: 0,
  },
  reducers: {
    surveyRequested: (surveys, action) => {
      surveys.loading = true;
    },

    surveyReceived: (surveys, action) => {
      surveys.list.push({
        id: ++surveys.lastId,
        survey: action.payload,
      });
      surveys.loading = false;
      surveys.lastFetch = { ...action.payload };
      surveys.currentIndex = surveys.list.length - 2;
    },
    
    surveyRequestFailed: (surveys) => {
      surveys.loading = false;
    },

    updateSessionTimer: (surveys, action) => {
      surveys.sessionTimer = action.payload;
    },

    updatePauseTimer: (surveys, action) => {
      surveys.pauseTimer = action.payload;
    },

    moveToPreviousItem: (surveys) => {
      if (surveys.currentIndex > 0) {
        surveys.currentIndex -= 1; // Move to the previous item
      }
   }
  },
});

export const {
  surveyRequested,
  surveyReceived,
  surveyRequestFailed,
  updateSessionTimer,
  updatePauseTimer,
  moveToPreviousItem
} = slice.actions;
export default slice.reducer;

// Action Creators
export const loadSurveys = (queryParams = {}) => (dispatch, getState) => {

  dispatch(
    apiCallBegan({
      url: remoteEndpoint,
      onStart: surveyRequested.type,
      onSuccess: surveyReceived.type,
      onError: surveyRequestFailed.type,
      method: 'get',
      params: queryParams, 
    })
  );
};

export const addToStory = (formData) => (dispatch) => {

  dispatch(
    apiCallBegan({
      url: remoteEndpoint, 
      method: 'post', 
      data: formData, 
      onStart: surveyRequested.type,
      onSuccess: surveyReceived.type,
      onError: surveyRequestFailed.type,
    })
  );
};


