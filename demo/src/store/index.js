import {
    // 名前が被ってしまうので別名でimportする
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import tasksReducer from '../reducers/tasks';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const middlewares = [logger, thunk];

// historyは[src/index.js]から渡すようにする
export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            // tasksReducerをtasksというkeyに割り当てる
            tasks: tasksReducer
        }),
        applyMiddleware(...middlewares)
    );
}