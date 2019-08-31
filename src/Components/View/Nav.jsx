import React from 'react';
import logo from '../../icon/logo.jpg';

const Nav = ({ user }) => {
	return(
		<div className="bg nav">
			<a href="/" className="txt-white logo"><img className="logoI" src={logo} />SICKO MODE</a>
  			<div className="top-btn">
	{user.name !== '' ?  <div className="txt-white"><span>{user.name}</span><span>({user.category})</span><a className="txt-white">Log out</a></div> : <a href='/login'><span className="txt-white">Login</span></a>}
  			</div>
		</div>
	)	
}

export default Nav;