import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Nav from './Components/View/Nav';
import Foot from './Components/View/Foot';
import * as service from './Service/Login';

import Login from './Components/View/Login';
import Home from './Components/View/Home';
import Register from './Components/View/Register';
import Connect from './Components/View/Connect';


const field = ['내과', '이비인후과', '외과', '정형외과', '안과', '피부과', '흉부외과', '산부인과', '비뇨기과', '신경과', '신경외과'];

const App = () => {
  const [id, changeId] = useState('')
  ,     [pw, changePw] = useState('')
  ,     [email, changeEmail] = useState('')
  ,     [info, setInfo] = useState({name: '', category: ''});

  const handleLogin = () => {
    let a = service.login(id, pw);
    console.log(a);
  }
  ,     handleRegister = () => {
    service.register(id, pw, email);
  }
  ,     handleInfo = () => {
    
  };

  const handleOnChangeLoginInput = e => {
    const {name, value} = e.target;
    if(name === 'id') {
      changeId(value);
    } else if(name === 'pw') {
      changePw(value);
    } else if(name === 'email') {
      changeEmail(value);
    }
  }

  return (
    <Router>
      <div>
        <Nav user={info} />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' render={() => <Login handleLogin={handleLogin} handleOnChange={handleOnChangeLoginInput} />} />
            <Route path='/register' render={() => <Register handleRegister={handleRegister} handleOnChange={handleOnChangeLoginInput} />} />
            <Route path='/connect' component={Connect}/>
            <Route path='/logout' />
          </Switch>
        </div>
        <Foot />
      </div>
    </Router>
  );
}

export default App;