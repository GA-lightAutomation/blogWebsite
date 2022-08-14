import React, {useState} from "react";
import {Button, ButtonGroup, Container, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const BulbComponent = styled("div")(({theme}) => ({
    padding: "12px",
    marginTop: theme.spacing(2),
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))

export default function Light() {
    const [on, setOn] = useState(false);

    return (
        <div>
            <div style={{
                paddingTop: "12px"
            }}>

            <Typography gutterBottom
                        variant={"h4"}
                        align={"center"}
            >
                Lights Automation Project
            </Typography>
            </div>
            <BulbComponent>
                {
                    on? <img src={"images/bulbon.png"} alt={"bulb-off"} height={240} />
                        :<img src={"images/bulboff.png"} alt={"bulb-off"} height={240} />
                }
            </BulbComponent>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: "12px"
            }}>
            <ButtonGroup size={"large"}>
                <Button variant={"contained"}
                        onClick={() => setOn(true)}
                        disabled={on}
                >On</Button>
                <Button variant={"contained"}
                        onClick = {() => setOn(false)}
                        disabled={!on}
                >Off</Button>
            </ButtonGroup>
            </div>
        </div>
    )
}