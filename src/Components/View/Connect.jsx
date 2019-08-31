import React from 'react';

const Connect = () => {
	return(
		<section className="Header">
			<div>
				<video id="remoteVideo" autoPlay playsInline />
				<video id="localVideo" autoPlay muted playsInline />
			</div>
			<button id="click">연결/</button>
			<div>
				<textarea>
				</textarea>
				<div>
					<input name="chat" />
					<button>보내기</button>
				</div>
			</div>
		</section>
	)	
}

export default Connect;