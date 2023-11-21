import Main from "pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "shared/Layout";
import GlobalStyle from "assets/GlobalStyle";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
