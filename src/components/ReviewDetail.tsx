import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import tomato from "../resource/tomato.jpg";
import { People } from "./People"

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

    return (
        <DetailInWrapper>
            <DurableWrapper>
                <OverviewImage>
                    <img
                        style={{ objectFit: "cover" }}
                        src={tomato}
                        width={540}
                        height={400}
                    />
                </OverviewImage>
                <PoepleWrapper>
                    <PoepleInner>
                        <People name="わかまつたけと" date="2022.09.10" img="" />
                        <People name="おじさん" profile="〇〇県〇〇市で農家を営んでいます。\n
私の作る作物は全て無農薬で栽培しているところがポイントです。
これによって、野菜本来の味を楽しむことができると思っています。
また、徹底した温度、水やり量を管理しており、一般的なトマトよりも
糖度がxx高いです。" img="" />
                    </PoepleInner>
                </PoepleWrapper>
            </DurableWrapper>
            <BeneathWrapper>
                <TextWrapper>
                    <text >
                        〇〇県〇〇さんが作られたトマトです。<br />トマトが嫌いな友人に<br /><br />「これを食べてみてくれ！このトマトでも無理ならもう一生トマトは諦めてもいい！」<br />
                        と言って、誕生日プレゼントとして贈られていただきました。<br /><br />
                        そしたらなんと美味しかったそうです！<br /><br />
                        本人に今までのトマトと何が違ったのか効いてみたところ「甘い！今までトマトの苦味が苦手だったが、このトマトなら平気だった」
                        と話していました。<br />
                        ぜひ身近にトマト嫌いの人がいる方にはおすすめです。<br />
                    </text>
                </TextWrapper>
            </BeneathWrapper>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "50px"
            }}>
                <div style={{
                    width: "80%",
                }}>
                    <div style={{
                        width: "100%",
                    }}>
                        <text>購入方法</text>
                    </div>
                    <text>xxxxxのxxxxで購入できました</text>
                </div>
            </div>
        </DetailInWrapper >
    );
};

export default Detail;