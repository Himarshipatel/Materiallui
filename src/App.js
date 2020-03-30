import React,{Component} from 'react'
//import React from 'react';
//import Navbar from './components/Navbar.js'
import './App.css';
//import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
//import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Icon from '@material-ui/core/Icon';
//import red from '@material-ui/core/colors/red';


//import DeleteIcon from '@material-ui/icons/Delete';
//import CodeIcon from '@material-ui/icons/Code';
//import Button from '@material-ui/core/Button';

//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//   const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));


class App extends Component{


render(){
  
  return (

    <div>
      <AppBar position="static">
  <Toolbar>
    
     
    
    <Typography variant="h6" >
      Primo Material

<Box ml={140} display="inline" ><Link href="#" color="white">Home</Link></Box>
<Box ml={3} display="inline"><Link href="#" color="white" >Service</Link></Box>
<Box ml={3} display="inline" ><Link href="#" color="white" >Portfolio</Link></Box>
<Box ml={3} display="inline" > <Link href="#" color="white" >Team</Link></Box>
<Box ml={3} display="inline" > <Link href="#" color="white" >Contact</Link></Box>

    </Typography>
   
  </Toolbar>
</AppBar>
 
   
      <Box bgcolor="green" display="inline" p={35} width={1240} display="inline-block">
       <h1 >Primo Material</h1>
       <h2>Free theme based on materialized.css</h2>
      
     
      <div>
  <Button variant="contained" color="primary">
       Free Download
      </Button>
      <Button variant="contained" color="secondary">
        Get Started
      </Button>
  </div>
  </Box>

 <div style={{ width: '100%', bgcolor:'blue'}}>
 <br/>
      <Box component="div" display="inline" p={1} m={70} bgcolor="background.paper" fontSize={38}>
        Easy Code
      </Box>
      <Box component="div" display="inline" p={1} m={0} bgcolor="background.paper"  >
      image 
      </Box><br/>
      

      <Box component="div" ml={71} pt={10} m={0}>
      <Button variant="contained" color="primary" >
        Source Code
      </Button>
      </Box>
    </div><br/>


 <Box component="div" display="inline" p={1} m={70} bgcolor="background.paper"  >
      image 
      </Box>
      <Box component="div" display="inline" p={1} m={0} bgcolor="background.paper" fontSize={38}>
        Easy Code
      </Box>
     <br/>
      
      
      <Box component="div" ml={149} pt={10} m={0}>
      <Button variant="contained" color="primary" >
        Source Code
      </Button>
      </Box>
    <br/>




     <Box fontSize={38} ml={100} mb={7}>Services</Box>


<Box ml={35} p={3} border={1} display="inline" fontSize={30}>Speeds up Devlopment</Box>
<Box ml={10} p={3} border={1} display="inline" fontSize={30}>User Experience Focused</Box>
<Box ml={10} p={3} border={1} display="inline" fontSize={30}>Easy to work with</Box>   
 <Box ml={40}>
     <Card display="inline">
      <CardContent >
      <br/>
        <Typography  color="textSecondary"  gutterBottom>
         speedy devlopment
        </Typography>
       
        <Typography  color="textSecondary">
          fast devlopment
        </Typography>
        <Typography variant="body2" component="p">
         well design and maintain code
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>    

</Box>
 
<Box ml={100} mt={-17}>
     <Card>
      <CardContent >
      <br/>
        <Typography color="textSecondary"  gutterBottom>
         user freindly
        </Typography>
       
        <Typography  color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
         well designed
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>    

</Box>
 
 
<Box ml={155} mt={-17}>
     <Card>
      <CardContent >
      <br/>
        <Typography color="textSecondary"  gutterBottom>
         user freindly
        </Typography>
       
        <Typography  color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
         well designed
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>    

</Box>
<br/><br/>

      </div>

  );
}
}
 export default App;  


