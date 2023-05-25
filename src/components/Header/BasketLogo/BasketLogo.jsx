import { useSelector } from "react-redux"
import { reselect } from "store/selectors/selector"
import svg from '../../../images/symbol-defs.svg'
import { CircleCounte, CustomBasketLogo } from "./BasketLogo.styles"


const BasketLogo = () => {

    const basketLength = useSelector(reselect.basketSize)

    return (
        <CustomBasketLogo>
            <svg>
                <use href={`${svg}#icon-basket`}></use>
            </svg>
            <CircleCounte>{basketLength}</CircleCounte>
        </CustomBasketLogo>
    )
}

export default BasketLogo