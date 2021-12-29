import { Input } from "./Input";
import '../styles/General.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTrash
} from '@fortawesome/free-solid-svg-icons';

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
                  return <li className='list-delete' key={val.id}>{val.title}<FontAwesomeIcon icon={faTrash} className="delete" onClick={deleteWork}/></li>
                })
            }
            <Input classId="placeName" label="Company name: " type="text" max="40" changeHandler={practicalInfoChangeHandler} value={value.placeName}/>
            <Input classId="title" label="Title of the position: " type="text" max="30" changeHandler={practicalInfoChangeHandler} value={value.title}/>
            <Input classId="dateStarted" label="Date started: " type="date" max="30" changeHandler={practicalInfoChangeHandler} value={value.dateStarted}/>
            <Input classId="dateFinish" label="Date finish: " type="date" max="30" changeHandler={practicalInfoChangeHandler} value={value.dateFinish}/>
            <button type="button" onClick={addPracticalInfo}>Add work</button>
        </div>
    )
}