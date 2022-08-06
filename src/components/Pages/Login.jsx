import React from "react"
import Avatar from '@mui/material/Avatar' 
import Button from '@mui/material/Button' 
import CssBaseline from '@mui/material/CssBaseline' 
import TextField from '@mui/material/TextField' 
import FormControlLabel from '@mui/material/FormControlLabel' 
import Checkbox from '@mui/material/Checkbox' 
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid' 
import Box from '@mui/material/Box' 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from "@mui/material/Typography" 
import Container from "@mui/material/Container" 
import { Paper } from "@mui/material"

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault() 
        const data = new FormData(event.currentTarget) 
        console.log({
            email: data.get('email'), 
            password: data.get('password')
        })
    } 

    return (
        <Container component={Paper} maxWidth='xs'  sx={theme => ({
            background: theme.palette.background, 
            padding: '12px',
            marginBottom: '12px', 
            marginTop: '3rem', 
            marginLeft: { xs:'auto', sm: 'auto'}, 
            marginRight: { xs:'auto', sm:'auto'}
        })}>
        <CssBaseline /> 
        <Box 
        sx={{
            marginTop: 3, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
        }}
        >
            <Avatar sx={{ m: 1, bgColor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>

            <Typography component='h1' variant='h5'>
                Log in
            </Typography>

            <Box component='form' sx={{ mt: 1, }} onSubmit={handleSubmit} noValidate>
                <TextField
                margin='normal' 
                required
                id='email' 
                fullWidth
                label='Email address' 
                name='email' 
                autoComplete="email" 
                autoFocus 
                > 
                </TextField> 
                <TextField 
                margin='normal' 
                required
                name='password' 
                id='password' 
                type='password'
                label='Password'
                autoComplete="current-password" 
                fullWidth
                >
                </TextField> 
                <FormControlLabel 
                    control={<Checkbox value='remember' color='primary'/>} 
                    label='remember me'
                /> 
                <Button 
                type='submit' 
                sx={{ mt: 2, mb:3}} 
                fullWidth 
                variant='contained'
                >
                    Log in
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password
                        </Link>
                    </Grid> 
                </Grid>
            </Box>
        

        </Box>
    </Container>
    )
}

