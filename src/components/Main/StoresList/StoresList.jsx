import { CustomNavLink } from "components/Custom/Global/GlobalStyle"
import Loader from "components/Custom/Loader/Loader"
import { useSelector } from "react-redux"
import { reselect, select } from "store/selectors/selector"

import { encodeURL } from "utils/formatterURL/formatterURL"
import { CustomStoresList, StoreItem } from "./StoresList.styles"

const StoresList = () => {
    const stores = useSelector(select.stores)
    const storesIsLoading = useSelector(select.storesIsLoading)
    const chosenStore = useSelector(reselect.chosenStore)

    const storeIsAvailable = (storeName) => {
        if (!chosenStore) return false
        if (storeName === chosenStore) return false
        return true
    }

    const handleNavLinkClick = (event) => {
        if (storeIsAvailable(event.target.innerText)) {
            event.preventDefault();
        }
    };

    return (
        <CustomStoresList>
            {storesIsLoading || !stores ?
                <Loader />
                : <> {stores.map(({ name }) =>
                    <StoreItem key={name}>
                        <CustomNavLink className={storeIsAvailable(name) ? 'blocked' : ''} to={`${encodeURL(name)}`} onClick={handleNavLinkClick}>
                            {name}
                        </CustomNavLink>
                    </StoreItem>)}
                </>
            }

        </CustomStoresList>
    )
}

export default StoresList