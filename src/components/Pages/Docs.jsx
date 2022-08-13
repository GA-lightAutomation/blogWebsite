import React from 'react';
import {styled} from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import {Button, Container, Grid, Typography} from "@mui/material";


const HeroContainer = styled('div')(({theme}) => ({
    padding: '12px',
    marginTop: theme.spacing(6),
    justifyContent: 'start',
    textAlign: 'center',
    color: "white",
    width: "70%"
}))


export default function Docs (){
    const navigate = useNavigate();
    return(
        <Container sx={{
            background: 'transparent',
            paddingTop: '30px', 
            height: '100vh', 
            display:'flex',
            flexDirection:'column', 
            alignItems:'center', 
        }}
        >
            <Grid item xs={13} sm={10} sx={{ background: 'rgba(69, 135, 161, 0.1)'}}>
                <HeroContainer sx={{ marginLeft: { xs:'5rem', sm:'7rem'}}}>
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
                        onClick={() => navigate('/lightproject')}
                    >
                        Go To Project
                    </Button>
                </HeroContainer>
            </Grid>

            <Grid item xs={13} sm={10} sx={{ 
                background: 'rgba(69, 135, 161, 0.1)', 
                paddingBottom: '40px'
            }}>
                <HeroContainer sx={{ marginLeft: { xs:'5rem', sm:'7rem'}}}>
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
                        onClick={() => navigate('/doorproject')}
                        sx={{width: "60%", marginTop: "12px"}}
                    >
                        Go To Project
                    </Button>
                </HeroContainer>
            </Grid>

        </Container>      
    )
}