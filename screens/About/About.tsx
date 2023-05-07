import { AnimationBox } from "@/components/AnimationBox/AnimationBox";
import { AppTitle } from "@/components/AppTitle/AppTitle";
import { Grid, Typography } from "@mui/material";
import { ContainerLayout } from "@/components/ContainerLayout/ContainerLayout";
import { mainTheme } from '../../pages/index';

export const About = () => {
    return (
        <div id='about'>
            <ContainerLayout isAbout={true}>
                <AnimationBox>
                    <Grid container alignItems={"flex-start"} justifyContent={"center"}>
                        <Grid item xs={12} md={3} justifyContent={"center"}>
                            <AppTitle main="" selected="About" sub="Us" subTitleStile={{color: "#fff"}}  mainTitleStyle={{ color: "#fff" }} />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography
                                marginTop={2}
                                variant="about"
                                component={"h6"}
                                sx={{
                                    [mainTheme.breakpoints.down("md")]:
                                    {
                                        textAlign: "center"
                                    },
                                }}
                            >
                                <Typography variant="highlightedAbout">SmWeb </Typography>
                                is a team of skilled professionals dedicated to providing top-notch technology solutions to businesses of all sizes. Our mission is to help our clients streamline their operations, increase productivity, and achieve their goals through the effective use of technology. With years of experience and a passion for innovation, we strive to stay at the forefront of the rapidly evolving tech industry. Whether you need assistance with software development, network infrastructure, cybersecurity, or anything in between, we have the expertise and resources to deliver tailored solutions that meet your specific needs.</Typography>
                            <Typography
                                marginTop={6}
                                variant="about"
                                component={"h6"}
                                sx={{
                                    [mainTheme.breakpoints.down("md")]:
                                    {
                                        textAlign: "center"
                                    },
                                }}
                            >
                                <Typography variant="highlightedAbout">Our </Typography>
                                goal is to help you achieve success through the strategic use of technology, whether that means developing custom software, managing your network infrastructure, implementing cybersecurity measures, or providing IT support and consultation services. With a focus on innovation, efficiency, and reliability, we strive to deliver the best possible outcomes for our clients. Our approach is personalized, collaborative, and results-driven, and we are dedicated to building long-term relationships with our customers based on trust and mutual respect.
                            </Typography>
                            <Typography
                                marginTop={6}
                                variant="about"
                                component={"h6"}
                                sx={{
                                    [mainTheme.breakpoints.down("md")]:
                                    {
                                        textAlign: "center"
                                    },
                                }}
                            >The company offers a range of services, including web development, mobile app development, e-commerce development and software developmen.</Typography>
                        </Grid>
                    </Grid>
                </AnimationBox>
            </ContainerLayout>
        </div>
    )
}