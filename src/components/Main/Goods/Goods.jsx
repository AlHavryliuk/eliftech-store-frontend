import Loader from "components/Custom/Loader/Loader"
import { nanoid } from "nanoid"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { select } from "store/selectors/selector"
import { decodeURL } from "utils/formatter/formatterURL"
import { CustomGoodsList, CustomGoodsSection } from "./Goods.styles"
import GoodsCard from "./GoodsCard/GoodsCard"

const Goods = () => {
    const { storeName } = useParams()
    const stores = useSelector(select.stores)
    const storesIsLoading = useSelector(select.storesIsLoading)

    const getStore = (stores) => stores.find(({ name }) => name === decodeURL(storeName)).foodList

    return (
        <CustomGoodsSection>
            {storesIsLoading || !stores ? <Loader /> :
                <CustomGoodsList>
                    {getStore(stores).map(dish => <GoodsCard key={`${dish.name}${nanoid(4)}`} dish={dish} storeName={storeName}></GoodsCard>)}
                </CustomGoodsList>}
        </CustomGoodsSection>
    )
}

export default Goods