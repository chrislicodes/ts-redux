import { combineReducers } from "redux";
import { repoReducer } from "./repositoriesReducer";

export const reducers = combineReducers({
  repositories: repoReducer,
});

export type RootState = ReturnType<typeof reducers>; //to make useSelector working .. (extra code)
