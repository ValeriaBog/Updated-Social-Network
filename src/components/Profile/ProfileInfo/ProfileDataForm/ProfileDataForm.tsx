import {ContactsType, ProfileType} from "../../../../redux/types";
import {ChangeEvent, FC, FormEvent, useState} from "react";
import s from "../ProfileInfo.module.css";

export type UserInfoType = Pick<ProfileType,
    'fullName'
    | 'aboutMe'
    | 'lookingForAJob'
    | 'lookingForAJobDescription'
    | 'contacts'>;

type PropsForm = {
    profile: ProfileType
    onSubmit: (data: UserInfoType) => void
}
export const ProfileDataForm: FC<PropsForm> = ({profile, onSubmit}) => {
    const [formData, setFormData] = useState({
        fullName: profile.fullName,
        aboutMe: profile.aboutMe,
        lookingForAJob: profile.lookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        contacts: {
            github: profile.contacts.github,
            vk: profile.contacts.vk,
            facebook: profile.contacts.facebook,
            instagram: profile.contacts.instagram,
            twitter: profile.contacts.twitter,
            website: profile.contacts.website,
            youtube: profile.contacts.youtube,
            mainLink: profile.contacts.mainLink
        }

    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const {name, value, type} = event.target;

        if (type === 'checkbox') {
            const isChecked = (event.target as HTMLInputElement).checked;
            setFormData({...formData, [name]: isChecked});
        }
        if (formData.contacts.hasOwnProperty(name)) {

            return setFormData({...formData, contacts: {...formData.contacts, [name]: value}});

        }
        setFormData({...formData, [name]: value});

    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit(formData)
    }





    return <form onSubmit={handleSubmit}>
        <div>
            <button >save</button>
        </div>
        <div className={s.nameUser}>Full name: <input value={formData.fullName}
                                                      name="fullName"
                                                      onChange={handleInputChange}/>
        </div>
        <div className={s.infoUser}>
            <div className={s.textInfo}>About me: <input
                name="aboutMe"
                value={formData.aboutMe}
                onChange={handleInputChange}/>
            </div>
            <div className={s.textInfo}>Looking for a job: <input type={'checkbox'}
                                                                  name="lookingForAJob"
                                                                  checked={formData.lookingForAJob}
                                                                  onChange={handleInputChange}/>
            </div>
            <div className={s.textInfo}>My professional skills: <input
                name="lookingForAJobDescription"
                value={formData.lookingForAJobDescription}
                onChange={handleInputChange}/>
            </div>
            <div className={s.textInfo}>Contacts: {Object.keys(profile.contacts).map((key) => {
                const contactKey = key as keyof ContactsType;
                const contactValue = formData.contacts[contactKey];

                let error = '';


                    const urlPattern = /^(http|https):\/\/[^ "]+$/;
                    if (contactValue && !urlPattern.test(contactValue)) {
                        error = 'Uncorrected URL';
                    }

                const validation = (value: string, contactKey: string) => {
                    if (contactKey === 'website') {
                        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
                        if (!urlPattern.test(value)) {
                            setFormData({
                                ...formData,
                                contacts: {
                                    ...formData.contacts,
                                    [contactKey]: value
                                }
                            });
                        }
                    }
                }

                return <div  key={contactKey}>
                    {contactKey}: <input
                    name={contactKey}
                    value={formData.contacts[contactKey]}
                    onChange={handleInputChange}
                    onBlur={(e)=>{validation(e.target.value, contactKey)}}/>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                </div>
            })}
            </div>
        </div>
    </form>
}