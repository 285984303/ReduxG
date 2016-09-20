/**
 * Created by gaocai on 16/9/19.
 */
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
//异步
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {

    //将Store和reducer绑定
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}
