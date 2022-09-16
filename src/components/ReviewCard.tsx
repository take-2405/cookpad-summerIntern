import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const OverviewImage = styled.div`
  max-width: 75%;
  margin-right: 10px;
`;

export type MaterialProps = {
    key: number;
    id: number;
    category: string;
    image: string;
    userName: string;
    userImage: string;
    date: string;
    contexts: string;
    overview: string;
};

const CardWrapper = styled.section``;

export const ReviewCard: React.FC<MaterialProps> = (props) => {
    const navigate = useNavigate();
    const { key, id, category, image, userName, userImage, date, contexts, overview } = props;

    return (
        <Grid item xs={12} md={6} xl={3}>
            <CardWrapper>
                <Card
                    sx={{ width: 300, height: 250 }}
                    key={id}
                    onClick={() =>
                        navigate(`/post/${id}`)
                    }
                >
                    <CardMedia
                        component="img"
                        height="120"
                        image={image}
                        alt="material thumbnail"
                    />
                    <CardContent>
                        <div style={{
                            display: 'flex',
                            alignItems: "center"
                        }}>
                            <OverviewImage>
                                <img
                                    style={{ objectFit: "cover" }}
                                    src={userImage}
                                    width={30}
                                    height={30}
                                />
                            </OverviewImage>
                            <p>{userName}</p>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                            {overview}
                        </Typography>
                    </CardContent>
                </Card>
            </CardWrapper>
        </Grid>
    );
};

export default ReviewCard;