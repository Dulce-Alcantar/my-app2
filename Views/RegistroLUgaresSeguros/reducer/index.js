import { actions } from './actions';
import { initialState } from './constants';

const reducer = (
    state = initialState, 
    action = {type: '', name: '', payload:''}
    ) => {
        switch (action.type) {
            case actions.CHANGE_VALUE:
                return {
                    ...state,
                    place: {
                        ...state.place,
                        [action.name]: action.payload,
                    },
                };
                case actions.CHECK_EMPTY_STATES:                
                let newErrors = state.errors;
            for (let property in state.place){
                if(state.place[property]=== ""){
            newErrors = {
                ...newErrors,
                [property]: {
                    ...newErrors[property],
                    status: true,
                    },
                };
            }    else{
                newErrors = {
                    ...newErrors,
                    [property]: {
                        ...newErrors[property],
                        status: false,
                    },
                };
            }        
        }
        return {
            ...state,
            errors: newErrors,
                    };
            case actions.SAVE_PLACE:
                return {
                    ...state,
                    isLoading: true,
                    isSuccess: false,
                    isError: false,
                };
                case actions.SAVE_PLACE_SUCCESS:
                    return {
                        ...state,
                        isLoading: false,
                        isSuccess: true,
                        isError: false,
                        };
                case actions.SAVE_PLACE_ERROR:
                    return {
                        ...state,
                        isLoading: false,
                        isSuccess: false,
                        isError: true,
                        };
                        case actions.RESTART_FORM:
                            return {
                                ...state,
                                place: initialState.place,
                            };
                    default:
                return state;
        }    
};

export { reducer, actions, initialState };