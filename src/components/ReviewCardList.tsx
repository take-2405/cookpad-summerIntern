import React from "react";
import styled from "@emotion/styled";
import ReviewCard from "./ReviewCard"
import { Data, DateSet } from "../resource/data"

type Material = {
    id: number;
    title: string;
    thumbnailId: string;
    contents: string;
    date: string;
}

export type MaterialListProps = {
    children?: React.ReactNode;
    materialList?: Array<Material>;
};

const ListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  margin: auto;
  justify-content: center;
`;



export const MaterialCardList: React.FC = () => {

    const renderMaterial = (Data: Array<DateSet>) => {
        if (Data !== undefined) {
            return (Data || []).map((material) => (
                <ReviewCard
                    key={material.id}
                    id={material.id}
                    category={material.category}
                    userName={material.userName}
                    userImage={material.userImage}
                    image={material.image}
                    contexts={material.contexts}
                    date={material.date}
                    overview={material.overview}
                ></ReviewCard>
            ));
        }
    };

    return <ListWrapper>{renderMaterial(Data)}</ListWrapper>;
};

export default MaterialCardList;