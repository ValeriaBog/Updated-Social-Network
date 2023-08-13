import { ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from 'redux/store'
import { actions } from 'redux/reducers/messagesReducer'

import { Messages } from './Messages'
import { withAuthRedirect } from 'hoc/withAuthRedirect'

const mapStateToProps = (state: AppStateType) => ({
   messagesPage: state.messagesPage,
})

 const MessagesContainer = compose<ComponentType>(
   connect(mapStateToProps, { ...actions }),
   withAuthRedirect,
)(Messages)

export default MessagesContainer

// TYPES
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions

export type MessagesPropsType = MapDispatchPropsType & MapStatePropsType