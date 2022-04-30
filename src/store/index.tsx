import { configureStore } from '@reduxjs/toolkit'
import testingReducer from "../Features/testing-feature"

export const store = configureStore({
  reducer: {
    testingReducer:testingReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
