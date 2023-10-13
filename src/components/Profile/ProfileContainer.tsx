import { Component, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { AppStateType } from 'redux/store'
import { profileActions, profileThunks } from 'redux/reducers/profileReducer'
import { Profile } from './Profile'
import {appActions} from "../../redux/reducers/appReducer";

const mapStateToProps = (state: AppStateType) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserId: state.auth.id,
   isAuth: state.auth.isAuth,
   error: state.app.error
})

const mapDispatchToProps = {
   ...profileActions,
   ...profileThunks,
   ...appActions
}

const ProfileContainer = compose<ComponentType>(
   connect(mapStateToProps, mapDispatchToProps),
   withRouter,
)(class extends Component<PropsType> {

   refleshProfile(){
      const { getUserProfile, match, getStatus, authorizedUserId, history } = this.props
      let userId = Number(match.params.userId)

      if (!userId && authorizedUserId) {
         userId = authorizedUserId
      } else if (!userId && !authorizedUserId) {
         history.push('/login')
      }

      getUserProfile(userId)
      getStatus(userId)
   }
   componentDidMount() {
      this.refleshProfile()
   }

   componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
      if(this.props.match.params.userId!== prevProps.match.params.userId){
         this.refleshProfile()
      }
   }

   render() {
      return <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
   }
})

export default ProfileContainer

// TYPES
type PathParamsType = {
   userId: string
}

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof mapDispatchToProps

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType