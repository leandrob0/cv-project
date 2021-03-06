import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationalInfo from './components/EducationalInfo';
import PracticalInfo from './components/PracticalInfo';
import Cv from './components/Cv';
import './styles/App.css';
import uniqid from "uniqid";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      generalInfo: {
        firstName: '',
        lastName: '',
        location: '',
        phone: '',
        email: '',
        social: ''
      },
      educationalInfo: {
        placeName: '',
        title: '',
        dateStarted: '',
        dateFinish: '',
        id: uniqid()
      },
      practicalInfo: {
        placeName: '',
        title: '',
        dateStarted: '',
        dateFinish: '',
        id: uniqid()
      },
      allEducation: [],
      allPractice: []
    }

    this.generalInfoChangeHandler = this.generalInfoChangeHandler.bind(this);
    this.educationalInfoChangeHandler = this.educationalInfoChangeHandler.bind(this);
    this.practicalInfoChangeHandler = this.practicalInfoChangeHandler.bind(this);
    this.addEducationalInfo = this.addEducationalInfo.bind(this);
    this.addPracticalInfo = this.addPracticalInfo.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.deleteWork = this.deleteWork.bind(this);
    this.validateInfo = this.validateInfo.bind(this);
  }

  generalInfoChangeHandler(e) {

    this.setState(prevState => {

      let generalInfo = {...prevState.generalInfo};
      generalInfo[e.target.className] = e.target.value;
      return { generalInfo };

    });
  }

  educationalInfoChangeHandler(e) {
  
    this.setState(prevState => {

      let educationalInfo = {...prevState.educationalInfo};
      educationalInfo[e.target.className] = e.target.value;
      return { educationalInfo };

    })
  }

  practicalInfoChangeHandler(e) {

    this.setState(prevState => {

      let practicalInfo = {...prevState.practicalInfo};
      practicalInfo[e.target.className] = e.target.value;
      return { practicalInfo };

    })
  }

  addEducationalInfo() {

    const obj = this.state.educationalInfo;
    const flag = this.validateInfo(obj);

    if(flag === 1) {
      this.setState({
        allEducation: this.state.allEducation.concat(obj),
        educationalInfo: {
          placeName: '',
          title: '',
          dateStarted: '',
          dateFinish: '',
          id: uniqid()
        }
      })
    }
  }

  addPracticalInfo() {

    const obj = this.state.practicalInfo;
    const flag = this.validateInfo(obj);

    if(flag === 1) {
      this.setState({
        allPractice: this.state.allPractice.concat(obj),
        practicalInfo: {
          placeName: '',
          title: '',
          dateStarted: '',
          dateFinish: '',
          id: uniqid()
        }
      })
    }
  }

  deleteEducation() {

    this.setState(prevState => {
      let allEducation = [...prevState.allEducation];
      allEducation.pop();
      return { allEducation };
    })
  }

  deleteWork() {
    
    this.setState(prevState => {
      let allPractice = [...prevState.allPractice];
      allPractice.pop();
      return { allPractice };
    })
  }

  validateInfo(obj) {

    const today = new Date();
    const date = `${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`;

    for(const key in obj) {
      if(obj[key] === '') {
        return 0;
      }
    }

    if(obj.dateStarted > date) return 0;
    if(obj.dateStarted >= obj.dateFinish) return 0;

    return 1;
  }

  render() {
    return (
      <div className='container-total'>
        <div className='content-form'>
          <h2>Enter your information!: </h2>
          <form>
            <GeneralInfo generalInfoChangeHandler={this.generalInfoChangeHandler}/>
            <EducationalInfo educationalInfoChangeHandler={this.educationalInfoChangeHandler} 
            addEducationalInfo={this.addEducationalInfo} educations={this.state.allEducation} 
            deleteEducation={this.deleteEducation} value={this.state.educationalInfo}/>
            <PracticalInfo practicalInfoChangeHandler={this.practicalInfoChangeHandler} 
            addPracticalInfo={this.addPracticalInfo} works={this.state.allPractice} 
            deleteWork={this.deleteWork} value={this.state.practicalInfo}/>
          </form>
        </div>
        <Cv generalInfo={this.state.generalInfo} allEducation={this.state.allEducation} 
        allPractice={this.state.allPractice}/>
      </div>
    )
  }
}

export default App;