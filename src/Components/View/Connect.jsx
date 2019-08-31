import React from 'react';

const Connect = () => {
	return(
		<section className="Header">
				<video id="remoteVideo" autoPlay playsInline />
				<video id="localVideo" autoPlay muted playsInline />
			<button id="click">연결/</button>
			<div>
				<textarea readOnly>
				</textarea>
				<div>
					<input id="chatInput" name="chat" />
					<button>보내기</button>
				</div>
			</div>
		</section>
	)	
}

export default Connect;