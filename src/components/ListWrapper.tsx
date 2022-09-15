import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import ReviewCardList from "../components/ReviewCardList"


const ListInWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  margin: auto;
  width: 90%;
  justify-content: center;
`;

export const ListWrapper: React.FC = () => {


    return (
        <ListInWrapper>
            <text>新着順</text>
            <text>人気順</text>
            <ReviewCardList />
        </ListInWrapper>
    );
};

export default ListWrapper;