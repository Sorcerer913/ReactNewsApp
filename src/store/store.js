import createSagaMiddleware from "redux-saga";
import {all, fork} from "redux-saga/effects";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {mainReducer} from "../pages/MainPage/store/index";
import {getPostsSaga} from "../pages/MainPage/store/index"

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware =
    window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development"
        ? compose(applyMiddleware(sagaMiddleware), reduxDevTools)
        : applyMiddleware(sagaMiddleware);


export const store = createStore(combineReducers({
    mainReducer,
}), middleware);

function* rootSaga() {
    yield fork(getPostsSaga)
}

sagaMiddleware.run(rootSaga)