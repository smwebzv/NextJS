import { Box, Typography } from "@mui/material";
import { mainTheme } from '../../pages/index';
import { CSSProperties } from "react";

export type TitleType = {
    main: string;
    selected: string;
    sub: string;
    titleStyle?: any;
    mainTitleStyle?: CSSProperties;
    typingAnimation?: any;
    subTitleStile?: CSSProperties;
    isMobileHeaderText?: boolean;
}

export const AppTitle = ({ main, sub, selected, titleStyle = {}, mainTitleStyle = { color: "#fff" }, typingAnimation, subTitleStile = {}, isMobileHeaderText }: TitleType) => {
    return (
        <Box sx={{
            position: "relative",
            display: "inline-block",
            zIndex: "20",
            [mainTheme.breakpoints.down("md")]:
            {
                textAlign: "center",
                width: "100%"
            },
            ...titleStyle,
        }}>
            <Typography
                variant="h2"
                sx={{
                    ...mainTitleStyle,
                    fontSize: "3rem",
                    [mainTheme.breakpoints.down("md")]:
                    {
                        fontSize: isMobileHeaderText ? "20px" : "2rem"
                    },
                }}
                className={typingAnimation}
            >
                {main}
                {" "}
                <Typography
                    sx={{
                        color: "#f43534",
                        fontSize: "3rem",
                        ...subTitleStile,
                        [mainTheme.breakpoints.down("md")]:
                        {
                            fontSize: isMobileHeaderText ? "20px" : "2rem"
                        },
                    }}
                    variant="caption"
                >
                    {selected}
                </Typography>
                {" "}
                {sub}
            </Typography>
        </Box>
    )
}