import { Button } from "@mui/material";
import React from "react";
import Header from "../components/Header";

const Top: React.FC = () => {
    return (
        <div>
            <Header button={<Button variant="contained">hoge</Button>} />
        </div>
    );
};

export default Top;