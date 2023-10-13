import {AppThunkDispatch, AppThunkType} from '../redux-store';

import {getAuthUserDataTC} from './authThunk';
import {setAppInitializeAC} from '../actions/appAction';

export const inititializeTC = (): AppThunkType => async (dispatch: AppThunkDispatch) => {
    try {
        await dispatch(getAuthUserDataTC())
        dispatch(setAppInitializeAC())
    } catch (e) {
        console.error(e)
    }
}



