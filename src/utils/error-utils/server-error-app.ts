import {ResponseType} from "../../api/api";
import {Dispatch} from "redux";
import {appActions} from "../../redux/reducers/appReducer";

export const handleServerAppError = <D>(data: ResponseType, dispatch: Dispatch) => {
    const {setAppErrorAC} = appActions
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
}