import { Input } from "./Input";
import '../styles/GeneralInfo.css';

export default function EducationalInfo(props) {
    const { 
        educationalInfoChangeHandler, 
        addEducationalInfo,
        educations,
        deleteEducation,
        value
    } = props;

    return (
        <div className="educational-info">
            <h2>Educational information</h2>
            {
                educations.map(val => {
                  return <li key={val.id}>{val.title}<span onClick={deleteEducation}>X</span></li>
                })
            }
            <Input id="schoolName" label="Institution name: " type="text" max="100" changeHandler={educationalInfoChangeHandler} value={value.schoolName}/>
            <Input id="title" label="Title of study: " type="text" max="60" changeHandler={educationalInfoChangeHandler} value={value.title}/>
            <Input id="dateStarted" label="Date started: " type="date" max="30" changeHandler={educationalInfoChangeHandler} value={value.dateStarted}/>
            <Input id="dateFinish" label="Date finish: " type="date" max="30" changeHandler={educationalInfoChangeHandler} value={value.dateFinish}/>
            <button type="button" onClick={addEducationalInfo}>Add education</button>
        </div>
    )
}