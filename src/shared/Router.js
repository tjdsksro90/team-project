import Main from "pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "shared/Layout";
import GlobalStyle from "assets/GlobalStyle";
import Login from "pages/Login";
import RegisterPage from "pages/RegisterPage";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
