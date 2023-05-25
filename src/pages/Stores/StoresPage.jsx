import Goods from "components/Main/Goods/Goods"
import StoresList from "components/Main/StoresList/StoresList"
import { Route, Routes } from "react-router-dom"
import { MainStores, Stores } from "./StoresPage.styles"

const StoresPage = () => {
    return (
        <MainStores>
            <Stores>
                <StoresList />
            </Stores>
            <Routes>
                <Route path='/:storeName' element={<Goods />} ></Route >
            </Routes>

        </MainStores>
    )
}

export default StoresPage