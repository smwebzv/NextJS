import IconButton from "@mui/material/IconButton"
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Slavisa from "../../public/team/slavisa.jpg";
import Member from "../../public/team/member.png";
import Image from "next/image"
import { Grid, ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from "@mui/material";
import { AppTitle } from "../AppTitle/AppTitle";
import { mainTheme } from "@/pages";

const ourTeam = [
    {
        name: "Slavisa Markovic",
        title: "Ceo and Founder of SmWeb",
        image: Slavisa,
        linkedin: "https://www.linkedin.com/in/slavisa-markovic-2b738b1b8"
    },
    {
        name: "Andrej Nikolic",
        title: "Full stack developer",
        image: Member
    },
    {
        name: "Dejan Todorovic",
        title: "Mobile developer",
        image: Member
    },
    {
        name: "Ognjen Maric",
        title: "Full stack developer",
        image: Member
    },
    {
        name: "Aleksandra Andric",
        title: "Mobile developer",
        image: Member
    },
    {
        name: "Miladin Mirkovic",
        title: "Full stack developer",
        image: Member
    }
];

interface ITeam {
    changeColor?: boolean;
}

export const OurTeam = ({ changeColor }: ITeam) => {

    const matchDownMd = useMediaQuery(mainTheme.breakpoints.down('md'));

    const openLinkedin = (url?: string) => {
        if (url) {
            window.open(url, '_blank', 'noreferrer');
        }
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
                <AppTitle main="" selected="SmWeb" sub="Team" mainTitleStyle={{ color: (changeColor ? "#16171b" : "#fff") }} />
            </Grid>
            <Grid item xs={12} md={9}>
                <ImageList
                    cols={matchDownMd ? 1 : 3}
                    gap={matchDownMd ? 2 : 78}
                    sx={
                        {
                            width: "auto",
                            height: "100%",
                            position: "relative",
                            zIndex: "100"
                        }
                    }>
                    {ourTeam.map((item) =>
                        <ImageListItem key={item.name}>
                            <Image
                                style={
                                    {
                                        position: "relative",
                                        height: "auto",
                                        borderRadius: "2px",
                                        maxWidth: "100%",
                                        margin: "auto"
                                    }
                                }
                                src={item.image}
                                alt="Team member"
                            />
                            <ImageListItemBar
                                title={item.name}
                                subtitle={item.title}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.name}`}
                                        onClick={() => openLinkedin(item.linkedin)}
                                    >
                                        <LinkedInIcon sx={{ color: "#fff" }} />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    )}
                </ImageList>
            </Grid>
        </Grid>
    )
}