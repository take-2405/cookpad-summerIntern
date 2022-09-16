import React, { ReactNode, useState } from "react";
import {
    Toolbar,
    Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { SearchAppBar } from "./SearchBar"
import { useNavigate } from "react-router-dom";

type HeaderProps = {
    button?: ReactNode;
};

const HeaderWrapper = styled.header`
  background: #ffffff;
  position:fixed;
  width: 100vw;
  height: 100px;
  box-shadow: 0px 2px 4px darkgray;
  z-index:10000;
`;

export default function Header({ button }: HeaderProps) {
    const [value, setValue] = React.useState<string>("");
    const navigate = useNavigate();

    const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (value === "") {
                navigate(`/`)
            } else {
                navigate(`/search/${value}`)
            }
        }
    };

    return (
        <HeaderWrapper>
            <Toolbar color="default">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Vegetability
                </Typography>
                <SearchAppBar
                    value={value}
                    setValue={setValue}
                    handlePressEnter={handlePressEnter} />
            </Toolbar>
        </HeaderWrapper >
    );
}