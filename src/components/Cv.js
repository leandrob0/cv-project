import '../styles/General.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUserCircle,
    faMapMarkedAlt,
    faPhone,
    faInbox,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';
import Works from './Education&Practice';

export default function Cv(props) {

    const {
        generalInfo,
        allEducation,
        allPractice
    } = props;

    return (
        <div className='cv-container'>
            <div className='left-side'>
                <h3>Personal information: </h3>
                <div className='personal-info'>
                    <FontAwesomeIcon className='icon' icon={faUserCircle}/> 
                    <span key='firstName' className='text'>{generalInfo.firstName} {generalInfo.lastName}</span>
                    <br/>
                    <FontAwesomeIcon className='icon' icon={faMapMarkedAlt}/>
                    <span key='location' className='text'>{generalInfo.location}</span>
                    <br/>
                    <FontAwesomeIcon className='icon' icon={faPhone}/>
                    <span key='phone' className='text'>{generalInfo.phone}</span>
                    <br/>
                    <FontAwesomeIcon className='icon' icon={faInbox}/>
                    <span key='email' className='text'>{generalInfo.email}</span>
                    <br/>
                    <FontAwesomeIcon className='icon' icon={faGlobe}/>
                    <span key='social' className='text'>{generalInfo.social}</span>
                </div>
            </div>
            <div className='right-side'>
                <h3>Educational information: </h3>
                <Works allWork={allEducation} classWork='educational-info'/>
                <h3>Practical information: </h3>
                <Works allWork={allPractice} classWork='practical-info'/>
            </div>
        </div>
    )
}