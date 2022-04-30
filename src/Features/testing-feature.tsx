import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITestingSlice {
  name: string
}

const initState: ITestingSlice = {
  name: 'shahzaib',
}

export const testingSlice = createSlice({
  name: 'testingSlice',
  initialState: initState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
  },
})

export const { changeName } = testingSlice.actions
export default testingSlice.reducer
