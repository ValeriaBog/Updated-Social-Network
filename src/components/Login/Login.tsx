import {FC} from 'react'
import {LoginParamsType} from 'api/authAPI'
import {LoginPropsType} from 'components/Login/LoginContainer'
import {Redirect} from 'react-router-dom'
import LoginForm from "./LoginForm/LoginForm";


export const Login: FC<LoginPropsType> = ({isAuth, logIn, captchaUrl}) => {
    const onSubmit = (formData: LoginParamsType) => {
        debugger
        logIn(formData)
    }

    return isAuth ?
        (<Redirect to="/profile"/>) :
        (<div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>)
}