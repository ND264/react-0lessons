import React from "react";
//import Button from "@material-ui/core/Button"; или так
import { Button, ButtonGroup, Checkbox } from "@material-ui/core";
import './Greetings.css';
import { blue, red } from "@material-ui/core/colors";
const style={'color': 'red', 'font-size': 25, 'background-color': 'blue'};
const Greetings = () =>{
    return(
        <div>
        <ButtonGroup orientation='vertical'>
        <Button onClick={()=>{alert('Hi!')}} variant="contained" color="secondary" size="large">
            Hello
        </Button>
        <Button>Hi 1</Button>
        <Button>Hi 2</Button>
        <Button className="red">Hi 3</Button>
        <div>
            <br/><br/>
            <Button style={ style }>Hi 5</Button><Checkbox/>
        </div>
        </ButtonGroup>
        <Checkbox/>
        <Checkbox defaultChecked/>
        <Checkbox/>
        </div>
        
    )
}
export default Greetings;