import React from "react";
import { Input } from "./Input";
import '../styles/GeneralInfo.css'

class GeneralInfo extends React.Component {

    render() {

        return (
            <div className="general-info">
                <Input id="firstName" label="First name: " type="text" max="30" onChange={this.props.generalInfoChangeHandler}/>
                <Input id="lastName" label="Last name: " type="text" max="30" onChange={this.props.generalInfoChangeHandler}/>
                <Input id="address" label="Address: " type="text" max="30" onChange={this.props.generalInfoChangeHandler}/>
                <Input id="phone" label="Phone number: " type="tel" max="20" onChange={this.props.generalInfoChangeHandler}/>
                <Input id="email" label="Email: " type="email" max="50" onChange={this.props.generalInfoChangeHandler}/>
                <Input id="social" label="Any social: " type="text" max="100" onChange={this.props.generalInfoChangeHandler}/>
            </div>
        )
    }
}

export {GeneralInfo};