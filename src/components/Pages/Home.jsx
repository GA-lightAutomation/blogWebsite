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
            background: 'transparent',
            paddingTop: '12px'
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} >
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

                        <Button
                            variant={"outlined"}
                            size={"large"}
                            sx={{width: "60%", marginTop: "12px" }}
                        >
                            Go To Project
                        </Button>
                    </HeroContainer>
                </Grid>
                <Grid item xs={12} sm={8}>
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