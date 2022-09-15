import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import tomato from "../resource/tomato.jpg";

export type MaterialProps = {
    children?: React.ReactNode;
    id?: number;
    title?: string;
    thumbnailId?: string;
    contexts?: string;
    date?: string
};

const CardWrapper = styled.section``;

export const ReviewCard: React.FC<MaterialProps> = (props) => {
    const navigate = useNavigate();
    const { id, title, thumbnailId, contexts, date } = props;

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
                        image={tomato}
                        alt="material thumbnail"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {contexts}
                        </Typography>
                    </CardContent>
                </Card>
            </CardWrapper>
        </Grid>
    );
};

export default ReviewCard;