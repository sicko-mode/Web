import React, {useState} from 'react';

const Form = ({ onKey, onCreate, onInput, value }) => {
  return (
		<div>
			<input onChange={e => onInput(e)} value={value} />
			<button onClick={onCreate}>추가</button>
		</div>
	)
}

export default Form;