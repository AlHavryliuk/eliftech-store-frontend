import HistoryPage from "pages/History/HistoryPage";
import StoresPage from "pages/Stores/StoresPage";
import StoresCartPage from "pages/StoresCart/StoresCartPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentUserThunk } from "store/authReducer/authOperations";
import { reselect, select } from "store/selectors/selector";
import { getStoresThunk } from "store/storesReducer/storesOperations";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "utils/variables/themeVariables";
import Container from "./Custom/Container/Container";
import { GlobalStyle } from "./Custom/Global/GlobalStyle";
import FullScreenLoader from "./Custom/Loader/FullScreenLoader";
import Header from "./Header/Header";


export const App = () => {
  const darkmode = useSelector(select.darkMode)
  const authCompleted = useSelector(reselect.authCompleted)
  const user = useSelector(select.user)
  const authIsLoading = useSelector(select.authIsLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStoresThunk())
  }, [dispatch])

  useEffect(() => {
    if (!authCompleted) return;
    else {
      dispatch(getCurrentUserThunk())
    }
  }, [authCompleted, user?.token, dispatch])


  return (

    <ThemeProvider theme={darkmode ? darkTheme : lightTheme} >
      <>
        <GlobalStyle />
        <ToastContainer />
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/stores/*" element={<StoresPage></StoresPage>} />
            <Route path="/basket" element={<StoresCartPage></StoresCartPage>} />
            <Route path="/history" element={<HistoryPage></HistoryPage>} />
          </Routes>
        </Container>
        {authIsLoading && <FullScreenLoader />}
      </>

    </ThemeProvider>

  );
};
