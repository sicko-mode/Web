import React from 'react';

const Connect = () => {
	return(
		<section className="contents">
			<div className="video">
				<video id="remoteVideo" autoPlay playsInline />
				<video id="localVideo" autoPlay muted playsInline />
			</div>
			<div className="Chat">
				<textarea readOnly>
				</textarea>
				<div className="send">
					<input id="chatInput" name="chat" />
					<button id="chatSend">보내기</button>
				</div>
			</div>
		</section>
	)	
}

export default Connect;