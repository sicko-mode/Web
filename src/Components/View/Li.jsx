import React from 'react';

const Li = ({ex, text, room}) => {
	return (
		<li onClick={() => {ex(room)}}><span>{text}</span></li>
	)
}
 
export default Li;