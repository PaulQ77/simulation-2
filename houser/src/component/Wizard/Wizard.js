import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Wizard extends Component{
    constructor(){
        super();

        this.state={
            name : '',
            address : '',
            city : '',
            state : '',
            zipcode : ''

        }
        this.addName = this.addName.bind(this);
    };

    addName(nameValue){
        this.setState({
            name: nameValue
        })
    };

    addAddress(addressValue){
        this.setState({
            address: addressValue
        })
    };

    addCity(cityValue){
        this.setState({
            city: cityValue
        })
    };

    addState(stateValue){
        this.setState({
            state: stateValue
        })
    };

    addZipcode(zipcodeValue){
        this.setState({
            zipcode: zipcodeValue
        })
    };

    addHouse(){
        const newHouse = this.state.houses.slice();
        newHouse.push({
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
        })
    }

render(){
    return(
        <div>
            Name: <input onChange= {event => this.addName(event.target.value)} value={this.state.name} />
            Address: <input onChange= {event => this.addAddress(event.target.value)} value={this.state.address}/>
            City: <input onChange= {event => this.addCity(event.target.value)} value={this.state.city}/>
            State: <input onChange= {event => this.addState(event.target.value)} value={this.state.city}/>
            Zipcode: <input onChange= {event => this.addZipcode(event.target.value)} value={this.state.zipcode}/>

            <Link to= '/src/component/Dashboard'><button classname= 'button'>Cancel</button></Link>
            

        </div>
    )
}




}