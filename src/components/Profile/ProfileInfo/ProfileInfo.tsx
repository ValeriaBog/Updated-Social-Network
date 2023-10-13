import {ChangeEvent, FC, useState} from 'react'
import userPhoto from 'assets/images/user-1.jpg'
import {ContactsType, ProfileType} from 'redux/types'
import {Preloader} from 'components/common/Preloader/Preloader'
import {ProfileStatus} from './ProfileStatus/ProfileStatus'
import s from './ProfileInfo.module.css'
import {UpdatePhotoType, UpdateProfileType, UpdateStatusType} from 'redux/reducers/profileReducer'
import {UploadWidget} from "../../common/UploadImage/UploadImage";
import {ProfileDataForm, UserInfoType} from "./ProfileDataForm/ProfileDataForm";
import {Contact} from "./Contacts/Contacts";


type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: UpdateStatusType
    isOwner: boolean
    savePhoto: UpdatePhotoType
    saveProfile: UpdateProfileType
}
export const ProfileInfo: FC<PropsType> = ({
                                               profile,
                                               status,
                                               updateStatus,
                                               isOwner,
                                               savePhoto,
                                               saveProfile
                                           }) => {

    const [editMode, setEdit] = useState(false)

    const goToEditMode = () => {
        setEdit(true)
    }
    const onMainPhotoSelected = (e: File) => {
        debugger
        savePhoto(e)
    }

    const onSubmit = async (data: UserInfoType) => {
       await saveProfile(data)
        setEdit(false)
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
                    <div className={s.uploadPhoto}>{isOwner && <UploadWidget onChange={onMainPhotoSelected}/>}</div>
                </div>
                {editMode ?
                    <ProfileDataForm profile={profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode}/>}

            </div>
        </div>
    )
}

type PropsProf = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData: FC<PropsProf> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div className={s.nameUser}>{profile.fullName}</div>
            <div className={s.infoUser}>
                <div className={s.textInfo}>About me: {profile.aboutMe}</div>
                <div className={s.textInfo}>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
                {profile.lookingForAJob &&
                    <div className={s.textInfo}>My professional skills: {profile.lookingForAJobDescription}</div>
                }
                <div className={s.textInfo}>Contacts: {Object.keys(profile.contacts).map((key) => {
                    const contactKey = key as keyof ContactsType;
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[contactKey]}/>
                })}
                </div>
            </div>
        </div>
    )

}


