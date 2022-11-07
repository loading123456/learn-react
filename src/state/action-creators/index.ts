import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions';

export const handleA = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.A,
            payload: amount,
        });
    };
};

export const handleB = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.B,
            payload: amount,
        });
    };
};
export const handleC = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.C,
        });
    };
};
