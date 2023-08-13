import {AppThunkType, InferActionTypes} from 'redux/store'
import {UserType} from 'redux/types'

import {usersAPI} from 'api/usersAPI'
import {Dispatch} from "redux";
import {AxiosPromise, AxiosResponse} from "axios";
import {updateObjectInArray} from "../../utils/object-helpers";

const initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[],
}

export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USERS':
            return {...state, users: [...action.payload.users]}
        case 'SET-USERS-TOTAL-COUNT':
            return {...state, totalUsersCount: action.payload.count}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.currentPage}
        case 'FOLLOW':

            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userID,"id" ,{followed: true} )
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userID,"id" ,{followed: false} )
            }
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.payload.isFetching}
        case 'TOGGLE-FOLLOWING-IN-PROGRESS':
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userID]
                    : state.followingInProgress.filter(id => id !== action.payload.userID)
            }
        default:
            return state
    }
}

const followUnfollowFlow = async (dispatch: Dispatch,
                                  userId: number,
                                  apiMethod: (userID: number)=> any,
                                  actionCreator:(userID: number)=> any) => {

    dispatch(usersActions.toggleFollowingInProgress(userId, true))

    const res = await apiMethod(userId)
    if (res.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(usersActions.toggleFollowingInProgress(userId, false))

}


export const usersActions = {
    setUsers: (users: UserType[]) => ({type: 'SET-USERS', payload: {users}} as const),
    setTotalUsersCount: (count: number) => ({type: 'SET-USERS-TOTAL-COUNT', payload: {count}} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET-CURRENT-PAGE', payload: {currentPage}} as const),
    followSuccess: (userID: number) => ({type: 'FOLLOW', payload: {userID}} as const),
    unfollowSuccess: (userID: number) => ({type: 'UNFOLLOW', payload: {userID}} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', payload: {isFetching}} as const),
    toggleFollowingInProgress: (userID: number, isFetching: boolean) => ({
        type: 'TOGGLE-FOLLOWING-IN-PROGRESS',
        payload: {userID, isFetching}
    } as const),
}

export const usersThunks = {
    fetchUsers(page: number, pageSize: number): AppThunkType {
        return async dispatch => {
            dispatch(usersActions.toggleIsFetching(true))
            dispatch(usersActions.setCurrentPage(page))
            const res = await usersAPI.getUsers(page, pageSize)
            dispatch(usersActions.toggleIsFetching(false))
            dispatch(usersActions.setUsers(res.items))
            dispatch(usersActions.setTotalUsersCount(res.totalCount))

        }
    },
    follow(userID: number): AppThunkType {
        return async dispatch => {
            followUnfollowFlow(dispatch, userID, usersAPI.follow.bind(usersAPI), usersActions.followSuccess)

        }
    },
    unfollow(userID: number): AppThunkType {
        return async dispatch => {
            followUnfollowFlow(dispatch, userID,  usersAPI.unfollow.bind(usersAPI), usersActions.unfollowSuccess)
        }
    },
}

// TYPES
type InitialStateType = typeof initialState

type ActionsType = InferActionTypes<typeof usersActions>