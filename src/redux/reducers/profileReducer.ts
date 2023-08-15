import {APIResultCodes} from 'api/api'
import {profileAPI} from 'api/profileAPI'
import {PhotosType, PostType, ProfileType} from 'redux/types'
import {AppThunkType, InferActionTypes} from 'redux/store'


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
            return {...state, profile: {...state.profile!, photos: {small: action.payload.photo.small, large: action.payload.photo.large} }}
        default:
            return state
    }
}

export const profileActions = {
    addPost: (newPostText: string) => ({type: 'ADD-POST', payload: {newPostText}} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SET-USER-PROFILE', payload: {profile}} as const),
    setStatus: (status: string) => ({type: 'SET-STATUS', payload: {status}} as const),
    deletePost: (postId: number) => ({type: 'DELETE-POST', payload: {postId}} as const),
    savePhoto: (photo: PhotosType) => ({type: 'SAVE-PHOTO', payload: {photo}} as const),
}

export const profileThunks = {
    getUserProfile(userID: number): AppThunkType {
        return async dispatch => {
            const res = await profileAPI.getProfile(userID)
            dispatch(profileActions.setUserProfile(res.data))

        }
    },
    getStatus(userID: number): AppThunkType {
        return async dispatch => {
            const res = await profileAPI.getStatus(userID)
            dispatch(profileActions.setStatus(res.data))
        }
    },
    updateStatus(status: string): AppThunkType {
        return async dispatch => {
            const res = await profileAPI.updateStatus(status)
            if (res.data.resultCode === APIResultCodes.SUCCESS) {
                dispatch(profileActions.setStatus(status))
            }
        }
    },
    savePhoto(file: File): AppThunkType {
        return async dispatch => {
            const res = await profileAPI.savePhoto(file)
            if (res.data.resultCode === APIResultCodes.SUCCESS) {
                dispatch(profileActions.savePhoto(res.data.data!))
            }
        }
    },
}

type ActionsType = InferActionTypes<typeof profileActions>

type InitialStateType = typeof initialState

export type UpdateStatusType = typeof profileThunks['updateStatus']
export type UpdatePhotoType = typeof profileThunks['savePhoto']