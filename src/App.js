import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './Components/View/Nav.jsx';
import Foot from './Components/View/Foot.jsx';
import {login} from './Service/Login.js';

import Login from './Components/View/Login.jsx';
import Home from './Components/View/Home.jsx';
import Register from './Components/View/Register.jsx';
import Connect from './Components/View/Connect.jsx';
import Mobile from './Components/View/Mobile.jsx';


const field = ['내과', '이비인후과', '외과', '정형외과', '안과', '피부과', '흉부외과', '산부인과', '비뇨기과', '신경과', '신경외과'];

const App = () => {
  const [id, changeId] = useState('')
  ,     [pw, changePw] = useState('')
  ,     [email, changeEmail] = useState('')
  ,     [info, setInfo] = useState();

  const handleLogin = () => {
    login().then(res => { 
      setInfo(res.data.name);
    })
      
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
      <Nav user={info} />
      <Switch>

      <Route path='/mobile' component={Mobile}/>
        <Route path='/home' component={Home} />
        <Route path='/register' render={() => <Register handleRegister={handleRegister} handleOnChange={handleOnChangeLoginInput} />} />
        <Route path='/connect' component={Connect}/>
        <Route path='/logout' />
        <Route path='/' render={() => <Login handleLogin={handleLogin} handleOnChange={handleOnChangeLoginInput} />} />
        
        
      </Switch>
      <Foot />
    </Router>
  );
}

export default App;