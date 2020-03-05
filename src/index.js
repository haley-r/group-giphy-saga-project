import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
// import { response } from 'express';





function* rootSaga(){
yield takeEvery ('FETCH_GIF', fetchGifs)
}

function* fetchGifs(){
    const gifDisplay = yield axios.get('/');
    console.log('in gif display:', gifDisplay);
    yield put({type:'GET_GIF'})
}

const gifReducer = (state=[], action) =>{
    switch(action.type){
        case 'GET_GIF':
            return action.payload;
        default: 
            return state
    }
    
}


const sagaMiddleware = createSagaMiddleware();
const storeInstance = createStore(
    combineReducers({
        gifReducer
    }),

    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
