import { useDispatch, useSelector } from 'react-redux';
import { select } from 'store/selectors/selector';
import { toggleDarkMode } from 'store/themeReducer/themeSlice';
import icon from '../../../images/symbol-defs.svg';
import { LightButton } from './LightMode.styled';




const sunIcon = `${icon}#icon-sun`;
const moonIcon = `${icon}#icon-moon`;

const LightMode = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(select.darkMode);

    const handleToggleLightMode = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <LightButton onClick={handleToggleLightMode}>
            <svg width="100%" height="100%">
                <use href={darkMode ? moonIcon : sunIcon}></use>
            </svg>
        </LightButton>
    );
};

export default LightMode;