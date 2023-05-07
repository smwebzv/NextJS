import { Box, Container } from "@mui/material";
import { mainTheme } from '../../pages/index';
import { CSSProperties } from "react";

interface IContainerLayout {
    children: JSX.Element | JSX.Element[],
    overwriteStyles?: CSSProperties;
    isAbout?: boolean;
}

export const ContainerLayout = ({ children, overwriteStyles = {}, isAbout = false }: IContainerLayout) => {
    return (
        <Box sx={{ backgroundColor: ( isAbout ? "#f43534" :  "#fff"), position: "relative", zIndex: 10 }}>
            <Container
                maxWidth="lg"
                sx={{
                    margin: "auto",
                    paddingTop: "110px",
                    minHeight: "100vh",
                    ...overwriteStyles,
                    [mainTheme.breakpoints.down("md")]:
                    {
                        height: '100%',
                        paddingTop: "90px",
                    },
                }}>
                {children}
            </Container>
        </Box>
    )
}