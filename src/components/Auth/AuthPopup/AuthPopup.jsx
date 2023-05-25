import { useRef } from "react";
import { useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { useDispatch } from "react-redux";
import { loginUserThunk, registerUserThunk } from "store/authReducer/authOperations";
import { regiserCredentialIsValid } from "utils/validate/regiserCredentialIsValid";
import svg from '../../../images/symbol-defs.svg';
import { AuthTitle, CloseButton, CustomAuthPopup, CustomUseForm, PopupBody, PopupHeader } from "./AuthPopup.styles";


const AuthPopup = ({ type, closePopup }) => {
    const dispatch = useDispatch()
    const inputTelRef = useRef(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (credential) => {

        const { email } = credential;

        switch (type) {
            case "login":

                const loginCredential = { ...credential, email: email.toLowerCase() };
                handleAuthController(loginUserThunk, loginCredential)
                break

            case 'register':

                const { value } = inputTelRef.current
                const phone = `+${value.replace(/\D/g, "")}`
                const registerCredential = { ...credential, email: email.toLowerCase(), phone };

                if (!regiserCredentialIsValid(registerCredential)) return
                handleAuthController(registerUserThunk, registerCredential)
                break

            default: return false
        }
        reset();
    };

    const handleAuthController = (thunk, credential) => {
        dispatch(thunk(credential))
    }

    return (
        <CustomAuthPopup>
            <PopupBody>
                <PopupHeader>
                    <CloseButton onClick={closePopup}>
                        <svg>
                            <use href={`${svg}#icon-cross`}></use>
                        </svg>
                    </CloseButton>
                </PopupHeader>
                <AuthTitle>{type}</AuthTitle>
                <CustomUseForm>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {
                            type !== 'login' &&
                            <>
                                <input placeholder="Your Name..." {...register("name", { required: true })} />
                                {errors.password && <span>This field is required</span>}
                                <input placeholder="Your Address..." {...register("address", { required: true })} />
                                {errors.password && <span>This field is required</span>}
                                <IMaskInput
                                    name="number"
                                    mask={`+38 (000) 00-000-00`}
                                    radix="."
                                    unmask={true}
                                    inputRef={inputTelRef}
                                    placeholder="Enter number..."
                                />
                            </>
                        }
                        <input placeholder="Email..." {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <input type="password" minLength={6} placeholder="Password..." {...register("password", { required: true })} />
                        {errors.password && <span>This field is required</span>}

                        <input className="submit-button" type="submit" value={type} />

                    </form>
                </CustomUseForm>
            </PopupBody>
        </CustomAuthPopup>
    )
}

export default AuthPopup