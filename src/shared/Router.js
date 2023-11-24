import Main from "pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "shared/Layout";
import GlobalStyle from "assets/GlobalStyle";
import Mypage from "../pages/Mypage";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
