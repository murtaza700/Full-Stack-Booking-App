import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchServices = createAsyncThunk(
    "services/fetchServices",

    async (_, thunkAPI) => {

        try {

            const state = thunkAPI.getState();

            const filters = state.services.filters;

            const query = new URLSearchParams({
                category: filters.category,
                minPrice: filters.minPrice,
                maxPrice: filters.maxPrice,
                sort: filters.sort,
            });

            const response = await axios.get(
                `${API}/api/services?${query}`,
                {
                    withCredentials: true,
                }
            );

            return response.data.services;

        } catch (error) {

            return thunkAPI.rejectWithValue(
                error.response.data.message
            );

        }
    }
);


const initialState = {

    services: [],

    filters: {
        category: "",
        minPrice: "",
        maxPrice: "",
        sort: "",
    },

    loading: false,
    error: null,

};


const serviceSlice = createSlice({

    name: "services",

    initialState,

    reducers: {

        setCategory: (state, action) => {
            state.filters.category = action.payload;
        },

        setMinPrice: (state, action) => {
            state.filters.minPrice = action.payload;
        },

        setMaxPrice: (state, action) => {
            state.filters.maxPrice = action.payload;
        },

        setSort: (state, action) => {
            state.filters.sort = action.payload;
        },

    },



    extraReducers: (builder) => {

        builder

            .addCase(fetchServices.pending, (state) => {

                state.loading = true;
                state.error = null;

            })

            .addCase(fetchServices.fulfilled, (state, action) => {

                state.loading = false;
                state.services = action.payload;

            })

            .addCase(fetchServices.rejected, (state, action) => {

                state.loading = false;
                state.error = action.payload;

            });

    },

});

export const {
    setCategory,
    setMinPrice,
    setMaxPrice,
    setSort,
} = serviceSlice.actions;

export default serviceSlice.reducer;