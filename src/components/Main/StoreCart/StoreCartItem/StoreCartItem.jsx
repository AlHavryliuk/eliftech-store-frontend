import { useDispatch } from "react-redux"
import { changeCount, removeItem } from "store/basketReducer/basketSlice"
import { CustomStoreCartItem } from "../StoreCart.styles"
import { CustomStoreBtn, CustomStoreCartButton, CustomStoreCartCountItem } from "./StoreCartItem.styles"

const StoreCartItem = ({ basket = '', index = "-" }) => {

    const dispatch = useDispatch()
    const { name = '-', price = '-', count = '-', totalPrice = '-' } = basket

    const handleRemoveItem = () => dispatch(removeItem(name))

    const handleIncrementCount = () => {
        if (count >= 99) return
        dispatch(changeCount({ name, count: count + 1 }))
    }

    const handleDecrementCount = () => {
        if (count === 1) return
        dispatch(changeCount({ name, count: count - 1 }))
    }

    return (
        <>
            <CustomStoreCartItem>{index}</CustomStoreCartItem>
            <CustomStoreCartItem>{name}</CustomStoreCartItem>
            <CustomStoreCartItem>{price}</CustomStoreCartItem>
            {name !== '-' ? <CustomStoreCartCountItem>
                <CustomStoreCartButton onClick={handleDecrementCount}>-</CustomStoreCartButton>
                {count}
                <CustomStoreCartButton onClick={handleIncrementCount}>+</CustomStoreCartButton>
            </CustomStoreCartCountItem> : <CustomStoreCartItem>-</CustomStoreCartItem>}

            <CustomStoreCartItem>{totalPrice}</CustomStoreCartItem>
            {name !== '-' ? <CustomStoreBtn onClick={(() => handleRemoveItem(name))}>Remove</CustomStoreBtn> : <CustomStoreCartItem>{index}</CustomStoreCartItem>}

        </>
    )
}

export default StoreCartItem