import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import styles from "@/styles/componentStyle/Header.module.scss";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { MenuItems } from "@/DammyData";
import { Button, useMediaQuery } from "@mui/material";
import { mainTheme } from "@/pages";
import MenuIcon from '@mui/icons-material/Menu';

interface IHeader {
  scrollHeight: number;
}

export const Header = ({ scrollHeight }: IHeader) => {
  const [menuOptions, setMenuOptions] = useState(MenuItems);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const matchDownMd = useMediaQuery(mainTheme.breakpoints.down('md'));

  const returnToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={
          scrollHeight < 30
            ? {
              backgroundColor: "rgba(0,0,0, 0.2)",
              boxShadow: "none !important",
            }
            : {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(6px)",
              boxShadow: "none !important",
            }
        }
      >
        <Toolbar
          sx={{
            transition: "all 200ms",
            height: scrollHeight < 30 ? "80px !important" : "64px",
            boxShadow:
              scrollHeight < 30
                ? "none !important"
                : "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
          }}
        >
          <Container maxWidth="lg" sx={{ margin: "auto", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div onClick={returnToTop} className={styles.holderLogo}>
                <div className={styles.logo} />
              </div>
              {matchDownMd &&
                <Button
                  sx={{ justifyContent: "flex-end" }}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  color="inherit">
                  <MenuIcon
                  />
                </Button>
              }

              <Box
                className={!matchDownMd ? styles.holderMenu : styles.holderMenuForMobile}
                sx={{
                  display: (!showMobileMenu && matchDownMd ? "none !important" : "flex !important")
                }}
              >
                {menuOptions.map((item, index) => (
                  <Link
                    className="header_links_style"
                    to={`${item.id}`}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    key={index}
                  >
                    {item.name}
                  </Link>
                ))}
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
