import { Button } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { BodyWrapper } from "../common/Body"
import styled from "@emotion/styled";
import Detail from "../components/ReviewDetail";

const SideBarWrapper = styled.header`
height: 90vh;
width : 190px;
overflow: hidden;
background-color: #ffffff;
`
const ReviewCardListWrapper = styled.header`
display: flex;
align-items: center;
margin-top: 100px;
width: 70%
`

const Wrapper = styled.header`
display: flex;
height: 100%;
`

const ReviewDetail: React.FC = () => {
    return (
        <div>
            <Header button={<Button variant="contained">hoge</Button>} />
            <BodyWrapper>
                <Wrapper>
                    <SideBarWrapper>
                        <SideBar />
                    </SideBarWrapper>
                    <ReviewCardListWrapper>
                        <Detail />
                    </ReviewCardListWrapper>
                </Wrapper>
            </BodyWrapper>
        </div >
    )
};

export default ReviewDetail