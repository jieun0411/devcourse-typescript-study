import { applyMiddleware, combineReducers, createStore } from "redux";
import { tasks } from './tasks';
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension';
// import storage from "redux-persist/lib/storage"; // localStorage
import session from "redux-persist/lib/storage/session"; // sessionStorage
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key:'root',
    storage: session,
    whitelist: ['tasks'], // 리스트 안의 상태만 하겠다.
    // blacklist: [''] // 리스트 안의 상태만 하지 않겠다.
}

const combinedReducer = combineReducers({tasks});

const rootReducer = persistReducer(persistConfig, combinedReducer)

export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(logger))
);

export const persistor = persistStore(store as any)

export type RootState = ReturnType<typeof rootReducer>;