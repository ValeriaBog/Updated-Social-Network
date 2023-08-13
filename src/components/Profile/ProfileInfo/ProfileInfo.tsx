import { FC } from 'react'
import userPhoto from 'assets/images/user-1.jpg'
import { ProfileType } from 'redux/types'
import { Preloader } from 'components/common/Preloader/Preloader'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'
import s from './ProfileInfo.module.css'
import { UpdateStatusType } from 'redux/reducers/profileReducer'

type PropsType = {
   profile: ProfileType | null
   status: string
   updateStatus: UpdateStatusType
}
export const ProfileInfo: FC<PropsType> = ({ profile, status, updateStatus }) => {

    const descriptionUser = (info: string, description: string)=>{
      return `${info} ${description?description:'in progress...'}`
    }
    return !profile ? (
      <Preloader />
   ) : (
      <div className={s.profile}>
            <img src="https://themified.com/friend-finder/images/covers/1.jpg" alt="wallpaper" />
             <div className={s.row}>
                 <ProfileStatus status={status} updateStatus={updateStatus} />
             </div>
             <div className={s.descriptionBlock}>
                 <img src={profile.photos.small ? profile.photos.small : userPhoto}
                      alt={`Avatar of ${profile.fullName}`}
                      className={s.photoInfo}/>
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