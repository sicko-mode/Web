import React from 'react';

const Register = (props) => {
	return(
		<section className="header">
			<div className="loginForm">
				<h1>회원가입 하기</h1>
				<input className="loginInput" name="id" type="text" placeholder="아이디" onChange={props.handleOnChange} />
				<input className="loginInput" name="pw" type="password" placeholder="비밀번호" onChange={props.handleOnChange} />
				<button className="loginInput loginButton bg-red" onClick={props.handleLogin}>회원가입</button>
				<a className="loginRegister" href="/login">이미 계정이 있으신가요?</a>
			</div>
		</section>
	)	
}

export default Register;