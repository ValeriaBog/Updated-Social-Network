import {Dispatch} from "redux";
import {appActions} from "../../redux/reducers/appReducer";


export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch) => {
    const {setAppErrorAC} = appActions
    dispatch(setAppErrorAC(error.message ? error.message : 'Some error occurred'))

}