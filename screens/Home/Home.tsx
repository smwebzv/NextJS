import Container from "@mui/material/Box";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import DarkSmLogo from "../../../public/images/sm_web_logo_dark.jpg";

export const Home = () => {
  return (
    <Container
      id="home"
      sx={{
        backgroundColor: "#e0e0e0",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div className={styles.fixed_header}>
        <Image src={DarkSmLogo} alt="Picture of the author" priority />
      </div>
      <div className={styles.top_static}></div>
    </Container>
  );
};
