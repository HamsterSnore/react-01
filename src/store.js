import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from './features/login/loginSlice'

export default configureStore({
    reducer: {
        authentication: authenticationReducer
    }
})