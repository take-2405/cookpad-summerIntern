import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import styledComponent from "@emotion/styled";

export type SearchProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    handlePressEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
    marginLeft: 0,
    height: "50px",
    width: "400px",
    [theme.breakpoints.up("sm")]: {},
}));

const SearchIconWrapper = styled("div")(() => ({
    color: "#FFFFFF",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const SearchWrapperInner = styledComponent.section`
    display: flex;
    alignItems: 'center';
    height: 50px;
    width: 400px;
    background: #C4C4C4;
`;

const SearchWrapper = styledComponent.section`
    height: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: "380px",
    height: "50px",
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        innerWidth: "100%",
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "100%",
        },
    },
}));

export const SearchAppBar: React.FC<SearchProps> = (props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(event.target.value);
    };

    return (
        <SearchWrapper>
            <SearchWrapperInner>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <Search>
                    <StyledInputBase
                        type="search"
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        value={props.value}
                        onChange={handleChange}
                        onKeyDown={props.handlePressEnter}
                    />
                </Search>
            </SearchWrapperInner>
        </SearchWrapper>
    );
};