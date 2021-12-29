import { Input } from "./Input";
import '../styles/General.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTrash
} from '@fortawesome/free-solid-svg-icons';

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
                  return <li className='list-delete' key={val.id + 'delete'}>{val.title}<FontAwesomeIcon icon={faTrash} className="delete" onClick={deleteEducation}/></li>
                })
            }
            <Input classId="placeName" label="Institution name: " type="text" max="100" changeHandler={educationalInfoChangeHandler} value={value.placeName}/>
            <Input classId="title" label="Title of study: " type="text" max="60" changeHandler={educationalInfoChangeHandler} value={value.title}/>
            <Input classId="dateStarted" label="Date started: " type="date" max="30" changeHandler={educationalInfoChangeHandler} value={value.dateStarted}/>
            <Input classId="dateFinish" label="Date finish: " type="date" max="30" changeHandler={educationalInfoChangeHandler} value={value.dateFinish}/>
            <button type="button" onClick={addEducationalInfo}>Add education</button>
        </div>
    )
}