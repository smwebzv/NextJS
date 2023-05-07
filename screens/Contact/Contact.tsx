import { AnimationBox } from "@/components/AnimationBox/AnimationBox";
import { AppTitle } from "@/components/AppTitle/AppTitle";
import styles from "@/styles/Home.module.scss";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import ContactImage from "../../public/images/icons/contact_us.svg";
import { ContainerLayout } from "@/components/ContainerLayout/ContainerLayout";
import { useMediaQuery } from "@mui/material";
import { mainTheme } from "@/pages";
import { ChangeEvent, useState } from "react";

interface IContact {
    setSnackBarOpened: (isOpened: boolean) => void;
}

export const Contact = ({ setSnackBarOpened }: IContact) => {
    const matchDownMd = useMediaQuery(mainTheme.breakpoints.down('md'));
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: ""
    });


    const handleDataInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const sendEmail = () => {
        const dataFromForm = { ...formData };
        setFormData({ email: "",  name: "", message: ""  })
        if(formData.email && formData.message && formData.name){
            fetch('/api/send-email', { method: "POST", body: JSON.stringify(dataFromForm) })
            .then(result => {
                setSnackBarOpened(true);
            });
        }
    }

    return (
        <div id='contact'>
            <ContainerLayout>
                <AnimationBox>
                    <div className={styles.container_info}>
                        <AppTitle
                            titleStyle={{ paddingTop: "90px" }}
                            mainTitleStyle={{ color: "#16171b", fontSize: 44 }}
                            subTitleStile={{ fontSize: 44 }}
                            main="Talk to us and get your"
                            selected="project moving!"
                            sub=""
                        />
                    </div>
                    <Grid container sx={{ paddingBottom: "15px" }}>
                        <Grid item xs={12} md={6}>
                            <Image
                                src={ContactImage}
                                style={{ width: "100%", height: "100%", paddingRight: (!matchDownMd ? "100px" : "0px") }}
                                priority
                                alt="Contact us"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={styles.input_form_controll}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    id="name"
                                    value={formData.name}
                                    variant="standard"
                                    onChange={handleDataInput}
                                />
                            </div>
                            <div className={styles.input_form_controll}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    id="email"
                                    value={formData.email}
                                    variant="standard"
                                    onChange={handleDataInput}
                                />
                            </div>
                            <div className={styles.input_form_controll}>
                                <TextField
                                    fullWidth
                                    id="message"
                                    label="Message"
                                    value={formData.message}
                                    multiline
                                    rows={4}
                                    variant="standard"
                                    onChange={handleDataInput}
                                />
                            </div>
                            <Button
                                variant="contained"
                                disabled={ !formData.email || !formData.message || !formData.name }
                                onClick={sendEmail}
                                size="large"
                            >SEND MESSAGE
                            </Button>
                        </Grid>
                    </Grid>
                </AnimationBox>
            </ContainerLayout>
        </div>
    )
}