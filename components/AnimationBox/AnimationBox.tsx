import { mainTheme } from "@/pages";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
 
type Props = {
    children: string | JSX.Element | JSX.Element[]
}

const boxVariant = {
    onscreen: {
        opacity: 1, scale: 1, transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.7
        }
    },
    offscreen: { opacity: 0, scale: 0 },
}

export const AnimationBox = ({ children }: Props) => {
    const matchDownMd = useMediaQuery(mainTheme.breakpoints.down('md'));
    if( matchDownMd ) return <div>{children}</div>
    return (
        <motion.div
            whileInView="onscreen"
            variants={boxVariant}
            initial={"offscreen"}
            viewport={{ once: true, amount: 0.1 }}
            className="box">
            {children}
        </motion.div>
    )
}