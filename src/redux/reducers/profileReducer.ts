import {APIResultCodes} from 'api/api'
import {profileAPI} from 'api/profileAPI'
import {ContactsType, PhotosType, PostType, ProfileType} from 'redux/types'
import {AppThunkType, InferActionTypes} from 'redux/store'
import {UserInfoType} from "../../components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm";
import {handleServerNetworkError} from "../../utils/error-utils/server-network-error";
import {handleServerAppError} from "../../utils/error-utils/server-error-app";


const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
    ] as PostType[],
    profile: null as (ProfileType | null),
    status: ''
}

export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            if (action.payload.newPostText.trim()) {
                return {
                    ...state,
                    posts: [...state.posts, {
                        id: state.posts.length + 1,
                        message: action.payload.newPostText,
                        likesCount: 0
                    }],
                }
            } else {
                return state
            }
        case 'SET-USER-PROFILE':
            return {...state, profile: action.payload.profile}
        case 'SET-STATUS':
            return {...state, status: action.payload.status}
        case "DELETE-POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.payload.postId)}
        case "SAVE-PHOTO":
            return {...state, profile: {...state.profile!, photos: action.photos}}
        default:
            return state
    }
}


export const profileActions = {
    addPost: (newPostText: string) => ({type: 'ADD-POST', payload: {newPostText}} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SET-USER-PROFILE', payload: {profile}} as const),
    setStatus: (status: string) => ({type: 'SET-STATUS', payload: {status}} as const),
    deletePost: (postId: number) => ({type: 'DELETE-POST', payload: {postId}} as const),
    savePhoto: (photos: PhotosType) => ({type: 'SAVE-PHOTO', photos} as const),
}

export const profileThunks = {
    getUserProfile(userID: number): AppThunkType {
        return async dispatch => {
            try {
                const res = await profileAPI.getProfile(userID)
                dispatch(profileActions.setUserProfile(res.data))
            } catch (e) {
                const error = (e as { message: string })
                handleServerNetworkError(error, dispatch)
            }
        }
    },
    getStatus(userID: number): AppThunkType {
        return async dispatch => {
            try {
                const res = await profileAPI.getStatus(userID)
                dispatch(profileActions.setStatus(res.data))
            } catch (e) {
                const error = (e as { message: string })
                handleServerNetworkError(error, dispatch)
            }

        }
    },
    updateStatus(status: string): AppThunkType {
        return async dispatch => {
            try {
                const res = await profileAPI.updateStatus(status)
                if (res.data.resultCode === APIResultCodes.SUCCESS) {
                    dispatch(profileActions.setStatus(status))
                } else {
                    handleServerAppError(res.data, dispatch)
                }
            } catch (e) {
                const error = (e as { message: string })
                handleServerNetworkError(error, dispatch)
            }
        }
    },
    savePhoto(file: File): AppThunkType {
        return async dispatch => {
            try {
                const res = await profileAPI.savePhoto(file)
                if (res.resultCode === APIResultCodes.SUCCESS) {
                    dispatch(profileActions.savePhoto(res.data.photos))
                } else {
                    handleServerAppError(res, dispatch)
                }
            } catch (e) {
                const error = (e as { message: string })
                handleServerNetworkError(error, dispatch)
            }

        }
    },
    saveProfile(data: UserInfoType): AppThunkType<Promise<void>> {
        return async (dispatch, getState) => {
            try {
                const userId = getState().auth.id!
                const res = await profileAPI.saveProfile(data)
                debugger
                if (res.data.resultCode === APIResultCodes.SUCCESS) {
                    return dispatch(profileThunks.getUserProfile(userId))
                } else {
                    return Promise.reject(res.data.messages[0])
                }
            } catch (e) {
                const error = (e as { message: string })
                handleServerNetworkError(error, dispatch)
            }

        }
    },
}

type ActionsType = InferActionTypes<typeof profileActions>

type InitialStateType = typeof initialState

export type UpdateStatusType = typeof profileThunks['updateStatus']
export type UpdatePhotoType = typeof profileThunks['savePhoto']
export type UpdateProfileType = typeof profileThunks['saveProfile']