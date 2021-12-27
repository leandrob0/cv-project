import { Input } from "./Input";
import '../styles/GeneralInfo.css';

export default function GeneralInfo(props){
    const {generalInfoChangeHandler} = props;

    return (
        <div className="general-info">
            <h2>General information</h2>
            <Input id="firstName" label="First name: " type="text" max="30" changeHandler={generalInfoChangeHandler}/>
            <Input id="lastName" label="Last name: " type="text" max="30" changeHandler={generalInfoChangeHandler}/>
            <Input id="address" label="Address: " type="text" max="30" changeHandler={generalInfoChangeHandler}/>
            <Input id="phone" label="Phone number: " type="tel" max="20" changeHandler={generalInfoChangeHandler}/>
            <Input id="email" label="Email: " type="email" max="50" changeHandler={generalInfoChangeHandler}/>
            <Input id="social" label="Any social: " type="text" max="100" changeHandler={generalInfoChangeHandler}/>
        </div>
    )
}