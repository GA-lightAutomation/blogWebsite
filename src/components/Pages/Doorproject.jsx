import React from 'react'; 
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const ProjectContainer = styled('div')({
    margin:'2rem', 
    width:'90%', 
    background: "rgba(69, 135, 161, 0.1)", 
    display:'flex', 
    flexDirection:'column', 
    alignItems:'center'
})

const Sections = styled('div')({
    display:'flex', 
    flexDirection:'row', 
    padding:'1.5rem'
})

const Doorproject = () => {
  return (
    <Container sx={{
        width:'100%', 
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center',
    }}
    >
      <ProjectContainer>
          <Typography
            variant={'h3'}
            sx={{
              color:'white', 
              borderBottom:'2px solid white',
              paddingTop:'10px', 
              margin:'1rem',
              textAlign:'center', 
              fontSize:'2.5rem'
            }}
          >
              DOOR AUTOMATION PROJECT
          </Typography>
          <Sections sx={{
                flexDirection: {xs:'column', sm:'row'}
          }}>
            <Typography
               variant={'p'}
               sx={{
                   color:'white', 
                   fontSize:'1rem',
                   padding:'1rem', 
               }}
            >  
               <b>INTRODUCTION</b><br/>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
            </Typography>
            <Box   
               component={"img"}
               alt="first image" 
               src='images/projects.jpg'
               sx={{
                   width: {xs:'80%', sm:'35%'},
                   borderRadius:'10px',
                   margin:'2rem'
               }}
            >

            </Box>
          </Sections>
          <Sections sx={{
                flexDirection: {xs:'column', sm:'row'}
          }}>
            <Typography
               variant={'p'}
               sx={{
                   color:'white', 
                   fontSize:'1rem',
                   padding:'1rem'
               }}
            >  
               <b>LOREM IPSUM</b><br/>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
            </Typography>
          </Sections>
          <Sections sx={{
                flexDirection: {xs:'column', sm:'row'}
          }}> 
            <Box   
               component={"img"}
               alt="first image" 
               src='images/projects.jpg'
               sx={{
                   width: {xs:'80%', sm:'35%'},
                   borderRadius:'10px', 
                   margin:'2rem'
               }}
            >

            </Box>
            <Typography
               variant={'p'}
               sx={{
                   color:'white', 
                   fontSize:'1rem',
                   padding:'1rem'
               }}
            >  
               <b>LOREM IPSUM</b><br/>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
            </Typography>
          </Sections>
          <Sections sx={{
               flexDirection: {xs:'column', sm:'row'}
          }}>
            <Typography
               variant={'p'}
               sx={{
                   color:'white', 
                   fontSize:'1rem',
                   padding:'1rem'
               }}
            >  
               <b>LOREM IPSUM</b><br/>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
            </Typography>
            <Box   
               component={"img"}
               alt="first image" 
               src='images/projects.jpg'
               sx={{
                   width: { xs:'80%', sm:'35%'}, 
                   borderRadius:'10px', 
                   margin:'2rem'
               }}
            >

            </Box>
          </Sections>
          <Sections sx={{
             flexDirection: {xs:'column', sm:'row'}
          }}>
            <Typography
               variant={'p'}
               sx={{
                   color:'white', 
                   fontSize:'1rem',
                   padding:'1rem'
               }}
            >  
               <b>LOREM IPSUM</b><br/>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolores dolorum facere fugiat incidunt ipsa iste laboriosam, molestiae odio praesentium quibusdam recusandae ut! Culpa dolorum earum fugiat saepe ullam.
            </Typography>
          </Sections>
      </ProjectContainer>
    </Container>
  )
}

export default Doorproject