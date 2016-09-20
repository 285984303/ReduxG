/**
 * Created by gaocai on 16/9/19.
 */

import * as types from '../action/actionType';

export function fetchGirl(index = 1) {
    return dispatch => {
        fetch('http://gank.io/api/data/福利/12/' + index)
            .then(response => response.json()).then(responseData => {
            dispatch(receiverGirlList(responseData));
        }).catch((error) => {
            console.log('error')
        }).done();
    }
}

function receiverGirlList(data) {
    return {
        type: types.GIRL_LIST,
        loading: true,
        girlList: data.results
    }
}

