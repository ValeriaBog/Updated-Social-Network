import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";
import {profileThunks} from "../../../../redux/reducers/profileReducer";

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'it-com'} updateStatus={profileThunks.updateStatus}/>)
        const instance = component.getInstance()
        expect(instance?.instance.status).toBe('it-com')

    })
    test('after creation spam should be displayed', () => {
        const component = create(<ProfileStatus status={'it-com'} updateStatus={profileThunks.updateStatus}/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span).toBe(1)

    })
});