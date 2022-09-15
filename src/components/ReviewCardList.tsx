import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import ReviewCard from "./ReviewCard"

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



export const MaterialCardList: React.FC<MaterialListProps> = (props) => {
    const materialList: Array<Material> = [
        { id: 1, title: "title", thumbnailId: "thumbnailId", contents: "contents", date: "2021-09-10" },
        { id: 2, title: "title", thumbnailId: "thumbnailId", contents: "contents", date: "2021-09-10" },
        { id: 3, title: "title", thumbnailId: "thumbnailId", contents: "contents", date: "2021-09-10" },
        { id: 4, title: "title", thumbnailId: "thumbnailId", contents: "contents", date: "2021-09-10" },
        { id: 5, title: "title", thumbnailId: "thumbnailId", contents: "contents", date: "2021-09-10" },
        { id: 6, title: "title", thumbnailId: "thumbnailId", contents: "contents", date: "2021-09-10" },
        { id: 7, title: "title", thumbnailId: "thumbnailId", contents: "contents", date: "2021-09-10" },
        { id: 8, title: "title", thumbnailId: "thumbnailId", contents: "contents", date: "2021-09-10" },
    ];

    const renderMaterial = () => {
        if (materialList !== undefined) {
            return (materialList || []).map((material) => (
                <ReviewCard
                    key={material.id}
                    id={material.id}
                    title={material.title}
                    thumbnailId={material.thumbnailId}
                    contexts={material.contents}
                    date={material.date}
                ></ReviewCard>
            ));
        }
    };

    return <ListWrapper>{renderMaterial()}</ListWrapper>;
};

export default MaterialCardList;