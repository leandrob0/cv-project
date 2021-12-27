import React from 'react';
import { GeneralInfo } from './components/GeneralInfo';
import './styles/App.css'

class App extends React.Component {

  constructor() {
    super();

    // Basic object to know how the web will be structure in the state.
    // When i have every field filled, this will be passed to another component that will show everything.
    this.state = {
      generalInfo: {
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        email: '',
        social: ''
      },
      educationalInfo: [{
        schoolName: '',
        title: '',
        dateStarted: '',
        dateFinish: ''
      }],
      practicalInfo: [{
        companyName: '',
        positionTitle: '',
        dateStarted: '',
        dateFinish: ''
      }]
    }

    this.generalInfoChangeHandler = this.generalInfoChangeHandler.bind(this);
  }

  generalInfoChangeHandler(e) {

    this.setState(prevState => {

      let generalInfo = {...prevState.generalInfo};
      generalInfo[e.target.id] = e.target.value;
      return { generalInfo };

    });

  }

  render() {
    return (
      <div className='content'>
        <GeneralInfo onChange={this.generalInfoChangeHandler}/>
      </div>
    )
  }
}

export default App;