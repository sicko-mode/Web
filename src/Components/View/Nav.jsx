import React from 'react';
import logo from '../../icon/logo.jpg';

const Nav = ({ user }) => {
	return(
		<div className="bg nav">
			<a href="/" className="txt-white logo"><img className="logoI" src={logo} />내과 의사</a>
  			<div className="top-btn">
	{user !== '' ?  <div className="txt-white"><span>{user}</span></div> : <a href='/login'><span className="txt-white logo">Login</span></a>}
  			</div>
		</div>
	)	
}

export default Nav;