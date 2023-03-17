import {configureStore} from '@reduxjs/toolkit'
import counterReducer  from '../features/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
        // insteed  of counterslice use counter reducer
    }
})
