import '../styles/General.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUserCircle,
    faMapMarkedAlt,
    faPhone,
    faInbox,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

export default function Cv(props) {

    const {
        generalInfo,
    //  allEducation,
    //  allPractice
    } = props;

    return (
        <div className='cv-container'>
            <div className='left-side'>
                <h3>Personal information: </h3>
                <div className='personal-info'>
                    <FontAwesomeIcon className='icon' icon={faUserCircle}/> 
                    <span className='text'>{generalInfo.firstName} {generalInfo.lastName}</span>
                    <br/>
                    <FontAwesomeIcon className='icon' icon={faMapMarkedAlt}/>
                    <span className='text'>{generalInfo.location}</span>
                    <br/>
                    <FontAwesomeIcon className='icon' icon={faPhone}/>
                    <span className='text'>{generalInfo.phone}</span>
                    <br/>
                    <FontAwesomeIcon className='icon' icon={faInbox}/>
                    <span className='text'>{generalInfo.email}</span>
                    <br/>
                    <FontAwesomeIcon className='icon' icon={faGlobe}/>
                    <span className='text'>{generalInfo.social}</span>
                </div>
            </div>
            <div className='right-side'>
                <div className='educational-info'>
                    
                </div>
                <div className='practical-info'>

                </div>
            </div>
        </div>
    )
}