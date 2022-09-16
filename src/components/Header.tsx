import React, { ReactNode, useState } from "react";
import {
    Toolbar,
    Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { SearchAppBar } from "./SearchBar"

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
    const [value, setValue] = React.useState<string>("");

    const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
        }
    };

    return (
        <HeaderWrapper>
            <Toolbar color="default">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    sample
                </Typography>
                <SearchAppBar
                    value={value}
                    setValue={setValue}
                    handlePressEnter={handlePressEnter} />
            </Toolbar>
        </HeaderWrapper >
    );
}