import styles from "@/styles/Home.module.scss";
import Container from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { AnimationBox } from "../AnimationBox/AnimationBox";
import DesktopSoftware from "../../public/services/desktop-software-white.svg"
import DesktopSoftwareRed from "../../public/services/desktop-software-red.svg"
import WebApplications from "../../public/services/web-applications-white.svg"
import WebApplicationsRed from "../../public/services/web-applications-red.svg"
import CustomMobileApps from "../../public/services/mobile-apps-white.svg"
import CustomMobileAppsRed from "../../public/services/mobile-apps-red.svg"

import Image from "next/image";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { mainTheme } from '../../pages/index';
export const CompanyActivities = () => {
  const [active, setActive] = useState<number | null>(1);
  const [showContent, setShowContent] = useState<boolean>(true);
  const matchDownMd = useMediaQuery(mainTheme.breakpoints.down('md'));

  function changeActive(number: number) {
    setActive(number);
    addEffect();
  }

  function addEffect() {
    setShowContent(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  }

  return (
    <>
      <Box className={styles.company_activities}>
        <Container sx={{ margin: "auto", paddingTop: "48px" }}>
          <AnimationBox>
            <Box
              className={styles.flex_holder}
              sx={{
                [mainTheme.breakpoints.down("md")]:
                {
                  flexDirection: "column"
                },
              }}
            >
              <Box
                className={`${styles.flex_item} ${active === 1 || matchDownMd ? styles.selected_item : ""}`}
                onClick={() => active !== 1 && changeActive(1)}
              >
                <Paper
                  className={styles.gap_item}
                  elevation={0}
                  sx={{
                    [mainTheme.breakpoints.down("md")]:
                    {
                      height: "auto !important"
                    },
                  }}
                >
                  <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexWrap={"nowrap"}
                    className={styles.activity_grid}
                    sx={{
                      [mainTheme.breakpoints.down("md")]:
                      {
                        flexDirection: "column !important",
                        alignItems: "center !important"
                      },
                    }}
                  >
                    <Box className={styles.main_activity_hold}>
                      <Image
                        src={active == 1 || matchDownMd ? DesktopSoftware : DesktopSoftwareRed}
                        alt="Mobile Development"
                        style={{ width: "90px", height: "90px" }}
                      />
                      <Typography
                        variant="h5"
                        style={{
                          marginTop: "30px",
                          marginBottom: "0px",
                          width: "200px",
                        }}
                      >
                        Desktop software
                      </Typography>
                    </Box>
                    <Box
                      className={styles.activity_content_hold}
                      style={{
                        opacity: (active == 1 && showContent) || matchDownMd ? 1 : 0,
                        transition: "opacity 0.5s",
                      }}
                      sx={{
                        [mainTheme.breakpoints.down("md")]:
                        {
                          padding: "20px !important",
                          width: "100% !important ",
                          textAlign: "center !important"
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        style={{
                          opacity: (active == 1 && showContent) || matchDownMd ? 1 : 0,
                        }}
                      >
                        We specialize in creating powerful and intuitive software applications that run on desktop platforms such as Windows and MacOS.
                        Our team of skilled developers has years of experience in building customized solutions for a wide range of industries, from finance and healthcare to education and entertainment.
                      </Typography>
                    </Box>
                  </Grid>
                </Paper>
              </Box>
              <Box
                className={`${styles.flex_item} ${active === 2 || matchDownMd ? styles.selected_item : ""
                  }`}
                onClick={() => active !== 2 && changeActive(2)}
              >
                <Paper
                  className={styles.gap_item}
                  elevation={0}
                  sx={{
                    [mainTheme.breakpoints.down("md")]:
                    {
                      height: "auto !important"
                    },
                  }}
                >
                  <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexWrap={"nowrap"}
                    className={styles.activity_grid}
                    sx={{
                      [mainTheme.breakpoints.down("md")]:
                      {
                        flexDirection: "column !important",
                        alignItems: "center !important"
                      },
                    }}
                  >
                    <Box className={styles.main_activity_hold}>
                      <Image
                        src={active == 2 || matchDownMd ? WebApplications : WebApplicationsRed}
                        alt="Mobile Development"
                        style={{ width: "90px", height: "90px" }}
                      />
                      <Typography
                        variant="h5"
                        style={{
                          marginTop: "30px",
                          marginBottom: "0px",
                          width: "200px",
                        }}
                      >
                        Web applications
                      </Typography>
                    </Box>
                    <Box
                      className={styles.activity_content_hold}
                      style={{
                        opacity: (active == 2 && showContent) || matchDownMd ? 1 : 0,
                        transition: "opacity 0.5s",
                      }}
                      sx={{
                        [mainTheme.breakpoints.down("md")]:
                        {
                          padding: "20px !important",
                          width: "100% !important ",
                          textAlign: "center !important"
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        style={{
                          opacity: (active == 2 && showContent) || matchDownMd ? 1 : 0,
                        }}
                        sx={{
                          [mainTheme.breakpoints.down("md")]:
                          {
                            padding: "20px",
                            width: "100%",
                            textAlign: "center"
                          },
                        }}
                      >
                        Our team of skilled developers has years of experience in building customized solutions for a wide range of industries, from e-commerce and social media to healthcare and education. We use the latest development technologies and methodologies to ensure that our web applications are fast, reliable, and easy to use, and we work closely with our clients to ensure that their vision is fully realized.
                      </Typography>
                    </Box>
                  </Grid>
                </Paper>
              </Box>
              <Box
                className={`${styles.flex_item} ${active === 3 || matchDownMd ? styles.selected_item : ""
                  }`}
                onClick={() => active !== 3 && changeActive(3)}
              >
                <Paper
                  className={styles.gap_item}
                  elevation={0}
                  sx={{
                    [mainTheme.breakpoints.down("md")]:
                    {
                      height: "auto !important"
                    },
                  }}
                >
                  <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexWrap={"nowrap"}
                    className={styles.activity_grid}
                    sx={{
                      [mainTheme.breakpoints.down("md")]:
                      {
                        flexDirection: "column !important",
                        alignItems: "center !important"
                      },
                    }}
                  >
                    <Box className={styles.main_activity_hold}>
                      <Image
                        src={active == 3 || matchDownMd ? CustomMobileApps : CustomMobileAppsRed}
                        alt="Mobile Development"
                        style={{ width: "90px", height: "90px" }}
                      />
                      <Typography
                        variant="h5"
                        style={{
                          marginTop: "30px",
                          marginBottom: "0px",
                          width: "200px",
                        }}
                      >
                        Custom mobile apps
                      </Typography>
                    </Box>
                    <Box
                      className={styles.activity_content_hold}
                      style={{
                        opacity: (active == 3 && showContent) || matchDownMd ? 1 : 0,
                        transition: "opacity 0.5s",
                      }}
                      sx={{
                        [mainTheme.breakpoints.down("md")]:
                        {
                          padding: "20px !important",
                          width: "100% !important ",
                          textAlign: "center !important"
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        style={{
                          opacity: (active == 3 && showContent) || matchDownMd ? 1 : 0,
                        }}
                        sx={{
                          [mainTheme.breakpoints.down("md")]:
                          {
                            padding: "20px",
                            width: "100%",
                            textAlign: "center"
                          },
                        }}
                      >
                        Our team of skilled developers has years of experience in building customized solutions for a wide range of industries, from e-commerce and finance to healthcare and entertainment. We use the latest development technologies and methodologies to ensure that our mobile apps are fast, reliable, and easy to use, and we work closely with our clients to ensure that their vision is fully realized.
                      </Typography>
                    </Box>
                  </Grid>
                </Paper>
              </Box>
            </Box>
          </AnimationBox>
        </Container>
      </Box>
    </>
  );
};
