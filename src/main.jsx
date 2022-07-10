import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalCSS from "./global/global";
import * as S from "./global/global";
import Logo from "./assets/logo.png";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalCSS />
    <S.NavBar>
      <S.Logo src={Logo} />
    </S.NavBar>
    <App />
  </React.StrictMode>
);
