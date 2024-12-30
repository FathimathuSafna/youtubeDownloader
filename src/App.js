import * as React from 'react'
import { Grid2 as  Grid, Box, Typography, TextField, Button,List, ListItem, ListItemText, Divider, Link } from '@mui/material';
import Navbar from './Navbar'; 
import Container from '@mui/material/Container';
import './style.css'
import { useState } from 'react';



function App() {
 const [link, setlink] = useState('')
  const actionButton = async(e)=>{
    e.preventDefault();
    console.log(link);
    
  }


  return (
    <>
    
    <Navbar/>
    <form onSubmit={actionButton}>
      <Grid container spacing={2} sx={{ height: '300px', backgroundColor: '#f5f5f5' }} justifyContent={'center'}>
        <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, border: '1px solid grey', m: 2, p: { xs: 2, md: 4 } }}>
            <Typography variant='h4' sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>YouTube Video Downloader</Typography>
            <Box sx={{display:'flex'}} >
            <Box gap={1} sx={{ p: 1, border: '2px solid grey', borderRadius:1.5,backgroundColor: '#B2071D' }}>
              <TextField  onChange={(e)=> setlink(e.target.value)}  sx={{ backgroundColor: 'white', width: { xs: '100%', md: '500px' } }} id="outlined-basic" label="Paste link here ....." variant="filled" size='small' value={link} />
            </Box>
            <Button  type='submit' variant="outlined"  sx={{ marginLeft: 1, color: '#f5f5f5', backgroundColor: '#B2071D' ,borderColor:'#f5f5f5',borderRadius:1.5}}>Download</Button>
          </Box>
            <Typography variant='h7' sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>By using our service you are accepting our Terms of Use.</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container  spacing={3} sx={{ height: '300px', backgroundColor: '#f5f5f5' }} justifyContent={'center'} >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,  m: 5, p: { xs: 2, md: 4 } }}>
      <Typography variant='h4' sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>Online & Free YouTube Video Downloader</Typography>
        <Container maxWidth="md" >
      <Typography  align='center' variant='h6' sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>Y2Meta is a free YouTube Downloader tool that allows you to convert and download YouTube video with the Highest Quality.
         It's supported a range of video and audio formats like MP4, MP3, WEBM, WMV, 3GP, M4V, FLV, MO, etc. You can quickly and easily download video from YouTube in 360p, 720p, 1080p, and even 4K quality without installing software or applications.
          Y2meta works on both Android and Computer devices. it's a free, Fast, and secure YouTube Video Downloader. and simply save thousands of favorite videos from YouTube.</Typography>
          </Container>
      </Box>
      </Grid>
      <Divider variant="middle" />
      <Grid container  spacing={3} sx={{  backgroundColor: '#f5f5f5' }} justifyContent='center' >
      <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
      <Container maxWidth="lg" >
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center',  m: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,  m: 2, p: { xs: 2, md: 2 } }}>
      <Typography align='center' variant='h5' sx={{ fontSize: { xs: '1rem', md: '1.3rem' } }}>How to Download YouTube Video using Y2meta</Typography>
      <List>
                <ListItem>
                  <ListItemText primary="1. Search the keyword or simply paste the video Link into the Y2meta search box." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2. Click on the 'start' button. Your conversion process will be started." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3. Choose MP3 (Audio) or MP4 (Video) formats with qualities." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="4. Press the 'Download' button and save the file to your device." />
                </ListItem>
              </List>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,  m: 2, p: { xs: 2, md: 4 } }}>
      <Typography align='center' variant='h5' sx={{ fontSize: { xs: '1rem', md: '1.3rem' } }}>Features</Typography>
      <List>
                <ListItem>
                  <ListItemText primary="• Download Unlimited YouTube videos free of cost." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• it's the fastest YouTube Downloader." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• No requirement to register or sign up." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Supported a range of formats and quality." />
                </ListItem>
              </List>
          </Box>
      </Box>
      </Container>
      </Grid>
      </Grid>
      </form>
      
    
    </>
  );
}

export default App;
