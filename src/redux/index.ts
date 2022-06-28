import { applyMiddleware, combineReducers, createStore } from "redux";
import { tasks } from './tasks';
import logger from "redux-logger"

const rootReducer = combineReducers({tasks});

export const store = createStore(rootReducer, applyMiddleware(logger))

export type RootState = ReturnType<typeof rootReducer>;