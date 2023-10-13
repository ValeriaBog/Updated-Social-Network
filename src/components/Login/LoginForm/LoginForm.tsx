import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import { LoginParamsType } from 'api/authAPI'
import { Input } from 'components/common/Input/Input'
import { isValidEmail, minLength, requiredField } from 'utils/validators'
import cls from 'components/Login/LoginForm/LoginForm.module.css'

const minPasswordLength = minLength(4)

type LoginFormProps = {
    onSubmit: (formData: LoginParamsType)=> void
    // error: string | null; // Пропс error
    captchaUrl: string | null; // Дополнительный пропс
};


const LoginForm: React.FC<InjectedFormProps<LoginParamsType, LoginFormProps> & LoginFormProps> = ({
                                                                                                      handleSubmit,
                                                                                                      captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit} className={cls.form}>
            <label htmlFor="email">
                <Field component={Input}
                       validate={[requiredField, isValidEmail]}
                       type="text"
                       id="email"
                       name="email"
                       placeholder="Email"
                />
            </label>
            <label htmlFor="password">
                <Field component={Input}
                       validate={[requiredField, minPasswordLength]}
                       type="password"
                       id="password"
                       name="password"
                       placeholder="Password"
                />
            </label>
            <label htmlFor="rememberMe" style={{ display: 'flex', alignContent: 'center' }}>
                <Field component={Input}
                       type="checkbox"
                       id="rememberMe"
                       name="rememberMe"
                />
                <span>Remember Me</span>
            </label>
            {/*{error && <div className={cls.summaryError}>*/}
            {/*    <span>{error}</span>*/}
            {/*</div>}*/}
            {captchaUrl&& <img src={captchaUrl} alt={'captcha'}/>}
            {captchaUrl&& <Field component={Input}
                                 type="text"
                                 id="captcha"
                                 name="captcha"
            /> }
            <button>Log In</button>
        </form>
    );
};

export default reduxForm<LoginParamsType, LoginFormProps>({
    form: 'login',
})(LoginForm);
// export const LoginForm = reduxForm<LoginParamsType>({
//     form: 'login',
// })(({ handleSubmit, error}) => {
//
//     return (
//         <form onSubmit={handleSubmit} className={cls.form}>
//             <label htmlFor="email">
//                 <Field component={Input}
//                        validate={[requiredField, isValidEmail]}
//                        type="text"
//                        id="email"
//                        name="email"
//                        placeholder="Email"
//                 />
//             </label>
//             <label htmlFor="password">
//                 <Field component={Input}
//                        validate={[requiredField, minPasswordLength]}
//                        type="password"
//                        id="password"
//                        name="password"
//                        placeholder="Password"
//                 />
//             </label>
//             <label htmlFor="rememberMe" style={{ display: 'flex', alignContent: 'center' }}>
//                 <Field component={Input}
//                        type="checkbox"
//                        id="rememberMe"
//                        name="rememberMe"
//                 />
//                 <span>Remember Me</span>
//             </label>
//             {error && <div className={cls.summaryError}>
//                 <span>{error}</span>
//             </div>}
//             <button>Log In</button>
//         </form>
//     )
// })