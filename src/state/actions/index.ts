import { ActionType } from '~/state/action-types';

interface AAction {
    type: ActionType.A;
    payload: number;
}

interface BAction {
    type: ActionType.B;
    payload: number;
}

interface CAction {
    type: ActionType.C;
}

export type Action = AAction | BAction | CAction;
