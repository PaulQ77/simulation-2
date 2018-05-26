import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import Wizard from '../Wizard/Wizard';



export default class Dashboard extends Component{
    constructor(){
        super();

        this.state= {
            
        }
    }

render(){
    return(
        <div>Dashboard
            <House/>
            <Link to= '/src/component/Wizard'><button classname= 'button'>Add New Property</button></Link>
        </div>
    )
}




}