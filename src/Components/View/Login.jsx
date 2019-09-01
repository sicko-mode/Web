import React from 'react';
import { Link } from 'react-router-dom'
const Login = (props) => {
	return(
		<section className="header">
			<div className="loginForm">
				<h1>로그인 하기</h1>
				<input className="loginInput" name="id" type="text" placeholder="아이디" onChange={props.handleOnChange} />
				<input className="loginInput" name="pw" type="password" placeholder="비밀번호" onChange={props.handleOnChange} />
				<Link to='/home'><button className="loginInput loginButton bg-green" onClick={props.handleLogin}>로그인</button></Link>
				<a className="loginRegister" href="/register">계정이 없으신가요?</a>
			</div>
		</section>
	)	
}

export default Login;