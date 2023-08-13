import axios from 'axios'
import { UserType } from 'redux/types'

export enum APIResultCodes {
   SUCCESS = 0,
   ERROR = 1,
   CAPTCHA_ERROR = 10,
}

export type ResponseType<D = {}> = {
   resultCode: number
   messages: string[]
   data: D
}

export type GetItemsType = {
   items: UserType[]
   totalCount: number
   error: string | null
}

export const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'ba943c06-c50e-49f1-adbf-fdfeba1c5839',
   },
})