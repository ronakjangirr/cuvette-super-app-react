import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const apiSliceName = createSlice({
    name:"apiSlice",
    initialState:{
        weather:[],
        loading:false,
        error:false,
    },

    reducers:{},

    extraReducers: (builder) => {
        builder
            .addCase(getWeatherAction.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getWeatherAction.fulfilled, (state, action) => {
                state.loading = false;
                state.weather = action.payload;
            })
            .addCase(getWeatherAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const getWeatherAction = createAsyncThunk(
    "apiSlice/getWeatherAction",
    async (args,{rejectWithValue})=>{
        try{
            let getResponse = await fetch("http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=London&aqi=no")
            
            if(!getResponse.ok){
                throw new Error("Get Request Failed");
            }

            let getResult= await getResponse.json();
            return getResult; 
        }catch(error){
            console.log(error);
            return rejectWithValue("Oops can't get your data");
        }
    }
)

export default apiSliceName.reducer