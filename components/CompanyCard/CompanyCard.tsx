import Typography from "@mui/material/Typography";
import { AnimationBox } from "../AnimationBox/AnimationBox";
import { AppTitle } from "../AppTitle/AppTitle";
import { Grid } from "@mui/material";
import { ContainerLayout } from "../ContainerLayout/ContainerLayout";
import { mainTheme } from '../../pages/index';
export const CompanyCard = () => {
  return (
    <>
      <ContainerLayout overwriteStyles={{ minHeight: "calc(100vh - 400px)" }}>
        <AnimationBox>
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Grid
              item
              xs={12}
              md={3}
              justifyContent={"center"}
              style={{ fontSize: "2.75rem" }}
            >
              <AppTitle
                main="Our"
                selected="Services"
                sub=""
                mainTitleStyle={{ color: "#16171b" }}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography
                variant="h3"
                sx={{
                  [mainTheme.breakpoints.down("md")]:
                  {
                    fontSize: "2rem",
                    textAlign: "center"
                  },
                }}
              >
                End-to-end application development services
              </Typography>
              <Typography 
                marginTop={6} 
                variant="h6"
                sx={{
                  [mainTheme.breakpoints.down("md")]:
                  {
                    textAlign: "center"
                  },
                }}
              >
                We deliver a range of custom software products and solutions
                for desktop, web and mobile. With a team of more than 5
                software experts, we have you covered – from idea validation
                to custom app development, testing, governance and support.
              </Typography>
            </Grid>
          </Grid>
        </AnimationBox>
      </ContainerLayout>
    </>
  );
};
