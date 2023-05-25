import AuthHeaderSuccess from "components/Auth/AuthHeaderSuccess/AuthHeaderSuccess"
import Container from "components/Custom/Container/Container"
import LightMode from "components/Custom/LightMode/LightMode"
import { useSelector } from "react-redux"
import { reselect } from "store/selectors/selector"
import Auth from "../Auth/Auth"
import BasketLogo from "./BasketLogo/BasketLogo"
import { CustomHeader, HeaderWrapper, LeftHeaderWrapper, RightHeaderWrapper } from "./Header.styles"
import MobNavigation from "./MobNavigation/MobNavigation"
import Navigation from "./Navigation/Navigation"

const Header = () => {

    const authCompleted = useSelector(reselect.authCompleted)

    return (
        <CustomHeader>
            <Container>
                <HeaderWrapper>
                    <LeftHeaderWrapper>
                        <Navigation />
                        <MobNavigation />
                        <LightMode />
                    </LeftHeaderWrapper>
                    <RightHeaderWrapper>
                        {authCompleted ? <AuthHeaderSuccess /> : <Auth />}

                        <BasketLogo />
                    </RightHeaderWrapper>
                </HeaderWrapper>
            </Container>
        </CustomHeader>
    )
}

export default Header