import { useState } from "react"
import { AuthWrapper, Login, SignIn } from "./Auth.styles"
import AuthPopup from "./AuthPopup/AuthPopup"

const Auth = () => {
    const [popup, setPopup] = useState({ isOpen: false, type: null })

    const handleIsOpenPopUp = (type) => setPopup({ isOpen: true, type })
    const handleClosePopUp = () => setPopup({ isOpen: false, type: null })

    return (
        <>
            <AuthWrapper>
                <Login onClick={(() => handleIsOpenPopUp('login'))}>Login</Login>
                <SignIn onClick={(() => handleIsOpenPopUp('register'))}>Sign In</SignIn>
            </AuthWrapper>

            {popup.isOpen && <AuthPopup type={popup.type} closePopup={handleClosePopUp} />}
        </>
    )
}

export default Auth