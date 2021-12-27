import { Input } from "./Input";
import '../styles/GeneralInfo.css';

export default function PracticalInfo(props) {
    const { practicalInfoChangeHandler , addPracticalInfo } = props;

    return (
        <div className="educational-info">
            <h2>Practical information</h2>
            <Input id="companyName" label="Company name: " type="text" max="40" changeHandler={practicalInfoChangeHandler}/>
            <Input id="positionTitle" label="Title of the position: " type="text" max="30" changeHandler={practicalInfoChangeHandler}/>
            <Input id="dateStartedWork" label="Date started: " type="date" max="30" changeHandler={practicalInfoChangeHandler}/>
            <Input id="dateFinishWork" label="Date finish: " type="date" max="30" changeHandler={practicalInfoChangeHandler}/>
            <button type="button" onClick={addPracticalInfo}>Add work</button>
        </div>
    )
}