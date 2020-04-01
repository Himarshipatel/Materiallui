import React,{Component} from 'react';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Image from "../components/Image.js";
class Component1 extends Component{
render(){
return(
    <div>


<Box p={2} fontSize={38}> Easy Code
<Box fontSize={15} mt={2}>Pellentesque habitant morbi tristique senectus et netus et </Box>
<Box fontSize={15}>Pellentesque habitant morbi tristique senectus et netus et </Box>
<Box fontSize={15}>Pellentesque habitant morbi tristique senectus et netus et </Box>

<Box mt={5} >
  <Button variant="contained" color="primary">Source Code</Button>
 </Box>

</Box>


</div>
);
}
}
export default Component1;