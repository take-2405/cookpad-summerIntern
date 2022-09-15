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
margin-top: 50px;
width: 100%
`

const ReviewCardListInner = styled.header`
display: flex;
align-items: center;
justify-content: center;
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
                        <ReviewCardListInner>
                            <Detail />
                        </ReviewCardListInner>
                    </ReviewCardListWrapper>
                </Wrapper>
            </BodyWrapper>
        </div >
    )
};

export default ReviewDetail