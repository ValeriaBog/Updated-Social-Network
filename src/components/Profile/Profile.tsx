import {FC} from 'react'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {PostsContainer} from './Posts/PostsContainer'
import {ProfilePropsType} from './ProfileContainer'
import {ErrorSnackbar} from "../common/ErrorSnackbar/ErrorSnackbar";

type Props = ProfilePropsType & { isOwner: boolean }


export const Profile: FC<Props> = ({
                                       profile,
                                       status,
                                       updateStatus,
                                       isOwner,
                                       savePhoto,
                                       saveProfile,
                                       error,
                                       setAppErrorAC
                                   }) => {
    return (
        <div>
            <ErrorSnackbar error={error} closeError={(error)=>{setAppErrorAC(error)}}/>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
                         saveProfile={saveProfile}
            />
            <PostsContainer/>
        </div>
    )
}