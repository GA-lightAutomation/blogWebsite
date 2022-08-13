import React from 'react';
import {Container, Grid, Typography, Box} from "@mui/material";

export default function Home(){

    return(
        <Container maxWidth={"xl"} sx={{
            background: 'transparent',
            paddingTop: '30px', 
            height: '90vh', 
            display: 'flex', 
            alignItems: 'center'
        }}> 
         <Grid container sx={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent:'center'
         }}>
                <Grid item> 
                    <Typography sx={{
                        margin: '2rem',  
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '2.5rem', 
                        textAlign: 'center'
                    }}
                    >
                        GEARBOX ACADEMY<br/>COHORT V
                    </Typography>
                </Grid>

                <Grid item>
                    <Box component="img" 
                        sx ={{
                            margin: '2rem', 
                            borderRadius: "50%"
                        }}
                        alt="Gearbox logo" 
                        src="images/gearbox_logo.jpeg"
                    />
                </Grid>
          </Grid>
        </Container>
    )
}