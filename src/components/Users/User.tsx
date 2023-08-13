import {FC} from 'react'
import {NavLink} from 'react-router-dom'
import userPhoto from 'assets/images/user-1.jpg'
import {UserType} from 'redux/types'
import s from './Users.module.css'

type PropsType = {
    user: UserType
    followingInProgress: number[]
    unfollow: any
    follow: any
}
export const User: FC<PropsType> =
    ({
         user,
         followingInProgress,
         unfollow,
         follow
     }) => {

        const onUnfollow = () => unfollow(user.id)
        const onFollow = () => follow(user.id)

        const srcImg = user.photos.small ? user.photos.small : userPhoto

        return (
            <div key={user.id}>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={srcImg}
                             alt={`Avatar of ${user.name}`}
                             className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ? (
                        <button disabled={followingInProgress.includes(user.id)}
                                onClick={onUnfollow}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button disabled={followingInProgress.includes(user.id)}
                                onClick={onFollow}
                        >
                            follow
                        </button>
                    )}
                </div>
                <div>
                    <div>
                        <p>{user.name}</p>
                        <p>{user.status}</p>
                    </div>
                    <div>
                        <p>{'user.location.country'}</p>
                        <p>{'user.location.city'}</p>
                    </div>
                </div>
            </div>
        )

    }