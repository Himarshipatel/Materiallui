import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Image from "./components/Image.js";
import Typographyy from "./components/Typographyy.js";
import Cardd from "./components/Card.js";
import Card1 from "./components/Card1.js";
import Card2 from "./components/Card2.js";

import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import Icon from "@material-ui/core/Icon";
//import Typographyy from './components/Typographyy.js';
const styles = theme => ({
  
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
 
});
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static"> 
          <Toolbar>
            <Typography variant="h6">
              Primo Material
              <Box ml={140} display="inline" >
                <Link href="#" color="inherit">
                  Home
                </Link>
              </Box>
              <Box ml={3} display="inline">
                <Link href="#" color="inherit">
                  Service
                </Link>
              </Box>
              <Box ml={3} display="inline">
                <Link href="#" color="inherit">
                  Portfolio
                </Link>
              </Box>
              <Box ml={3} display="inline">
                {" "}
                <Link href="#" color="inherit">
                  Team
                </Link>
              </Box>
              <Box ml={3} display="inline">
                {" "}
                <Link href="#" color="inherit">
                  Contact
                </Link>
              </Box>
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          bgcolor="green"
          display="inline"
          p={35}
          width={1263}
          display="inline-block"
        >
          <Box ml={60} mt={-10} fontSize={42} fontWeight="bold" color="#ede7f6">Primo Material</Box><br/>
          <Box ml={40}  fontSize={40} color="#ede7f6">Free theme based on materialized.css</Box><br/>

          <div>
            <Box display="inline" ml={60}><Button variant="contained" color="primary">
              Free Download
            </Button></Box>
            <Box display="inline"> <Button variant="contained" color="primary">
              Get Started
            </Button></Box>
          </div>
        </Box>
        
<div>
<Box display="flex" alignItems="flex-start"   >

<Box p={2} fontSize={38}> Easy Code
<Box fontSize={15} mt={2}>Pellentesque habitant morbi tristique senectus et netus et </Box>
<Box fontSize={15}>Pellentesque habitant morbi tristique senectus et netus et </Box>
<Box fontSize={15}>Pellentesque habitant morbi tristique senectus et netus et </Box>

<Box mt={5} >
  <Button variant="contained" color="primary">Source Code</Button>
 </Box>

</Box>

 

<Box ml={80.5} >
 <Image />
</Box>

</Box>
</div>

<div>
<Box display="flex" alignItems="flex-start"   >


<Box mt={-3.1} >
 <Image />
</Box>

<Box p={0} fontSize={38} ml={3}> Easy Code
<Box fontSize={15} mt={2}>Pellentesque habitant morbi tristique senectus et netus et </Box>
<Box fontSize={15}>Pellentesque habitant morbi tristique senectus et netus et </Box>
<Box fontSize={15}>Pellentesque habitant morbi tristique senectus et netus et </Box>

<Box mt={5} >
  <Button variant="contained" color="primary">Source Code</Button>
 </Box>

</Box>

 



</Box>
</div>



        <Box fontSize={38} ml={100} fontWeight="bold" mb={7}>
          Services
        </Box>

        <Box ml={25} p={3}  display="inline" fontSize={30}>
          Speeds up Devlopment
        </Box>
        <Box ml={25} p={3}  display="inline" fontSize={30}>
          User Experience Focused
        </Box>
        <Box ml={25} p={3}  display="inline" fontSize={30}>
          Easy to work with
        </Box>
        <Box ml={33}>
        
              <br />
              <Typography color="textSecondary" gutterBottom>
                speedy devlopment
              </Typography>

              <Typography color="textSecondary">fast devlopment</Typography>
              <Typography variant="body2" component="p">
                well design and maintain code
                <br />
              </Typography>
            
        </Box>

        <Box ml={107} mt={-12}>
          
              <br />
              <Typography color="textSecondary" gutterBottom>
                user freindly
              </Typography>

              <Typography color="textSecondary">adjective</Typography>
              <Typography variant="body2" component="p">
                well designed
                <br />
              </Typography>
          
           
        </Box>

        <Box ml={178} mt={-12}>
          
              <br />
              <Typography color="textSecondary" gutterBottom>
                user freindly
              </Typography>

              <Typography color="textSecondary">adjective</Typography>
              <Typography variant="body2" component="p">
                well designed
                <br />
              </Typography>
           
        </Box>
        <br />
        <br />
<Box bgcolor="#b3e5fc">
        <Box ml={100} fontWeight="bold" fontSize={38}>Portfolio</Box><br/>

<Box ml={10 }>
          <Typography gutterBottom variant="h5" component="h2">
            pixaaaaaa
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            pixaa are a widespread group of squamate reptiles, 
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            with over 6,000 species, ranging
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
            across all continents except Antarctica
          </Typography><br/>
          <Box><Typographyy /></Box>
          <Typography variant="h5" color="textSecondary" component="p">
            
           card Title
         </Typography>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
     </Box>
    <Box  ml={100} mt={-42} >
    
          <Typography gutterBottom variant="h5" component="h2">
            pixaa
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            pixaa are a widespread group of squamate reptiles, 
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            with over 6,000 species, ranging
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">

            across all continents except Antarctica
          </Typography> <br/>
          <Box><Cardd /></Box>
          <Typography variant="h5" color="textSecondary" component="p">

           card Title
         </Typography>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
     
    </Box>
    <Box  ml={170} mt={-42} >
    
          <Typography gutterBottom variant="h5" component="h2">
            pixaa
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            pixaa are a widespread group of squamate reptiles, 
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            with over 6,000 species, ranging
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
            across all continents except Antarctica
          </Typography><br/>
          <Box><Typographyy /></Box>
          <Typography variant="h5" color="textSecondary" component="p">
          
           card Title
         </Typography>
      
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
     
    </Box>
    
   <br/><br/>
<Box ml={10 }>
          <Typography gutterBottom variant="h5" component="h2">
            pixaa
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            pixaa are a widespread group of squamate reptiles, 
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            with over 6,000 species, ranging
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
            across all continents except Antarctica
          </Typography><br/>
          <Box><Card1 /></Box>
          <Typography variant="h5" color="textSecondary" component="p">
       
           card Title
         </Typography>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
     </Box>
    <Box  ml={100} mt={-42} >
    
          <Typography gutterBottom variant="h5" component="h2">
            pixaa
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            pixaa are a widespread group of squamate reptiles, 
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            with over 6,000 species, ranging
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">

            across all continents except Antarctica
          </Typography> <br/>
          <Box><Card2 /></Box>
          <Typography variant="h5" color="textSecondary" component="p">

           card Title
         </Typography>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
     
    </Box>
    <Box  ml={170} mt={-42} >
    
          <Typography gutterBottom variant="h5" component="h2">
            pixaa
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            pixaa are a widespread group of squamate reptiles, 
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            with over 6,000 species, ranging
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
            across all continents except Antarctica
          </Typography><br/>
          <Box><Card1 /></Box>
          <Typography variant="h5" color="textSecondary" component="p">
          
           card Title
         </Typography>
      
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> 
    </Box>
    </Box>
    <Box ml={100} fontWeight="bold" fontSize={38}>Team</Box>
<br/>
<Box ml={-10}>
 <div>
     <Box ml={70} mb={3}> 
     <Avatar className={classes.large} alt="Remy Sharp"src="https://media.istockphoto.com/photos/smiling-businesswoman-looking-at-camera-webcam-make-conference-call-picture-id1129638608"  />
     </Box>
     <Box fontSize={38} ml={50} color="#4caf50">Jane Doe</Box>
     <Box fontSize={28} ml={50} color="#4caf50" borderBottom={1} width={550}>Art Director and CEO</Box>
     <Box  ml={150} mt={-34} mb={3}> 
      <Avatar className={classes.large}  alt="Travis Howard" src="https://image.shutterstock.com/image-photo/face-happy-young-bearded-businessman-600w-1535738870.jpg" />
     </Box>
     <Box fontSize={38} ml={130} color="#4caf50"  >John Doe</Box>
      <Box fontSize={28} ml={130} color="#4caf50" borderBottom={1} width={550}>Web Devloper</Box>

      <Box ml={50} mt={2}>
      <Typography variant="body2">
                Pellentesque habitant morbi tristique senectus et netus et 
              </Typography>

              <Typography variant="body2">
                turpis egestats vestubulam tortor quam,feuglat vitae,ultriglase eget,tempor sit
              </Typography>
              <Typography variant="body2" component="p">
                amet,anteDonec eue libero sit ament quamegeastas semper aniel altrisias mivitaeeast
                <br />
              </Typography>
              <Typography variant="body2" component="p">
               mauris phraser eat elistars lio
                <br />
              </Typography>
      </Box>
      <Box ml={130} mt={2} mt={-10}>
      <Typography variant="body2">
                Pellentesque habitant morbi tristique senectus et netus et 
              </Typography>

              <Typography variant="body2">
                turpis egestats vestubulam tortor quam,feuglat vitae,ultriglase eget,tempor sit
              </Typography>
              <Typography variant="body2" component="p">
                amet,anteDonec eue libero sit ament quamegeastas semper aniel altrisias mivitaeeast
                <br />
              </Typography>
              <Typography variant="body2" component="p">
               mauris phraser eat elistars lio
                <br />
              </Typography>
      </Box>
    </div>
<br/><br/>

    <div>
     <Box ml={70} mb={3}> 
     <Avatar alt="Remy Sharp" className={classes.large} src="https://media.istockphoto.com/photos/happy-old-mature-online-teacher-tutor-looking-at-camera-picture-id1164377489"  />
     </Box>

     <Box fontSize={38} ml={50} color="#4caf50">Janie Roe</Box>
     <Box fontSize={28} ml={50} color="#4caf50" borderBottom={1} width={550}>Graphic Designer</Box>
     <Box  ml={150} mt={-34} mb={3}> 
      <Avatar  alt="Travis Howard" className={classes.large} src="https://image.shutterstock.com/image-photo/happy-millennial-caucasian-guy-wear-600w-1548802688.jpg" />
     </Box>
     <Box fontSize={38} ml={130} color="#4caf50"  >Johnnie Roe</Box>
      <Box fontSize={28} ml={130} color="#4caf50" borderBottom={1} width={550}>Web Designer</Box>

      <Box ml={50} mt={2}>
      <Typography variant="body2">
                Pellentesque habitant morbi tristique senectus et netus et 
              </Typography>

              <Typography variant="body2">
                turpis egestats vestubulam tortor quam,feuglat vitae,ultriglase eget,tempor sit
              </Typography>
              <Typography variant="body2" component="p">
                amet,anteDonec eue libero sit ament quamegeastas semper aniel altrisias mivitaeeast
                <br />
              </Typography>
              <Typography variant="body2" component="p">
               mauris phraser eat elistars lio
                <br />
              </Typography>
      </Box>
      <Box ml={130} mt={2} mt={-10}>
      <Typography variant="body2">
                Pellentesque habitant morbi tristique senectus et netus et 
              </Typography>

              <Typography variant="body2">
                turpis egestats vestubulam tortor quam,feuglat vitae,ultriglase eget,tempor sit
              </Typography>
              <Typography variant="body2" component="p">
                amet,anteDonec eue libero sit ament quamegeastas semper aniel altrisias mivitaeeast
                <br />
              </Typography>
              <Typography variant="body2" component="p">
               mauris phraser eat elistars lio
                <br />
              </Typography>
      </Box>
      
    </div>
    </Box>
<br/>
<Box border={1} bgcolor="green" color="white" height={300}>
<Box  mt={7} ml={40} fontSize={28}>Primo Material</Box>
<Box ml={40} mt={2}>
      <Typography variant="body2">
                Pellentesque habitant morbi tristique senectus et netus et 
              </Typography>

              <Typography variant="body2">
                turpis egestats vestubulam tortor quam,feuglat vitae,ultriglase eget,tempor sit
              </Typography>
              <Typography variant="body2" component="p">
                amet,anteDonec eue libero sit ament quamegeastas semper aniel altrisias mivitaeeast
                <br />
              </Typography>
              <Typography variant="body2" component="p">
               mauris phraser eat elistars lio
                <br />
              </Typography>
      </Box>
      <Box mt={-17} ml={130} fontSize={28}>Link</Box>
      <Box  mt={-5} ml={160} fontSize={28}>Material design</Box>
      <Box ml={130} mt={2}> 
      <Link href="#" color="inherit">Download</Link><br/>
      <Link href="#" color="inherit">Github repository</Link><br/>
      <Link href="#" color="inherit">Documentation</Link><br/>
      <Link href="#" color="inherit">Theme author</Link><br/>
      <Link href="#" color="inherit">Smooth scrolling</Link><br/>
      <Link href="#" color="inherit">Photos from Unsplash</Link>
      </Box>
      <Box ml={160} mt={-16}>
      <Box>Introduction</Box>
      <Box>Colors</Box>
      <Box>Icon</Box>
      <Box>Fonts</Box>
      <Box>Framework authors</Box>
      </Box>
</Box>
      </div>
    );
  }
}
export default withStyles(styles)(App);
