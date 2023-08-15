import { FC } from 'react'

// import s from './Profile.module.css'

import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { PostsContainer } from './Posts/PostsContainer'
import { ProfilePropsType } from './ProfileContainer'

type Props = ProfilePropsType & {isOwner: boolean}


export const Profile: FC<Props> = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
   return (
      <div>
         <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto}/>
         <PostsContainer />
      </div>
   )
}