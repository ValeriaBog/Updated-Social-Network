import {FC} from "react";

type Props = {
    contactTitle: string,
    contactValue: string
}
export const Contact: FC<Props> = ({contactTitle, contactValue}) => {
    return <div>{contactTitle}: {contactValue}</div>
}