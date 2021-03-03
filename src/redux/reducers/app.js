import { getAuthData } from './auth';

const SET_INIT = 'SET-INIT';

let initialState = {
    init: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT:
            return {
                ...state,
                init: true
            }
        default:
            return state;
    }
}

export const setInit = () =>
    ({ type: SET_INIT });

export const initApp = () => (dispatch) => {
    let promise = dispatch(getAuthData());
    Promise.all([ promise ])
        .then(() => {
            dispatch(setInit());
        })
}

export default appReducer;