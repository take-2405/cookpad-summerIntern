import React, { ReactNode, useState } from "react";
import {
    IconButton,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    Button,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
type HeaderProps = {
    button?: ReactNode;
};

const HeaderWrapper = styled.header`
  position: fixed;
  background: #f6f6f6;
  width: 100vw;
  height: 64px;
  box-shadow: 0px 2px 4px darkgray;
`;

export default function Header({ button }: HeaderProps) {
    const [openAccountMenu, setOpenAccountMenu] = useState<HTMLElement>();
    const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
        console.log("target");
        setOpenAccountMenu(e.currentTarget);
    };
    return (
        <HeaderWrapper>
            <Toolbar color="default">
                {/* メニューのハンバーガーボタン 内部は未実装 */}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    activ
                </Typography>
                {/* {authContext.token !== null && button} */}
                {/* {authContext.token !== null ? (
                    <div>
                        <IconButton size="large" onClick={handleMenu}>
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            anchorEl={openAccountMenu}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(openAccountMenu)}
                            onClose={() => {
                                setOpenAccountMenu(undefined);
                            }}
                        >
                            <MenuItem onClick={() => AuthService.logout()}>
                                サインアウト
                            </MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <Button onClick={() => AuthService.login()}>サインイン</Button>
                )} */}
            </Toolbar>
        </HeaderWrapper>
    );
}