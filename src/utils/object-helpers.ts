import {UserType} from "../redux/types";

export const updateObjectInArray = (items: UserType[], itemId: number, objPropName: keyof UserType, newObjProps: {followed: boolean})=>{
   return items.map(user => user[objPropName] === itemId ? {...user, ...newObjProps} : user)
}