import React from "react";
import styled from "@emotion/styled";
import tomato from "../resource/vegetable/tomato.jpg";

export type PeopleProps = {
    name: string;
    date?: string;
    profile?: string;
    img: string;
};

const OverviewImage = styled.div`
  max-width: 75%;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
`;

const WrapPeople = styled.div`
display: flex;
`;

const Flex = styled.div`
display: flex;
`;

export const People: React.FC<PeopleProps> = (props) => {
    const { name, date, profile, img } = props;

    const renderPeople = () => {
        if (profile === undefined) {
            return (
                <WrapPeople>
                    <p>投稿者</p>
                    <div style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <OverviewImage>
                            <img
                                style={{ objectFit: "cover" }}
                                src={img}
                                width={50}
                                height={50}
                            />
                        </OverviewImage>
                        <p>{name}</p>
                    </div>
                    <p>投稿日</p>
                    <div style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center"
                    }}>

                        <p>{date}</p>
                    </div>
                </WrapPeople>
            );
        } else {
            return (
                <div>
                    <WrapPeople>
                        <p>生産者</p>
                        <div style={{
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <OverviewImage>
                                <img
                                    style={{ objectFit: "cover" }}
                                    src={img}
                                    width={50}
                                    height={50}
                                />
                            </OverviewImage>
                            <p>{name}</p>
                        </div>
                    </WrapPeople>
                    <div style={{
                        width: "80%",
                        marginLeft: "40px"
                    }}>
                        <p>{profile}</p>
                    </div>
                </div>
            );
        }
    };

    return (
        <div>
            {renderPeople()}
        </div>
    );
}