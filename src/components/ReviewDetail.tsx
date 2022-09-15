import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import tomato from "../resource/tomato.jpg";

const DetailInWrapper = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #ffffff;
`;

const OverviewImage = styled.div`
  max-width: 75%;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Detail: React.FC = () => {

    return (
        <DetailInWrapper>
            <text>新着順</text>
            <text>人気順</text>
            <OverviewImage>
                <img
                    style={{ objectFit: "cover" }}
                    src={tomato}
                    width={480}
                    height={320}
                />
            </OverviewImage>

        </DetailInWrapper>
    );
};

export default Detail;