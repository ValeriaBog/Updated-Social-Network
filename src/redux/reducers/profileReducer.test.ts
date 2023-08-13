import {profileActions, profileReducer} from "./profileReducer";
import {PostType, ProfileType} from "../types";

const state = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 15 },
      { id: 2, message: 'It\'s my first post', likesCount: 20 },
   ]as PostType[],
   profile: null as (ProfileType | null),
   status: ''
}

it('length of posts should be incremented',()=>{
   const action = profileActions.addPost('it-kamasutra')
   const newState=profileReducer(state,action)

   expect(newState.posts.length).toBe(3)
})

it('message of new post should be correct',()=>{
   const action = profileActions.addPost('it-kamasutra')
   const newState=profileReducer(state,action)

   expect(newState.posts[2].message).toBe('it-kamasutra')
})
it('after deleting length of message should be ',()=>{
   const action = profileActions.deletePost(1)
   const newState=profileReducer(state,action)

   expect(newState.posts.length).toBe(1)
   expect(newState.posts[0].id).toBe(2)

})