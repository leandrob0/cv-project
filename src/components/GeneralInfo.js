import { Input } from "./Input";
import '../styles/General.css';

export default function GeneralInfo(props){
    const {generalInfoChangeHandler} = props;

    return (
        <div className="general-info">
            <h2>General information</h2>
            <Input classId="firstName" label="First name: " type="text" max="30" changeHandler={generalInfoChangeHandler}/>
            <Input classId="lastName" label="Last name: " type="text" max="30" changeHandler={generalInfoChangeHandler}/>
            <Input classId="location" label="Location: " type="text" max="60" changeHandler={generalInfoChangeHandler}/>
            <Input classId="phone" label="Phone number: " type="tel" max="20" changeHandler={generalInfoChangeHandler}/>
            <Input classId="email" label="Email: " type="email" max="50" changeHandler={generalInfoChangeHandler}/>
            <Input classId="social" label="Any social: " type="text" max="100" changeHandler={generalInfoChangeHandler}/>
        </div>
    )
}