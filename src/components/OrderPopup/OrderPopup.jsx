import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { patchUserDataThunk } from "store/authReducer/authOperations";
import { emptyTrash } from "store/basketReducer/basketSlice";
import { postOrdersThunk } from "store/ordersReducer/orderOperations";
import { select } from "store/selectors/selector";
import { credentialEqual } from "utils/validate/credentialEqual";
import { getDifference } from "utils/validate/getDifferece";
import { orderCredentialIsValid } from "utils/validate/orderCredentialValidate";
import svg from '../../images/symbol-defs.svg';
import { FormWrapper, OrderBody, OrderCloseButton, OrderCloseWrapper, OrderForm, OrderPopupBackground, OrderTitle } from "./OrderPopup.styles";


const OrderPopup = ({ close }) => {

    const user = useSelector(select.user);
    const dispatch = useDispatch()
    const basket = useSelector(select.basket)
    const { register, handleSubmit } = useForm();

    const onSubmit = (credential) => {

        if (!orderCredentialIsValid(credential)) return false

        if (!credentialEqual(credential, user)) {
            const diffField = getDifference(credential, user)
            dispatch(patchUserDataThunk(diffField)).unwrap().then(() => dispatch(postOrdersThunk({ items: basket })))
            dispatch(emptyTrash())
            close()
            return
        }
        dispatch(postOrdersThunk({ items: basket }))
        dispatch(emptyTrash())
        close()
    }

    return (
        <OrderPopupBackground>
            <OrderBody>

                <OrderCloseWrapper>
                    <OrderCloseButton onClick={close}>
                        <svg>
                            <use href={`${svg}#icon-cross`}></use>
                        </svg>
                    </OrderCloseButton>
                </OrderCloseWrapper>

                <OrderTitle>Check your data</OrderTitle>

                <OrderForm>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormWrapper><label htmlFor="name">Name:</label>
                            <input value={user?.name} readOnly {...register("name")} /></FormWrapper>
                        <FormWrapper>
                            <label htmlFor="email">Email:</label>
                            <input value={user?.email ?? 'tete'} readOnly {...register("email")} /></FormWrapper>
                        <FormWrapper>  <label htmlFor="address">Address:</label>
                            <input placeholder="Address..." minLength={4} defaultValue={user?.address ?? ''}  {...register("address")} /></FormWrapper>
                        <FormWrapper>
                            <label htmlFor="phone">Phone:</label>
                            <input placeholder="Phone..." maxLength={13} minLength={13} defaultValue={user?.phone ?? ''}  {...register("phone")} /></FormWrapper>
                        <input className="submit-button" type="submit" value={'Send'} />
                    </form>
                </OrderForm>

            </OrderBody>
        </OrderPopupBackground>
    )
}

export default OrderPopup