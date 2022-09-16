import React from "react";
import styled from "@emotion/styled";
import ReviewCardList from "../components/ReviewCardList"
import Stack from '@mui/material/Stack';
import Button, { ButtonProps } from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const ListInWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  margin: auto;
  width: 90%;
  justify-content: center;
`;

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

const ColorButton = styled(Button)<ButtonProps>(({ }) => ({
    color: "#ffffff",
    backgroundColor: "#FF9D00",
    '&:hover': {
        backgroundColor: "#FF9D00",
    },
}));

export const ListWrapper: React.FC = () => {
    const navigate = useNavigate();
    const Favo: Boolean = true

    return (
        <ListInWrapper>
            <Stack direction="row" spacing={2}>
                <div style={{
                    display: "flex"
                }}>
                    <ColorButton variant="contained" onClick={(e) => { navigate("/") }}>新着順</ColorButton >
                    <div style={{
                        marginLeft: '20px'
                    }} />
                    <ColorButton variant="contained" onClick={(e) => { navigate(`/favorite/${Favo}`) }}>人気順</ColorButton>
                </div>
            </Stack>
            <ReviewCardList />
        </ListInWrapper>
    );
};

export default ListWrapper;