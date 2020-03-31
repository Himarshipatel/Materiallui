import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Image from "./components/Image.js";
const styles = theme => ({
  root: {
    color:"lightblue",
    
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
});

class TitlebarGridList extends Component {




  render() {
    const { classes } = this.props;
    return (
      <div>
      <div className={classes.root}>
     <h1>hi</h1>
     <Avatar className={classes.large} src="https://media.istockphoto.com/photos/smiling-businesswoman-looking-at-camera-webcam-make-conference-call-picture-id1129638608" />
      
       </div>
       <div>
       <image src="https://image.shutterstock.com/z/stock-photo-mountains-during-sunset-beautiful-natural-landscape-in-the-summer-time-407021107.jpg"/> 
       </div>
       </div>
    );
  }
}
export default withStyles(styles)(TitlebarGridList);
