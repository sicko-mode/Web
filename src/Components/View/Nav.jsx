import React from 'react';

const Nav = ({ user }) => {
	return(
		<div className="bg nav">
			<a href="/" className="txt-white logo">SICKO MODE</a>
  			<div className="top-btn">
	{user.name !== '' ?  <div className="txt-white"><span>{user.name}</span><span>({user.category})</span><a className="txt-white">Log out</a></div> : <a href='/login'><sapn className="txt-white">Login</sapn></a>}
  			</div>
		</div>
	)	
}

export default Nav;