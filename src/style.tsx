import React from "react";
import { Global, css } from "@emotion/react";

export const GlobalStyle: React.FC = () => (
    <Global
        styles={css`
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 0;
      }
    `}
    />
);
