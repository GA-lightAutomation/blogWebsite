import React from 'react';
import {Button, Container, Grid, Typography, Box} from "@mui/material";
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
            paddingTop: '30px', 
            height: '85vh', 
            marginLeft: 4
        }}> 
        {/* spacing={2} xs={12} */}
         <Grid container sx={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center'
         }}>
         {/* sx={{ mx: { xs: 4, sm: 0} */}
                <Grid item sm={7} xs={12}> 
                    <Grid item xs={13} sm={10} >
                        <HeroContainer sx={{ textAlign: 'center'}}>
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
                    <Grid item xs={13} sm={10}>
                        <HeroContainer sx={{ textAlign: 'center'}}>
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
                                sx={{width: "60%", marginTop: "12px"}}
                            >
                                Go To Project
                            </Button>
                        </HeroContainer>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Box component="img" 
                        sx ={{
                            marginLeft: "auto", 
                            marginRight: "auto", 
                            display: { xs: 'none', sm: 'block' } 
                        }}
                        alt="Gearbox logo" 
                        src="images/gearbox_logo.jpeg"
                    />
                </Grid>
          </Grid>
        </Container>
    )
}