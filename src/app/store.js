import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../reduxfeatures/apiSlice' //  apiSlice => name:"apiSlice"

export const store = configureStore({

    reducer: {
        weatherStore: apiSlice,
    },
  })
  
