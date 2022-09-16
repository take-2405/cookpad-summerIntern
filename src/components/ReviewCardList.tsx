import React from "react";
import styled from "@emotion/styled";
import ReviewCard from "./ReviewCard"
import { Data, DateSet } from "../resource/data"
import { useParams } from "react-router-dom";

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
    const { Word, Favo } = useParams();

    const renderMaterial = (Data: Array<DateSet>) => {
        if (Data !== undefined) {
            if (Word !== undefined) {
                const ResultData: Array<DateSet> = new Array<DateSet>;
                Data.forEach(element => {
                    if (element.category === Word) {
                        ResultData.push(element)
                    }
                });
                return (ResultData || []).map((material) => (
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
            } else if (Favo !== undefined) {
                const ResultData: Array<DateSet> = Data.slice(0, Data.length)
                ResultData.sort(
                    (firstObject: DateSet, secondObject: DateSet) =>
                        (firstObject.Nice > secondObject.Nice) ? -1 : 1
                );
                return (ResultData || []).map((material) => (
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
            } else {
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
        }
    };

    return (<ListWrapper>{renderMaterial(Data)}</ListWrapper>)
};

export default MaterialCardList;