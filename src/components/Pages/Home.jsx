import React from 'react';
import {Button, Container, Grid, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';

const HeroContainer = styled('div')(({theme}) => ({
    padding: '12px',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    justifyContent: 'start',
    textAlign: 'start',
    color: "white",
    width: "70%"
}))

export default function Home(){
    const navigate = useNavigate();

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
                            Light Automation
                        </Typography>
                        <Typography variant={"body2"} color={"text.secondary"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
                        </Typography>

                        <Button
                            variant={"outlined"}
                            size={"large"}
                            sx={{width: "60%", marginTop: "12px" }}
                            onClick={() => navigate('/light')}
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
                            Door Automation
                        </Typography>

                        <Typography variant={"body2"} color={"text.secondary"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
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