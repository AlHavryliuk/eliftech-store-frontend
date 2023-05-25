import { CustomNavLink } from "components/Custom/Global/GlobalStyle"
import { useState } from "react"
import { useSelector } from "react-redux"
import { reselect } from "store/selectors/selector"
import svg from '../../../images/symbol-defs.svg'
import { CloseBtnWrapper, CloseButton, MobNavWrapper, MobileNavBtn, MobileNavMenu } from "./MobNavigation.styles"

const MobNavigation = () => {
    const [mobNavIsOpen, setMobNavIsOpen] = useState(false)
    const authCompleted = useSelector(reselect.authCompleted)

    return (<>
        <MobileNavBtn onClick={(() => setMobNavIsOpen(true))}>
            <svg>
                <use href={`${svg}#icon-paragraph-left`}></use>
            </svg>
        </MobileNavBtn>

        {mobNavIsOpen &&
            <MobileNavMenu>
                <MobNavWrapper>
                    <CloseBtnWrapper>
                        <CloseButton onClick={(() => setMobNavIsOpen(false))}>
                            <svg>
                                <use href={`${svg}#icon-cross`}></use>
                            </svg>
                        </CloseButton>
                    </CloseBtnWrapper>
                    <CustomNavLink onClick={(() => setMobNavIsOpen(false))} to="/stores">Store</CustomNavLink>
                    <CustomNavLink onClick={(() => setMobNavIsOpen(false))} to="/basket">Store Cart</CustomNavLink>
                    {authCompleted && <CustomNavLink to="/history">History</CustomNavLink>}
                </MobNavWrapper>
            </MobileNavMenu>}

    </>
    )
}

export default MobNavigation