import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import {workJobReducer} from './WorkersJob.redux'
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    workJobs:workJobReducer
},
});

const store1 = configureStore({
  reducer: {
    workJobs: workJobReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), // Adding thunk middleware
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;