import {actions} from './actions';
import {initialState} from './constants';

const reducer = (state = initialState, action = {type: ""}) => {
    switch (action.type) {
        case actions.GET_PLACES:
            return {
                ...state,
                isLoading: true,
                error: null,
                };
            case actions.GET_PLACES_SUCCESS:
                return {
                    ...state,
                    places: action.payload,
                    isLoading: false,
                    error: null,                    
                    };
                    case actions.GET_PLACES_ERROR:
                        return {
                            ...state,
                            places: [],
                            isLoading: false,
                            error: action.payload,
                            };
            default:
                return state;
    }
};

export {initialState, reducer, actions} ;
