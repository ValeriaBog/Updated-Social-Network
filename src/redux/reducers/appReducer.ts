import { AppThunkType, InferActionTypes } from 'redux/store'
import { authThunks } from 'redux/reducers/authReducer'
import {handleServerNetworkError} from "../../utils/error-utils/server-network-error";

const initialState = {
   isInitialized: false,
   error: ''
}

export const appReducer = (state = initialState, action: ActionsType): AppInitialStateType => {
   switch (action.type) {
      case 'APP/SET-IS-INITIALIZED':
         return { ...state, isInitialized: action.payload.isInitialized }
      case 'APP/SET-ERROR':
         return {...state, error: action.payload.error}
      default:
         return state
   }
}

export const appActions = {
   setAppInitialized(isInitialized: boolean) {
      return {
         type: 'APP/SET-IS-INITIALIZED',
         payload: { isInitialized }
      } as const
   },
   setAppErrorAC(error: string) {
      return {
         type: 'APP/SET-ERROR',
         payload: { error }
      } as const
   },
}


export const appThunks = {
   initialization: (): AppThunkType => {
      return dispatch => {
         try {
            const promise = dispatch(authThunks.getAuthUserData())
            Promise.all([promise]).then(() => {
               dispatch(appActions.setAppInitialized(true))
            })
         }catch (e) {
            const error = (e as { message: string })
            handleServerNetworkError(error, dispatch)
         }

      }
   }
}

// TYPES
type AppInitialStateType = typeof initialState

type ActionsType = InferActionTypes<typeof appActions>
