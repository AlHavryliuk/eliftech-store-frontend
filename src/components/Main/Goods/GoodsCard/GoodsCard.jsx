import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "store/basketReducer/basketSlice";
import { select } from "store/selectors/selector";
import { defaultImage } from "utils/defaultImages/defaultImages";
import svg from '../../../../images/symbol-defs.svg';
import { CustomButtonWrapper, CustomCountButton, CustomCountValue, CustomCountWrapper, CustomGoodsCard, CustomImage, CustomInfo, CustomInfoWrapper, GoodsButton, GoodsName, GoodsPrice, GoodsRemoveBtn } from "./GoodsCard.styles";

const GoodsCard = ({ dish, storeName }) => {
    const [count, setCount] = useState(1)
    const { name, price, image } = dish;
    const basket = useSelector(select.basket)
    const dispatch = useDispatch()

    const correctImage = image ?? defaultImage

    const itemIsAlreadyAdded = (itemName) => basket.some(({ name }) => name === itemName)
    const checkCount = (itemName) => basket.find(({ name }) => name === itemName)?.count ?? count

    const handleAddItem = ({ name, price }) => {
        if (!name || !price) return
        const totalPrice = (count * price).toFixed(2)
        dispatch(addItem({ name, price, storeName, count, totalPrice }))
    }

    const handleRemoveItem = (name) => {
        dispatch(removeItem(name))
    }

    const handleIncrementCount = () => count < 99 ? setCount(count + 1) : count
    const handleDecrementCount = () => count > 1 ? setCount(count - 1) : count

    return (
        <CustomGoodsCard>
            <CustomImage src={correctImage}></CustomImage>
            <CustomInfo>
                <CustomInfoWrapper>
                    <GoodsName>{name}</GoodsName>
                    <GoodsPrice>{(price * count).toFixed(2)}$</GoodsPrice>
                </CustomInfoWrapper>

                <CustomCountWrapper>
                    <CustomCountButton disabled={itemIsAlreadyAdded(name)} onClick={handleDecrementCount}>-</CustomCountButton>
                    <CustomCountValue>{checkCount(name)}</CustomCountValue>
                    <CustomCountButton disabled={itemIsAlreadyAdded(name)} onClick={handleIncrementCount}>+</CustomCountButton>
                </CustomCountWrapper>

                <CustomButtonWrapper>
                    <GoodsButton disabled={itemIsAlreadyAdded(name)} onClick={(() => handleAddItem(dish))}>Add</GoodsButton>
                    {itemIsAlreadyAdded(name) &&
                        <GoodsRemoveBtn onClick={(() => handleRemoveItem(name))}>
                            <svg >
                                <use href={`${svg}#icon-cross`}></use>
                            </svg>
                        </GoodsRemoveBtn>}
                </CustomButtonWrapper >
            </CustomInfo>
        </CustomGoodsCard >
    )
}

export default GoodsCard