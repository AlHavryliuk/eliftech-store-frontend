import { CustomNavLink } from "components/Custom/Global/GlobalStyle"
import { useSelector } from "react-redux"
import { reselect } from "store/selectors/selector"
import { CustomNavigation } from "./Navigation.styles"

const Navigation = () => {
    const authCompleted = useSelector(reselect.authCompleted)


    return (
        <CustomNavigation>
            <CustomNavLink to="/stores">Store</CustomNavLink>
            <CustomNavLink to="/basket">Store Cart</CustomNavLink>
            {authCompleted && <CustomNavLink to="/history">History</CustomNavLink>}
        </CustomNavigation>
    )
}

export default Navigation