import {APP_INITIALIZED} from './actionTypes';

export type AppActionType = setAppInitializedAC

export type setAppInitializedAC = ReturnType<typeof setAppInitializeAC>
export const setAppInitializeAC = () => ({
    type: APP_INITIALIZED,
} as const)

