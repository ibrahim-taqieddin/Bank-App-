import { configureStore } from "@reduxjs/toolkit";

import AccountsReducer from "./reducers/AccountsReducer";
import ApiReducer from "./reducers/ApiReducer";

const store = configureStore({
  reducer: {
    accounts: AccountsReducer,
    movies: ApiReducer,
  },
});

export default store;
