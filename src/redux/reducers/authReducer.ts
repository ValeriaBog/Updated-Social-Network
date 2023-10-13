import {stopSubmit} from 'redux-form'

import {APIResultCodes} from 'api/api'
import {authAPI, LoginParamsType, securityAPI} from 'api/authAPI'

import {AppThunkType, InferActionTypes} from 'redux/store'
import {handleServerAppError} from "../../utils/error-utils/server-error-app";
import {handleServerNetworkError} from "../../utils/error-utils/server-network-error";

const initialState = {
    id: null as (number | null),
    email: null as (string | null),
    login: null as (string | null),
    isAuth: false,
    captcha: null as (string | null)
}

export const AuthReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'auth/SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.payload
            }
        case "auth/GET-CAPTCHA-URL-SUCCESS":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const authActions = {
    setAuthUserData: (id: number | null, email: null | string, login: null | string, isAuth: boolean) => ({
        type: 'auth/SET-AUTH-USER-DATA',
        payload: {id, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string ) => ({
        type: 'auth/GET-CAPTCHA-URL-SUCCESS',
        payload: {captchaUrl}
    } as const)
}



export const authThunks = {
    getAuthUserData(): AppThunkType<Promise<void>> {
        return async dispatch => {
            try {
                const res = await authAPI.me()
                if (res.data.resultCode === 0) {
                    const {id, login, email} = res.data.data
                    dispatch(authActions.setAuthUserData(id, email, login, true))
                } else {
                    handleServerAppError(res.data, dispatch)
                }
            }catch (e) {
                const error = (e as { message: string })
                handleServerNetworkError(error, dispatch)
            }

        }
    },
    logIn(data: LoginParamsType): AppThunkType {
        return async dispatch => {
            try {
                const res = await authAPI.logIn(data)
                if (res.data.resultCode === APIResultCodes.SUCCESS) {
                    dispatch(authThunks.getAuthUserData())
                } else {
                    if(res.data.resultCode===10){
                        dispatch(authThunks.getCaptchaUrl())
                    }
                    const message = res.data.messages.length ? res.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            }catch (e) {
                const error = (e as { message: string })
                handleServerNetworkError(error, dispatch)
            }
        }
    },
    getCaptchaUrl(): AppThunkType {
        return async dispatch => {
            try {
                const res = await securityAPI.getCaptchaUrl()
                dispatch(authActions.getCaptchaUrlSuccess(res.data.url))
            }catch (e) {
                const error = (e as { message: string })
                handleServerNetworkError(error, dispatch)
            }



        }
    },
    logout(): AppThunkType {
        return async dispatch => {
            try {
                const res = await authAPI.logOut()
                if (res.data.resultCode === APIResultCodes.SUCCESS) {
                    dispatch(authActions.setAuthUserData(null, null, null, false))
                }else {
                    handleServerAppError(res.data, dispatch)
                }
            }catch (e) {
                const error = (e as { message: string })
                handleServerNetworkError(error, dispatch)
            }


        }
    }
}


// TYPES
type ActionsType = InferActionTypes<typeof authActions>

type InitialStateType = typeof initialState