import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style";
import Top from "./pages/top"

function App() {
  return (
    <div>
      <GlobalStyle />
      <WaitInitialize>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Top />} />
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
