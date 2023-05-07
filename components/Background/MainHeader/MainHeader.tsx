import { AppTitle } from "@/components/AppTitle/AppTitle";

import styles from "../../AppTitle/AppTitle.module.scss";
import { useMediaQuery } from "@mui/material";
import { mainTheme } from "@/pages";

interface IMainHeader{
    firstTitle: string,
    secondTitle: string
}
export const MainHeader = ({firstTitle, secondTitle}: IMainHeader) => {
    const matchDownMd = useMediaQuery(mainTheme.breakpoints.down('md'));
    if( matchDownMd ) 
    return(
        <>
            <AppTitle isMobileHeaderText={true} main={firstTitle} selected="" sub="" />
            <br/>
            <AppTitle isMobileHeaderText={true} main={secondTitle} selected="" sub="" />
        </>
    )

    return ( 
        <>
            <AppTitle main={firstTitle} selected="" sub="" typingAnimation={styles.typing_title} />
            <br/>
            <AppTitle main={secondTitle} selected="" sub="" typingAnimation={styles.typing_title_with_delay} />
        </>
    )
}