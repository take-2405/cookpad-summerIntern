import React, { ReactNode, useState } from "react";
import {
    Toolbar,
    Typography,
} from "@mui/material";
import styled from "@emotion/styled";
type HeaderProps = {
    button?: ReactNode;
};

const HeaderWrapper = styled.header`
  position: fixed;
  background: #ffffff;
  width: 100vw;
  height: 100px;
  box-shadow: 0px 2px 4px darkgray;
`;

export default function Header({ button }: HeaderProps) {
    return (
        <HeaderWrapper>
            <Toolbar color="default">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    sample
                </Typography>
            </Toolbar>
        </HeaderWrapper >
    );
}