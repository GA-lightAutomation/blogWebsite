import React from 'react';
import {Button, Container, Grid, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';

const HeroContainer = styled('div')(({theme}) => ({
    padding: '12px',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    justifyContent: 'start',
    textAlign: 'start',
    color: "white"
}))

export default function Home(){
    return(
        <Container maxWidth={"xl"} sx={{
            background: 'transparent'
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} md={6}>
                    <HeroContainer>
                        <Typography variant={"h4"}
                                    gutterBottom
                        >
                            Gearbox Academy
                        </Typography>
                        <Typography variant={"h4"}
                                    gutterBottom
                        >
                            Light Automation
                        </Typography>

                        <img src={"/images/img.png"} alt={"ga logo"} width={"60%"} height={"auto"} />

                        <Button
                            variant={"outlined"}
                            size={"large"}
                            sx={{width: "60%", marginTop: "12px" }}
                        >
                            Go To Project
                        </Button>
                    </HeroContainer>
                </Grid>
            </Grid>
        </Container>
    )
}