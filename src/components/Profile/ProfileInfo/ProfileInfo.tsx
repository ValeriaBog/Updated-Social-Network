import {ChangeEvent, FC, useState} from 'react'
import userPhoto from 'assets/images/user-1.jpg'
import {ProfileType} from 'redux/types'
import {Preloader} from 'components/common/Preloader/Preloader'
import {ProfileStatus} from './ProfileStatus/ProfileStatus'
import s from './ProfileInfo.module.css'
import {UpdatePhotoType, UpdateStatusType} from 'redux/reducers/profileReducer'
import {UploadWidget} from "../../common/UploadImage/UploadImage";


type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: UpdateStatusType
    isOwner: boolean
    savePhoto: UpdatePhotoType
}
export const ProfileInfo: FC<PropsType> = ({
                                               profile,
                                               status,
                                               updateStatus,
                                               isOwner,
                                               savePhoto}) => {

    const descriptionUser = (info: string, description: string) => {
        return `${info} ${description ? description : 'in progress...'}`
    }

    // const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files!.length) {
    //         savePhoto(e.target.files![0])
    //     }
    // }
    const onMainPhotoSelected = (e: File) => {
            savePhoto(e)
    }



    return !profile ? (
        <Preloader/>
    ) : (
        <div className={s.profile}>
            <img src="https://themified.com/friend-finder/images/covers/1.jpg" alt="wallpaper"/>
            <div className={s.row}>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.photoBlock}>
                    <img src={profile.photos.small ? profile.photos.small : userPhoto}
                         alt={`Avatar of ${profile.fullName}`}
                         className={s.photoInfo}/>

                    {/*{isOwner && <input type="file" onChange={onMainPhotoSelected}/>}*/}
                    <div className={s.uploadPhoto}>{isOwner && <UploadWidget  onChange={onMainPhotoSelected}/>}</div>
                </div>

                <div className={s.nameUser}>{profile.fullName}</div>
                <div className={s.infoUser}>
                    <div className={s.textInfo}>{descriptionUser('About me:', profile.aboutMe)}</div>
                    <div className={s.textInfo}>{descriptionUser('Job:', profile.lookingForAJobDescription)}</div>
                    <div className={s.textInfo}>{descriptionUser('Contacts:', profile.contacts.facebook)} </div>
                </div>
            </div>

        </div>
    )
}