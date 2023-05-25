import OrderPopup from "components/OrderPopup/OrderPopup"
import { nanoid } from "nanoid"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { emptyTrash } from "store/basketReducer/basketSlice"
import { reselect, select } from "store/selectors/selector"
import { CustomStoreCart, CustomStoreCartItem, StoreCartList, StoreCartTitle, StoreClearButton, StoreNextButton, StoreResult } from "./StoreCart.styles"
import StoreCartItem from "./StoreCartItem/StoreCartItem"

const StoreCart = () => {

    const dispatch = useDispatch()
    const basket = useSelector(select.basket)
    const authCompleted = useSelector(reselect.authCompleted)
    const basketSize = useSelector(reselect.basketSize)
    const chosenStore = useSelector(reselect.chosenStore)
    const [orderPopupIsOpen, setOrderPopupIsOpen] = useState(false)

    const handleBasketClear = () => dispatch(emptyTrash())
    const handleTotalPrice = () => basket.length ? basket.reduce((acc, { totalPrice }) => acc + +totalPrice, 0).toFixed(2) : 0

    const handleOpenOrderPopup = () => setOrderPopupIsOpen(true)
    const handleCloseOrderPopup = () => setOrderPopupIsOpen(false)

    return (
        <>
            <CustomStoreCart>

                <StoreCartTitle>Basket</StoreCartTitle>

                <StoreCartList>
                    <CustomStoreCartItem>№: </CustomStoreCartItem>
                    <CustomStoreCartItem>Name: </CustomStoreCartItem>
                    <CustomStoreCartItem>Price: </CustomStoreCartItem>
                    <CustomStoreCartItem>Count: </CustomStoreCartItem>
                    <CustomStoreCartItem>TotalPrice: </CustomStoreCartItem>
                    <CustomStoreCartItem>Button</CustomStoreCartItem>
                    {basket.length ?
                        basket.map((basket, index) => <StoreCartItem key={nanoid(4)} basket={basket} index={++index} />) : <StoreCartItem />}
                </StoreCartList>

                {basketSize > 0 && <StoreClearButton onClick={handleBasketClear}>Clear</StoreClearButton>}
                <StoreResult>Provider name: {chosenStore ?? '-'}</StoreResult>
                <StoreResult>Total price: {handleTotalPrice()}</StoreResult>
                {basketSize > 0 && <StoreNextButton onClick={handleOpenOrderPopup} disabled={!authCompleted}>{authCompleted ? 'Next >>' : 'Please login to continue'}</StoreNextButton>}

            </CustomStoreCart>

            {orderPopupIsOpen && <OrderPopup close={handleCloseOrderPopup} />}
        </>
    )
}

export default StoreCart