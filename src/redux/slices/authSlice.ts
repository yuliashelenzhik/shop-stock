import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useLoginMutation } from "../../api/usersApi";

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async (userCredentials: any) => {
//     const [login, { isError, error, isSuccess }] = useLoginMutation();
//     const response = await login(userCredentials);
//     console.log(response);
//     // return response.data as any
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    // setToken: (state, action: PayloadAction<string | null>) => {
    //   state.token = action.payload;
    //   state.isAuthenticated = !!action.payload;
    //   state.isLoading = false;
    //   state.error = null;
    // },
    // setError: (state, action: PayloadAction<string | null>) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

// export const { setToken, setError } = authSlice.actions;
export const { setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
