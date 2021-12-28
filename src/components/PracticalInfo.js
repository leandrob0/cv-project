import { Input } from "./Input";
import '../styles/General.css';

export default function PracticalInfo(props) {
    const { 
        practicalInfoChangeHandler, 
        addPracticalInfo,
        works,
        deleteWork,
        value 
    } = props;

    return (
        <div className="practical-info">
            <h2>Practical information</h2>
            {
                works.map(val => {
                  return <li key={val.id}>{val.positionTitle}<span className="delete" onClick={deleteWork}>X</span></li>
                })
            }
            <Input id="companyName" label="Company name: " type="text" max="40" changeHandler={practicalInfoChangeHandler} value={value.companyName}/>
            <Input id="positionTitle" label="Title of the position: " type="text" max="30" changeHandler={practicalInfoChangeHandler} value={value.positionTitle}/>
            <Input id="dateStartedWork" label="Date started: " type="date" max="30" changeHandler={practicalInfoChangeHandler} value={value.dateStarted}/>
            <Input id="dateFinishWork" label="Date finish: " type="date" max="30" changeHandler={practicalInfoChangeHandler} value={value.dateFinish}/>
            <button type="button" onClick={addPracticalInfo}>Add work</button>
        </div>
    )
}