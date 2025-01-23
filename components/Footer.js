import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';
import { Grid } from '@mui/material';


export default function Footer() {
    const [footer,setFooter]=useState({slaytlar:[],iletisim:[],urunler:[],sayfalar:[]});
      
      useEffect(()=>{
        fetch('https://manager.afg-react-web.com.tr/main/', {
          method: 'GET',
          credentials: 'include', // Çerezlerin gönderilmesini sağlar
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(res=>res.json()).then(data=>setFooter({slaytlar:[data.sliders],iletisim:[data.contacts],urunler:[data.products],sayfalar:[data.pages]})).catch(err=>console.log(err))
      },[])
    
  return (
    <div className={styles.container}>
<hr/>
    <Grid container sx={{my:2,width:"100%;"}} columns={{ xs: 12, md: 12 }} >

    <Grid  item  xs={12}>
    <List sx={{ width: '100%', bgcolor: 'background.paper',display:"flex",placeContent:"center",zIndex:-1 }}>
      <ListItem sx={{margin:"auto",placeContent:"center"}}>
        <ListItemAvatar>
          <Avatar>
          <LocalPhoneIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText style={{maxWidth:"fit-content"}} primary="Telefon" secondary={footer.iletisim[0]?footer.iletisim[0].phone_numbers:""} />
      </ListItem>
      <ListItem sx={{margin:"auto",placeContent:"center"}}>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary={footer.iletisim[0]?footer.iletisim[0].emails:""} />
      </ListItem>
      <ListItem sx={{margin:"auto",placeContent:"center"}}>
        <ListItemAvatar>
          <Avatar>
            <MapIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Adress" secondary={footer.iletisim[0]?footer.iletisim[0].address:""} />
      </ListItem>
    </List>
    </Grid>
    <Grid item xs={12}>
    <iframe
    width="100%"
    height="100%"
    style={{border:0}}
    allowfullscreen
    src={footer.iletisim[0]?footer.iletisim[0].google_maps:""}>
  </iframe>
  </Grid>
    </Grid>
      
    </div>
  )
}
