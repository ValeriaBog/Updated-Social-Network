import { instance, ResponseType } from './api'
import {PhotosType, ProfileType} from 'redux/types'
import {UserInfoType} from "../components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm";

export const profileAPI = {
   getProfile(userID: number) {
      return instance
         .get<ProfileType>(`profile/${userID}`)
   },
   getStatus(userId: number) {
      return instance
         .get<string>(`profile/status/${userId}`)
   },
   updateStatus(status: string) {
      return instance.put<ResponseType>(`profile/status`, { status })
   },
   savePhoto(photoFile: File){
      const formData = new FormData()
      formData.append('image', photoFile)
      return instance.put<ResponseType<{ photos: PhotosType }>>(`profile/photo`, formData,{
         headers:{
            'Content-Type': 'multipart/form-data'
         }
      }).then(res=> res.data)
   },
   saveProfile(data: UserInfoType){
      return instance.put<ResponseType>(`profile/`,  data )
   }
}