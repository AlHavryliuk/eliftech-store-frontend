import { useDispatch, useSelector } from "react-redux"
import { logoutUserThunk } from "store/authReducer/authOperations"
import { select } from "store/selectors/selector"
import svg from '../../../images/symbol-defs.svg'
import { HeaderLogout, HeaderSuccessName, HeaderSuccessWrapper } from "./AuthHeaderSuccess.styles"

const AuthHeaderSuccess = () => {
    const { name } = useSelector(select.user)
    const dispatch = useDispatch()

    const handleLogout = () => { dispatch(logoutUserThunk()) }

    return (
        <HeaderSuccessWrapper>
            <HeaderSuccessName>{name}</HeaderSuccessName>
            <HeaderLogout onClick={handleLogout}>Exit
                <svg>
                    <use href={`${svg}#icon-exit`}></use>
                </svg>
            </HeaderLogout>
        </HeaderSuccessWrapper>
    )
}

export default AuthHeaderSuccess