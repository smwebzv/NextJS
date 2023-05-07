import Container from "@mui/material/Box";
import Image, { StaticImageData } from "next/image";
import styles from "@/styles/Home.module.scss";
import { ScreenType } from "@/DammyData";

import { useEffect, useRef, useState } from "react";

export interface IBackground {
  containerId: string;
  scrollName: ScreenType;
  children: JSX.Element;
  containerImage: StaticImageData;
  scrollHeight: number;
  backImage?: string
}

export const Background = ({ containerId, scrollName, containerImage, children, scrollHeight, backImage }: IBackground) => {
  const containerMain = useRef<HTMLElement>();
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerMain.current) {
      setContainerHeight(containerMain.current.clientHeight);
    }
  }, [containerMain])

  return (
    <Container
      ref={containerMain}
      id={containerId}
      sx={{
        backgroundColor: "#e0e0e0",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        textAlign: "center"
      }}
    >
      <div
        className={styles.fixed_header}
        style={{ zIndex: (scrollHeight < containerHeight && containerId === "home") ? "2" : "0" }}>
        <Container
          maxWidth="lg"
          sx={{ margin: "auto", width: "1200px" }}
        >
          {children}
        </Container>

        <Image
          style={{ objectFit: "cover" }}
          src={containerImage}
          alt="Picture of the author"
          priority
        />
      </div>
      <div className={styles.top_static}></div>
    </Container>
  );
};
