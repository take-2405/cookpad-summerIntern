import { Button } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { BodyWrapper } from "../common/Body"
import styled from "@emotion/styled";
import ListWrapper from "../components/ListWrapper";

const SideBarWrapper = styled.header`
width : 190px;
height: 90%;
overflow: hidden;
background-color: #ffffff;
position: fixed;
`
const ReviewCardListWrapper = styled.header`
margin-top: 100px;
margin-left: 190px;
`

const Wrapper = styled.header`
display: flex;
height: 100%;
`


const Top: React.FC = () => {
    return (
        <div>
            <Header button={<Button variant="contained">hoge</Button>} />
            <BodyWrapper>
                <Wrapper>
                    <SideBarWrapper>
                        <SideBar />
                    </SideBarWrapper>
                    <ReviewCardListWrapper>
                        <ListWrapper />
                    </ReviewCardListWrapper>
                </Wrapper>
            </BodyWrapper>
        </div>
    );
};

export default Top;