/**
 * Created by gaocai on 16/9/19.
 */

import * as types from '../action/actionType';

const initialState = {
    loading: false,
    girlList: []
};

export default function girlReducer(state = initialState, action) {

    switch (action.type) {
        case types.GIRL_LIST:
            return Object.assign({}, state, {
                loading: true,
                girlList: action.girlList
            });
            break;
        default:
            return state;
    }

}

