import { Input } from "./Input";
import '../styles/GeneralInfo.css';

export default function EducationalInfo(props) {
    const { educationalInfoChangeHandler } = props;

    return (
        <div className="educational-info">
            <h2>Educational information</h2>
            <Input id="schoolName" label="Institution name: " type="text" max="100" changeHandler={educationalInfoChangeHandler}/>
            <Input id="title" label="Title of study: " type="text" max="30" changeHandler={educationalInfoChangeHandler}/>
            <Input id="dateStarted" label="Date started: " type="date" max="30" changeHandler={educationalInfoChangeHandler}/>
            <Input id="dateFinish" label="Date finish: " type="date" max="30" changeHandler={educationalInfoChangeHandler}/>
        </div>
    )
}