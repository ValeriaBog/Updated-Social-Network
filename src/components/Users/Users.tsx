import { FC } from 'react'
import { UserType } from 'redux/types'
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type PropsType = {
   users: UserType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   followingInProgress: number[]
   onPageChanged: (pageNumber: number) => void
   follow: any
   unfollow: any
}
export const Users: FC<PropsType> =
   ({
       users,
       pageSize,
       totalUsersCount,
       currentPage,
       followingInProgress,
       onPageChanged,
       follow,
       unfollow,
    }) => {

      const usersMap = users.map(user => {
        return <User key={user.id} user={user} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow}/>
      })


      return (
         <div>
            <div>
                <Paginator pageSize={pageSize}
                           currentPage={currentPage}
                           onPageChanged={onPageChanged}
                           totalUsersCount={totalUsersCount}
                           portionSize={10}/>
            </div>
            {usersMap}
         </div>
      )
   }