import { Action } from '~/state/actions'
import { ActionType} from '~/state/action-types'
const initialState = 0;



const reducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.A:
            return state + action.payload;
        case ActionType.B:
            return state - action.payload
        case ActionType.C:
            return 0;
        default:
            return state;
    }
};

export default reducer;
