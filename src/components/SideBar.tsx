import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styled from "@emotion/styled";


const ListWrapper = styled.section`
height: 50px
`;

export default function SideBar() {
    return (
        <div>
            <Box sx={{ width: "190px", maxWidth: 190, bgcolor: 'background.paper' }}>
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding style={{ pointerEvents: 'none' }}>
                            <ListItemButton>
                                <ListItemText primary="根菜類" style={{ color: '#FF9D00' }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding style={{ lineHeight: 100 }}>
                            <ListItemButton>
                                <ListItemText primary="だいこん" style={{ marginLeft: '30px' }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="にんじん" style={{ marginLeft: '30px' }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="ごぼう" style={{ marginLeft: '30px' }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding style={{ pointerEvents: 'none' }}>
                            <ListItemButton>
                                <ListItemText primary="根菜類" style={{ color: '#FF9D00' }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding style={{ lineHeight: 100 }}>
                            <ListItemButton>
                                <ListItemText primary="だいこん" style={{ marginLeft: '30px' }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="にんじん" style={{ marginLeft: '30px' }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="ごぼう" style={{ marginLeft: '30px' }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding style={{ pointerEvents: 'none' }}>
                            <ListItemButton>
                                <ListItemText primary="根菜類" style={{ color: '#FF9D00' }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding style={{ lineHeight: 100 }}>
                            <ListItemButton>
                                <ListItemText primary="だいこん" style={{ marginLeft: '30px' }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="にんじん" style={{ marginLeft: '30px' }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="ごぼう" style={{ marginLeft: '30px' }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </div >
    );
}
