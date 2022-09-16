import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style";
import Top from "./pages/top"
import Search from "./pages/search"
import ReviewDetail from "./pages/detail"
import Ninki from "./pages/ninki"

function App() {
  return (
    <div>
      <GlobalStyle />
      <WaitInitialize>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Top />} />
            <Route path={"/post/:Id"} element={<ReviewDetail />} />
            <Route path={"/search/:Word"} element={<Search />} />
            <Route path={"/favorite/:Favo"} element={<Ninki />} />
          </Routes>
        </BrowserRouter>
      </WaitInitialize>
    </div>
  );
};

const WaitInitialize: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

export default App;
