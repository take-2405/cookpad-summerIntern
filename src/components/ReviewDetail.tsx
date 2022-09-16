import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import heart from "../resource/heart.jpg";
import { People } from "./People"
import { useParams } from "react-router-dom";
import { Data, DateSet } from "../resource/data"



const DetailInWrapper = styled.section`
  width: 80%;
  background-color: #ffffff;
  margin-bottom:50px;
`;

const OverviewImage = styled.div`
  max-width: 75%;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
`;

const PoepleInner = styled.div`
`;
const PoepleWrapper = styled.div`
margin-top: 50px;
width: 100wh;
`;

const DurableWrapper = styled.div`
display: flex;
width: 100%;
border-bottom: 2px solid #707070;
margin-bottom: 50px;
`;

const BeneathWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 50px;
`


const TextWrapper = styled.div`
font-size:20px;
width: 80%;
`;


export const Detail: React.FC = () => {
    const { Id } = useParams();

    return (
        <DetailInWrapper>
            <DurableWrapper>
                <OverviewImage>
                    <img
                        style={{ objectFit: "cover" }}
                        src={Data[Number(Id) - 1].image}
                        width={540}
                        height={400}
                    />
                </OverviewImage>
                <PoepleWrapper>
                    <PoepleInner>
                        <People name={Data[Number(Id) - 1].userName} date={Data[Number(Id) - 1].date} img={Data[Number(Id) - 1].userImage} />
                        <People name={Data[Number(Id) - 1].createrName} profile={Data[Number(Id) - 1].createrProfile} img={Data[Number(Id) - 1].createrImage} />
                    </PoepleInner>
                </PoepleWrapper>
            </DurableWrapper>
            <BeneathWrapper>
                <TextWrapper>
                    <text >
                        {Data[Number(Id) - 1].contexts}
                    </text>
                </TextWrapper>
            </BeneathWrapper>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <div style={{
                    width: "80%",
                }}>
                    <div style={{
                        width: "100%",
                    }}>
                        <text>購入方法</text>
                    </div>
                    <text>{Data[Number(Id) - 1].Buy}</text>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    marginLeft: "50px",
                    marginBottom: "50px"
                }}>
                <OverviewImage>
                    <img
                        style={{ objectFit: "cover" }}
                        src={heart}
                        width={70}
                        height={70}
                    />
                </OverviewImage>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "50px"
                    }}
                >
                    <TextWrapper>
                        <text fontWeight={"bold"} fontSize={100}>{Data[Number(Id) - 1].Nice}</text>
                    </TextWrapper>
                </div>
            </div>
        </DetailInWrapper >
    );
};

export default Detail;