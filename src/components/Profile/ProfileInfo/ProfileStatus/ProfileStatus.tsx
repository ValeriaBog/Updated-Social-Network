import { ChangeEvent, FC, FocusEvent, useState } from 'react'
import { UpdateStatusType } from 'redux/reducers/profileReducer'
import s from './ProfileStatus.module.css'

type PropsType = {
   status: string
   updateStatus: UpdateStatusType
}

export const ProfileStatus: FC<PropsType> = ({ status, updateStatus }) => {
   const [editMode, setEditMode] = useState(false)
   const [statusInput, setStatusInput] = useState(status)
   console.log(status)
   const toggleEditMode = () => {
      if (status !== statusInput) {
         editMode
            ? updateStatus(statusInput)
            : setStatusInput(status)
      }

      setEditMode(!editMode)
   }

   const onStatusInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatusInput(e.currentTarget.value)
   }
   const onStatusInputFocus = (e: FocusEvent<HTMLInputElement>) => {
      e.target.select()
   }

   return !editMode ? (
      <div className={s.status}>
         <span onDoubleClick={toggleEditMode}>{status===null?'Good morning, my friends!':status}</span>
      </div>
   ) : (
      <div className={s.status}>
         <input value={statusInput}
                onChange={onStatusInputChange}
                autoFocus
                onFocus={onStatusInputFocus}
                onBlur={toggleEditMode}
                className={s.textField}
         />
      </div>
   )
}